import React, { useState, useEffect } from "react";
import "./style/displayNote.css";

const DisplayNotes = (props) => {
  const [stateArray, setStateArray] = useState([]); //deleated ["created note"]
  const { noteArray, folderId } = props;

  useEffect(() => {
    if (noteArray[folderId]) {
      setStateArray(noteArray[folderId].folderNotes);
    }
  });

  console.log(stateArray[1]);

  const removeItem = (id) => {
    const removeItem = stateArray.splice(id, 1);
    setStateArray(removeItem);
  };

  return (
    <div key={stateArray.length}>
      {stateArray.map((e) => {
        const { name, noteText, id } = e;
        return (
          <div className="form-control d-flex" key={id}>
            <div className="col-11">
              <h5>{name}</h5>
              <p>{id}</p>
              <label className="ta">{noteText}</label>
            </div>
            <div className="col-1 d-flex align-items-center ">
              <button
                className="btn btn-danger"
                onClick={() => {
                  removeItem(id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayNotes;
