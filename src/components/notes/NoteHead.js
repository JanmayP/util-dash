import Button from './Button'

const NoteHead = ({ onAdd }) => {
    return (
        <header className="notesHead">
            <h2>Notes</h2>
            <Button color='rgb(1, 255, 192)' text='Add' onClick={onAdd} />
        </header>
    )
}

export default NoteHead
