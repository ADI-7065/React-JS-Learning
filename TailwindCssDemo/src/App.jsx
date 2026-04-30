import React from "react";
import "./App.css";
import Comp from "./Comp";
const App = () => {
  return (
    <>
      <section>
        <h1 className="bg-blue-800 p-10 text-white text-3xl font-bold underline">
          Welcome to Tailwind CSS Project
        </h1>
        <button className="bg-sky-700 border-0 p-2 m-2 text-white font-bold rounded-4xl hover:bg-sky-600 cursor-pointer">
          Incapp
        </button>
      </section>
      <Comp/>
    </>
  );
};

export default App;
