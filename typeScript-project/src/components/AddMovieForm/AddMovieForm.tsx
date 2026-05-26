import { useState } from "react";

import type { Genre } from "../../types/genre";

type AddMovieFormProps = {
  onAddMovie: (title: string, genre: Genre) => void;
};

export function AddMovieForm({ onAddMovie }: AddMovieFormProps) {
  const [title, setTitle] = useState("");

  const [genre, setGenre] = useState<Genre>("Фантастика");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!title.trim()) {
      return;
    }

    onAddMovie(title, genre);

    setTitle("");
    setGenre("Фантастика");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Название фильма"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <select
        value={genre}
        onChange={(event) => setGenre(event.target.value as Genre)}
      >
        <option value="Фантастика">Фантастика</option>

        <option value="Драма">Драма</option>

        <option value="Боевик">Боевик</option>
      </select>

      <button type="submit">Добавить фильм</button>
    </form>
  );
}
