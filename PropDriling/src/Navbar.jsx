import React from "react";
import Slidebar from "./SideBar.jsx";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-dark bg-danger">
      <img
        className="float-start "
        src="https://images.icon-icons.com/1428/PNG/128/carredicon_98534.png"
        alt="logo"
      />
      <div className="float-end">
        <Slidebar data={props.data} />
      </div>
    </nav>
  );
}
