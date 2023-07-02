import React from 'react';
import './Header.css';
import SearchBar from './SearchBar';
import WindowTopBar from './WindowTopBar';

function Header(props) {
    const { onSearchCallback } = props;

    return (
        <header>
            <div className='header-window'>

                <WindowTopBar text={`page-header.txt`} />

                <div className='search-div'>
                    <SearchBar onSearchCallback={onSearchCallback} />
                </div>

                <h1>the birds don't <span>sing</span>, they scream in <span>pain</span>.</h1>
            </div>
        </header>
    );
}

export default Header;