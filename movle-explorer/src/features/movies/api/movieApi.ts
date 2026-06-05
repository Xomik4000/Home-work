import { tmdbFetch } from "../../../shared/api/tmdbClient";
import type {
  Movie,
  TmdbMovieDto,
  TmdbSearchMoviesResponse,
} from "../types/movie.types";

const mapMovie = (movie: TmdbMovieDto): Movie => ({
  id: movie.id,
  title: movie.title,
  overview: movie.overview,
  posterPath: movie.poster_path,
  releaseDate: movie.release_date,
  voteAverage: movie.vote_average,
  genreIds: movie.genre_ids,
});

export async function searchMovies(query: string, page = 1) {
  const params = new URLSearchParams({
    query,
    page: String(page),
    language: "en-US",
  });

  const data = await tmdbFetch<TmdbSearchMoviesResponse>(
    `/search/movie?${params.toString()}`,
  );

  return {
    page: data.page,
    movies: data.results.map(mapMovie),
    totalPages: data.total_pages,
    totalResults: data.total_results,
  };
}
