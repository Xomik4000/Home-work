import { tmdbFetch } from "../../../shared/api/tmdbClient";
import type {
  Movie,
  TmdbMovieDto,
  TmdbMovieDetailsDto,
  TmdbSearchMoviesResponse,
  MovieDetails,
  Genre,
  TmdbGenresResponse,
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
    language: "ru-RU",
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

export async function getMovieDetails(movieId: string): Promise<MovieDetails> {
  const data = await tmdbFetch<TmdbMovieDetailsDto>(
    `/movie/${movieId}?language=ru-RU`,
  );

  return {
    id: data.id,
    title: data.title,
    overview: data.overview,
    posterPath: data.poster_path,
    releaseDate: data.release_date,
    voteAverage: data.vote_average,
    genreIds: data.genres.map((genre) => genre.id),
    runtime: data.runtime,
    genres: data.genres,
  };
}

export async function getMovieGenres(): Promise<Genre[]> {
  const data = await tmdbFetch<TmdbGenresResponse>(
    "/genre/movie/list?language=ru-RU",
  );

  return data.genres;
}
