import { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Experience from "./Pages/Experience";
import Services from "./Pages/Services";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [likeCount, setLikeCount] = useState(0);

  return (
    <>
      <Header likeCount={likeCount} />
      <Routes>
        <Route
          path="/"
          element={<Home onLike={() => setLikeCount((prev) => prev + 1)} />}
        />
        <Route path="/experience" element={<Experience />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
