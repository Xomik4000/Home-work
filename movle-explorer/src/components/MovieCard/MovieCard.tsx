import { Link } from "react-router-dom";
import type { Movie } from "../../features/movies/types/movie.types";
import styles from "./MovieCard.module.css";

type MovieCardProps = {
  movie: Movie;
  isFavorite?: boolean;
  onToggleFavorite?: (movie: Movie) => void;
};

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export function MovieCard({
  movie,
  isFavorite = false,
  onToggleFavorite,
}: MovieCardProps) {
  const year = movie.releaseDate
    ? new Date(movie.releaseDate).getFullYear()
    : "Год неизвестен";

  return (
    <article className={styles.card}>
      <Link className={styles.link} to={`/movie/${movie.id}`}>
        <div className={styles.posterWrapper}>
          {onToggleFavorite && (
            <button
              className={styles.favoriteButton}
              type="button"
              aria-label={
                isFavorite ? "Удалить из избранного" : "Добавить в избранное"
              }
              onClick={(event) => {
                event.preventDefault();
                onToggleFavorite(movie);
              }}
            >
              {isFavorite ? "❤️" : "🤍"}
            </button>
          )}

          {movie.posterPath ? (
            <img
              className={styles.poster}
              src={`${IMAGE_BASE_URL}${movie.posterPath}`}
              alt={movie.title}
            />
          ) : (
            <div className={styles.posterPlaceholder}>Нет изображения</div>
          )}
        </div>

        <div className={styles.content}>
          <div className={styles.meta}>
            <span>{year}</span>
            <span>⭐ {movie.voteAverage.toFixed(1)}</span>
          </div>

          <h3 className={styles.title}>{movie.title}</h3>

          <p className={styles.overview}>
            {movie.overview || "Описание отсутствует."}
          </p>
        </div>
      </Link>
    </article>
  );
}
