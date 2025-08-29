// src/App.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import About from "./components/About";
import SkillsExperience from "./components/SkillsExperience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Navbar */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      <main>
        {/* About */}
        <section id="about" className="py-20 px-6">
          <About />
        </section>

        {/* Skills & Experience */}
        <section id="skills & experience" className="py-20 px-6">
          <SkillsExperience />
        </section>

        {/* Projects */}
        <section id="projects" className="py-20 px-6">
          <Projects />
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 px-6">
          <Contact />
        </section>
      </main>
    </div>
  );
}
