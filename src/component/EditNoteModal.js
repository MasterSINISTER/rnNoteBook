import React ,{useState,useContext,useRef}from "react";
import noteContext from "../context/notes/noteContext";

function EditNoteModal() {
    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({
      title: "",
      description: "",
      tag: "",
    });
    const handleClick = (e) => {
      e.preventDefault();
    };
    const onChange = (e) => {
      setNote({ ...note, [e.target.name]: e.target.value });
    };
    const updateNote = (currentNote) => {
        ref.current.click();
        setNote(currentNote)
    
      };
      const ref = useRef(null);
  return (
    <>
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
            value={note.title}
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
            value={note.description}
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
            value={note.tag}
            onChange={onChange}
            className="form-control"
            id="etag"
            rows="3"
          ></input>
        </div>
      </div>
    </>
  );
}

export default EditNoteModal;
