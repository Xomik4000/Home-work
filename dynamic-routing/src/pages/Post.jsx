import { useParams } from "react-router-dom";

function Post() {
  const { id } = useParams();

  return (
    <div>
      <h1>Страница поста</h1>
      <p>ID поста: {id}</p>
    </div>
  );
}

export default Post;
