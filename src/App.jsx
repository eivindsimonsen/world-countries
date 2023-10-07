import "./sass/style.scss";
import Cards from "./components/Cards";
import Navigation from "./components/Navigation";
import Filtering from "./components/filtering/Filtering";
import { useTheme } from "./context/handleThemeContext";
import { useEffect } from "react";

function App() {
  const { toggleTheme } = useTheme();

  useEffect(() => {
    // Access the body element
    const body = document.body;

    // Toggle the theme based on the state
    if (toggleTheme) {
      body.classList.add("darkMode");
    } else {
      body.classList.remove("darkMode");
    }
  }, [toggleTheme]);

  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className="container">
        <Filtering />
        <Cards />
      </main>
    </>
  );
}
export default App;
