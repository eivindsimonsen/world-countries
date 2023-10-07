import { useTheme } from "../context/handleThemeContext";

function Navigation() {
  const { toggleTheme, setToggleTheme } = useTheme();

  return (
    <nav className={toggleTheme ? "darkMode" : ""}>
      <div className="container nav-items">
        <h1 className={toggleTheme ? "darkMode" : ""}>Where in the world?</h1>
        <button
          onClick={() => setToggleTheme(!toggleTheme)}
          className={"theme-toggler" + (toggleTheme ? " darkMode" : "")}>
          <i className={toggleTheme ? "fa-solid fa-moon" : "fa-regular fa-moon"}></i>
          Dark Mode
        </button>
      </div>
    </nav>
  );
}
export default Navigation;
