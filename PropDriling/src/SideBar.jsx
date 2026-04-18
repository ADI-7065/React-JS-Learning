import React from "react";
import Profile from "./Profile.jsx";
import Profile2 from "./Profile2.jsx";

export default function Slidebar(props) {
  return (
    <div className="bg-secondary p-4 mx-4">
      <a className="text-decoration-none text-light  mx-2 " href="">
        Home
      </a>
      <Profile data={props.data} />
      <Profile2 />
    </div>
  );
}
