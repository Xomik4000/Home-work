import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../features/users/usersSlice";

function Users() {
  const [name, setName] = useState("");

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

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