import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./components/App.js";
import Modal from "./components/Modal.js";
import allReducers from "./reducers/allReducers.js";

ReactDOM.render(
  <Provider store={createStore(allReducers)}>
    <App />
  </Provider>,
  document.getElementById("app")
);
ReactDOM.render(
  <Provider store={createStore(allReducers)}>
    <Modal />
  </Provider>,
  document.getElementById("modalroot")
);
