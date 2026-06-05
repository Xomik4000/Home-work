import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        Movie Explorer
      </NavLink>

      <nav className={styles.nav}>
        <NavLink to="/">Search</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </nav>
    </header>
  );
}
