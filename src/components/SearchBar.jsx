import React, { useState } from 'react';
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import MenuButton from './MenuButton';
import { useNavigate } from "react-router-dom";

function SearchBar(props) {
    const { onSearchCallback } = props;
    const navigate = useNavigate();

    const [searchText, setSearchText] = useState('');

    const handleSearchTextChange = (event) => {
        const { value } = event.target;
        setSearchText(value);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        if (searchText.length) onSearchCallback(searchText);
    };

    const handleNavigate = (route) => {
        navigate(route)
    };

    return (
        <form
            className='search-bar'
            onSubmit={handleSearch}
        >

            <div className='menu-buttons'>
                <MenuButton text='Home' onClick={() => handleNavigate("/")}></MenuButton>
                <MenuButton text='About' onClick={() => handleNavigate("/about")}></MenuButton>
            </div>

            <div className='search-input'>
                <input
                    onChange={handleSearchTextChange}
                    placeholder='Type your worst fear...'
                    value={searchText}
                />
                <MenuButton style={{ height: '100%', padding: "3px 0" }} type="submit"><SearchIcon /></MenuButton>
            </div>
        </form>
    );
}

export default SearchBar;