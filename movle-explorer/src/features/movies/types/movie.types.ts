export type TmdbMovieDto = {
  id: number;
  title: string;
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
  overview: string;
  posterPath: string | null;
  releaseDate: string;
  voteAverage: number;
  genreIds: number[];
};
