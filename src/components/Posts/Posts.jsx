import React, { useEffect, useState } from 'react';
import './Posts.css';
import Post from '../Post/Post';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setPosts(data));
    } ,[])
    return (
        <div className='post-container'>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;