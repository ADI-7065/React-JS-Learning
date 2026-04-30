import { createContext } from "react";

export const dark = {
  header: {
    backgroundColor: "#010638",
    color: "#ffffff",
  },
  //   nav: {
  //     backgroundColor: "#4886ac",
  //     color: "#ffffff",
  //   },
  // hero:{
  //     backgroundColor: '#ffffff',
  //     color: '#222222'
  // },
  //   footer: {
  //     backgroundColor: "#242424",
  //     color: "#ffffff",
  //   },
};
export const light = {
  header: {
    backgroundColor: "#051b7d",
    color: "#191919",
  },
  //   nav: {
  //     backgroundColor: "#07344f",
  //     color: "#d9d9d9",
  //   },
  // hero:{
  //     backgroundColor: '#067d35',
  //     color: '#d1d1d1'
  // },
  //   footer: {
  //     backgroundColor: "#6a6a6a",
  //     color: "#ffffff",
  //   },
};

const ThemeContext = createContext([false, () => {}]);

export default ThemeContext;
