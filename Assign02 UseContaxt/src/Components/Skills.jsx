import React from "react";
import { useContext } from "react";
import { dark, light, ThemeContext } from "../ThemeContext";

const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`p-4`} style={theme? dark.hero : light.hero}>
      <h2 className="px-4 text-warning fw-bold">Technical Skills</h2>

      <p className="px-4">
        Below are some of the technologies and tools that I use for building
        modern web applications.
      </p>

      <ul className="px-5">
        <li>
          <strong>Java</strong> – Used for object-oriented programming, backend
          logic development, and solving algorithmic problems.
        </li>

        <li>
          <strong>Web Development</strong> – Experience in building responsive
          websites using HTML, CSS, and modern frontend technologies.
        </li>

        <li>
          <strong>JavaScript</strong> – Used for creating dynamic and
          interactive features in web applications.
        </li>

        <li>
          <strong>React</strong> – Frontend JavaScript library used to create
          reusable UI components and modern single-page applications.
        </li>

        <li>
          <strong>Node.js</strong> – Backend runtime environment used to build
          scalable server-side APIs and web services.
        </li>
      </ul>
    </section>
  );
};

export default Skills;
