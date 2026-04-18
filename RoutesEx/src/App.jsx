import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Section01 from "./Components/Section01";
import Section02 from "./Components/Section02";
import Section03 from "./Components/Section03";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <h1 style={{ textAlign: "center" }}>
          Hello! This is my Home Heading...
        </h1>
        <Header />
        <Navbar /> <br />
        <div style={{ backgroundColor: "lightgray" }}>
          <Routes>
            <Route path="/" element={<Section01 />} />
            <Route path="/Sec-1" element={<Section01 />} />
            <Route path="/Sec-2" element={<Section02 />} />
            <Route path="/Sec-3" element={<Section03 />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
