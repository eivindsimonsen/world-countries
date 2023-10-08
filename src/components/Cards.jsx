// import { useDataHandler } from "../context/handleDataContext";

import { Link } from "react-router-dom";

function Card() {
  // const { filterCategory, searchValue } = useDataHandler();

  return (
    <section className="card-container">
      <Link
        to="details/23"
        className="card ">
        <img
          src="https://flagcdn.com/w320/no.png"
          alt="test"
        />
        <h2>Norway</h2>
        <div className="card-facts">
          <p>
            <span>Population:</span> 5,000,000
          </p>
          <p>
            <span>Region:</span> Europe
          </p>
          <p>
            <span>Capital:</span> Oslo
          </p>
        </div>
      </Link>
    </section>
  );
}
export default Card;
