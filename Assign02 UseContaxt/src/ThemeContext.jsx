import { createContext } from "react";

export const ThemeContext = createContext();

export const dark = {
  header: {
    backgroundColor: "#011d3f",
    color: "#ffffff",
  },
  hero: {
    backgroundColor: "#011d3f",
    color: "#ffffff",
  },
  nav: {
    backgroundColor: "#41017e",
  },
  foot: {
    backgroundColor: "#41017e",
  },
  heading: {
    color: "#ffffff",
  },
  link: {
    color: "#ffffff",
  },
};

export const light = {
  header: {
    backgroundColor: "#9ecbf79a",
    color: "#000000",
  },
  nav: {
    backgroundColor: "#639edabe",
  },
  hero: {
    backgroundColor: "#9ecbf79a",
    color: "#000000",
  },
  foot: {
    backgroundColor: "#639edabe",
  },
  h1: {
    color: "#000000",
  },
  link: {
    color: "#000000",
  },
};
