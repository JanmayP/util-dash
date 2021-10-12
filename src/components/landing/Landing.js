import UserInput from './UserInput';
import Presets from './Presets';
import Widgets from './Widgets'
import Themes from './Themes'
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useState } from 'react';

const Landing = ({ colorBG }) => {

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
    },
    theme: 0, 
  })

   
  return (
    <div className="landing-page">
      <div className="container" style={{background: colorBG}}>
        Welcome, <UserInput/> !
      </div>
      <Presets/>
      <Widgets/>
      <Themes/>
      <div className="router-link-container">
        <Link to="/home" className="router-link">Setup Dash <AiOutlineArrowRight size={20}></AiOutlineArrowRight> </Link>
      </div>
    </div>
  )
}

export default Landing
