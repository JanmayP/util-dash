import './stylesheets/App.scss';
import './stylesheets/landing.scss'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react' 

// Component Imports 
import Landing from './components/landing/Landing';
import Dash from './components/dash/Dash'

function App() {

  // Theme State
  // const [pageTheme, setPageTheme] = useState({
  //   colorBG: "white",
  //   colorA: "aqua",
  //   colorB: "darkblue",
  //   darkMode: false
  // })

  // Dark Mode State
  const [darkMode, setDarkMode] = useState(false)

  // Set Background Color depending on state
  let colorBG
  !darkMode ? colorBG = "white" : colorBG = "grey"  

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing colorBG={ colorBG }>
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
