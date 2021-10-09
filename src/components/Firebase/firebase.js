// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3nShClrJ3CD0h2DYSYUinCErnmvYkXd8",
  authDomain: "clone-b5c38.firebaseapp.com",
  projectId: "clone-b5c38",
  storageBucket: "clone-b5c38.appspot.com",
  messagingSenderId: "438223645136",
  appId: "1:438223645136:web:db65a2d8c17f93141c71d5",
  measurementId: "G-JYQ24ENRFZ",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth();
// const analytics = getAnalytics(app);
export { db, auth };
