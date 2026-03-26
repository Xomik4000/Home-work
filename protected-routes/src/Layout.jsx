import { NavLink, Outlet } from "react-router-dom";

function Layout({ isAuth, role }) {
  const linkStyle = ({ isActive }) => ({
    marginRight: "12px",
    textDecoration: "none",
    color: isActive ? "red" : "black",
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <div style={{ padding: "20px" }}>
      <nav style={{ marginBottom: "20px" }}>
        <NavLink to='/' style={linkStyle}>
          Главная
        </NavLink>

        <NavLink to='/login' style={linkStyle}>
          Вход
        </NavLink>

        <NavLink to='/profile' style={linkStyle}>
          Профиль
        </NavLink>

        <NavLink to='/admin' style={linkStyle}>
          Админка
        </NavLink>
      </nav>

      <div style={{ marginBottom: "20px" }}>
        <p>Авторизация: {isAuth ? "Да" : "Нет"}</p>
        <p>Роль: {role || "нет"}</p>
      </div>

      <Outlet />
    </div>
  );
}

export default Layout;
