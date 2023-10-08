import { useDataHandler } from "../../context/handleDataContext";

function Searchbar() {
  const { setSearchValue } = useDataHandler();

  const getValue = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="searchbar ">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        name="searchbar"
        placeholder="Search for a country..."
        onChange={getValue}
      />
    </div>
  );
}
export default Searchbar;
