import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBkqrQhyzQwfJQ7ADTb-4hMbjTnW7d6hbU",
    authDomain: "twitter-clone-27522.firebaseapp.com",
    projectId: "twitter-clone-27522",
    storageBucket: "twitter-clone-27522.appspot.com",
    messagingSenderId: "156213029329",
    appId: "1:156213029329:web:955d593a8a1c6b7c1f98f0",
    measurementId: "G-E81TRJVGQ2"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;