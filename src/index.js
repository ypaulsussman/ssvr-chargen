import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CharGen from './CharGen'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/demo">
        <App />
      </Route>
      <Route path="/">
        <CharGen />
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
