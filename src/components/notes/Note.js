import { FaTimes } from 'react-icons/fa'

const Note = ({ key, note, onDelete }) => {
    return (
        <div className="note">
        
            <h3>{note.text} <FaTimes style={{cursor: 'pointer', color: 'red'}} onClick={() => {onDelete(note.id)}}/></h3>
            <p>{note.body}</p>
        
        </div>
    )
}

export default Note
