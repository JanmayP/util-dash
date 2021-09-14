import { useState } from 'react'

const AddTask = ({onAdd}) => {

    const [text, setText] = useState("")
    const [body, setBody] = useState("")
    
    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert("Please enter a task")
            return
        }

        onAdd({text, body})
            
        setText("")
        setBody("")
    }

    return (
        
        <form className="addTaskForm" onSubmit={onSubmit}>
            <h3>Add a Task</h3><br></br>
            <div className="form">
                <label>Task: </label>
                <input type='text'  placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)} />
            </div><br></br>
            <div className="form">
                <label>Info: </label>
                <input type='text' id="infoBox" placeholder='Add Info' value={body} onChange={(e) => setBody(e.target.value)} />
            </div>
            <br></br>
            <input type='submit' value='Add' className='formBtn'/>
        </form>
    )
}

export default AddTask
