import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Person from "./Person.jsx";
import p1 from "./assets/pp.jpg";
import p2 from "./assets/pp2.jpg";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Person name="Aditya Kumar" age={21} img={p1} />
    <Person name="Addy" age={18} img={p2} />
  </StrictMode>,
);
