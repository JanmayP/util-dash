import { useState, useEffect } from 'react'
const Clock = () => {

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

  var hours = "";
  var minutes = "";
  var ampm = "";

  hours = time.getHours();
  
  // Set AM/PM
  if (hours >= 12){
    ampm = "PM";
  } else {
    ampm = "AM"
  }

  // Convert to 12hr 
  if (hours !== 12) {
    hours = (hours % 12)
  }
  
  //Add zero if hours<10
  if (hours < 10){
    hours = "0" + hours;
  }

  // Get Minutes
  if (time.getMinutes() < 10) {
    minutes = "0" + time.getMinutes();
  } else {
    minutes = time.getMinutes();
  }

  return (
    <div className="clock">
      {hours} : {minutes} {ampm}
    </div>
  )
}

export default Clock