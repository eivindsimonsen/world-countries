import { useDataHandler } from "../context/handleDataContext";

function Card() {
  const { filterCategory, searchValue } = useDataHandler();

  return (
    <section className="cards">
      {filterCategory} | {searchValue}
    </section>
  );
}
export default Card;
