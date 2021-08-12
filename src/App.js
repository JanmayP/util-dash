import React from 'react'
import { useState } from 'react'
import './App.css'
import Calculator from './components/calculator/Calculator'
import Result from './components/calculator/Result'
import Keypad from './components/calculator/Keypad'
import Weather from './components/weather/Weather'


const App = () => {

  //calculator state and functions
  const [result, setResult] = useState("");
  
  const onClick = (button) => {
    
    if (button === "="){
      calculate()
    }

    else if (button === "CE"){
      correct() 
    }

    else if (button === "C"){
      clear()
    }   

    else {
      setResult(result + button)
    }

  }

  const clear = () => {
    setResult(0)
  }

  const correct = () => {
    setResult(result.slice(0,-1))
  }
  
  const calculate = () => {
    var compute = ''

    if (result.includes('--')){
      compute = result.replace('--','+')
    }
    else {
      compute = result
    }

    try {
      setResult(eval(compute))
    } catch (e) {
      setResult("error")
    }

  }


  return (
    <div className="App">
      <h1>Welcome, <span className="welcome">user</span>!</h1>
      <br></br>
      <div className="widgets">
        <div className="widgetCol">
          <Weather />
        </div>
        <br></br>
        <div className="widgetCol">
          <Calculator />
          <Result result={result} />
          <Keypad onClick={onClick}/>
          
        </div>
      </div>
    </div>
  );
}

export default App;
