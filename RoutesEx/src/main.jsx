import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
//browserRouter is used to enable routing in the app and it is a wrraper component wraps the App component to provide routing capabilities.

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <App />
  </StrictMode>
);
