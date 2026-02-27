import { useState } from "react";

function LoginForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "") {
      setError("Имя не должно быть пустым");
      return;
    }

    if (password.length < 6) {
      setError("Пароль должен быть не менее 6 символов");
      return;
    }

    setError("");

    console.log("Имя:", name);
    console.log("Пароль:", password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Имя'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='password'
        placeholder='Пароль'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p>{error}</p>}

      <button type='submit'>Отправить</button>
    </form>
  );
}

export default LoginForm; //первое задание
