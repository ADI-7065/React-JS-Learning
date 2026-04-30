import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import ThemeContext from "./Hooks/ThemeContext";

const Root = () => {
  const themeState = useState(false);

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={themeState}>
        <App />
      </ThemeContext.Provider>
    </BrowserRouter>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
