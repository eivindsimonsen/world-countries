import { useState, useEffect } from "react";
import { useDataHandler } from "../context/handleDataContext";
import { Link } from "react-router-dom";

function Card() {
  const { filterCategory, searchValue } = useDataHandler();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../../data/data.json");
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }

        const jsonData = await response.json();

        // Apply filters based on searchValue and filterCategory
        const filteredData = jsonData.filter((country) => {
          const nameMatches = searchValue ? country.name.toLowerCase().includes(searchValue.toLowerCase()) : true;
          const regionMatches = filterCategory ? country.region.toLowerCase() === filterCategory.toLowerCase() : true;

          return nameMatches && regionMatches;
        });

        setData(filteredData);
      } catch (error) {
        console.error("Error fetching or parsing data:", error);
      }
    };

    fetchData();
  }, [searchValue, filterCategory]);

  if (data === null) {
    return <h2 style={{ color: "white", whiteSpace: "nowrap" }}>Loading...</h2>;
  }

  return (
    <section className="card-container">
      {data?.length > 0 ? (
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
        ))
      ) : (
        <h2 style={{ color: "white", whiteSpace: "nowrap" }}>Country does not exist in this region</h2>
      )}
    </section>
  );
}
export default Card;
