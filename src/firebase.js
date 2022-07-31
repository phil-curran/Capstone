import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

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

// Initialize Firestore
export const db = getFirestore(app);

// collection reference
export const sleepDataRef = collection(db, "sleepData");
export const journalDataRef = collection(db, "journalData");

// getDocs(sleepDataRef)
//   .then((snapshot) => {
//     let sleepData = [];
//     snapshot.docs.forEach((doc) => {
//       sleepData.push({ ...doc.data(), id: doc.id });
//     });
//     console.log(sleepData);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

// getDocs(journalDataRef)
//   .then((snapshot) => {
//     let journalEntries = [];
//     snapshot.docs.forEach((doc) => {
//       journalEntries.push({ ...doc.data(), id: doc.id });
//     });
//     console.log(journalEntries);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

export const auth = getAuth(app);

export default app;
