import { useState } from "react";
import { useApiRequest } from "../../hooks/useApiRequest";

export const TodoList = ({ todoList, updateTodoList }) => {
  const [editingId, setEditingId] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");
  const { sendRequest, isLoading } = useApiRequest();

  const startEdit = (item) => {
    setEditingId(item._id);
    setEditingTitle(item.title);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditingTitle("");
  };

  const deleteTodoItem = async (_id) => {
    const result = await sendRequest(
      "http://localhost:3002/api/todos/delete",
      "DELETE",
      { _id },
    );

    if (!result.success) {
      alert(result.message);
      return;
    }

    if (editingId === _id) {
      cancelEdit();
    }

    updateTodoList();
  };

  const saveTodoItem = async (_id) => {
    const result = await sendRequest(
      "http://localhost:3002/api/todos/edit",
      "PATCH",
      { _id, title: editingTitle },
    );

    if (!result.success) {
      alert(result.message);
      return;
    }

    cancelEdit();
    updateTodoList();
  };

  return (
    <>
      {!todoList.length && <>Loading...</>}

      {todoList.map((item) => (
        <div key={item._id}>
          {editingId === item._id ? (
            <>
              <input
                type="text"
                value={editingTitle}
                onChange={(e) => setEditingTitle(e.target.value)}
              />
              &nbsp;
              <button
                type="button"
                onClick={() => saveTodoItem(item._id)}
                disabled={isLoading}
              >
                Сохранить
              </button>
              &nbsp;
              <button type="button" onClick={cancelEdit} disabled={isLoading}>
                Отмена
              </button>
            </>
          ) : (
            <>
              {item.title} &nbsp;
              <span onClick={() => startEdit(item)}>Редактировать</span>
              &nbsp;
              <span onClick={() => deleteTodoItem(item._id)}>Удалить</span>
            </>
          )}
        </div>
      ))}
    </>
  );
};
