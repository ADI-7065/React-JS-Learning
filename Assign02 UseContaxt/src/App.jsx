import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Collage from "./Components/Collage";
import School from "./Components/School";
import Skills from "./Components/Skills";
import { DataContext } from "./ImgContext";
import { ThemeContext } from "./ThemeContext";
import pic from "./assets/img1.jpg";

const App = () => {
  const [theme, setTheme] = useState(true);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
      <Navbar />
      <DataContext.Provider value={{ img: pic }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/school" element={<School />} />
          <Route path="/collage" element={<Collage />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </DataContext.Provider>
      <Footer />
    </ThemeContext.Provider>
  );
};

export default App;
