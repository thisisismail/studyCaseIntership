// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyB_g5BGAwZw8abqURNtHVGXhsb5iPNAKuY",
  authDomain: "umkm-by-thisisismail.firebaseapp.com",
  databaseURL:
    "https://umkm-by-thisisismail-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "umkm-by-thisisismail",
  storageBucket: "umkm-by-thisisismail.appspot.com",
  messagingSenderId: "611467175220",
  appId: "1:611467175220:web:a58f32a8b6e5b70bc1b161",
  measurementId: "G-PL07YVZ1C4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
