// src/assets/components/Navbar.jsx
import { useState, useEffect } from "react";

export default function Navbar({ activeSection, setActiveSection }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = ["about", "skills & experience", "projects", "contact"];

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-gray-900/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between items-center px-4 sm:px-6 py-4">
        <div className="text-2xl font-bold cursor-pointer">Ismael García</div>
        <ul className="flex flex-wrap gap-4 sm:gap-6 justify-center sm:justify-end w-full sm:w-auto mt-4 sm:mt-0">
          {sections.map((sec) => (
            <li
              key={sec}
              className={`cursor-pointer hover:text-cyan-400 transition-colors ${
                activeSection === sec ? "text-cyan-400" : "text-white"
              }`}
              onClick={() => {
                setActiveSection(sec);
                document
                  .getElementById(sec)
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              {sec.replace("&", " & ").toUpperCase()}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
