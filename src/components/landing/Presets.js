import book from '../../images/book.png'
import work from '../../images/work.png'
import relax from '../../images/relax.png'


const Presets = ({ selectPreset }) => {


  return (
    <div className="presets-container">
      <h3>Choose a preset:</h3>
      <div className="preset" id="productivity" onClick={selectPreset}> 
      <h4>PRODUCTIVITY</h4><img src={work} alt="work"></img>
      </div>
      <div className="preset" id="study" onClick={selectPreset}> 
        <h4>STUDY</h4><img src={book} alt="book"></img>
      </div>
      <div className="preset" id="relax" onClick={selectPreset}> 
        <h4>CHILL</h4><img src={relax} alt="relax"></img>
      </div>
    </div>
  )
}

export default Presets
