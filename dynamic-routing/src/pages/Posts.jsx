import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [searchParams] = useSearchParams();

  const filter = searchParams.get("filter");

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );
        const data = await response.json();
        setPosts(data.slice(0, 3));
      } catch (error) {
        console.error("Ошибка при загрузке постов:", error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Лента постов</h1>

      {filter && <p>Фильр: {filter}</p>}

      {posts.map((post) => (
        <div key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  );
}

export default Posts;
