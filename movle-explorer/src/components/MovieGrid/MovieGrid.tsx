import type { Movie } from "../../features/movies/types/movie.types";
import { MovieCard } from "../MovieCard/MovieCard";
import styles from "./MovieGrid.module.css";

type MovieGridProps = {
  movies: Movie[];
  favoriteMovieIds?: number[];
  onToggleFavorite?: (movie: Movie) => void;
};

export function MovieGrid({
  movies,
  favoriteMovieIds = [],
  onToggleFavorite,
}: MovieGridProps) {
  return (
    <div className={styles.grid}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isFavorite={favoriteMovieIds.includes(movie.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
