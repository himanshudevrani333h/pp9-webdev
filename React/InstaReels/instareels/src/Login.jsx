import { auth, signInWithGoogle } from "./firebase";
import { useEffect } from "react";
import { Redirect } from "react-router-dom";
let Login = (props) => {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // if user logged in then user will not be null else it will be null and we will pass the props user data
        let { displayName, email } = user;

        props.userhandler({ displayName, email });
      } else {
        props.userhandler(user);
      }
    });
  }, []);

  return (
    <div>
      {props.user ? <Redirect to="/home" /> : ""}
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
