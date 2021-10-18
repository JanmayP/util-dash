const Button = ({text, addTask}) => {
    return (
            <button
            className="notesBtn"
            onClick = {addTask}
            >{text}</button>
    )
}

export default Button
