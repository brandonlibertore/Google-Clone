// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwaugCkeKueYQBUHI8TTTdqZ87A568hgo",
  authDomain: "clone-5fc76.firebaseapp.com",
  projectId: "clone-5fc76",
  storageBucket: "clone-5fc76.appspot.com",
  messagingSenderId: "547863925435",
  appId: "1:547863925435:web:9353045e099c14fc654f9e",
  measurementId: "G-NYY4JLP5EQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);