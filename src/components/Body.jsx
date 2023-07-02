import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Body.css';
import PostsGrid from './PostsGrid';
import About from './About';
import TextPage from './TextPage';

function Body(props) {
    const { texts } = props;

    return (
        <section className='page-body'>
            <Routes>

                {/* Home route */}
                <Route exact path="/" element={<PostsGrid texts={texts} />} />

                {/* About route */}
                <Route exact path="/about" element={<About />} />

                {/* About route */}
                <Route exact path="/text" element={<TextPage />} />

            </Routes>
        </section >
    );
}

export default Body;