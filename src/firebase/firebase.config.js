import { getAuth, initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBZjECvoIegsKHnk7GJdo88tgalhm7fPf0",
    authDomain: "dragon-news-b5b65.firebaseapp.com",
    projectId: "dragon-news-b5b65",
    storageBucket: "dragon-news-b5b65.appspot.com",
    messagingSenderId: "567447525089",
    appId: "1:567447525089:web:97b5c39e44954687a489a0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;