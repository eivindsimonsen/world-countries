import "./sass/style.scss";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Navigation from "./components/Navigation";
import Searchbar from "./components/Searchbar";
import { DataProvider } from "./context/handleDataContext";

function App() {
  return (
    <DataProvider>
      <main>
        <Navigation />
        <Searchbar />
        <Filter />
        <Cards />
      </main>
    </DataProvider>
  );
}

export default App;
