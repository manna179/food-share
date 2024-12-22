// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEYO3t_fmKJkkxatZGGTu6jE_3oVQFAmc",
  authDomain: "plate-share-e2f87.firebaseapp.com",
  projectId: "plate-share-e2f87",
  storageBucket: "plate-share-e2f87.firebasestorage.app",
  messagingSenderId: "996487450128",
  appId: "1:996487450128:web:f75f48f838252a6d628495"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
  export default auth