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
    : "Unknown";

  const rating = movie.voteAverage.toFixed(1);

  return (
    <article className={styles.card}>
      <Link className={styles.link} to={`/movie/${movie.id}`}>
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
          <h3 className={styles.title}>{movie.title}</h3>

          <div className={styles.meta}>
            <span>{year}</span>
            <span>⭐ {rating}</span>
          </div>

          <p className={styles.overview}>
            {movie.overview || "No description available."}
          </p>
        </div>
      </Link>

      {onToggleFavorite && (
        <button
          className={styles.favoriteButton}
          type="button"
          onClick={() => onToggleFavorite(movie)}
        >
          {isFavorite ? "Remove from favorites" : "Add to favorites"}
        </button>
      )}
    </article>
  );
}
