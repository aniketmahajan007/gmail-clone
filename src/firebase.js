import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyChpWrhb23LWSDBUpXIbIXDn_uVO-wfBcQ",
    authDomain: "cl-4513b.firebaseapp.com",
    projectId: "cl-4513b",
    storageBucket: "cl-4513b.appspot.com",
    messagingSenderId: "790386950155",
    appId: "1:790386950155:web:2b9832ae19a009272bc70e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, provider, auth};