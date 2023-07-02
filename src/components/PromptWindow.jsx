import React from 'react';
import "./PromptWindow.css";
import WindowTopBar from './WindowTopBar';
import Typewriter from "typewriter-effect";

function PromptWindow(props) {
    const { promptText } = props;

    return (
        < article className='prompt-window' >
            <WindowTopBar text="prompt-window.sh" />
            <div className='prompt-text-area'>
                <Typewriter
                    options={{ delay: 50 }}
                    onInit={(typewriter) => {
                        typewriter.typeString(`> ${promptText}`).start();
                    }}
                />
            </div>
        </article>
    );
}

export default PromptWindow;