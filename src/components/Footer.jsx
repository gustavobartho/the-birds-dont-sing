import React from 'react';
import './Footer.css';
import WindowTopBar from './WindowTopBar';

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer>
            <div className='footer-window'>
                <WindowTopBar text={'page-footer.me'} />
                <p className='footer-text'>Gustavo Bartholomeu - Copyright ⓒ {year}</p>
            </div>
        </footer>
    );
}

export default Footer;