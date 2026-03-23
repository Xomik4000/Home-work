import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        end
        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
      >
        Лента постов
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
      >
        Об авторе
      </NavLink>

      <NavLink
        to="/feedback"
        className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
      >
        Обратная связь
      </NavLink>
    </nav>
  );
}