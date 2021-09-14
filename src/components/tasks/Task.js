import { FaTimes } from 'react-icons/fa'

const Task = ({ key, task, onDelete }) => {
    return (
        <div className="task">
            <br/>
            <p className="taskText">{task.text} <FaTimes style={{cursor: 'pointer', color: 'black'}} onClick={() => {onDelete(task.id)}}/></p><br/>
            <p className="taskBody">{task.body}</p>
            <br/><hr></hr>
        </div>
    )
}

export default Task
