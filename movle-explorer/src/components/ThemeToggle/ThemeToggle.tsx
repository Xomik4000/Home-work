import styles from "./ThemeToggle.module.css";

type ThemeToggleProps = {
  theme: "light" | "dark";
  onToggle: () => void;
};

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button className={styles.button} type="button" onClick={onToggle}>
      {theme === "light" ? "🌙 Тёмная" : "☀️ Светлая"}
    </button>
  );
}
