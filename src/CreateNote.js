import React, { useState } from "react";
import "./style/createNote.css";
const CreateNote = (props) => {
  const [note, setNote] = useState([]);
  const [name, setName] = useState("");
  const [noteText, setNoteText] = useState("");

  const { folder, folderId } = props;
  const addNote = (e) => {
    //create note and adds it to setNote
    //note array in folder
    e.preventDefault();
    document.getElementById("createNote").style.display = "none";
    const addNote = { id: folder.folderNotes.length, name, noteText };

    props.addNote(addNote);
    if (name && noteText) {
      setNote((newNote) => {
        return [...newNote, addNote];
      });
    }
    console.log(note);
    setNoteText("");
    setName("");
    //when the submit button is created it adds what ever is in the input section to the note array
  };

  console.log(note);

  return (
    <div className="createNote container" id="createNote">
      <button
        className="btn btn-danger float-end col-1"
        onClick={() => {
          document.getElementById("createNote").style.display = "none";
        }}
      >
        X
      </button>
      <form className="form" onSubmit={addNote}>
        <div className="row">
          <h4 className="col-11">Create note</h4>
        </div>

        <div className="d-flex row">
          <div className="col-3">
            <label htmlFor="noteName" className="form-label">
              Name
            </label>
          </div>
          <div className="col-9">
            <input
              autoComplete="off"
              value={name}
              type="text"
              name="noteName"
              id="noteName"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row">
          <textarea
            className="col-12"
            name="note"
            id="note"
            cols="30"
            rows="10"
            value={noteText}
            style={{ resize: "none" }}
            onChange={(e) => {
              setNoteText(e.target.value);
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateNote;
