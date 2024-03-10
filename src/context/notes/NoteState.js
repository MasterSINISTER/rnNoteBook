import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const noteInitial = []
  const [notes, setNotes] = useState(noteInitial);
  //Get all Notes
  const getNotes = async(title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVjNzVjMzY4M2ZhNjA2MzlmZTRkOTU0In0sImlhdCI6MTcwNzc1MzE3OX0.hh5X4nC6u21H7Z5cUx0wvKaCDfCdXkGdH8BwDXGV_VE",
      },
    });
    const json = await response.json();
    console.log(json)
    setNotes(json)
  };
  //Add Notes
  const addNote = async(title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVjNzVjMzY4M2ZhNjA2MzlmZTRkOTU0In0sImlhdCI6MTcwNzc1MzE3OX0.hh5X4nC6u21H7Z5cUx0wvKaCDfCdXkGdH8BwDXGV_VE",
      },
      body: JSON.stringify({title,description,tag}),
    });
    const json = response.json();

    //Logic to Add Note
    const note = {
      _id: "65ca3f6cecbe2580d162268d",
      user: "65c75c3683fa60639fe4d954",
      title: title,
      description: description,
      tag: tag,
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  //Edit Note
  const editNote = async (id, title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes//updatenote/${id}`, {
      method: "PUT",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVjNzVjMzY4M2ZhNjA2MzlmZTRkOTU0In0sImlhdCI6MTcwNzc1MzE3OX0.hh5X4nC6u21H7Z5cUx0wvKaCDfCdXkGdH8BwDXGV_VE",
      },
      body: JSON.stringify({title,description,tag}),
    });
    const json = response.json();

    //Logic to Edit the Client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };
  //Delete Notes
  const deleteNote = async(id) => {
    //API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVjNzVjMzY4M2ZhNjA2MzlmZTRkOTU0In0sImlhdCI6MTcwNzc1MzE3OX0.hh5X4nC6u21H7Z5cUx0wvKaCDfCdXkGdH8BwDXGV_VE",
      },
      body: JSON.stringify(),
    });
    const json = response.json();
    //Logic to Delete Notes
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    console.log("Deleting the Note with Id:" + id);
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote ,getNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
