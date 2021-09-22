import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CardLogin from "./components/CardLogin";
import "./App.css";
import UserPage from "./components/UserPage";

function App() {

  
  return (
    <Router>
      <div className= "App">
        <Switch>
          <Route exact path="/">
            <CardLogin />
          </Route>
          <Route exact path="/userPage">
            <UserPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
