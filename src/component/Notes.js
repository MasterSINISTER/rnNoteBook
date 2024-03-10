import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import "./homeCss.css";
import AddNote from "./AddNote";
import { useEffect } from "react";
import { useRef } from "react";
function Notes() {
  const context = useContext(noteContext);
  const { notes, getNotes } = context;
  const [note, setNote] = useState({
    etitle: "",
    edescription: "",
    etag: "",
  });
  useEffect(() => {
    getNotes();
  }, []);
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag})
  };
  const handleClick = (e) => {
    e.preventDefault();
    console.log("Updating the Note !")
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const ref = useRef(null);
  return (
    <>
      <AddNote />
      <button
        style={{ display: "none" }}
        ref={ref}
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Edit Note
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="form-main my-3 container">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Enter the Title Here !
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    value={note.etitle}
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
                    value={note.edescription}
                    name="edescription"
                    className="form-control"
                    id="edescription"
                    rows="3"
                    onChange={onChange}
                  ></textarea>
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    name="etag"
                    value={note.etag}
                    onChange={onChange}
                    className="form-control"
                    id="etag"
                    rows="3"
                  ></input>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleClick}>
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <h1 className="container">Your Notes</h1>
      <div className="container my-4 container-item">
        {notes.map((note) => {
          return <NoteItem updateNote={updateNote} note={note} />;
        })}
      </div>
    </>
  );
}

export default Notes;
