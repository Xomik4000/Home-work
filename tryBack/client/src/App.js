import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { TodoList } from "./components/TodoList";
import { useGetTodoList } from "./hooks/useGetTodoList";
import { AddTodoItem } from "./components/AddTodoItem";

function App() {
  const [todoList, setTodoList] = useState([]);

  const getTodoList = useGetTodoList();

  const updateTodoList = useCallback(() => {
    getTodoList().then((result) => setTodoList(result.todos));
  }, [getTodoList])

  useEffect(() => {
    updateTodoList()
  }, [updateTodoList]);

  return (
    <div className="App">
      <h1>Мои задачи</h1>
      <TodoList todoList={todoList} updateTodoList={updateTodoList}/>
      <br />
      <AddTodoItem updateTodoList={updateTodoList}/>
    </div>
  );
}

export default App;
