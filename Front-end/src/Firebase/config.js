import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";
const {
  VITE_FIREBASE_API_KEY,
  VITE_MEASUREMENT_ID,
  VITE_APP_ID,
  VITE_MESSAGING_SENDER_ID,
  VITE_DATABASE_URL,
  VITE_STORAGE_BUCKET,
  VITE_AUTH_DOMAIN,
  VITE_PROJECT_ID,
} = import.meta.env;


const firebaseConfig = {
  apiKey: VITE_FIREBASE_API_KEY,
  authDomain: VITE_AUTH_DOMAIN,
  projectId: VITE_PROJECT_ID,
  storageBucket: VITE_STORAGE_BUCKET,
  databaseUrl: VITE_DATABASE_URL,
  messagingSenderId: VITE_MESSAGING_SENDER_ID,
  appId: VITE_APP_ID,
  measurementId: VITE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
export {
  auth,
  provider,
  storage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadBytes,
};
export default app;
