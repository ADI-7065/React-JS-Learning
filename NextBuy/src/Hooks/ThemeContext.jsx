import { createContext } from "react";

// 🌙 DARK THEME
export const dark = {
  header: {
    backgroundColor: "#0f172a", // slate-900
    color: "#f1f5f9",
  },
  nav: {
    backgroundColor: "#1e293b", // slate-800
    color: "#e2e8f0",
  },
  home: {
    backgroundColor: "#020617", // dark bg
    color: "#f8fafc",
  },
  card: {
    backgroundColor: "#1e293b",
    color: "#f1f5f9",
  },
  footer: {
    backgroundColor: "#020617",
    color: "#cbd5f5",
  },
};

// ☀️ LIGHT THEME
export const light = {
  header: {
    backgroundColor: "#ffffff",
    color: "#1e293b",
    logo: {
      color: "red",
    },
  },
  nav: {
    backgroundColor: "#f1f5f9",
    color: "#334155",
  },
  home: {
    backgroundColor: "#f8fafc",
    color: "#0f172a",
  },
  card: {
    backgroundColor: "#ffffff",
    color: "#1e293b",
  },
  footer: {
    backgroundColor: "#e2e8f0",
    color: "#1e293b",
  },
};

// 🧠 CONTEXT
const ThemeContext = createContext([false, () => {}]);

export default ThemeContext;
