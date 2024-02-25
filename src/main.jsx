import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWVhsPaSRlXUFtoT-mZy-CZc1537PKRw0",
  authDomain: "react-proyecto-50349.firebaseapp.com",
  projectId: "react-proyecto-50349",
  storageBucket: "react-proyecto-50349.appspot.com",
  messagingSenderId: "437197442334",
  appId: "1:437197442334:web:f7cfb8de02561efdedcd0f"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
