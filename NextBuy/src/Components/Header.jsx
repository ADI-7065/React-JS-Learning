import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import ThemeContext, { dark, light } from "../Hooks/ThemeContext";
import "../App.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const [searchFocused, setSearchFocused] = useState(false);
  const items = useSelector((state) => state.cart.items);
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header
      className="w-full sticky top-0 z-50 transition-all duration-300"
      style={theme ? dark.header : light.header}
    >
      <div className="mx-auto max-w-7xl px-2 py-3 flex items-center justify-between gap-6">
        {/* ── Logo ── */}
        <Link
          to="/"
          className="flex items-center gap-2.5 cursor-pointer shrink-0 select-none"
        >
          <div className="w-9 h-9 flex items-center justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3081/3081648.png"
              alt="logo"
              className="h-10"
            />
          </div>
          <h1
            className="logo-font text-xl font-bold tracking-tight"
            style={{ color: theme ? "#f1f5f9" : "#0f172a" }}
          >
            Next<span className="text-blue-500">BUY</span>
          </h1>
        </Link>

        {/* ── Search ── */}
        <div
          className={`flex items-center flex-1 max-w-lg rounded-xl border transition-all duration-200 overflow-hidden ${
            searchFocused
              ? "border-blue-500 shadow-[0_0_0_3px_rgba(59,130,246,0.15)]"
              : theme
                ? "border-white/10 bg-white/5"
                : "border-gray-200 bg-gray-50"
          }`}
        >
          <span className="pl-3.5 pr-2 text-gray-400">
            <i className="fa-solid fa-magnifying-glass text-sm"></i>
          </span>
          <input
            type="search"
            placeholder="Search products, brands, categories..."
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            className={`w-full py-2.5 pr-4 text-sm bg-transparent outline-none placeholder-gray-400 ${
              theme ? "text-gray-100" : "text-gray-700"
            }`}
          />
          <button className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors cursor-pointer duration-150 shrink-0">
            Search
          </button>
        </div>

        {/* ── Right actions ── */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Cart */}
          <Link
            to="/orders"
            className={`relative p-2.5 rounded-xl transition-colors duration-150 cursor-pointer ${
              theme
                ? "hover:bg-white/10 text-gray-300"
                : "hover:bg-gray-100 text-gray-600"
            }`}
          >
            <i className="fa-solid fa-cart-shopping text-lg"></i>
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 min-w-[1.1rem] px-1 bg-blue-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center leading-none">
                {cartCount}
              </span>
            )}
          </Link>

          {/* User */}
          <button
            className={`p-2.5 rounded-xl transition-colors duration-150 cursor-pointer ${
              theme
                ? "hover:bg-white/10 text-gray-300"
                : "hover:bg-gray-100 text-gray-600"
            }`}
          >
            <i className="fa-regular fa-circle-user text-lg"></i>
          </button>

          {/* Theme toggle */}
          <button
            onClick={() => setTheme(!theme)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
              theme
                ? "bg-white/10 hover:bg-white/15 text-gray-200 border border-white/10"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200"
            }`}
          >
            <i
              className={`fa-solid ${theme ? "fa-sun" : "fa-moon"} text-xs`}
            ></i>
            <span className="hidden sm:inline">{theme ? "Light" : "Dark"}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
