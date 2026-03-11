import React from 'react'

export const Info = ({post}) => {
    return (
        <div>
            <h1>Detail Post - {post.id}</h1>
            <div><b>Title</b> - {post.title}</div>
            <br />
            <div style={{ maxWidth: '200px'}}> <b>Text</b> - {post.body}</div>
            <br />
            <div><b>User id</b> - {post.userId}</div>
        </div>
    )
}