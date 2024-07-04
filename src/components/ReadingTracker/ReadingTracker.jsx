import React from 'react';
import './ReadingTracker.css';

const ReadingTracker = (props) => {
    return (
        <div className='reading-tracker'>
            <h2>Spent Time on read: {props.time} min</h2>
        </div>
    );
};

export default ReadingTracker;