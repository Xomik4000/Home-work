import { MovieCard } from "../MovieCard/MovieCard";

import type { Movie } from "../../types/movie";

type MovieListProps = {
  movies: Movie[];
  onToggleLike: (id: number) => void;
};

export function MovieList({ movies, onToggleLike }: MovieListProps) {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onToggleLike={onToggleLike} />
      ))}
    </div>
  );
}
