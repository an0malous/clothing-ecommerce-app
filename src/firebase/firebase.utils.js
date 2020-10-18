import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDsNM6j4L26FOX-acAlU5LKRLbq0gf9Ti0",
    authDomain: "ecommerce-db-3e03f.firebaseapp.com",
    databaseURL: "https://ecommerce-db-3e03f.firebaseio.com",
    projectId: "ecommerce-db-3e03f",
    storageBucket: "ecommerce-db-3e03f.appspot.com",
    messagingSenderId: "174268042346",
    appId: "1:174268042346:web:69f4c20f4dcb80fa918e13",
    measurementId: "G-LKVMENKHT4"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;