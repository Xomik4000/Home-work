import React, { useState, memo, useCallback, useMemo } from "react";


const TodoItem = memo(function TodoItem({ id, text, onDelete }) {
  console.log("Рендер задачи:", text);

  return (
    <div>
      <p>{text}</p>
      <button onClick={() => onDelete(id)}>Удалить</button>
    </div>
  );
});

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Изучить React" },
    { id: 2, text: "Написать проект" },
  ]);


  const addTodo = useCallback(() => {
    setTodos((prev) => [
      ...prev,
      { id: prev.length + 1, text: "Новая задача" },
    ]);
  }, []);


  const deleteTodo = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);


  const todoItems = useMemo(() => {
    return todos.map((todo) => (
      <TodoItem
        key={todo.id}
        id={todo.id}
        text={todo.text}
        onDelete={deleteTodo}
      />
    ));
  }, [todos, deleteTodo]);

  return (
    <div>
      <button onClick={addTodo}>Добавить задачу</button>
      {todoItems}
    </div>
  );
}

export default TodoList; //Третье задание