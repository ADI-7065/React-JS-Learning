import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import Comp01 from "./comps/Comp01.jsx";
import Person from "./comps/Person.jsx";
import Comp02 from "./comps/Comp02.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Comp01 />
    <Person />
    <Comp02 />
  </StrictMode>,
);
