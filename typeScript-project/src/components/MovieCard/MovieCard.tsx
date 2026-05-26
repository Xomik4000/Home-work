import { memo } from "react";

import type { Movie } from "../../types/movie";

type MovieCardProps = {
  movie: Movie;
  onToggleLike: (id: number) => void;
};

function MovieCardComponent({ movie, onToggleLike }: MovieCardProps) {
  return (
    <div className="movie-card">
      <img className="movie-image" src={movie.image} alt={movie.title} />

      <div className="movie-content">
        <h2>{movie.title}</h2>

        <p>Жанр: {movie.genre}</p>

        <p>Год: {movie.year}</p>

        <button onClick={() => onToggleLike(movie.id)}>
          {movie.isLiked ? "❤️ В избранном" : "🤍 Лайк"}
        </button>
      </div>
    </div>
  );
}

export const MovieCard = memo(MovieCardComponent);
