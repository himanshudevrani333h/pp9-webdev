import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Home from "./components/Home";
import { useEffect } from "react";
import { auth, firestore } from "./firebase";
import { useDispatch,useSelector } from "react-redux";
import { setUser } from "./redux/actions";
import Personal from "./components/Personal";
import Qualifications from "./components/qualifications";

let App = () => {
  let dispatch = useDispatch();
  let { fname, lname, city, state, email, phone } = useSelector(
    (state) => state.details
  );
  useEffect(() => {
    let unsub = auth.onAuthStateChanged(async (user) => {
      dispatch(setUser(user));

      if (user) {
        let { uid, email } = user;

        let docRef = firestore.collection("users").doc(uid);
        let doc = await docRef.get();
        if (!doc.exists) {
          docRef.set({ email });
        }
      }
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
        <Route path="/qualifications">
            <Qualifications />
          </Route>
          <Route path="/personal">
            <Personal />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;