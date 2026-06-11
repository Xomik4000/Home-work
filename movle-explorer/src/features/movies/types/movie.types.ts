export type TmdbMovieDto = {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
};

export type TmdbSearchMoviesResponse = {
  page: number;
  results: TmdbMovieDto[];
  total_pages: number;
  total_results: number;
};

export type Movie = {
  id: number;
  title: string;
  originalTitle: string;
  overview: string;
  posterPath: string | null;
  releaseDate: string;
  voteAverage: number;
  genreIds: number[];
};

export type TmdbGenreDto = {
  id: number;
  name: string;
};

export type TmdbMovieDetailsDto = {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
  runtime: number | null;
  genres: TmdbGenreDto[];
  budget: number;
  revenue: number;
  homepage: string;
  status: string;
};

export type Genre = {
  id: number;
  name: string;
};

export type MovieDetails = Movie & {
  runtime: number | null;
  genres: Genre[];
  budget: number;
  revenue: number;
  homepage: string;
  status: string;
};

export type TmdbGenresResponse = {
  genres: Genre[];
};

export type MovieFilters = {
  genreId: number | null;
  year: string;
  minRating: number;
};
