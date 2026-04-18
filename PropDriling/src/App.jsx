import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./navbar.jsx";
import { createContext } from "react";

export const DataContext = createContext();

const App = () => {
  const stu = {
    name: "Sheer Pal",
    roll: 1916,
  };

  const user = {
    name: "Cheeta Pal",
    age: 36,
  };

  return (
    <>
      <DataContext.Provider value={stu}>
        <Navbar data={user} />
      </DataContext.Provider>

      <div className="bg-light p-3">
        <h1>This is Prop-Drilling example</h1>
      </div>
    </>
  );
};

export default App;
