import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useState } from "react";
import { addUser, removeUser } from "../users/usersSlice";

function Users() {
  const users = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedName = name.trim();

    if (!trimmedName) {
      return;
    }

    dispatch(addUser(trimmedName));
    setName("");
  };

  const handleRemove = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <div>
      <h2>Пользователи</h2>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Введите имя'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type='submit'>Добавить пользователя</button>
      </form>

      {users.length === 0 ? (
        <p>Список пользователей пуст</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <span>{user.name}</span>{" "}
              <button onClick={() => handleRemove(user.id)}>Удалить</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Users;
