import { useContext } from "react";
import ThemeContext, { dark, light } from "../Hooks/ThemeContext";
import "../App.css";

const Header = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <header className=" w-full " style={theme ? dark.header : light.header}>
      <div className="mx-auto px-9 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3081/3081648.png"
            alt="logo"
            className="h-15"
          />
          <h1 className="text-xl font-bold tracking-wide text-gray-800 dark:text-white">
            Next<span className="text-blue-600">BUY</span>
          </h1>
        </div>

        <div className="flex ms-15 gap-2 w-full max-w-md">
          <input
            type="search"
            placeholder="Search for products..."
            className="
              w-full pl-10 pr-4 py-2
              rounded-full border border-gray-300
              text-sm text-gray-400
              focus:outline-none focus:ring-2 focus:ring-blue-500
              placeholder-gray-400
              
            "
          />
          <button className="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            <i className="fa-solid fa-magnifying-glass text-gray-400"></i>
          </button>
        </div>

        
        <div>
          <button
            onClick={() => setTheme(!theme)}
            className="px-3 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm cursor-pointer"
          >
            <i className={`fa-solid ${theme ? "fa-sun" : "fa-moon"} mr-1`}></i>
            {theme ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
