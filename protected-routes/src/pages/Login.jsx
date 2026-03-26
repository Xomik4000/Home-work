import { useNavigate } from "react-router-dom";

export default function Login({ loginAsUser, loginAsAdmin }) {
  const navigate = useNavigate();

  function handleUserLogin() {
    loginAsUser();
    navigate("/profile");
  }

  function handleAdminLogin() {
    loginAsAdmin();
    navigate("/admin");
  }

  return (
    <div>
      <h1>Вход</h1>

      <button onClick={handleUserLogin} style={{ marginRight: "10px" }}>
        Войти как пользователь
      </button>

      <button onClick={handleAdminLogin}>Войти как админ</button>
    </div>
  );
}
