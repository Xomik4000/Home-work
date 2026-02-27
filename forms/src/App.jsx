import { useState, useRef } from "react";
import RenderCounter from "./components/RenderCounter";
import LoginForm from "./components/LoginForm";
import CustomButton from "./components/CustomButton";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const buttonRef = useRef(null);
  return (
    <>
      <LoginForm />
      <RenderCounter />
      <button onClick={() => setCount(count + 1)}>Увеличить</button>
      <CustomButton ref={buttonRef} />;
    </>
  );
}

export default App;
