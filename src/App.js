import React from "react";
import { Route, Switch } from "react-router-dom";
import Demo from "./pages/demo/Demo";
import CharGen from "./pages/CharGen/CharGen";
import "./App.scss";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <CharGen />
      </Route>
      <Route path="/demo">
        <Demo />
      </Route>
    </Switch>
  );
};

export default App;
