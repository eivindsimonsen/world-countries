import { useDataHandler } from "../../context/handleDataContext";
import { useTheme } from "../../context/handleThemeContext";

function Searchbar() {
  const { setSearchValue } = useDataHandler();
  const { toggleTheme } = useTheme();

  const getValue = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={"searchbar " + (toggleTheme ? "darkMode" : "")}>
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        name="searchbar"
        placeholder="Search for a country..."
        onChange={getValue}
        className={toggleTheme ? "darkMode" : ""}
      />
    </div>
  );
}
export default Searchbar;
