import { useState } from 'react';
import { searchMovies } from '../../features/movies/api/movieApi';
import type { Movie } from '../../features/movies/types/movie.types';
import { SearchBar } from '../../components/SearchBar/SearchBar';

export function HomePage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (!query.trim()) {
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      const data = await searchMovies(query);

      setMovies(data.movies);
    } catch {
      setError('Failed to load movies');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section>
      <h1>Search movies</h1>

      <SearchBar value={query} onChange={setQuery} onSubmit={handleSearch} />

      {isLoading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {!isLoading && !error && movies.length > 0 && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              {movie.title} — {movie.releaseDate || 'Unknown year'}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}