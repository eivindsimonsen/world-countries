import { useTheme } from "../context/handleThemeContext";
import { Link } from "react-router-dom";

function Navigation() {
  const { toggleTheme, setToggleTheme } = useTheme();

  return (
    <nav className={toggleTheme ? "darkMode" : ""}>
      <div className="container nav-items">
        <Link to="/">
          <h1 className={toggleTheme ? "darkMode" : ""}>Where in the world?</h1>
        </Link>
        <button
          onClick={() => setToggleTheme(!toggleTheme)}
          className={"theme-toggler" + (toggleTheme ? " darkMode" : "")}>
          <i className={toggleTheme ? "fa-solid fa-moon" : "fa-regular fa-moon"}></i>
          {toggleTheme ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
}
export default Navigation;
