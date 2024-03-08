import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext"
import NoteItem from "./NoteItem";
import './homeCss.css'
import AddNote from "./AddNote";
function Notes() {
    const context=useContext(noteContext);
    const {notes,addNote}=context;
  return (
    <>
    <AddNote/>
        <h1 className="container">Your Notes</h1>
        <div className="container my-4 container-item">
        {notes.map((note)=>{
          return <NoteItem note={note}/>
        })}
        </div>
    
    </>
  )
}

export default Notes
