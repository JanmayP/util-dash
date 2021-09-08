import React from 'react'
import { useState, useEffect } from 'react'
import './App.scss'

import Draggable from 'react-draggable'; // The default
import {DraggableCore} from 'react-draggable'; // <DraggableCore>

import Clock from './components/Clock'
import Timer from './components/Timer'
import Calculator from './components/calculator/Calculator'
import Keypad from './components/calculator/Keypad'
import Result from './components/calculator/Result'


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
    } else if (!timerActive || timeLeft===0){
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    }

  }, [timerActive, timeLeft]);

  // Calculator functions 
  const [result, setResult] = useState("0");
  const [hitCalc, setHitCalc] = useState(false);

  const onCalc = (button) => {
    if (button === "="){
      if(!hitCalc){
        setHitCalc(true);
        calculate();
      }
    }
    else if (button === "CE"){
      setHitCalc(false);
      correct();
    }
    else if (button === "C"){
      setHitCalc(false);
      clear();
    }   
    else {
      if(result === "0"){
        setHitCalc(false);
        setResult("" + button);
      } else {
        setHitCalc(false);
        setResult(result + button);
      }
    }
  }
  const clear = () => {
    setResult("0");
  }
  const correct = () => {
    if (result.length === 1){
      clear()
    } else{
      setResult(result.slice(0,-1));
    }
  }
  const calculate = () => {
    var compute = ''
    if (result.includes('--')){
      compute = result.replace('--','+');
    }
    else {
      compute = result;
    }
    try {
      let output = String(eval(compute));
      if (output.length > 11){
        setResult(output.substring(0,10));
      } else {
        setResult(output);
      }

    } catch (e) {
      setResult("error");
    }
  }



  return (
    <div className="App">
      <div className="head-container">
        <div className="clock"><Clock time={time}/></div>
        <div className="greeting">Hello, Janmay</div>
      </div><br></br><br></br>
      <div className="main-container">
      <Draggable>
        <div className="timer-container"> 
        <Timer timeLeft={timeLeft} startPomodoro={startPomodoro} />
        </div>
      </Draggable>
      <Draggable>
        <div className="calculator-container">
          <Result result={result} />
          <br></br>
          <Keypad onCalc={onCalc}/>
        </div>
      </Draggable>
      </div>
    </div>
  )
}

export default App;
