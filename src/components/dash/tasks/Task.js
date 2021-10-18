import { FaTimes } from 'react-icons/fa'

const Task = ({ key, task, onDelete }) => {
    return (
        <div className="task">
            <p className="taskText">{task.text} <FaTimes  className="removeTask" onClick={() => {onDelete(task.id)}}/></p>
            <p className="taskBody">{task.body}</p>
        </div>
    )
}

export default Task
