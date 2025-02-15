import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID, MEASUREMENT_ID } from '@env';

const firebaseConfig = {
  apiKey: "AIzaSyCOAvkK_w_FmdKGfCtiZ-tDOt6oPCF_I40",
  authDomain: "autenticador-ad946.firebaseapp.com",
  projectId: "autenticador-ad946",
  storageBucket: "autenticador-ad946.firebasestorage.app",
  messagingSenderId: "85270748438",
  appId: "1:85270748438:web:b1c93d795821310e268437",
  measurementId: "G-Q71L8HBVZL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };