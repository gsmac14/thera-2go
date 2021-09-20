import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CardLogin from "./components/CardLogin";
import "./App.css";
import CardSigup from "./components/CardSignup";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <CardLogin />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
