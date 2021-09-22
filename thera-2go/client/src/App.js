import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CardLogin from "./components/CardLogin";
import "./App.css";
import Grid from "./components/Grid";

function App() {
  return (
    <Router>
      <div className= "App">
        <Switch>
          <Route exact path="/">
            <CardLogin />
          </Route>
          <Route exact path="Grid">
            <Grid/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
