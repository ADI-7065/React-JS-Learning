import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/Sec-1"><button className="btn btn-danger">Section-01</button></Link>{" "}
      <Link to="/Sec-2"><button className="btn btn-warning">Section-02</button></Link>{" "}
      <Link to="/Sec-3"><button className="btn btn-success">Section-03</button></Link>
    </nav>
  );
};

export default Navbar;
