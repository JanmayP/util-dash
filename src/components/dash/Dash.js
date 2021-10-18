import ModeSwap from '../ModeSwap';
import { useState, useEffect } from 'react';
import Draggable from 'react-draggable'; // The default
import Clock from './Clock';
import Pomodoro from './Pomodoro';
import Keypad from './Calculator/Keypad'
import Result from './Calculator/Result'
import Tasks from './tasks/Tasks'
import AddTask from './tasks/AddTask';


const Dash = () => {

  // Dark Mode State
  const [darkMode, setDarkMode] = useState(false)
  const [bodyBG, setBodyBG] = useState("white")
  const [bodyText, setBodyText] = useState("black")

  // Set Background Color depending on state
  const changeMode = () => {
    if (darkMode) {
      setBodyBG("white")
      setBodyText("black")
    } else {
      setBodyBG("#191919")
      setBodyText("white")
    }
    setDarkMode(!darkMode)
  } 

  // Get user preferences from LS 
  const userPreferences = JSON.parse(localStorage.getItem("preferences"))

  const userName = userPreferences.user
  const theme = userPreferences.theme
  const profile = userPreferences.profile

  //Set theme colours
  const colorPrimary = theme.primary
  const colorSecondary1 = theme.secondary1
  const colorSecondary2 = theme.secondary2

  //Set Widgets
  const widgets = profile.widgets

  // Timer Functions
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
      // eslint-disable-next-line
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
  const [showForm, setShowForm] = useState(false)
  const [tasks, setTasks] = useState([{
    id: 0,
    body: "test",
    text: "test body"
  }])

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id, ...task};
    setTasks([...tasks, newTask]);
    storeTasks(newTask);
    setShowForm(false);
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

  const showTaskForm = () => {
    setShowForm(!showForm);
  }
   
  return (
    
    <div className="dash" style={{background: bodyBG, color: bodyText}}>
      <div className="header-dash" style={{background: colorPrimary}}>
        <span>Hello, {userName}!</span>
      </div>
      <ModeSwap mode={darkMode} changeMode={changeMode} />
      <div className="header-body">
        <div className="sidebar" style={{background: colorSecondary2, color: "black"}}>
          <Clock />  
          {/* Some api with retrieve button */}
          <div className="sidebar-footer">
            Widgets are fully draggable!
            <br></br>
            Made in React
          </div>
        </div>
        <div className="main-body">
          <div className="body-row">
            { widgets.pomodoro ?  
            <Draggable>
              <div className="timer-container widget-container" style={{ background: colorSecondary1}}> 
                <Pomodoro timeLeft={timeLeft} startPomodoro={startPomodoro}/>
              </div>
            </Draggable>
              :<></>
            } <br/>

            { widgets.calculator ? 
            <Draggable>
                <div className="calculator-container widget-container" style={{ background: colorSecondary1}}>
                <Result result={result} />
                <br></br>
                <Keypad onCalc={onCalc}/>
              </div>
            </Draggable>
              : <></>
            }<br/>
            
            { widgets.calendar ? 
              <></>
              : <></>
            }<br/>
          </div>
          <div className="body-row">
            { widgets.tasks ? 
              <Draggable>
                <div className="task-container widget-container " style={{ background: colorSecondary1}}>
                  <div className="taskHeader">
                  <button className="showAddTask" style={{ background: colorPrimary }} onClick={showTaskForm}>Add Task</button>
                  </div>
                  {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : <p><br/>All Clear<br/></p>}
                </div>  
              </Draggable>
              : <></>
            }<br/>

            {showForm ? 
              <Draggable>
                <div className="addTask-container widget-container" style={{ background: colorSecondary1}}>
                  <AddTask onAdd={addTask} showTaskForm={showTaskForm}/>
                </div>
              </Draggable> : <></> }
          </div>
          <div className="body-row">

          </div>
          
          { widgets.spotify ? 
            <></>
            : <></>
          }<br/>
          { widgets.weather ? 
            <></>
            : <></>
          }<br/>
          { widgets.youtube ? 
            <></>
            : <></>
          }<br/>
        </div>
      </div>
    </div>
  )
}

export default Dash
