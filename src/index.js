import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import reducers from "./reducers";

import "./index.css";
import App from "./components/App";

const middleWares = [thunk, logger];
const store = createStore(reducers, {}, applyMiddleware(...middleWares));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
