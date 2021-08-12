import React from 'react'
import { useState } from 'react'
import './App.css'

import Calculator from './components/calculator/Calculator'
import Result from './components/calculator/Result'
import Keypad from './components/calculator/Keypad'

import AddNote from './components/notes/AddNote'
import Button from './components/notes/Button'
import Note from './components/notes/Note'
import NoteHead from './components/notes/NoteHead'
import Notes from './components/notes/Notes'

import Info from './components/Info'

const App = () => {

  //calculator state and functions
  const [result, setResult] = useState("");
  
  const onClick = (button) => {
    
    if (button === "="){
      calculate()
    }

    else if (button === "CE"){
      correct() 
    }

    else if (button === "C"){
      clear()
    }   

    else {
      setResult(result + button)
    }

  }

  const clear = () => {
    setResult("")
  }

  const correct = () => {
    setResult(result.slice(0,-1))
  }
  
  const calculate = () => {
    var compute = ''

    compute = result

    try {
      setResult(eval(compute) || "")
    } catch (e) {
      setResult("error")
    }

  }


  //notes app state and functions

  const [showForm, setShowForm] = useState(true)
  const [notes, setNotes] = useState([
    {
        id: 1,
        text: 'Sample note',
        body: 'Sample note body',
    }
  ])

  const addNote = (note) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newNote = {id, ...note }
    setNotes([...notes, newNote])
  }


  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id))
  }

  return (
    <div className="App">
      <h1>Welcome, <span className="welcome">user</span>!</h1>
      <br></br>
      <div className="widgets">
        <div className="widgetCol">
          <NoteHead onAdd={() => setShowForm(!showForm)}/>
          <br></br>
          {notes.length > 0 ? <Notes notes={notes} onDelete={deleteNote}/> : <p>Add a note! <br></br></p> }
          <hr></hr>
          <br></br>
          {showForm && <AddNote onAdd={addNote}/>}
        </div>
        <br></br>
        <div className="widgetCol">
          <Calculator />
          <Result result={result} />
          <Keypad onClick={onClick}/>
        </div>
        <br></br>
        <div className="widgetCol">
          <Info />
        </div>
      </div>
    </div>
  );
}

export default App;
