import { createContext, useState, useContext, useEffect } from "react";

const themeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [toggleTheme, setToggleTheme] = useState("light"); // Default theme

  // Function to set theme based on system preference
  const setThemeBasedOnSystemPreference = () => {
    const prefersDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    setToggleTheme(prefersDarkMode ? "dark" : "light");
  };

  // Set theme based on system preference on mount
  useEffect(() => {
    setThemeBasedOnSystemPreference();
  }, []);

  return <themeContext.Provider value={{ toggleTheme, setToggleTheme }}>{children}</themeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(themeContext);

  if (!context) {
    throw new Error("Must be used within a DataProvider");
  }
  return context;
};
