import React from 'react'
import { useState, useEffect } from 'react'
import './App.scss'

import Draggable from 'react-draggable'; // The default
import {DraggableCore} from 'react-draggable'; // <DraggableCore>

import Clock from './components/Clock'
import Timer from './components/Timer'
import Youtube from './components/Youtube';
import Keypad from './components/calculator/Keypad'
import Result from './components/calculator/Result'
import Task from './components/tasks/Task'
import Tasks from './components/tasks/Tasks'
import AddTask from './components/tasks/AddTask'
import TaskHead from './components/tasks/TaskHead'
import { FaNotesMedical } from 'react-icons/fa';


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

  // Tasks functions
  const [showForm, setShowForm] = useState(true)
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")))

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id, ...task};
    setTasks([...tasks, newTask]);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    storeTasks(task);
  }

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id)
    setTasks(newTasks)
    removeTasks(newTasks)
  }

  const storeTasks = (task) => {
    localStorage.setItem("tasks", JSON.stringify([...tasks, task]));
  }

  const removeTasks = (newTasks) => {
    localStorage.setItem("tasks", JSON.stringify(newTasks));
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
        <div className="task-container">
            
            <TaskHead onAdd={() => setShowForm(!showForm)}/>
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : <p><br/>All Clear<br/></p>}
              

        </div>
      </Draggable>
      <Draggable>
        <div className="addTask-container">
          <AddTask onAdd={addTask}/>
        </div>
      </Draggable>
      </div>
      <br />

      <div className="main-container">
      <Draggable>
        <div className="calculator-container">
          <Result result={result} />
          <br></br>
          <Keypad onCalc={onCalc}/>
        </div>
      </Draggable>
      <Draggable>
        <div className="youtube-player">
          <Youtube/>
        </div>
      </Draggable>
      </div>
    </div>
  )
}

export default App;
