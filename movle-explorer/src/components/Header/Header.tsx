import { NavLink } from "react-router-dom";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import styles from "./Header.module.css";

type HeaderProps = {
  theme: "light" | "dark";
  onToggleTheme: () => void;
};

export function Header({ theme, onToggleTheme }: HeaderProps) {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        Movie Explorer
      </NavLink>

      <nav className={styles.nav}>
        <NavLink to="/">Поиск</NavLink>
        <NavLink to="/favorites">Избранное</NavLink>
      </nav>

      <ThemeToggle theme={theme} onToggle={onToggleTheme} />
    </header>
  );
}
