import React, { useEffect, useState } from 'react';
import './Posts.css';
import Post from '../Post/Post';

const Posts = (props) => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setPosts(data));
    } ,[])
    return (
        <div className='post-container'>
            {
                posts.map(post => <Post 
                key={post.id} 
                addToBookmarks={props.addToBookmarks}
                trackReading={props.trackReading} 
                post={post}
                ></Post>)
            }
        </div>
    );
};

export default Posts;