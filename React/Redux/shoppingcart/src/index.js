import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import App from "./App";
import { reducer } from "./redux/reducers";
import { Provider } from "react-redux";
let store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
