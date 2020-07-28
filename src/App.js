import React from "react";
import { Route, Switch } from "react-router-dom";
import { LOGIN_TOKEN } from "./constants";
import Login from "./pages/login/Login";
import Lander from "./pages/lander/Lander";
import CharGen from "./pages/charGen/CharGen";
import "./App.scss";

const App = () => {
  const loggedIn = window.localStorage.getItem("nerdToken") === LOGIN_TOKEN;

  return loggedIn ? (
    <Switch>
      <Route exact path="/">
        <Lander />
      </Route>
      <Route path="/chargen">
        <CharGen />
      </Route>
    </Switch>
  ) : (
    <Login />
  );
};

export default App;
