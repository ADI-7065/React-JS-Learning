import React from "react";

export default function Profile(props) {
  return (
    <span className="bg-primary text-light p-3 rounded pe-auto">
      Welcome: {props.data.name}, Age: {props.data.age}
    </span>
  );
}
