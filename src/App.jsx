import Navbar from "./assets/components/Navbar.jsx";
import About from "./assets/components/About.jsx";
import Skills from "./assets/components/Skills.jsx";
import Projects from "./assets/components/Projects.jsx";
import Contact from "./assets/components/Contact.jsx";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <div className="pt-20">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
