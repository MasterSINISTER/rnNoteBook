import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext"

function NoteItem(props) {
  const context=useContext(noteContext);
  const {deleteNote}=context;
    const {note,updateNote}=props
  return (
    <>
    <div>
        <div class="card my-3" style={{width:"20rem"}}>
  <div class="card-body">
    <h5 class="card-title">{note.title}</h5>
    <p class="card-text">{note.description}</p>
    <p class="card-text" style={{fontWeight:'900',fontFamily:'sans-serif'}}>{note.tag}</p>
<i class="fa-solid fa-eraser mx-1" onClick={()=>{deleteNote(note._id)}}></i>    
<i class="fa-solid fa-pen-to-square mx-4" onClick={()=>{updateNote(note)}}></i>
    {/* <a href="/" class="btn btn-primary">Go somewhere</a> */}
  </div>
  </div>
  </div>
    </>
  )
}

export default NoteItem
