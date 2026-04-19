import "./App.css";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faTrashCan,
//   faClipboardCheck,
// } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {};

  return (
    <div className="bg-light p-5 rounded">
      <h1 className="mb-4 text-center">
        Task Manager
      </h1>
      <div className="d-flex mb-4">
        <input
          className="form-control"
          placeholder="Enter task..."
        />
        <button className="bg-primary text-white py-1 px-4 ms-2 rounded">
          Add
        </button>
      </div>

      <ul className="">
        <li>
          <span></span>
          <button>
          </button>
        </li>
      </ul>
    </div>
  );
}
