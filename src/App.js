import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./pages/login/Login";
import Lander from "./pages/lander/Lander";
import CharGen from "./pages/charGen/CharGen";
import MapQuiz from "./pages/mapQuiz/MapQuiz";
import "./App.scss";

const App = (props) => {
  const { isTokenValid } = props;

  return isTokenValid() ? (
    <Switch>
      <Route exact path="/">
        <Lander />
      </Route>
      <Route path="/chargen">
        <CharGen />
      </Route>
      <Route path="/mapquiz">
        <MapQuiz />
      </Route>
    </Switch>
  ) : (
    <Login />
  );
};

export default App;
