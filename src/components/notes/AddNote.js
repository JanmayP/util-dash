import { useState } from 'react'

const AddNote = ({onAdd}) => {

    const [text, setText] = useState("")
    const [body, setBody] = useState("")
    
    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert("Please enter a note heading")
            return
        }

        onAdd({text, body})
            
        setText("")
        setBody("")
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="form">
                <label>Note: </label>
                <input type='text' placeholder='Add Note' value={text} onChange={(e) => setText(e.target.value)} />
            </div><br></br>
            <div className="form">
                <label>Body: </label>
                <input type='text' placeholder='Add Body' value={body} onChange={(e) => setBody(e.target.value)} />
            </div>
            <br></br>
            <input type='submit' value='Save' className='formBtn'/>
        </form>
    )
}

export default AddNote
