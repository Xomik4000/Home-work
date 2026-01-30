import {useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Counter() {
  const [count, setCount] = useState(10)

  const decrement = () => {
    setCount(prevState => Math.max(prevState - 1, 0))
  }

  return (
    <div>
      <p>Текущее значение: {count}</p>
      <button onClick={decrement}>Уменьшить</button>
      
      {count === 0 && (
        <p style={{ color: 'red' }}>Пожалуйста, измените количество, оно не может быть равно 0</p>
      )}
    </div>
  )
}



function App() {
  const [postId, setPostId] = useState('');
  const [post, setPost] = useState(null);

  const getPost = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(res => res.json())
      .then(data => setPost(data))
  }

  return (
    <>
      <Counter />
      <input 
        placeholder='ID поста'
        value={postId} 
        onChange={e => setPostId(e.target.value)} 
      />

      <button onClick={getPost}>Получить пост</button>

      {post && (
        post.title ? (
          <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
        ) : (
          <p>Пост не найден</p>
        )
      )}
    </>
  )
}

export default App
