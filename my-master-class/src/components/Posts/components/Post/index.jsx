import React from "react";
import "./style.css";

export const Post = ({ post, deletePost, selectPost, showDeatailPost }) => {
  return (
    <div key={post.clientId} className='posts-item'>
      <span onClick={() => selectPost(post)}>{post.title}</span>
      <button onClick={() => deletePost(post)}>Удалить</button>
      <button onClick={() => showDeatailPost(post)}>Детальный просмотр</button>
    </div>
  );
};
