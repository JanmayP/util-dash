import './stylesheets/App.scss';
import './stylesheets/landing.scss'
import './stylesheets/dash.scss'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Component Imports 
import Landing from './components/landing/Landing';
import Dash from './components/dash/Dash'

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing >
          </Landing>
        </Route>

        <Route path="/home">
            <Dash>
            </Dash> 
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
