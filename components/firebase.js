import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import "firebase/compat/storage"; // <----
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyBD7aXMUBopNNpyfKS7YfKaVPDBJwhi8gU",
  authDomain: "escolar-a6959.firebaseapp.com",
  projectId: "escolar-a6959",
  storageBucket: "escolar-a6959.appspot.com",
  messagingSenderId: "662191265839",
  appId: "1:662191265839:web:91aae333171da83948ceda"
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);

// Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
// key is the counterpart to the secret key you set in the Firebase console.

export default firebase;
