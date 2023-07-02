import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Body.css';
import PostsGrid from './PostsGrid';
import About from './About';

function Body(props) {
    const { texts } = props;

    return (
        <section className='page-body'>
            <Routes>

                {/* Home route */}
                <Route exact path="/" element={<PostsGrid texts={texts} />} />

                {/* About route */}
                <Route exact path="/about" element={<About />} />

            </Routes>
        </section >
    );
}

export default Body;