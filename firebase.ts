import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-36GJ-thH5Jb_gLLQvkcpEaywGl7T3uQ",
  authDomain: "kaduna-markets.firebaseapp.com",
  projectId: "kaduna-markets",
  storageBucket: "kaduna-markets.appspot.com",
  messagingSenderId: "804951898792",
  appId: "1:804951898792:web:03425704240f9a7552209d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore()

export const storage = getStorage(app)

export const auth = getAuth()
