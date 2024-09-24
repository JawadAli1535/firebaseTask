// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD6dmZBOvDFGNDwfzrSl9PKexmDa9yH16I',
  authDomain: 'task-nextpageapp.firebaseapp.com',
  projectId: 'task-nextpageapp',
  storageBucket: 'task-nextpageapp.appspot.com',
  messagingSenderId: '916564899377',
  appId: '1:916564899377:web:7df203288d73df6307c710',
  measurementId: 'G-HX5PTM9S34',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { db, storage };
