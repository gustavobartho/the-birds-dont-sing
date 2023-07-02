import React from 'react';
import './TextCard.css';
import Card3D from './Card3D';
import WindowTopBar from './WindowTopBar';

function TextCard(props) {
    const { slug, title, subtitle, prompt, text, date } = props.textData;
    const formattedDate = date.toDate();
    const imageSrc = `https://picsum.photos/id/${Math.floor(Math.random() * 500)}/500`;

    return (
        <div className='text-card'>
            <Card3D>
                <div className='text-card-content'>

                    <WindowTopBar text={`${slug}.uc`} />

                    <img src={imageSrc} alt="random image" />

                    <div className='bottom-bar'>
                        <div className='text-title'><h1>{title}</h1></div>
                        <hr />
                        <div className='text-preview'><p>{text}</p></div>
                        <hr />
                        <p className='text-date'>{`${formattedDate.getDate()}/${formattedDate.getMonth()}/${formattedDate.getFullYear()}`}</p>
                    </div>
                </div>
            </Card3D>
        </div>
    );
}

export default TextCard;