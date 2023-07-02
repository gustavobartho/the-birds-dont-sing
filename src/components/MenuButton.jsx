import React from 'react';
import './MenuButton.css';

function MenuButton(props) {
    const { text, onClick, type, style, children } = props;

    const handleCLick = (event) => {
        if (event) event.preventDefault();
        if (onClick) onClick();
    };

    return (
        <button style={style} className='menu-button' type={type} onClick={onClick ? handleCLick : null} >
            {children ?? text}
        </button>
    );
}

export default MenuButton;