import firebase from "firebase/app";
import "firebase/database";

const config = {
    apiKey: "AIzaSyDlmwSqVUdEPZzekr8uwYKF7o7zTe3G-3E",
    authDomain: "vue-chat-cf017.firebaseapp.com",
    projectId: "vue-chat-cf017",
    storageBucket: "vue-chat-cf017.appspot.com",
    messagingSenderId: "5920253559",
    appId: "1:5920253559:web:2bf99a53887895e0dc4872"
    //api key
}

const db = firebase.initializeApp(config);
export default db;