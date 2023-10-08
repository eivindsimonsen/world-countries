import { useDataHandler } from "../../context/handleDataContext";

function Searchbar() {
  const { searchValue, setSearchValue } = useDataHandler();

  const getValue = (e) => {
    setSearchValue(e.target.value);
  };

  const removeValue = () => {
    setSearchValue("");
  };

  return (
    <div className="searchbar ">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        name="searchbar"
        placeholder="Search for a country..."
        onChange={getValue}
        value={searchValue}
      />
      <i
        onClick={removeValue}
        style={{ cursor: "pointer" }}
        className="fa-solid fa-x"></i>
    </div>
  );
}
export default Searchbar;
