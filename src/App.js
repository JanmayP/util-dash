import React from 'react'
import { useState, useEffect } from 'react'
import './App.scss'

import Clock from './components/Clock'
// import Spotify from './components/Spotify'
import Timer from './components/Timer'


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


  //timer function
  let timerDuration = 60*25;
  const [timeLeft, setTimeLeft] = useState(timerDuration);
  const [timerActive, setTimerActive] = useState(false);

  const startPomodoro = () => {
    console.log("onCLICLKD@OI!KIJU!B!UBIJU!@");
    if(!timerActive){
      setTimerActive(true);
    } else {
      setTimerActive(false);
      setTimeLeft(timerDuration);
    }
  }

  useEffect (() => {
    let interval = null;
    if(timerActive && timeLeft !== 0){
      interval = setInterval(
        () => setTimeLeft(timeLeft - 1),
        1000
      );
    } else if (!timerActive || timeLeft === 0){
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    }

  }, [timerActive, timeLeft]);



  return (
    <div className="App">
      <div className="head-container">
        <div className="clock"><Clock time={time}/></div>
        <div className="greeting">Hello, Janmay</div>
      </div><br></br><br></br>
      <div className="main-container">
      <Timer timeLeft={timeLeft} startPomodoro={startPomodoro} />
        <div className="container-one"> 
          
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
