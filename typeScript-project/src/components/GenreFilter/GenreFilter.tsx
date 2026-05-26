import type { Genre } from "../../types/genre";

type GenreFilterProps = {
  selectedGenre: Genre | "Все";
  onSelectGenre: (genre: Genre | "Все") => void;
};

export function GenreFilter({
  selectedGenre,
  onSelectGenre,
}: GenreFilterProps) {
  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    onSelectGenre(event.target.value as Genre | "Все");
  }

  return (
    <select value={selectedGenre} onChange={handleChange}>
      <option value="Все">Все</option>

      <option value="Фантастика">Фантастика</option>

      <option value="Драма">Драма</option>

      <option value="Боевик">Боевик</option>
    </select>
  );
}
