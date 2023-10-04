import "./sass/style.scss";
import Cards from "./components/Cards";
import Navigation from "./components/Navigation";
import Filtering from "./components/filtering/Filtering";
import { DataProvider } from "./context/handleDataContext";

function App() {
  return (
    <DataProvider>
      <main>
        <Navigation />
        <Filtering />
        <Cards />
      </main>
    </DataProvider>
  );
}

export default App;
