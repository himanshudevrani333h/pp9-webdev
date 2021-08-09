import firebase from "firebase";
import "firebase/firestore"
// step 1
import "firebase/auth"
import "firebase/storage"
const firebaseConfig = {
    apiKey: "AIzaSyBpjBy7o0jQMYI-3ODYyHZMFZoMWLpeJ0k",
    authDomain: "reels-afe60.firebaseapp.com",
    projectId: "reels-afe60",
    storageBucket: "reels-afe60.appspot.com",
    messagingSenderId: "76191497072",
    appId: "1:76191497072:web:f26b1e0e88457981d2edb5"
  };
 
  firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

// step 2
export const auth = firebase.auth()
export const storage = firebase.storage();
//Step 3=> firebase console; enable google login in auth panel

//Step 4
let googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = ()=> auth.signInWithPopup(googleAuthProvider);
export default firebase