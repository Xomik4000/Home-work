import { useState, useEffect, useMemo } from "react";
import { MovieFilters } from "../../components/MovieFilters/MovieFilters";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { Pagination } from "../../components/Pagination/Pagination";
import { MovieGrid } from "../../components/MovieGrid/MovieGrid";
import {
  searchMovies,
  getMovieGenres,
} from "../../features/movies/api/movieApi";
import { useMovieFilters } from "../../features/filters/hooks/useMovieFilters";
import type { Movie, Genre } from "../../features/movies/types/movie.types";
import { useFavorites } from "../../features/favorites/hooks/useFavorites";

export function HomePage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { favorites, toggleFavorite } = useFavorites();
  const [genres, setGenres] = useState<Genre[]>([]);
  const { filters, setFilters, resetFilters } = useMovieFilters();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadGenres = async () => {
      try {
        const data = await getMovieGenres();
        setGenres(data);
      } catch {
        setGenres([]);
      }
    };

    void loadGenres();
  }, []);

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const matchesGenre = filters.genreId
        ? movie.genreIds.includes(filters.genreId)
        : true;

      const movieYear = movie.releaseDate
        ? String(new Date(movie.releaseDate).getFullYear())
        : "";

      const matchesYear = filters.year ? movieYear === filters.year : true;

      const matchesRating = movie.voteAverage >= filters.minRating;

      return matchesGenre && matchesYear && matchesRating;
    });
  }, [movies, filters]);

  const handleSearch = async (nextPage = 1) => {
    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      const data = await searchMovies(trimmedQuery, nextPage);

      setMovies(data.movies);
      setPage(data.page);
      setTotalPages(data.totalPages);
    } catch {
      setError("Failed to load movies");
    } finally {
      setIsLoading(false);
    }
  };

  const safeTotalPages = Math.min(totalPages, 500);

  return (
    <section>
      <h1>Search movies</h1>

      <SearchBar
        value={query}
        onChange={setQuery}
        onSubmit={() => handleSearch(1)}
      />

      <MovieFilters
        filters={filters}
        genres={genres}
        onChange={setFilters}
        onReset={resetFilters}
      />

      {isLoading && <p>Loading movies...</p>}

      {error && <p>{error}</p>}

      {!isLoading && !error && filteredMovies.length > 0 && (
        <MovieGrid
          movies={filteredMovies}
          favoriteMovieIds={favorites.map((movie) => movie.id)}
          onToggleFavorite={toggleFavorite}
        />
      )}

      {!isLoading && !error && filteredMovies.length > 0 && (
        <Pagination
          currentPage={page}
          totalPages={safeTotalPages}
          onPageChange={handleSearch}
        />
      )}

      {!isLoading &&
        !error &&
        movies.length > 0 &&
        filteredMovies.length === 0 && <p>No movies match selected filters.</p>}

      {!isLoading && !error && movies.length === 0 && (
        <p>Start typing to search for movies.</p>
      )}
    </section>
  );
}
