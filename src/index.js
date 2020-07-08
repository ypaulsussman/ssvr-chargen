import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./pages/demo/App";
import CharGen from "./pages/CharGen/CharGen";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/demo">
        <App />
      </Route>
      <Route exact path="/">
        <CharGen />
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
