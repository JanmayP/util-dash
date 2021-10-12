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
      timer: false,
      pomodoro: false,
      calculator: false, 
      tasks: false,
      spotify: false,
      youtube: false, 
      weather: false,
      calendar: false
    }
  })

  const productivityProfile = {
    id: 1, 
    widgets: {
      pomodoro: false,
      calculator: true, 
      tasks: true,
      spotify: false,
      youtube: false, 
      weather: true,
      calendar: true
    }
  }

  const studyProfile = {
    id: 2, 
    widgets: {
      pomodoro: true,
      calculator: false, 
      tasks: true,
      spotify: true,
      youtube: false, 
      weather: false,
      calendar: true
    }
  }

  const relaxProfile = {
    id: 3, 
    widgets: {
      pomodoro: false,
      calculator: false, 
      tasks: false,
      spotify: true,
      youtube: true, 
      weather: true,
      calendar: false
    }
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
      setGlobalProfile(productivityProfile)
      console.log("changing state")
    } else if (presetDiv.id === "study") {
      setGlobalProfile(studyProfile)
    } else if (presetDiv.id === "relax") {
      setGlobalProfile(relaxProfile)
    }
    presetDiv = document.getElementById(presetDiv.id)
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
    themeDiv.style.background = "#084C61"
  }

  // Save Preset and Theme to LS
  const savePreferences = () => {
      const dashPreferences = {
        profile: globalProfile, 
        theme: globalTheme
      }
      console.log(dashPreferences.profile.id)
      localStorage.setItem("preferences", JSON.stringify(dashPreferences))
  }
  

  return (
    <div className="landing-page" style={{background: bodyBG, color: bodyText}}>
      <div className="header">
        <span>UTILITY DASH</span><img src={dash} alt="icon"></img><span className="react-made">made with React</span>
      </div>
      <ModeSwap mode={darkMode} changeMode={changeMode}/>
      <div className="container" >
        Welcome, <input type="text" className="user-input" autoFocus style={{color:bodyText}} ></input> !
      </div>
      <Presets selectPreset={selectPreset}/>
      <Widgets/>
      <Themes selectTheme={selectTheme}/>
      <div className="router-link-container">
        <Link to="/home" className="router-link" onClick={savePreferences}>Setup Dash <AiOutlineArrowRight size={20}></AiOutlineArrowRight> </Link>
      </div>
      
    </div>
  )
}

export default Landing
