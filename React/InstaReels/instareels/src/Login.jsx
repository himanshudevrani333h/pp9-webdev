import { signInWithGoogle } from "./firebase";
import {useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import "./Login.css"
let Login = () => {

  let value = useContext(AuthContext)

  return (
    <div className="my-container">
      {value ? <Redirect to="/home" /> : ""}
      <h1 className="reelsheading">Reels</h1>
      <button
        onClick={signInWithGoogle}
        type="submit"
        className="btn btn-primary  login"
      >
        Login With Google
      </button>
    </div>
  );
};

export default Login;
