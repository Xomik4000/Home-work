import type { Movie } from "../../features/movies/types/movie.types";
import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";

type MovieCardProps = {
  movie: Movie;
};

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export function MovieCard({ movie }: MovieCardProps) {
  const year = movie.releaseDate
    ? new Date(movie.releaseDate).getFullYear()
    : "Unknown";
  const rating = movie.voteAverage.toFixed(1);

  return (
    <Link className={styles.link} to={`/movie/${movie.id}`}>
      <article className={styles.card}>
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
      </article>
    </Link>
  );
}
