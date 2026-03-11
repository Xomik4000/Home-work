import React, { useState, useEffect } from "react";
import { ManagePost } from "../ManagePost";
import { Post } from "./components/Post";
import { DetailPost } from "../DetailPost";
import { Pagination } from "../Pagination";
import "./style.css";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [postForDeatailView, setPostForDeatailView] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [userId, setUserId] = useState(1);

  const pagination = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const addNewPost = (post) => {
    const postWithClientId = { ...post, clientId: crypto.randomUUID() };
    setPosts((prev) => [...prev, postWithClientId]);
  };

  const editPost = (post) => {
    const editedPosts = posts.map((oldPost) => {
      if (oldPost.id === post.id) {
        return post;
      }
      return oldPost;
    });
    setPosts(editedPosts);
  };

  const selectPost = (post) => {
    setSelectedPost(post);
    setPostForDeatailView(null);
  };

  const showDeatailPost = (postId) => {
    setSelectedPost(null);
    setPostForDeatailView(postId);
  };


  const changeUserId = (e) => {
    setUserId(e.target.value)
  }

  const deletePost = (post) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
      method: "DELETE",
    }).then(() => {
      setPosts((prev) =>
        prev.filter((item) => item.clientId !== post.clientId),
      );
    });
  };

  const changePage = (page) => {
    setCurrentPage(page)
  }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&userId=${userId}&_limit=5`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.map((p) => ({ ...p, clientId: crypto.randomUUID() })));
      });
  }, [currentPage, userId]);

  return (
    <div>
      <div className='posts'>
        {posts.map((post) => (
          <Post
            key={post.clientId}
            deletePost={deletePost}
            post={post}
            selectPost={selectPost}
            showDeatailPost={showDeatailPost}
          />
        ))}
      </div>
      <h2>Filter</h2>
      <input type="text" placeholder="User id" value={userId} onChange={changeUserId}/>
      <br />
      <Pagination currentPage={currentPage} pagination={pagination} changePage={changePage} />
      {!postForDeatailView && (
        <ManagePost
          addNewPost={addNewPost}
          selectedPost={selectedPost}
          editPost={editPost}
        />
      )}
      {postForDeatailView && !selectedPost && (
        <DetailPost postId={postForDeatailView} />
      )}
    </div>
  );
};
