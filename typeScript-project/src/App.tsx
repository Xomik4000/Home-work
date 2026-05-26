import { useCallback, useEffect, useMemo, useState } from "react";
import { MovieList } from "./components/MovieList/MovieList";
import { AddMovieForm } from "./components/AddMovieForm/AddMovieForm";
import { GenreFilter } from "./components/GenreFilter/GenreFilter";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { movies as initialMovies } from "./data/movies";
import type { Movie } from "./types/movie";
import type { Genre } from "./types/genre";

function App() {
  const [movies, setMovies] = useState<Movie[]>(() => {
    const savedMovies = localStorage.getItem("movies");

    if (savedMovies) {
      return JSON.parse(savedMovies);
    }

    return initialMovies;
  });

  const [selectedGenre, setSelectedGenre] = useState<Genre | "Все">("Все");

  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  const handleToggleLike = useCallback((id: number) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) => {
        if (movie.id === id) {
          return {
            ...movie,
            isLiked: !movie.isLiked,
          };
        }

        return movie;
      }),
    );
  }, []);

  const handleAddMovie = useCallback((title: string, genre: Genre) => {
    const newMovie: Movie = {
      id: Date.now(),
      title,
      genre,
      year: 2026,
      image:
        "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1200",
      isLiked: false,
    };

    setMovies((prevMovies) => [newMovie, ...prevMovies]);
  }, []);

  const filteredMovies = useMemo(() => {
    const genreFilteredMovies =
      selectedGenre === "Все"
        ? movies
        : movies.filter((movie) => movie.genre === selectedGenre);

    return genreFilteredMovies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [movies, selectedGenre, searchQuery]);

  return (
    <div>
      <h1>Лента фильмов</h1>

      <AddMovieForm onAddMovie={handleAddMovie} />

      <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <GenreFilter
        selectedGenre={selectedGenre}
        onSelectGenre={setSelectedGenre}
      />

      <MovieList movies={filteredMovies} onToggleLike={handleToggleLike} />
    </div>
  );
}

export default App;
