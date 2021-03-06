import pomodoro from '../../images/tomato.png'

const Pomodoro = ({ timeLeft, startPomodoro }) => {
  var minutes = Math.floor(timeLeft / 60);
  var seconds = timeLeft % 60;

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return (
    <div className="timer">
      <button onClick={startPomodoro}><img src={pomodoro} alt="Pomodoro"></img></button>
      <p>{minutes} : {seconds}</p>
    </div>
  )
}

export default Pomodoro
