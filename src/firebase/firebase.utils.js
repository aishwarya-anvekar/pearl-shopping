import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { initializeApp } from 'firebase';

const config = {
  apiKey: "AIzaSyB1d__AYmxVPWQcNetNGqFnSqRKS8HlcAA",
  authDomain: "pearl-db-602c6.firebaseapp.com",
  databaseURL: "https://pearl-db-602c6.firebaseio.com",
  projectId: "pearl-db-602c6",
  storageBucket: "pearl-db-602c6.appspot.com",
  messagingSenderId: "754236542117",
  appId: "1:754236542117:web:176967903c94c5c2f7114c",
  measurementId: "G-P51E410TF2"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;