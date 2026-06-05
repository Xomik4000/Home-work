import styles from "./SearchBar.module.css";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
};

export function SearchBar({ value, onChange, onSubmit }: SearchBarProps) {
  return (
    <form
      className={styles.form}
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <input
        className={styles.input}
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search movies..."
      />

      <button className={styles.button} type="submit">
        Search
      </button>
    </form>
  );
}
