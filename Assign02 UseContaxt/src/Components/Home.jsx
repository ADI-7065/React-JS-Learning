import { useContext } from "react";
import { dark, light, ThemeContext } from "../ThemeContext";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`position-relative text-center p-4`} style={theme? dark.hero : light.hero}>
      <h1 className="fw-bold mb-3">
        Hi, I'm Aditya Kumar —— <br />a Full Stack Developer
      </h1>
      <h4 className="fw-bold text-primary">Welcome to My Portfolio</h4>
      <p>
        Hello! My name is <b>Aditya Kumar</b>. I am a Computer Science student
        and an aspiring Full Stack Developer with interest in Web Development,
        DevOps, and AI.
      </p>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/_83lS5rKrOw?si=e_3epLVagWUdC5dB"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <p>
        This portfolio showcases my education, technical skills, and projects
        that I have worked on during my academic journey. Feel free to explore
        different sections like School, College, and Skills to learn more about
        me.
      </p>

      <Link to="/skills" className="btn btn-primary">
        Explore My Skills
      </Link>
    </div>
  );
};

export default Home;
