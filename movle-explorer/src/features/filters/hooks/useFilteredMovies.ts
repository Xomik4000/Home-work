import { useMemo } from "react";
import type { Movie, MovieFilters } from "../../movies/types/movie.types";

export function useFilteredMovies(movies: Movie[], filters: MovieFilters) {
  return useMemo(() => {
    return movies.filter((movie) => {
      const matchesGenre = filters.genreId
        ? movie.genreIds.includes(filters.genreId)
        : true;

      const movieYear = movie.releaseDate
        ? String(new Date(movie.releaseDate).getFullYear())
        : "";

      const matchesYear = filters.year ? movieYear === filters.year : true;

      const matchesRating = movie.voteAverage >= filters.minRating;

      return matchesGenre && matchesYear && matchesRating;
    });
  }, [movies, filters]);
}
