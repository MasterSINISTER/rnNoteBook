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
            placeholder="name@example.com"
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
          <div className="radio-container">
            <input type="radio" id="tag" name="tag" value="General" style={{transform:'scale(1.5)'}}/>
            <label htmlFor="tag" style={{fontSize:'2rem',marginLeft:'1%'}}>General</label>
            <input type="radio" id="tag" name="tag" value="Study" style={{marginRight:'2%',transform:'scale(1.5)',padding:'10px'}}/>
            <label htmlFor="tag" style={{fontSize:'2rem'}}>Study</label>
            <input type="radio" id="tag" name="tag" value="Thoughts" style={{marginRight:'2%',transform:'scale(1.5)',padding:'10px'}}/>
            <label htmlFor="tag" style={{fontSize:'2rem'}}>Thoughts</label>
            <input type="radio" id="tag" name="tag" value="Extras" style={{marginRight:'2%',transform:'scale(1.5)',padding:'10px'}}/>
            <label htmlFor="tag" style={{fontSize:'2rem'}}>Extras</label>
          </div>
          <button className="btn btn-success my-3" onClick={handleClick}>
            Add Note
          </button>
        </div>
      </div>
    </>
  );
}

export default AddNote;
