import { useNavigate } from "react-router-dom";

export default function Profile({ role, logout }) {
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <div>
      <h1>Профиль</h1>
      <p>Вы авторизованы.</p>
      <p>Ваша роль: {role}</p>

      <button onClick={handleLogout}>Выйти</button>
    </div>
  );
}
