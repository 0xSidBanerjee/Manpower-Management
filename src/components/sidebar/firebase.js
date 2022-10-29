
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
  
const firebaseConfig = {
    // Your credentials
    apiKey: "AIzaSyC_Zc56qUYN8xq648eaqwfyuBhKEFk9f5k",
    authDomain: "manpower-management-b1596.firebaseapp.com",
    projectId: "manpower-management-b1596",
    storageBucket: "manpower-management-b1596.appspot.com",
    messagingSenderId: "516142677581",
    appId: "1:516142677581:web:ee8233fcf9dc7a8bfa2604",
    measurementId:"G-V2367LZ9ZR"
};
  
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider(); 
export {auth , firebase, provider};