import { useState } from 'react'
import Note from './Note'

const Notes = ({ notes, onDelete }) => {

    return (
        <>
        {notes.map((note) => (
            <div>
                <hr></hr>
                <Note key={note.id} note={note} onDelete={onDelete}/>
            </div>
        ))}
        </>
    )
}

export default Notes
