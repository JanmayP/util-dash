import theme1 from '../../images/theme1.png'
import theme2 from '../../images/theme2.PNG'
import theme3 from '../../images/theme3.PNG'

const Themes = ({ selectTheme }) => {
  return (
    <div className="themes-container">
      <h3>Select a theme:</h3>
      <div className="theme" id="default" onClick={selectTheme}>
        <img src={theme1} alt="Default"></img>
      </div>
      <div className="theme" id="red" onClick={selectTheme}>
        <img src={theme2} alt="Red" ></img>
      </div>
      <div className="theme" id="green" onClick={selectTheme}>
        <img src={theme3} alt="Green" ></img>
      </div>
    </div>
  )
}

export default Themes
