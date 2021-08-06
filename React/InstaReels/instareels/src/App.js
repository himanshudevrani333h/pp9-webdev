// import { firestore } from "./firebase";
import Login from "./Login";
import { createContext, useState } from "react";
import Home from "./Home";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

let usercontext = createContext();
let App = () => {
  let [user, setUser] = useState(null);

  let userHandler = (user) => setUser(user);

  return (
    <>
      <Router>
        <usercontext.Provider value={user}>
          <Switch>
            <Route path="/home">
              <Home  />
            </Route>
            <Route path="/">
              <Login userhandler={userHandler} />
            </Route>
          </Switch>
        </usercontext.Provider>
      </Router>
    </>
  );
};

export  {usercontext};
export default App;
