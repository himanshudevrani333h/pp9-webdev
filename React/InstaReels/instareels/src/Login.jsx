import { auth, firestore, signInWithGoogle } from "./firebase";
import {useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { usercontext } from "./App";

let Login = (props) => {

  let value = useContext(usercontext)

  useEffect(() => {
    auth.onAuthStateChanged( async (user) => {
      if (user) {
        // if user logged in then user will not be null else it will be null and we will pass the props user data
        
        let { displayName, email,uid } = user;
        let docref = firestore.collection("users").doc(uid);
        let document = await docref.get();
        if (!document.exists) {
          docref.set({
            displayName,
            email,
            posts: [],
          });
        }
        props.userhandler({ displayName, email ,uid});
      } else {
        props.userhandler(user);
      }
    });
  }, []);

  return (
    <div>
      {value ? <Redirect to="/home" /> : ""}
      <button
        onClick={signInWithGoogle}
        type="submit"
        className="btn btn-primary m-4"
      >
        Login With Google
      </button>
    </div>
  );
};

export default Login;
