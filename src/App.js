import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Nomatch from "./Components/NoMatch/Nomatch";
import LeagueDetails from "./Components/LeagueDetails/LeagueDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/league/:id">
          <LeagueDetails />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <Nomatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
