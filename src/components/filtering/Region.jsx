import { useDataHandler } from "../../context/handleDataContext";
import { useState } from "react";

function Region() {
  const { setFilterCategory } = useDataHandler();
  const [active, setActive] = useState(false);

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
        className="region-btn">
        Filter by Region
        <i className="fa-solid fa-chevron-down"></i>
      </button>
      <ul className={"region-list " + (active ? "active" : "")}>
        <li onClick={setRegion}>Africa</li>
        <li onClick={setRegion}>America</li>
        <li onClick={setRegion}>Asia</li>
        <li onClick={setRegion}>Europe</li>
        <li onClick={setRegion}>Oceania</li>
      </ul>
    </div>
  );
}
export default Region;
