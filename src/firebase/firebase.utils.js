import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBqeBNAMIzOsNuuKGzMaK48G6okn6h4TmQ",
  authDomain: "crwn-db-101b4.firebaseapp.com",
  databaseURL: "https://crwn-db-101b4.firebaseio.com",
  projectId: "crwn-db-101b4",
  storageBucket: "crwn-db-101b4.appspot.com",
  messagingSenderId: "236575035475",
  appId: "1:236575035475:web:148ef2a929770f6c54b6a6",
  measurementId: "G-ZT0MG3XK9J"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;