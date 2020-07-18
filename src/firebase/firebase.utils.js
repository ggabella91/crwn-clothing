import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAUKGHs_UoSAbhtd7STB7zWerAEmSr0SKI',
  authDomain: 'crwn-clothing-26976.firebaseapp.com',
  databaseURL: 'https://crwn-clothing-26976.firebaseio.com',
  projectId: 'crwn-clothing-26976',
  storageBucket: 'crwn-clothing-26976.appspot.com',
  messagingSenderId: '325235160695',
  appId: '1:325235160695:web:0e48e0f31c4b2c66243872',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
