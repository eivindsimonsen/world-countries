import { Link } from "react-router-dom";

function Details() {
  return (
    <main className="container">
      <Link
        to="/"
        className="cta">
        <i className="fa-solid fa-arrow-left"></i>Back
      </Link>
      <article>
        <img
          src="https://flagcdn.com/no.svg"
          alt=""
        />
        <section className="details">
          <h2>Norway</h2>
          <section className="details-first-block">
            <div>
              <p>
                <span>Native Name: </span> Norway
              </p>
              <p>
                <span>Population: </span> 5.000.000
              </p>
              <p>
                <span>Region: </span> Europe
              </p>
              <p>
                <span>Sub Region: </span> Western Europe
              </p>
              <p>
                <span>Capital: </span> Oslo
              </p>
            </div>
            <div>
              <p>
                <span>Top Level Domain: </span>.no
              </p>
              <p>
                <span>Currencies: </span>Nok
              </p>
              <p>
                <span>Languages: </span>Norwegian
              </p>
            </div>
          </section>
          <section className="details-second-block">
            <p>
              <span>Border Countries</span>
              <span className="border-countries">Sweden</span>
              <span className="border-countries">Finland</span>
              <span className="border-countries">Russia</span>
            </p>
          </section>
        </section>
      </article>
    </main>
  );
}
export default Details;
