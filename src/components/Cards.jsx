import { useState, useEffect } from "react";
import { useDataHandler } from "../context/handleDataContext";
import { Link } from "react-router-dom";

function Card() {
  const { filterCategory, searchValue } = useDataHandler();
  const [data, setData] = useState(null);
  console.log(filterCategory);
  console.log(searchValue);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../../data/data.json");
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching or parsing data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="card-container">
      {data &&
        data.map((country, index) => (
          <Link
            to={`details/${country.numericCode}`}
            className="card "
            key={index}>
            <img
              src={country.flags.png}
              alt="test"
            />
            <h2>{country.name}</h2>
            <div className="card-facts">
              <p>
                <span>Population:</span> {country.population.toLocaleString()}
              </p>
              <p>
                <span>Region:</span> {country.region}
              </p>
              <p>
                <span>Capital:</span> {country.capital}
              </p>
            </div>
          </Link>
        ))}
    </section>
  );
}
export default Card;
