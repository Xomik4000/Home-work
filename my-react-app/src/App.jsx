import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [type, setType] = useState("users");

  const [data, setData] = useState([]);

  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });
  // useEffect(() => {
  //   console.log('рендер компонента')
  // })

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json));

    return () => {
      console.log('clean type')
    }
  }, [type]);

  const mouseMoveHandler = (e) => {
    setPos({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    console.log("ComponentDidMount");

    window.addEventListener("mousemove", mouseMoveHandler);

    return () => {
       window.removeEventListener("mousemove", mouseMoveHandler);
    }
  }, []);

  return (
    <div>
      <h1>Ресурс: {type}</h1>

      <button onClick={() => setType("users")}>Пользователи</button>
      <button onClick={() => setType("todos")}>Todo</button>
      <button onClick={() => setType("posts")}>Посты</button>

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>
  );
}

export default App;




const tasks = [
  { id: "a1", text: "Купить молоко" },
  { id: "b2", text: "Почитать книгу" },
  { id: "c3", text: "Сделать зарядку" },
];

function TodoList() {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.text}</li> // ✅ Лучший вариант!
      ))}
    </ul>
  );
}