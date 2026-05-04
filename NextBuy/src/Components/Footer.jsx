import { useContext } from "react";
import ThemeContext, { dark, light } from "../Hooks/ThemeContext";

const Footer = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  return (
    <footer>
      <div
        className=" w-full py-4 text-center bg-gray-800 text-gray-200"
        style={theme ? dark.footer : light.footer}
      >
        <p>&copy; 2026 NextBUY. All rights reserved.</p>
        <p>made with ❤️ by Aditya Kuamr</p>
      </div>
    </footer>
  );
};

export default Footer;
