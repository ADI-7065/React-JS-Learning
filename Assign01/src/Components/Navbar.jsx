import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-dark text-white p-3 d-flex justify-content-between align-items-center">
      <h1 className="h4 m-0">My Portfolio</h1>

      <div>
        <Link to="/">
          <button className="btn btn-outline-light btn-sm me-2">Home</button>
        </Link>{" "}
        <Link to="/school">
          <button className="btn btn-outline-light btn-sm me-2">School</button>
        </Link>{" "}
        <Link to="/collage">
          <button className="btn btn-outline-light btn-sm me-2">College</button>
        </Link>{" "}
        <Link to="/skills">
          <button className="btn btn-outline-light btn-sm">Skills</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
