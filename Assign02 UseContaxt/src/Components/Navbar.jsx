import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext, light, dark } from "../ThemeContext";
import "../App.css";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <nav
      className={"px-5 py-4 d-flex justify-content-between align-items-center"}
      style={theme ? dark.nav : light.nav}
    >
      <h1 className="h4 m-0" style={theme ? dark.heading : light.heading}>
        My Portfolio
      </h1>

      <div>
        <Link
          to="/"
          className="btn btn-outline-primary btn-sm me-2"
          style={theme ? dark.link : light.link}
        >
          Home
        </Link>
        <Link
          to="/school"
          className="btn btn-outline-primary btn-sm me-2"
          style={theme ? dark.link : light.link}
        >
          School
        </Link>
        <Link
          to="/collage"
          className="btn btn-outline-primary btn-sm me-2"
          style={theme ? dark.link : light.link}
        >
          College
        </Link>
        <Link
          to="/skills"
          className="btn btn-outline-primary btn-sm"
          style={theme ? dark.link : light.link}
        >
          Skills
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
