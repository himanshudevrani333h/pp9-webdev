import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDsZ8YdnHGeLIDAgZIf8lGIBleA1iukVyM",
  authDomain: "anonymous-af0ff.firebaseapp.com",
  projectId: "anonymous-af0ff",
  storageBucket: "anonymous-af0ff.appspot.com",
  messagingSenderId: "358002555911",
  appId: "1:358002555911:web:207469770592ec182bfea2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;
