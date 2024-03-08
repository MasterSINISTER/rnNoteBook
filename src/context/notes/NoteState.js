import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
const noteInitial=[
  {
    "_id": "65ca3b0d6a299c1494796477",
    "user": "65c75c3683fa60639fe4d954",
    "title": "My Title",
    "description": "This is a test Article so thats How",
    "tag": "General",
    "__v": 0
  },
  {
    "_id": "65ca3b116a299c1494796479",
    "user": "65c75c3683fa60639fe4d954",
    "title": "My Title",
    "description": "This is a test Article sss thats How",
    "tag": "General",
    "__v": 0
  },
  {
    "_id": "65ca3f6cecbe2580d162268d",
    "user": "65c75c3683fa60639fe4d954",
    "title": "My Title",
    "description": "This is test Article sss thats How",
    "tag": "General",
    "__v": 0
  },
  {
    "_id": "65ca3f6cecbe2580d162268d",
    "user": "65c75c3683fa60639fe4d954",
    "title": "My Title",
    "description": "This is test Article sss thats How",
    "tag": "General",
    "__v": 0
  },
  {
    "_id": "65ca3f6cecbe2580d162268d",
    "user": "65c75c3683fa60639fe4d954",
    "title": "My Title",
    "description": "This is test Article sss thats How",
    "tag": "General",
    "__v": 0
  },
  {
    "_id": "65ca3f6cecbe2580d162268d",
    "user": "65c75c3683fa60639fe4d954",
    "title": "My Title",
    "description": "This is test Article sss thats How",
    "tag": "General",
    "__v": 0
  }
]
const [notes,setNotes]=useState(noteInitial);
  //Add Notes
  const addNote =(title,description,tag)=>{
    const note={
      "_id": "65ca3f6cecbe2580d162268d",
      "user": "65c75c3683fa60639fe4d954",
      "title": title,
      "description": description,
      "tag": tag,
      "__v": 0
    };
    setNotes(notes.concat(note))
  }
  //Edit Note
  const editNote =()=>{
    
  }
  //Delete Notes
  const deleteNote =(id)=>{
    const newNotes=notes.filter((note)=>{return note._id!==id})
    console.log("Deleting the Note with Id:"+id);
    setNotes(newNotes)
  }

  return (
  <NoteContext.Provider value={{notes,addNote,editNote,deleteNote}}>
      {props.children}
    </NoteContext.Provider>
  );
}


export default NoteState;