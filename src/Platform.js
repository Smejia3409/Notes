import React, { useState, useEffect } from "react";
import "./style/platform.css";
import CreateNote from "./CreateNote";
import DisplayNotes from "./DisplayNotes";

const Platform = (props) => {
  const { name, notes, platformClass, folderId } = props;
  const [folderNotes, setFolderNotes] = useState([]);
  //folderId is for the folder id num not for array of notes

  useEffect(() => {
    //adds notes to note array of folder
    if (1 <= folderNotes.length) {
      const addingToArray = notes[folderId].folderNotes;
      addingToArray.push(folderNotes[folderNotes.length - 1]);
      setFolderNotes([]);
    }
  });

  const addNote = () => {
    document.getElementById("createNote").style.display = "block";
  };

  return (
    <div className={platformClass} key={name}>
      <div className="platformHeader d-flex">
        <h2 className="col-11">{name}</h2>
        <button onClick={addNote} className="addNote btn btn-success float">
          +
        </button>
      </div>
      <br />
      <div>
        <CreateNote
          id="createNote"
          folder={notes[folderId]}
          folderId={folderId}
          addNote={(folderNotes) => {
            setFolderNotes((e) => {
              return [...e, folderNotes];
            });
          }}
        />
      </div>
      <DisplayNotes noteArray={notes} folderId={folderId} />
    </div>
  );
};

export default Platform;
