import Navbar from "./assets/components/Navbar";
import About from "./assets/components/About";
import Skills from "./assets/components/Skills";
import Projects from "./assets/components/Projects";
import Contact from "./assets/components/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Contenedor central */}
        <div className="max-w-6xl mx-auto px-6 space-y-20">
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </main>
    </>
  );
}
