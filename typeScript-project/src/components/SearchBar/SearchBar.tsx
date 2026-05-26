type SearchBarProps = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
};

export function SearchBar({ searchQuery, onSearchChange }: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Поиск фильма..."
      value={searchQuery}
      onChange={(event) => onSearchChange(event.target.value)}
    />
  );
}
