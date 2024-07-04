import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='nav'>
            <h1>Knowledge Cafe</h1>
            <a href='#'><img src="/profile.png" alt="profile image" /></a>
        </div>
    );
};

export default Header;