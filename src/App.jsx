import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Navigation from "./components/Navigation";
import Searchbar from "./components/Searchbar";
import "./sass/style.scss";

function App() {
  return (
    <main>
      <Navigation />
      <Searchbar />
      <Filter />
      <Cards />
    </main>
  );
}

export default App;
