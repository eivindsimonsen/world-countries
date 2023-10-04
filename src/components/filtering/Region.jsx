// import { useDataHandler } from "../../context/handleDataContext";

function Region() {
  // const { filterCategory, setFilterCategory } = useDataHandler();
  return (
    <div className="region">
      <button className="region-btn">
        Filter by Region
        <i className="fa-solid fa-chevron-down"></i>
      </button>
      <ul className="region-list">
        <li>Africa</li>
        <li>America</li>
        <li>Asia</li>
        <li>Europe</li>
        <li>Oceania</li>
      </ul>
    </div>
  );
}
export default Region;
