import { useDataHandler } from "../context/handleDataContext";

function Card() {
  const { filterCategory } = useDataHandler();

  return <section className="cards">{filterCategory}</section>;
}
export default Card;
