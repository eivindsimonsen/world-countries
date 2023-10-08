import { Link } from "react-router-dom";

function Details() {
  return (
    <main className="container">
      <Link
        to="/"
        className="cta">
        <i className="fa-solid fa-arrow-left"></i>Back
      </Link>
    </main>
  );
}
export default Details;
