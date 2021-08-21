import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Customer from "./Customer";
import Rentals from "./Rentals";
import Login from "./Login";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPageNext from "./MainPageNext";
import MainPageParams from "./MainPageParams";

ReactDOM.render(
  <Router>
    <Navbar />
    <Switch>
      <Route path="/customers">
        <Customer />
      </Route>

      <Route path="/rentals">
        <Rentals />
      </Route>

      <Route path="/login">
         <Login/>
        </Route>

        <Route path="/">
         <App/>
        </Route>

    </Switch>
  </Router>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <Router>
//     <Switch>
//       <Route path="/user/:id">
//         <MainPageNext />
//       </Route>
//       <Route path="/">
//         <MainPageParams />
//       </Route>
//     </Switch>
//   </Router>,
//   document.querySelector("#root")
// );
