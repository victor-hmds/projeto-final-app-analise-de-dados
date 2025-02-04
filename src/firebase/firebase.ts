import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAUgI8ks2lTe3xznHuC5vBBEOp4NqCdGzA",
  authDomain: "rioonreactnative.firebaseapp.com",
  projectId: "rioonreactnative",
  storageBucket: "rioonreactnative.firebasestorage.app",
  messagingSenderId: "1076529020154",
  appId: "1:1076529020154:web:7ca5f9c39b58e037c3dd43",
  measurementId: "G-SVG360M0DT"
  //apiKey: 'YOUR_API_KEY',
  //authDomain: 'YOUR_AUTH_DOMAIN',
  //projectId: 'YOUR_PROJECT_ID',
  //storageBucket: 'YOUR_STORAGE_BUCKET',
  //messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  //appId: 'YOUR_APP_ID',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };