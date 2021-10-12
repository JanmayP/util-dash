import book from '../../images/book.png'
import work from '../../images/work.png'
import relax from '../../images/relax.png'


const Presets = () => {


  return (
    <div className="presets-container">
      <h3>Choose a preset:</h3>
      <div className="preset"> 
      <p><h4>PRODUCTIVITY</h4><img src={work} alt="work"></img></p>
      </div>
      <div className="preset"> 
        <p><h4>STUDY</h4><img src={book} alt="book"></img></p>
      </div>
      <div className="preset"> 
      <p><h4>CHILL</h4><img src={relax} alt="relax"></img></p>
      </div>
    </div>
  )
}

export default Presets
