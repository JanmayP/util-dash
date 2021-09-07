const Clock = ({ time }) => {

  var hours = "";
  var minutes = "";
  var ampm = "";

  hours = time.getHours();
  if (hours >= 12){
    ampm = "PM";
  } else {
    ampm = "AM"
  }

  hours = (hours % 12);
  
  if (hours < 10){
    hours = "0" + hours;
  }

  if (time.getMinutes() < 10) {
    minutes = "0" + time.getMinutes();
  } else {
    minutes = time.getMinutes();
  }

  return (
    <div>
      {hours} : {minutes} {ampm}
    </div>
  )
}

export default Clock
