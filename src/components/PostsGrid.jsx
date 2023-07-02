import React from 'react';
import TextCard from './TextCard';
import './PostsGrid.css';

function PostsGrid(props) {
    const { texts } = props;

    return (
        <section>
            <div className='texts-grid'>
                {texts.map(textData => (
                    <TextCard
                        key={textData.id}
                        textData={textData}
                    />
                ))}
            </div>
        </section>
    );
}

export default PostsGrid;