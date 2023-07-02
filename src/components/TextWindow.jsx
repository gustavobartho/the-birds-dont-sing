import React from 'react';
import './TextWindow.css';
import WindowTopBar from './WindowTopBar';

function TextWindow(props) {
    const { children } = props;
    return (
        <article className='text-window'>
            <WindowTopBar text='text-window.exe' />
            <div className='text-content'>
                {children}
            </div>
        </article>
    );
}

export default TextWindow;