import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import { useState } from "react";

function AddNote() {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h1 className="container">Add New Notes</h1>
      <div className="form-main my-3 container">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Enter the Title Here !
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Title Please !"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Enter the Description Here !
          </label>
          <textarea
            type="text"
            name="description"
            className="form-control"
            id="description"
            rows="3"
            onChange={onChange}
          ></textarea>
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            name="tag"
            className="form-control"
            id="tag"
            rows="3"
            onChange={onChange}
          ></input>

          <button className="btn btn-success my-3" onClick={handleClick}>
            Add Note
          </button>
        </div>
      </div>
    </>
  );
}

export default AddNote;
