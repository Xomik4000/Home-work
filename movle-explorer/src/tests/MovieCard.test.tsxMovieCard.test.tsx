import { describe, expect, it } from 'vitest';
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MovieCard } from "../components/MovieCard/MovieCard";
import type { Movie } from "../features/movies/types/movie.types";

const movie: Movie = {
  id: 1,
  title: "Inception",
  overview:
    "A thief who steals corporate secrets through dream-sharing technology.",
  posterPath: "/poster.jpg",
  releaseDate: "2010-07-16",
  voteAverage: 8.8,
  genreIds: [28, 878],
};

describe("MovieCard", () => {
  it("renders movie title, year and rating", () => {
    render(
      <MemoryRouter>
        <MovieCard movie={movie} />
      </MemoryRouter>,
    );

    expect(screen.getByText("Inception")).toBeInTheDocument();
    expect(screen.getByText("2010")).toBeInTheDocument();
    expect(screen.getByText(/8.8/)).toBeInTheDocument();
  });
});
