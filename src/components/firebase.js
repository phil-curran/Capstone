import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const config = {
  apiKey: "AIzaSyC_wqdLNd5F8nmmYkDsQAJzEPkiv0-dkI4",
  authDomain: "quantified-self-c670f.firebaseapp.com",
  projectId: "quantified-self-c670f",
  storageBucket: "quantified-self-c670f.appspot.com",
  messagingSenderId: "276695459339",
  appId: "1:276695459339:web:8f8a7fe3a6ac05e7f1090e",
};

// Initialize Firebase
const app = initializeApp(config);

export const auth = getAuth(app);

export default app;
