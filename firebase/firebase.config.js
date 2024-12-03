// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPxdaFUtkUVgr9lISiU0m9z4WCI8DKny0",
  authDomain: "assignment-10-acf23.firebaseapp.com",
  projectId: "assignment-10-acf23",
  storageBucket: "assignment-10-acf23.firebasestorage.app",
  messagingSenderId: "837645873541",
  appId: "1:837645873541:web:fba1a42f24d2d2e486d4ec"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
