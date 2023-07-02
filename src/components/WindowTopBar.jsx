import React from 'react';
import './WindowTopBar.css';

function WindowTopBar(props) {
    const { text } = props;

    return (
        <article className='top-bar'>
            <p>{text}</p>
            <div className='close-icon'>X</div>
        </article>
    );
}

export default WindowTopBar;