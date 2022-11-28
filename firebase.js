// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASJbPe4pdryqRdVjk3wBhJvMK1qpOtLrc",
  authDomain: "fir-auth-e1572.firebaseapp.com",
  projectId: "fir-auth-e1572",
  storageBucket: "fir-auth-e1572.appspot.com",
  messagingSenderId: "897658373417",
  appId: "1:897658373417:web:b8912064f725bea8eae338",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
