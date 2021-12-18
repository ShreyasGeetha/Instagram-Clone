// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getStorage} from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgAwZ7KCf1NS3amjqUE2ADEWyXT-Luyv4",
  authDomain: "instaclone-2b12a.firebaseapp.com",
  projectId: "instaclone-2b12a",
  storageBucket: "instaclone-2b12a.appspot.com",
  messagingSenderId: "996859291789",
  appId: "1:996859291789:web:04020e57480de7bd401ac4"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export { app, db, storage };