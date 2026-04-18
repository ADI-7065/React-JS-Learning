import { useContext } from "react";
import { ThemeContext, dark, light } from "../ThemeContext";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header className="py-4 px-5" style={theme ? dark.header : light.header}>
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="fw-bold">Aditya Kumar</h1>

        <div>
          <button className={`btn me-1 ${theme ? 'btn-light' : 'btn-dark'}`} onClick={() => {setTheme(!theme);}}>{theme?"☀️":"🌙"}</button>
          {/* <button className="btn btn-light me-1" onClick={() => {setTheme(false);}}>🌙</button>
          <button className="btn btn-secondary me-2" onClick={() => {setTheme(true);}}>☀️</button> */}
        </div>
      </div>

      <hr />

      <p className="mb-1">Full Stack Developer</p>

      <span className="mb-1 pe-4">
        <b>Phone:</b>{" "}
        <a href="tel:+9193735734XX" className="text-decoration-none">+91 93735734XX</a>
      </span>

      <span className="mb-1">
        <b>Email:</b>{" "}
        <a href="mailto:Adityamay0101@gmail.com" className="text-decoration-none">Adityamay0101@gmail.com</a>
      </span>

      <h5>
        I'm into Java Development, Full Stack Development, Backend Development,
        and AI Technologies and passionate about learning new things.
      </h5>
    </header>
  );
};

export default Header;
