import React from 'react';
import './TextPage.css';
import PromptWindow from './PromptWindow';
import { useLocation } from "react-router-dom";
import TextWindow from './TextWindow';
import TextAuthor from './TextAuthor';

function TextPage() {
    const location = useLocation();
    const { title, subtitle, prompt, text, date } = location.state;

    return (
        <section className='text-page'>
            <PromptWindow text={prompt} />
            <TextWindow>
                <div className='text-page-div'>
                    <h1>{title}</h1>
                    <div className='text-page-content'>
                        {subtitle && <><h3>{subtitle}</h3><br /></>}

                        <p dangerouslySetInnerHTML={{ __html: text }}></p>
                    </div>
                    <TextAuthor date={date} />
                </div>
            </TextWindow>
        </section>
    );
}

export default TextPage;
