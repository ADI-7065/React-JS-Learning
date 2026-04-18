import React from "react";
import { useContext } from "react";
import { DataContext } from "../ImgContext";
import { dark, light, ThemeContext } from "../ThemeContext";

const Collage = () => {
  const { img } = useContext(DataContext);
  const { theme } = useContext(ThemeContext);
  return (
    <section className={`p-4  ${theme[0]} d-flex align-items-center`} style={theme? dark.hero : light.hero}>
      <img
        src={img}
        alt=""
        style={{
          height: "280px",
          objectFit: "cover",
        }}
      />
      <div className="px-4">
        <h2 className="text-success fw-bold">College</h2>
        <p>
          This section describes my higher education and university academic
          journey.
        </p>

        <p>
          I completed my{" "}
          <strong>Integrated B.Tech + M.Tech in Computer Science</strong>
          from <strong>Gautam Buddha University (GBU)</strong>. During my
          university studies, I learned important subjects such as Data
          Structures, Database Management Systems, Web Development, Artificial
          Intelligence, and Cloud Computing.
        </p>
      </div>
    </section>
  );
};

export default Collage;
