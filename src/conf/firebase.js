import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: 'AIzaSyCrrbnNHlORpZwWsDwR6m44tL-f8RBiR_8',
    authDomain: 'gbartho-c27d7.firebaseapp.com',
    databaseURL: 'https://gbartho-c27d7-default-rtdb.firebaseio.com',
    projectId: 'gbartho-c27d7',
    storageBucket: 'gbartho-c27d7.appspot.com',
    messagingSenderId: '287904036000',
    appId: '1:287904036000:web:33500a5ce502c9abff85c5',
    measurementId: 'G-JLT0956KYW',
};

const firebase = initializeApp(firebaseConfig);

export const db = getFirestore(firebase);
export default firebase;




