import { useState } from 'react'
import Task from './Task'

const Tasks = ({ tasks, onDelete }) => {

    return (
        <>
        {tasks.map((task) => (
            <div>
                <Task key={task.id} task={task} onDelete={onDelete}/>
            </div>
        ))}
        </>
    )
}

export default Tasks
