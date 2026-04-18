import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <h2 className="fw-bold">Aditya's Portfolio...!</h2>

      <p className="mb-2">
        This is my personal portfolio website where I showcase my projects,
        education, and technical skills in Web Development.
      </p>
      <a
        href="https://github.com/"
        className="btn btn-outline-light btn-sm me-2"
      >
        GitHub
      </a>

      <a href="https://linkedin.com/" className="btn btn-outline-light btn-sm">
        LinkedIn
      </a>
    </footer>
  );
};

export default Footer;
