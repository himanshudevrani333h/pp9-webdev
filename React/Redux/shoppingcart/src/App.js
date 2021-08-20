
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Preview from "./components/Preview";
import {useSelector} from "react-redux"
let App = () => {

  let  state = useSelector((state) => state)
  console.log(state);
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/preview/:id">
            <Preview />
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