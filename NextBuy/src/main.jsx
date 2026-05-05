import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import ThemeContext from "./Hooks/ThemeContext";
import { Provider } from "react-redux";
import store from "./Stores/Store";

const Root = () => {
  const themeState = useState(false);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeContext.Provider value={themeState}>
          <App />
        </ThemeContext.Provider>
      </BrowserRouter>
    </Provider>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
