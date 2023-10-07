import { useDataHandler } from "../../context/handleDataContext";
import { useTheme } from "../../context/handleThemeContext";
import { useState } from "react";

function Region() {
  const [active, setActive] = useState(false);
  const { setFilterCategory } = useDataHandler();
  const { toggleTheme } = useTheme();

  const toggleList = () => {
    setActive(!active);
  };

  const setRegion = (event) => {
    setFilterCategory(event.target.innerText);
  };

  return (
    <div className="region">
      <button
        onClick={toggleList}
        className={"region-btn " + (toggleTheme ? "darkMode" : "")}>
        Filter by Region
        <i className="fa-solid fa-chevron-down"></i>
      </button>
      <ul className={"region-list " + (active ? "active " : "") + (toggleTheme ? "darkMode" : "")}>
        <li
          className={toggleTheme ? "darkMode" : ""}
          onClick={setRegion}>
          Africa
        </li>
        <li
          className={toggleTheme ? "darkMode" : ""}
          onClick={setRegion}>
          America
        </li>
        <li
          className={toggleTheme ? "darkMode" : ""}
          onClick={setRegion}>
          Asia
        </li>
        <li
          className={toggleTheme ? "darkMode" : ""}
          onClick={setRegion}>
          Europe
        </li>
        <li
          className={toggleTheme ? "darkMode" : ""}
          onClick={setRegion}>
          Oceania
        </li>
      </ul>
    </div>
  );
}
export default Region;
