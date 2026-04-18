import { useState } from "react";
import "./App.css";

function App() {
  const [c, setC] = useState(0);

  const [user, setUser] = useState({ name: "Aditya", age: 20 });

  const [items, setItems] = useState(["Utter Pradesh,", " Harayana"]); //for array

  function plus() {
    setC(c + 1);
  }

  return (
    <>
      <h1>State example</h1>
      <p>Counter: {c}</p>
      
      <button onClick={plus}> + </button>{" "}
      <button onClick={() => {
        if(c != 0 ){
          setC(c - 1)
        }
      }}> - </button>
      
      <hr />
{/** -------------------------------------------------------------------- */}
      <p>name: {user.name}</p>
      <p>Age: {user.age}</p>
      
      <button
        onClick={() => {
          setUser({ name: "Adi", age: 21 });
        }}
      >
        Change
      </button>{" "}
      
      <button
        onClick={() => {
          setUser({ ...user, age: 26 });
        }}
      >
        Change
      </button>
      
      <hr />
{/** -------------------------------------------------------------------- */}
      <p>City: {items}</p>
      
      <button
        onClick={() => {
          setItems([...items, ", Delhi"]);
        }}
      >
        Delhi
      </button>{" "}

      <button
        onClick={() => {
          setItems([...items, ", Mumbai"]);
        }}
      >
        Mumbai
      </button>
    </>
  );

  // function minus() {
  //   setC(c - 1);
  // }
}
export default App;
