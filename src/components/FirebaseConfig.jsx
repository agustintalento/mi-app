import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCPWi_Il9LNd9QQ4GykrziaJqHZSx9slW8",
  authDomain: "guava-plant-shop.firebaseapp.com",
  projectId: "guava-plant-shop",
  storageBucket: "guava-plant-shop.appspot.com",
  messagingSenderId: "509403203174",
  appId: "1:509403203174:web:8892e4c13462de377c8fa7",
  measurementId: "G-06YH50RGFB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);