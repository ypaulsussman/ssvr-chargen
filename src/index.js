import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { LOGIN_TOKEN } from "./constants";
import App from "./App";

const tokenValidator = () =>
  window.localStorage.getItem("nerdToken") === LOGIN_TOKEN;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App isTokenValid={tokenValidator} />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
