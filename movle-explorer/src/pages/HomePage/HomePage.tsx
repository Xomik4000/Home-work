import { useState, useEffect, useMemo } from "react";
import { MovieFilters } from "../../components/MovieFilters/MovieFilters";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { Pagination } from "../../components/Pagination/Pagination";
import { MovieGrid } from "../../components/MovieGrid/MovieGrid";
import { SkeletonGrid } from "../../components/SkeletonGrid/SkeletonGrid";
import {
  searchMovies,
  getMovieGenres,
  getNowPlayingMovies,
} from "../../features/movies/api/movieApi";
import { useMovieFilters } from "../../features/filters/hooks/useMovieFilters";
import type { Movie, Genre } from "../../features/movies/types/movie.types";
import { useFavorites } from "../../features/favorites/hooks/useFavorites";
import styles from "./HomePage.module.css";

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
  const [searchQuery, setSearchQuery] = useState("");

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

  const loadNowPlayingMovies = async (nextPage = 1) => {
    try {
      setIsLoading(true);
      setError(null);

      const data = await getNowPlayingMovies(nextPage);

      setMovies(data.movies);
      setPage(data.page);
      setTotalPages(data.totalPages);
    } catch {
      setError("Не удалось загрузить новинки кино");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void loadNowPlayingMovies();
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
      setSearchQuery("");
      await loadNowPlayingMovies(nextPage);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      const data = await searchMovies(trimmedQuery, nextPage);

      setSearchQuery(trimmedQuery);
      setMovies(data.movies);
      setPage(data.page);
      setTotalPages(data.totalPages);
    } catch {
      setError("Не удалось загрузить фильмы");
    } finally {
      setIsLoading(false);
    }
  };

  const safeTotalPages = Math.min(totalPages, 500);

  return (
    <section>
      <div className={styles.hero}>
        <p className={styles.eyebrow}>CinemaHub</p>

        <h1 className={styles.title}>Откройте мир кино и сериалов</h1>

        <p className={styles.description}>
          Ищите фильмы, изучайте рейтинги, сохраняйте избранное и находите
          актуальные новинки в одном удобном приложении.
        </p>
      </div>

      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>
          {searchQuery ? `Результаты поиска: ${searchQuery}` : "Новинки кино"}
        </h2>

        {searchQuery && (
          <button
            className={styles.resetSearchButton}
            type="button"
            onClick={() => {
              setQuery("");
              setSearchQuery("");
              resetFilters();
              void loadNowPlayingMovies(1);
            }}
          >
            ← Вернуться к новинкам
          </button>
        )}
      </div>

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

      {isLoading && <SkeletonGrid />}

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
          onPageChange={(nextPage) => {
            if (searchQuery) {
              void handleSearch(nextPage);
            } else {
              void loadNowPlayingMovies(nextPage);
            }
          }}
        />
      )}

      {!isLoading &&
        !error &&
        movies.length > 0 &&
        filteredMovies.length === 0 && (
          <p>По выбранным фильтрам ничего не найдено.</p>
        )}

      {!isLoading && !error && movies.length === 0 && searchQuery && (
        <div className={styles.emptyState}>
          <h2>Фильм «{searchQuery}» не найден</h2>
          <p>Попробуйте изменить поисковый запрос.</p>
        </div>
      )}

      {!isLoading && !error && movies.length === 0 && !searchQuery && (
        <div className={styles.emptyState}>
          <h2>Фильмы не найдены</h2>
          <p>Попробуйте обновить страницу или изменить фильтры.</p>
        </div>
      )}
    </section>
  );
}
