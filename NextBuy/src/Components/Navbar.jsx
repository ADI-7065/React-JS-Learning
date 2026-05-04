import { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext, { dark, light } from "../Hooks/ThemeContext";

const Navbar = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <nav
      className="w-full bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm"
      style={theme ? dark.nav : light.nav}
    >
      <div
        className="max-w-7xl
        mx-auto flex items-center justify-end py-4"
      >
        <div className="flex items-center gap-5 text-sm font-medium">
          <Link to="/" className="light:text-gray-700 hover:text-blue-600">
            Home
          </Link>

          <Link
            to="/orders"
            className="relative light:text-gray-700 hover:text-blue-600"
          >
            <i className="fa-solid fa-cart-shopping text-lg"></i>
          </Link>

          <Link
            to="/login"
            className="light:text-gray-700 hover:text-blue-600 "
          >
            <i className="fa-solid fa-right-to-bracket mr-1"></i>
            Login
          </Link>

          <Link
            to="/logout"
            className="light:text-gray-700 hover:text-red-500 "
          >
            <i className="fa-solid fa-arrow-right-from-bracket mr-1"></i>
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
