import React from 'react';
import './Header.css';

const Header = ({ headerExpanded }) => {
    return (
        <div className="head-container">
            <img className={`head-image ${headerExpanded ? 'head-image-expanded' : 'head-image-contracted'}`} src="./images/home.svg" alt="home" />
            <h1 className={`head-text ${headerExpanded ? 'head-text-expanded' : 'head-text-contracted'}`}>Name It!</h1>
        </div>
    )
}

export default Header;
