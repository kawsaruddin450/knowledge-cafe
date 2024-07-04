import React from 'react';
import './Post.css';
import { faBookmark } from '@fortawesome/free-solid-svg-icons/faBookmark'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Post = (props) => {
    const {id, title, author, profile, published_at, image, reading_time, tags} = props.post;
    const addToBookmarks = props.addToBookmarks;
    const trackReading = props.trackReading;
    return (
        <div className='post-body'>
            <img src={image} alt={title} />
            <div className='post-meta'>
                <div className='post-author'>
                    <img src={profile} alt="author-profile" />
                    <div>
                        <h4 className="author-name">{author}</h4>
                        <p className='publish-date'>{published_at}</p>
                    </div>
                </div>
                <div>
                    <p className='reading-time'>{reading_time} min read <button onClick={() => addToBookmarks(props.post)}> <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon> </button></p>
                </div>
            </div>
            <h2 className="post-title">{title}</h2>
            <p className='tags'>
            {
                tags.map(tag => <span className='tag'>#{tag}</span>)
            }
            </p>
            <p className='mark-as-read'><a href="#" onClick={()=> trackReading(props.post)}>Mark as read</a></p>
        </div>
    );
};

export default Post;