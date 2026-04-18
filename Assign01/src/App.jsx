import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Collage from "./Components/Collage";
import School from "./Components/School";
import Skills from "./Components/Skills";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header/> <br />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/school" element={<School />} />
        <Route path="/collage" element={<Collage />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
