// import { useDataHandler } from "../context/handleDataContext";
import { useTheme } from "../context/handleThemeContext";
import { Link } from "react-router-dom";

function Card() {
  // const { filterCategory, searchValue } = useDataHandler();
  const { toggleTheme } = useTheme();

  return (
    <section className="card-container">
      <Link
        to="details/23"
        className={"card " + (toggleTheme ? "darkMode" : "")}>
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
      <div className={"card " + (toggleTheme ? "darkMode" : "")}>
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
      </div>
      <div className={"card " + (toggleTheme ? "darkMode" : "")}>
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
      </div>
      <div className={"card " + (toggleTheme ? "darkMode" : "")}>
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
      </div>
    </section>
  );
}
export default Card;
