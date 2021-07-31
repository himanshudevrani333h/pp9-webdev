import { auth } from "./firebase";
import {Redirect} from "react-router-dom"
let Home = (props) => {
  return (
    <div>
      {props.user ? (
        <>
          <h1>{props.user.displayName}</h1>
          <h2>{props.user.email}</h2>

          <button onClick={() => auth.signOut()}>Logout</button>
        </>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
};

export default Home;
