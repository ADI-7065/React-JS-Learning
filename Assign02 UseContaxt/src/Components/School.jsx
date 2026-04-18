import { useContext } from "react";
import { DataContext } from "../ImgContext";
import { dark, light, ThemeContext } from "../ThemeContext";

const School = () => {
  const { img } = useContext(DataContext);
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`p-4  ${theme[0]} d-flex align-items-center`} style={theme? dark.hero : light.hero}>
      <img
        src={img}
        alt="School"
        className=" mb-3"
        style={{ height: "280px" }}
      />

      <div className="px-4">
        <h2 className="text-primary fw-bold">School</h2>
        <p>
          This section provides information about my school education and early
          academic background.
        </p>

        <p>
          I completed my schooling from <strong>XYZ Public School</strong>,
          where I studied subjects such as Mathematics, Science, and Computer
          Studies. During my school years, I developed a strong interest in
          technology and problem solving.
        </p>
        <ul>
          <li>
            I got 85% in my <b>10th</b> grade.
          </li>
          <li>
            I got 85% in my <b>12th</b> grade.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default School;
