import { createContext, useState, useContext } from "react";

const themeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [toggleTheme, setToggleTheme] = useState(false);

  return <themeContext.Provider value={{ toggleTheme, setToggleTheme }}>{children}</themeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(themeContext);

  if (!context) {
    throw new Error("Must be used within a DataProvider");
  }
  return context;
};
