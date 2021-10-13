import Presets from './Presets';
import Widgets from './Widgets'
import Themes from './Themes'
import ModeSwap from '../ModeSwap';
import dash from '../../images/dash.png'
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useState } from 'react';


const Landing = () => {

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

  // State for Global Widget Object
  const [globalProfile, setGlobalProfile] = useState ({
    id: 0, 
    widgets: {
      pomodoro: false,
      calculator: false, 
      tasks: false,
      spotify: false,
      youtube: false, 
      weather: false,
      calendar: false
    }})

  const presetWidgets = (widgets, id) => {
    widgets.forEach((widget) => {
      changeWidgets(widget)
    })
  }

  const selectPreset = (e) => {
    let presetDiv = e.target
    if (e.target.tagName === "IMG" || e.target.tagName === "H4") {
      presetDiv = e.target.parentElement
    }
    //Check if another Preset is selected
    if (globalProfile.id !== 0) {
      if (globalProfile.id === 1) {
        let tempDiv = document.getElementById("productivity")
        tempDiv.style.background = "#78E3FD"
      } else if (globalProfile.id === 2) {
        let tempDiv = document.getElementById("study")
        tempDiv.style.background = "#78E3FD"
      } else if(globalProfile.id === 3) {
        let tempDiv = document.getElementById("relax")
        tempDiv.style.background = "#78E3FD"
      } 
    }
    //Find Preset Div to change color
    if (presetDiv.id === "productivity") {
      globalProfile.id = 1
      presetWidgets(["calculator", "tasks", "weather", "calendar"])
    } else if (presetDiv.id === "study") {
      globalProfile.id = 2
      presetWidgets(["pomodoro", "tasks", "spotify", "calendar"])
    } else if (presetDiv.id === "relax") {
      globalProfile.id = 3
      presetWidgets(["weather", "youtube", "spotify"])
    }
    presetDiv = document.getElementById(presetDiv.id)
    presetDiv.style.color = "white"
    presetDiv.style.background = "#084C61"
  }

  // State and Theme Objects
  const [globalTheme, setGlobalTheme] = useState({
    id: 0, 
    primary: "#AAAAAA",
    secondary1: "#AAAAAB",
    secondary2: "#AAAAAC"
  })

  const themeDefault = {
    id: 1,
    primary: "#084C61",
    secondary1: "#78E3FD",
    secondary2: "#D1F5FF"
  }

  const themeRed = {
    id: 2,
    primary: "#F78060",
    secondary1: "#F78060",
    secondary2: "#FEBBA9"
  }

  const themeGreen = {
    id: 3,
    primary: "#6C7D47",
    secondary1: "#96A13A",
    secondary2: "#F7FFC8"
  }

  const selectTheme = (e) => {
    let themeDiv = e.target
    if (e.target.tagName === "IMG") {
      themeDiv = e.target.parentElement
    }
    //Check if another Preset is selected
    if (globalTheme.id !== 0) {
      if (globalTheme.id === 1) {
        let tempDiv = document.getElementById("default")
        tempDiv.style.background = "#78E3FD"
      } else if (globalTheme.id === 2) {
        let tempDiv = document.getElementById("red")
        tempDiv.style.background = "#78E3FD"
      } else if(globalTheme.id === 3) {
        let tempDiv = document.getElementById("green")
        tempDiv.style.background = "#78E3FD"
      } 
    }
    //Find Preset Div to change color
    if (themeDiv.id === "default") {
      setGlobalTheme(themeDefault)
    } else if (themeDiv.id === "red") {
      setGlobalTheme(themeRed)
    } else if (themeDiv.id === "green") {
      setGlobalTheme(themeGreen)
    }
    themeDiv = document.getElementById(themeDiv.id)
    themeDiv.style.color = "white"
    themeDiv.style.background = "#084C61"
  }

  // Function to select widget
  const changeWidgets = (widgetName) => {
    let tempDiv 
    tempDiv = document.getElementById(widgetName)
    if (!globalProfile.widgets[widgetName]) {
      tempDiv.style.color = "white"
      tempDiv.style.background = "#084C61"
      globalProfile.widgets[widgetName] = true
      setGlobalProfile(globalProfile)
    } else {
      tempDiv.style.color = "black"
      tempDiv.style.background = "#78E3FD"
      globalProfile.widgets[widgetName] = false
      setGlobalProfile(globalProfile)
    }
  }

  const unselectPresets = () => {
    let tempDiv
    if (globalProfile.id !== 4) {
      tempDiv = document.getElementById("productivity")
      tempDiv.style.background = "#78E3FD"
      tempDiv = document.getElementById("study")
      tempDiv.style.background = "#78E3FD"
      tempDiv = document.getElementById("relax")
      tempDiv.style.background = "#78E3FD"
    }
  }

  const selectWidgets = (e) => {
    unselectPresets()
    globalProfile.id = 4
    
    let widgetDiv = e.target
    switch(widgetDiv.id) {
      case "pomodoro": 
        changeWidgets("pomodoro")
        break;
      case "calculator": 
        changeWidgets("calculator")
        break;
      case "tasks": 
        changeWidgets("tasks")
        break;          
      case "spotify": 
        changeWidgets("spotify")
        break;
      case "youtube": 
        changeWidgets("youtube")
        break;
      case "weather": 
        changeWidgets("weather")
        break;
      case "calendar": 
        changeWidgets("calendar")
        break;
      default: break;
    }
  }
  // Save Preset and Theme to LS
  const savePreferences = (e) => {
    let userName = document.getElementById("username").value
    if (!userName) {
      alert("Please enter a username")
      e.preventDefault()
      return
    }
    const dashPreferences = {
      user: userName,
      profile: globalProfile, 
      theme: globalTheme
    }
    console.log(dashPreferences)
    localStorage.setItem("preferences", JSON.stringify(dashPreferences))
  }

  return (
    <div className="landing-page" style={{background: bodyBG, color: bodyText}}>
      <div className="header">
        <span>UTILITY DASH</span><img src={dash} alt="icon"></img><span className="react-made">made with React</span>
      </div>
      <ModeSwap mode={darkMode} changeMode={changeMode}/>
      <div className="container" >
        Welcome, <input type="text" className="user-input" id="username" autoFocus style={{color:bodyText}} ></input> !
      </div>
      <Presets selectPreset={selectPreset}/>
      <Widgets selectWidgets={selectWidgets}/>
      <Themes selectTheme={selectTheme}/>
      <div className="router-link-container">
        <Link to="/home" className="router-link" onClick={savePreferences}>Setup Dash <AiOutlineArrowRight size={20}></AiOutlineArrowRight> </Link>
      </div>
      
    </div>
  )
}

export default Landing
