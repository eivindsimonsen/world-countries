// import { useDataHandler } from "../../context/handleDataContext";

function Searchbar() {
  // const { searchValue, setSearchValue } = useDataHandler();
  return (
    <div className="searchbar">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        name="searchbar"
        placeholder="Search for a country..."
      />
    </div>
  );
}
export default Searchbar;
