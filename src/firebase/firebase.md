// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUgI8ks2lTe3xznHuC5vBBEOp4NqCdGzA",
  authDomain: "rioonreactnative.firebaseapp.com",
  projectId: "rioonreactnative",
  storageBucket: "rioonreactnative.firebasestorage.app",
  messagingSenderId: "1076529020154",
  appId: "1:1076529020154:web:7ca5f9c39b58e037c3dd43",
  measurementId: "G-SVG360M0DT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);