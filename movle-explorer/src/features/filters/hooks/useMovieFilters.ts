import { useEffect, useState } from "react";
import type { MovieFilters } from "../../movies/types/movie.types";

const FILTERS_STORAGE_KEY = "movie-explorer:filters";

const DEFAULT_FILTERS: MovieFilters = {
  genreId: null,
  year: "",
  minRating: 0,
};

export function useMovieFilters() {
  const [filters, setFilters] = useState<MovieFilters>(() => {
    const savedFilters = localStorage.getItem(FILTERS_STORAGE_KEY);

    if (!savedFilters) {
      return DEFAULT_FILTERS;
    }

    try {
      return {
        ...DEFAULT_FILTERS,
        ...(JSON.parse(savedFilters) as MovieFilters),
      };
    } catch {
      return DEFAULT_FILTERS;
    }
  });

  useEffect(() => {
    localStorage.setItem(FILTERS_STORAGE_KEY, JSON.stringify(filters));
  }, [filters]);

  const resetFilters = () => {
    setFilters(DEFAULT_FILTERS);
  };

  return {
    filters,
    setFilters,
    resetFilters,
  };
}
