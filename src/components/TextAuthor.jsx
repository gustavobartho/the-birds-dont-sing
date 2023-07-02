import React, { useEffect, useState } from 'react';
import './TextAuthor.css';

function TextAuthor(props) {
    const { date } = props;
    const [userData, setUserData] = useState({});

    const fetchUserData = async () => {
        await fetch('https://random-data-api.com/api/users/random_user')
            .then(response => response.json())
            .then(data => setUserData({
                name: `${data.first_name} ${data.last_name}`,
                employment: data.employment.title,
            }));
    }

    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <article className='text-author'>
            <img src='https://thispersondoesnotexist.com' alt="fake author" />
            <div className='author-data'>
                <h3>{userData.name}</h3>
                <h4>{userData.employment}</h4>
                <h4>{date}</h4>
            </div>
        </article>
    );
}

export default TextAuthor;
