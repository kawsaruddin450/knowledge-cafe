import React from 'react';
import './Bookmarks.css';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({posts}) => {
    return (
        <div className='bookmark-container'>
            <h2>Bookmarked blogs: {posts.length}</h2>
            {
                posts.map(post => <Bookmark post={post}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;