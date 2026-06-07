import type {
  Genre,
  MovieFilters as MovieFiltersType,
} from "../../features/movies/types/movie.types";
import styles from "./MovieFilters.module.css";

type MovieFiltersProps = {
  filters: MovieFiltersType;
  genres: Genre[];
  onChange: (filters: MovieFiltersType) => void;
  onReset: () => void;
};

export function MovieFilters({
  filters,
  genres,
  onChange,
  onReset,
}: MovieFiltersProps) {
  return (
    <div className={styles.filters}>
      <select
        value={filters.genreId ?? ""}
        onChange={(event) =>
          onChange({
            ...filters,
            genreId: event.target.value ? Number(event.target.value) : null,
          })
        }
      >
        <option value="">Все жанры</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>

      <select
        value={filters.year}
        onChange={(event) =>
          onChange({
            ...filters,
            year: event.target.value,
          })
        }
      >
        <option value="">Любой год</option>

        {Array.from({ length: new Date().getFullYear() - 1979 }, (_, index) => {
          const year = String(new Date().getFullYear() - index);

          return (
            <option key={year} value={year}>
              {year}
            </option>
          );
        })}
      </select>

      <select
        value={filters.minRating}
        onChange={(event) =>
          onChange({
            ...filters,
            minRating: Number(event.target.value),
          })
        }
      >
        <option value={0}>Любой рейтинг</option>
        <option value={5}>5+</option>
        <option value={6}>6+</option>
        <option value={7}>7+</option>
        <option value={8}>8+</option>
      </select>

      <button type="button" onClick={onReset}>
        Сбросить
      </button>
    </div>
  );
}
