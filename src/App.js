import React from "react";
import Folders from "./Folders";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/app.css";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  return (
    <div className="app ">
      <div>
        <h2 className="text-center text-primary shadow p-3 bg-white rounded">
          My Notes
        </h2>
      </div>
      <div className="border">
        <Folders />
      </div>
    </div>
  );
}

export default App;
