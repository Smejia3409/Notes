import React, { useState } from "react";
import "./style/createFolder.css";

const CreateFolder = (props) => {
  const [folders, setFolders] = useState([]);
  const [folderName, setFolderName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Folder " + folderName + " was created");
    document.getElementById("createFolder").style.display = "none";
    //adds new folder to folders section
    const folderNotes = [];
    const addFolder = { id: folders.length, folderName, folderNotes };

    props.data(addFolder);
    if (folderName) {
      setFolders((newFolder) => {
        return [...newFolder, addFolder];
      });
      setFolderName("");
    }
  };

  return (
    <div
      id="createFolder"
      className="createFolder position-absolute top-50 start-50 translate-middle"
    >
      <button
        className="btn btn-danger float-end"
        onClick={() => {
          document.getElementById("createFolder").style.display = "none";
        }}
      >
        x
      </button>
      <form className="form" onSubmit={handleSubmit}>
        <div
          id="newFolder"
          className=" form-control text-center position-absolute top-50 start-50 translate-middle"
        >
          <h4 className="text-center">Create folder</h4>
          <div className="d-flex row">
            <div className="col-3">
              <label htmlFor="folderName" className="form-label">
                Folder name
              </label>
            </div>
            <div className="col-9">
              <input
                autoComplete="off"
                type="text"
                className="form-control"
                name="folderName"
                value={folderName}
                onChange={(e) => {
                  setFolderName(e.target.value);
                }}
              />
            </div>
          </div>

          <br />
          <button className="btn btn-success" type="submit">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateFolder;
