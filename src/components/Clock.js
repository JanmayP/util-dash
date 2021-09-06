const Clock = ({ time }) => {

  var hours = "";
  var minutes = "";

  if (time.getHours() <= 10) {
    hours = "0" + time.getHours();
  } else {
    hours = time.getHours();
  }

  if (time.getMinutes() <= 10) {
    minutes = "0" + time.getMinutes();
  } else {
    minutes = time.getMinutes();
  }

  return (
    <div>
      {hours} : {minutes}
    </div>
  )
}

export default Clock
