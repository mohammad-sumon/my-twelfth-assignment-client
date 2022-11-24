// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

/*
const firebaseConfig = {
  apiKey: "AIzaSyDLfyvImKICaFwI7iRjlhBV5oLpf78zOyI",
  authDomain: "used-products-resale-cli-8eb57.firebaseapp.com",
  projectId: "used-products-resale-cli-8eb57",
  storageBucket: "used-products-resale-cli-8eb57.appspot.com",
  messagingSenderId: "586737906406",
  appId: "1:586737906406:web:d2b93f10a70c543bf80127",
};

*/
