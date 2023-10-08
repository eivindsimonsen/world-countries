import { useTheme } from "../context/handleThemeContext";
import { Link } from "react-router-dom";

function Navigation() {
  const { toggleTheme, setToggleTheme } = useTheme();

  const toggleThemeMode = () => {
    setToggleTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <nav>
      <div className="container nav-items">
        <Link to="/">
          <h1>Where in the world?</h1>
        </Link>
        <button
          onClick={toggleThemeMode}
          className="theme-toggler">
          <i className={toggleTheme === "dark" ? "fa-solid fa-moon" : "fa-regular fa-moon"}></i>
          {toggleTheme === "dark" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </nav>
  );
}
export default Navigation;
