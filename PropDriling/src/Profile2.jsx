import React from "react";
import { useContext } from "react";
import { DataContext } from "./App.jsx";

export default function Profile2() {
  const stu = useContext(DataContext);
  return (
    <span className="bg-primary text-light p-3 rounded pe-auto">
      Welcome: {stu.name}, RollNo: {stu.roll }
    </span>
  );
}
