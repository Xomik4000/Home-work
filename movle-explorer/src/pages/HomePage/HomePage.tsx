import { useState } from "react";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { MovieGrid } from "../../components/MovieGrid/MovieGrid";
import { searchMovies } from "../../features/movies/api/movieApi";
import type { Movie } from "../../features/movies/types/movie.types";
import { useFavorites } from "../../features/favorites/hooks/useFavorites";

export function HomePage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { favorites, toggleFavorite } = useFavorites();

  const handleSearch = async () => {
    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      const data = await searchMovies(trimmedQuery);

      setMovies(data.movies);
    } catch {
      setError("Failed to load movies");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section>
      <h1>Search movies</h1>

      <SearchBar value={query} onChange={setQuery} onSubmit={handleSearch} />

      {isLoading && <p>Loading movies...</p>}

      {error && <p>{error}</p>}

      {!isLoading && !error && movies.length > 0 && (
        <MovieGrid
          movies={movies}
          favoriteMovieIds={favorites.map((movie) => movie.id)}
          onToggleFavorite={toggleFavorite}
        />
      )}

      {!isLoading && !error && movies.length === 0 && (
        <p>Start typing to search for movies.</p>
      )}
    </section>
  );
}
