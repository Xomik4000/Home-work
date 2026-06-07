import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getMovieDetails } from '../../features/movies/api/movieApi';
import type { MovieDetails } from '../../features/movies/types/movie.types';
import styles from './MovieDetailsPage.module.css';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export function MovieDetailsPage() {
  const { movieId } = useParams<{ movieId: string }>();

  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const loadMovieDetails = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await getMovieDetails(movieId);

        setMovie(data);
      } catch {
        setError('Failed to load movie details');
      } finally {
        setIsLoading(false);
      }
    };

    void loadMovieDetails();
  }, [movieId]);

  if (isLoading) {
    return <p>Loading movie details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!movie) {
    return <p>Movie not found.</p>;
  }

  const year = movie.releaseDate
    ? new Date(movie.releaseDate).getFullYear()
    : 'Unknown';

  return (
    <section>
      <Link className={styles.backLink} to="/">
        ← Back to search
      </Link>

      <div className={styles.details}>
        <div className={styles.posterWrapper}>
          {movie.posterPath ? (
            <img
              className={styles.poster}
              src={`${IMAGE_BASE_URL}${movie.posterPath}`}
              alt={movie.title}
            />
          ) : (
            <div className={styles.posterPlaceholder}>No image</div>
          )}
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>{movie.title}</h1>

          <div className={styles.meta}>
            <span>{year}</span>
            <span>⭐ {movie.voteAverage.toFixed(1)}</span>
            {movie.runtime && <span>{movie.runtime} min</span>}
          </div>

          <div className={styles.genres}>
            {movie.genres.map((genre) => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </div>

          <p className={styles.overview}>
            {movie.overview || 'No description available.'}
          </p>
        </div>
      </div>
    </section>
  );
}