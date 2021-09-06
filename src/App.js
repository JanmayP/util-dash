import React from 'react'
import { useState, useEffect } from 'react'
import './App.scss'

import Clock from './components/Clock'


const App = () => {

  // clock function
  const [time, setTime] = useState(new Date());

  useEffect (() => {
    const interval = setInterval(
      () => setTime(new Date()),
      1000
    );

    return () => {
      clearInterval(interval);
    }

  }, []);


  //



  return (
    <div className="App">
      <div className="head-container">
        <div className="clock"><Clock time={time}/></div>
        <div className="greeting">Hello, Janmay</div>
      </div>
      <div className="main-container">
        <div>

        </div>
        <div>

        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default App;
