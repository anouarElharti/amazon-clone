import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhJQGD7T1ODIGf_OyqnZIF2QEbgMAUlBE",
  authDomain: "clone-30003.firebaseapp.com",
  projectId: "clone-30003",
  storageBucket: "clone-30003.appspot.com",
  messagingSenderId: "987279018972",
  appId: "1:987279018972:web:0f7e519eb162e38c65dd19",
  measurementId: "G-T22FV0WSXM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
