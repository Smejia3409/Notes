import React, { useState } from "react";
import CreateFolders from "./CreateFolder";
import "./style/folders.css";
import Platform from "./Platform";

const Folders = (props) => {
  //array of folders
  const [arrayData, setArrayData] = useState([]);
  const [platformName, setPlatformName] = useState("");
  const [platformClas, setPlatformClass] = useState("d-none");
  //used to guide notes to speccific folder
  const [folderId, setFolderId] = useState("");
  localStorage.setItem("setArrayData", arrayData)

  return (
    <div className="folders" id="folders">
      <button
        id="getFolders"
        className="btn btn-outline-primary col-1"
        onClick={() => {
          document.getElementById("menuBar").style.display = "block";
          document.getElementById("getFolders").style.display = "none";
        }}
      >
        View Folders
      </button>
      <p className="viewFolders" id="viewFolders">
        Folders
      </p>
      <div
        data-aos="fade-right"
        className="menuBar shadow-sm p-3 mb-5 bg-white rounded"
        id="menuBar"
      >
        <div className="float-end">
          <button
            className="btn btn-danger"
            onClick={() => {
              document.getElementById("menuBar").style.display = "none";
              document.getElementById("getFolders").style.display = "block";
            }}
          >
            &#10005;
          </button>
        </div>
        <br /> <br />
        <h6 className="text-center">Folders</h6>
        <div className="text-center ">
          <button
            className="btn btn-success"
            onClick={() => {
              document.getElementById("createFolder").style.display = "block";
            }}
          >
            Create folder
          </button>
        </div>
        <br />
        <section className="folderSection folder text-center">
          {arrayData.map((folder) => {
            //right click menu
            return (
              <div key={folder.id}>
                <button
                  className="folders btn btn-primary"
                  onClick={() => {
                    setPlatformClass("platform");
                    setPlatformName(folder.folderName);
                    setFolderId(folder.id);
                  }}
                >
                  <h6>{folder.folderName}</h6>
                </button>
                <br />
                <br />
              </div>
            );
          })}
        </section>
      </div>
      <CreateFolders
        id="createFolder"
        data={(arrayData) =>
          setArrayData((e) => {
            return [...e, arrayData];
          })
        }
      />
      <div>
        <Platform
          platformClass={platformClas}
          name={platformName}
          notes={arrayData}
          folderId={folderId}
        />
      </div>
    </div>
  );
};

export default Folders;
