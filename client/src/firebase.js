// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: "mern-blog-bc27e.firebaseapp.com",
	projectId: "mern-blog-bc27e",
	storageBucket: "mern-blog-bc27e.appspot.com",
	messagingSenderId: "273600586142",
	appId: "1:273600586142:web:a7d445ba400dfc3ab9768f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
