// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYDeaqbnmAvXAOM3ZamQsG7eW7TZjznqM", // process.env.REACT_APP_APIKEY,
  authDomain: "doctors-portal-c4a4b.firebaseapp.com", //process.env.REACT_APP_AUTH_DOMAIN,
  projectId: "doctors-portal-c4a4b", //process.env.REACT_APP_PROJECT_ID,
  storageBucket: "doctors-portal-c4a4b.appspot.com", //process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: "951501009780", //process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: "1:951501009780:web:67e442f3fd733501247221", //process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
