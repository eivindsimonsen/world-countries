import "./sass/style.scss";
import Cards from "./components/Cards";
import Navigation from "./components/Navigation";
import Filtering from "./components/filtering/Filtering";
import { DataProvider } from "./context/handleDataContext";

function App() {
  return (
    <DataProvider>
      <header>
        <Navigation />
      </header>
      <main className="container">
        <Filtering />
        <Cards />
      </main>
    </DataProvider>
  );
}

export default App;
