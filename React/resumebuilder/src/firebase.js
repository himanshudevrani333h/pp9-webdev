import firebase from "firebase/app"
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyD5mnqoQDtgJnp6uxJngkQmLXBgh1PUdys",
    authDomain: "resumebuilder-c56fb.firebaseapp.com",
    projectId: "resumebuilder-c56fb",
    storageBucket: "resumebuilder-c56fb.appspot.com",
    messagingSenderId: "464947875531",
    appId: "1:464947875531:web:7911b72705a638d62bd54e"
  };

  
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();