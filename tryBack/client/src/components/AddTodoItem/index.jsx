import { useState } from "react";
import { useApiRequest } from "../../hooks/useApiRequest";

export const AddTodoItem = ({ updateTodoList }) => {
  const [title, setTitle] = useState("");
  const { sendRequest, isLoading } = useApiRequest();

  const onSubmit = async (e) => {
    e.preventDefault();

    const result = await sendRequest(
      "http://localhost:3002/api/todos/add",
      "POST",
      { title },
    );

    if (!result.success) {
      alert(result.message);
      return;
    }

    setTitle("");
    updateTodoList();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <br />
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Добавление..." : "Добавить"}
      </button>
    </form>
  );
};
