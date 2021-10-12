import "../stylesheets/App.scss"
import {BsFillMoonFill, BsFillSunFill} from 'react-icons/bs'

const ModeSwap = ({changeMode, mode}) => {


  return (
    <button className="mode-swap" onClick={changeMode}>
      {!mode ? <BsFillSunFill size={20}/>
      : <BsFillMoonFill size={20}/> }
    </button>
  )
}

export default ModeSwap
