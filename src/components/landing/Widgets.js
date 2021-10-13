import React from 'react'

const Widgets = ({ selectWidgets}) => {


  return (
    <div className="widgets-container">
      <h3>OR Build your own Dash:</h3>
      <div className="widget" id="pomodoro" onClick={selectWidgets}>  
        Pomodoro 
      </div>
      <div className="widget" id="calculator" onClick={selectWidgets}> 
        Calculator
      </div>
      <div className="widget" id="tasks" onClick={selectWidgets}> 
        Task Tracker
      </div>
      <div className="widget" id="spotify" onClick={selectWidgets}> 
        Spotify Player
      </div>
      <div className="widget" id="youtube" onClick={selectWidgets}> 
        YouTube Player
      </div>
      <div className="widget" id="weather" onClick={selectWidgets}> 
        Weather
      </div>
      <div className="widget" id="calendar" onClick={selectWidgets}> 
        Calendar
      </div>
    </div>
  )
}

export default Widgets
