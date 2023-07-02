import React, { useRef } from 'react';
import './Card3D.css';

function Card3D(props) {
    const { children } = props;

    const cardRef = useRef(null);
    const THRESHOLD = 7;

    const handleMouseMove = (event) => {
        let bounds = cardRef.current.getBoundingClientRect();
        const { clientX, clientY, currentTarget } = event;
        const { clientWidth, clientHeight } = currentTarget;

        const horizontal = (clientX - bounds.x) / clientWidth;
        const vertical = (clientY - bounds.y) / clientHeight;

        const rotateX = ((THRESHOLD / 2) - (horizontal * THRESHOLD)).toFixed(2);
        const rotateY = ((vertical * THRESHOLD) - (THRESHOLD / 2)).toFixed(2);

        cardRef.current.style.transform = `translateX(-5px) translateY(-7px) perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
    }


    const handleMouseLeave = (event) => {
        if (cardRef?.current) cardRef.current.style.transform = `translateX(0px) translateY(0px) perspective(${event.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
    }

    return (
        /* Component */
        <article className='card-3d-container'>
            {/* Inner elements */}
            <div
                className='card-3d'
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                {/* Content */}
                <div className='card-3d-content'>
                    {children}
                </div>
            </div>
        </article>
    );
}

export default Card3D;