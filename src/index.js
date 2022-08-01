import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnVKQKvoKL_2_BX0vRM7oIkS5wkZ6k6YA",
  authDomain: "coderhouse-ecommerce-4022a.firebaseapp.com",
  projectId: "coderhouse-ecommerce-4022a",
  storageBucket: "coderhouse-ecommerce-4022a.appspot.com",
  messagingSenderId: "1057252117744",
  appId: "1:1057252117744:web:0410ea8cd3c4eb2b064635"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
