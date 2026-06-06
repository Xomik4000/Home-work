import type { Movie } from '../../features/movies/types/movie.types';
import { MovieCard } from '../MovieCard/MovieCard';
import styles from './MovieGrid.module.css';

type MovieGridProps = {
  movies: Movie[];
};

export function MovieGrid({ movies }: MovieGridProps) {
  return (
    <div className={styles.grid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}