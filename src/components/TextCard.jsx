import React from 'react';
import './TextCard.css';
import Card3D from './Card3D';
import WindowTopBar from './WindowTopBar';
import { useNavigate } from "react-router-dom";

function TextCard(props) {
    const { slug, title, text, date } = props.textData;
    const navigate = useNavigate();
    let formattedDate = `${date.toDate().getDate()}/${date.toDate().getMonth() + 1}/${date.toDate().getFullYear()}`;

    const imageSrc = `https://picsum.photos/id/${Math.floor(Math.random() * 500)}/500`;

    const handleNavigate = () => {
        navigate('text', { state: { ...props.textData, 'date': formattedDate } });
    };

    return (
        <div className='text-card' onClick={handleNavigate}>
            <Card3D>
                <div className='text-card-content'>

                    <WindowTopBar text={`${slug}.uc`} />

                    <img src={imageSrc} alt="random image" />

                    <div className='bottom-bar'>
                        <div className='text-title'><h1>{title}</h1></div>
                        <hr />
                        <div className='text-preview'><p dangerouslySetInnerHTML={{ __html: text }}></p></div>
                        <hr />
                        <p className='text-date'>{formattedDate}</p>
                    </div>
                </div>
            </Card3D>
        </div>
    );
}

export default TextCard;
