import "./sass/style.scss";
import Index from "./components/Index";
import Navigation from "./components/Navigation";
import Details from "./components/Details";
import { useTheme } from "./context/handleThemeContext";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const { toggleTheme } = useTheme();

  useEffect(() => {
    // Access the body element
    const body = document.body;

    // Toggle the theme based on the state
    if (toggleTheme === "dark") {
      body.classList.add("darkMode");
    } else {
      body.classList.remove("darkMode");
    }
  }, [toggleTheme]);

  return (
    <div data-theme={toggleTheme}>
      <header>
        <Navigation />
      </header>
      <Routes>
        <Route
          path="/"
          element={<Index />}
        />
        <Route
          path="/details/:alpha3Code"
          element={<Details />}
        />
      </Routes>
    </div>
  );
}
export default App;
