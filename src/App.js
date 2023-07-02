import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import { db } from './conf/firebase';
import { collection, getDocs } from "firebase/firestore";
import Body from './components/Body';

function App() {
    const [texts, setTexts] = useState([]);

    useEffect(() => {
        fetchTexts();
    }, []);

    const fetchTexts = async () => {
        try {
            await getDocs(collection(db, "texts")).then((querySnapshot) => {
                const newData = querySnapshot.docs.map((doc) => (
                    { ...doc.data(), id: doc.id }
                ));
                setTexts(newData);
            })
        } catch (err) {
            setTexts([]);
        }
    }

    const handleSearch = (searchText) => {
        console.log(searchText);
    }

    return (
        <>
            <main>
                <Header onSearchCallback={handleSearch} />
                <Body texts={texts} />
                <Footer />
            </main>
        </>
    );
}

export default App;