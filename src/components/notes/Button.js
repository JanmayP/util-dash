const Button = ({ color, text, addNote}) => {
    return (
            <button style={{backgroundColor: color}}
            className="notesBtn"
            onClick = {addNote}
            >{text}</button>
    )
}

export default Button
