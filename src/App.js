import Contact from "./Components/Contact";
import Details from "./Components/Details";
import Footer from "./Components/Footer";
import General from "./Components/General";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="portfolio">
      <General />
      <Details />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
