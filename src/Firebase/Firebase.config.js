// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPnpCMV6FnTFja-_wsMhcORfEoSYbnBWk",
  authDomain: "the-chill-cafe.firebaseapp.com",
  projectId: "the-chill-cafe",
  storageBucket: "the-chill-cafe.appspot.com",
  messagingSenderId: "1091015260041",
  appId: "1:1091015260041:web:c04f8b5e86f9a233ae1358"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;