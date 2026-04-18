import React from "react";
import { useContext } from "react";
import { dark, light, ThemeContext } from "../ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer className={`foot p-4 ${theme[0]} text-center py-4 `} style={theme? dark.foot : light.foot}>
      <hr />
      <h2 className="fw-bold" style={theme? dark.heading : light.heading}>Aditya's Portfolio...!</h2>

      <p className="mb-2" style={theme? dark.heading : light.heading}>
        This is my personal portfolio website where I showcase my projects,
        education, and technical skills in Web Development.
      </p>
      <p style={theme? dark.heading : light.heading}>
        Here is my Profile Links: &nbsp;&nbsp;
        <a
          href="https://github.com/"
          className="btn btn-outline-light btn-sm me-2"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/"
          className="btn btn-outline-light btn-sm"
        >
          LinkedIn
        </a>
      </p>
      <hr
        className="border-secondary opacity-25 mx-auto"
      />

      <small className="opacity-50" style={theme? dark.heading : light.heading}>
        &copy; 2026 Aditya Kumar. All rights reserved.
      </small>
    </footer>
  );
};

export default Footer;
