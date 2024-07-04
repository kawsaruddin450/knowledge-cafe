import React from 'react';
import './Bookmark.css';

const Bookmark = ({post}) => {
    return (
        <div className='bookmark'>
            <h2>{post.title}</h2>
        </div>
    );
};

export default Bookmark;