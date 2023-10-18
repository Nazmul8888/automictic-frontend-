// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDmdd1eKrpcyOnWIY0YGdE9TaAVFak5uA",
  authDomain: "automatics-project.firebaseapp.com",
  projectId: "automatics-project",
  storageBucket: "automatics-project.appspot.com",
  messagingSenderId: "99955138924",
  appId: "1:99955138924:web:85d519c7f2cf29ead91349"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;