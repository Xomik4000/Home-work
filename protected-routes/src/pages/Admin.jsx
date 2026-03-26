import { useNavigate } from "react-router-dom";

export default function Admin({ logout }) {
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <div>
      <h1>Админка</h1>
      <p>Эта страница доступна только пользователю с ролью admin.</p>

      <button onClick={handleLogout}>Выйти</button>
    </div>
  );
}
