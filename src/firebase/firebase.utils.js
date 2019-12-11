import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB-MFFjrRFPs2dzw6gKJCrWu0RtRiBBw1g",
  authDomain: "stoneshopdb.firebaseapp.com",
  databaseURL: "https://stoneshopdb.firebaseio.com",
  projectId: "stoneshopdb",
  storageBucket: "stoneshopdb.appspot.com",
  messagingSenderId: "791277940142",
  appId: "1:791277940142:web:7e9de5a31692e25829ac3f",
  measurementId: "G-C1T7SP3E5D"
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;