// Import the functions you need from the SDKs you need
//import * as firebase from "firebase
//import * as firebase from "firebase/app";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// cada produto do firebase deve ser importad separadamente
//por exemplo auth de autenticação
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7rf_xnEcJtP8xkzyCBqxU_4I66ES3Uzg",

  authDomain: "projeto1-e3942.firebaseapp.com",

  projectId: "projeto1-e3942",

  storageBucket: "projeto1-e3942.appspot.com",

  messagingSenderId: "337910645223",

  appId: "1:337910645223:web:01ad0c233f680021d4fd42",};


// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()
const firestore = firebase.firestore()
const storage = firebase.storage()
export { auth, firestore, storage };
