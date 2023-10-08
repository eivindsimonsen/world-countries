import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// npm package which formats numbers
import iso from "iso-3166-1";

function Details() {
  const { numericCode } = useParams();
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!numericCode) {
          // Handle the case where numericCode is undefined
          console.error("Numeric code is undefined");
          return;
        }

        const response = await fetch(`../../data/data.json`);
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }

        const jsonData = await response.json();
        const country = jsonData.find((c) => c.numericCode === numericCode);

        if (!country) {
          throw new Error(`Country with numericCode ${numericCode} not found`);
        }

        setCountryData(country);
      } catch (error) {
        console.error("Error fetching or parsing data:", error);
      }
    };

    fetchData();
  }, [numericCode]);

  if (!countryData) {
    return <h2 style={{ color: "white", whiteSpace: "nowrap" }}>Loading...</h2>;
  }

  return (
    <main className="container">
      <Link
        to="/"
        className="cta">
        <i className="fa-solid fa-arrow-left"></i>Back
      </Link>
      <article>
        <img
          src={countryData.flag}
          alt={countryData.name}
        />
        <section className="details">
          <h2>{countryData.name}</h2>
          <section className="details-first-block">
            <div>
              <p>
                <span>Native Name: </span> {countryData.nativeName}
              </p>
              <p>
                <span>Population: </span> {countryData.population}
              </p>
              <p>
                <span>Region: </span> {countryData.region}
              </p>
              <p>
                <span>Sub Region: </span> {countryData.subregion}
              </p>
              <p>
                <span>Capital: </span> {countryData.capital}
              </p>
            </div>
            <div>
              <p>
                <span>Top Level Domain: </span>
                {countryData.topLevelDomain}
              </p>
              <p>
                <span>Currencies: </span>
                {countryData.currencies[0].name}
              </p>
              <p>
                <span>Languages: </span>
                {countryData.languages[0].nativeName}
              </p>
            </div>
          </section>
          <section className="details-second-block">
            <p>
              <span>Border Countries: </span>
            </p>
            <div className="details-second-block-borders">
              {countryData.borders ? (
                countryData.borders?.map((borderCode, index) => (
                  <span
                    key={index}
                    className="border-countries">
                    {iso.whereAlpha3(`${borderCode}`)?.country || borderCode}
                  </span>
                ))
              ) : (
                <span>None</span>
              )}
            </div>
          </section>
        </section>
      </article>
    </main>
  );
}
export default Details;
