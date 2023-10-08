import { useDataHandler } from "../../context/handleDataContext";
import { useState } from "react";

function Region() {
  const [active, setActive] = useState(false);
  const { filterCategory, setFilterCategory } = useDataHandler();

  const toggleList = () => {
    setActive(!active);
  };

  const setRegion = (event) => {
    setFilterCategory(event.target.innerText);
  };

  const resetRegion = () => {
    setFilterCategory("");
  };

  return (
    <div className="region">
      <button
        onClick={toggleList}
        className="region-btn ">
        {filterCategory === "" ? "Filter by Region" : filterCategory}
        <i className="fa-solid fa-chevron-down"></i>
      </button>
      <ul className={"region-list " + (active ? "active " : "")}>
        <li onClick={resetRegion}>All Regions</li>
        <li onClick={setRegion}>Africa</li>
        <li onClick={setRegion}>Americas</li>
        <li onClick={setRegion}>Asia</li>
        <li onClick={setRegion}>Europe</li>
        <li onClick={setRegion}>Oceania</li>
      </ul>
    </div>
  );
}
export default Region;
