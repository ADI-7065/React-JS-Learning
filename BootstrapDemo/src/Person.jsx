import React from "react";

const Person = (props) => {
  return (
    <div className="bg-secondary p-3 text-white">
      <img height="250px" src={props.img} alt="Person" />
      <p>name: {props.name}</p>
      <p>age: {props.age}</p>
    </div>
  );
};

export default Person;
