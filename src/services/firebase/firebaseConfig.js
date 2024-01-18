
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATRK--jhD_UlW6pUTHlFViBDc5rX8ku2g",
  authDomain: "entrega-final-ecommerce.firebaseapp.com",
  projectId: "entrega-final-ecommerce",
  storageBucket: "entrega-final-ecommerce.appspot.com",
  messagingSenderId: "463670816121",
  appId: "1:463670816121:web:22f59b152c893ec28313a8",
  measurementId: "G-VY8YMXBX0L"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)