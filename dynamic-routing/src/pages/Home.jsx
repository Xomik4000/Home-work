import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function goToPosts() {
    navigate("/posts");
  }

  return (
    <div>
      <h1>Главная страница</h1>
      <button onClick={goToPosts}>Перейти к постам</button>
    </div>
  );
}

export default Home;
