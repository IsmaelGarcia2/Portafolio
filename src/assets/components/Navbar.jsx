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
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold cursor-pointer">Ismael García</div>
        <ul className="flex gap-6">
          {sections.map((sec) => (
            <li
              key={sec}
              className={`cursor-pointer hover:text-cyan-400 transition-colors ${
                activeSection === sec ? "text-cyan-400" : "text-white"
              }`}
              onClick={() => {
                setActiveSection(sec);
                document.getElementById(sec).scrollIntoView({ behavior: "smooth" });
              }}
            >
              {sec.replace("-", " ").toUpperCase()}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
