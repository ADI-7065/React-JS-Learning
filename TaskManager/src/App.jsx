import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  faTrashCan,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    var a = document.getElementById("i").value;
    setTasks([...tasks, a]);
  };
  const deleteTask = (t) => {
    setTasks(tasks.filter((a) => a != t));
  };

  return (
    <div className="bg-light p-5 rounded">
      <h1 className="mb-4 text-center">
        Task Manager <FontAwesomeIcon icon={faClipboardCheck} />
      </h1>
      <div className="d-flex mb-4">
        <input id="i" className="form-control" placeholder="Enter task..." />
        <button
          onClick={() => addTask()}
          className="btn btn-primary py-1 px-4 ms-2 rounded"
        >
          Add
        </button>
      </div>

      <ul>
        {tasks.map((t) => (
          <li className="my-2">
            <span>{t}</span>
            <button
              onClick={() => deleteTask(t)}
              className="btn btn-danger ms-3"
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
