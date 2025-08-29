import React from "react";

function App() {
  return (
    <div className="max-w-6xl mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold mb-8">Mi Portafolio</h1>

      {/* Logos de tecnologías */}
      <div className="flex justify-center gap-8 mb-12">
        <img
          src="https://reactjs.org/logo-og.png"
          alt="React Logo"
          className="w-24 h-24 hover:drop-shadow-xl transition"
        />
        <img
          src="https://vitejs.dev/logo.svg"
          alt="Vite Logo"
          className="w-24 h-24 hover:drop-shadow-xl transition"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
          alt="Tailwind Logo"
          className="w-24 h-24 hover:drop-shadow-xl transition"
        />
      </div>

      {/* Links a GitHub y LinkedIn */}
      <div className="flex justify-center gap-8">
        <a
          href="https://github.com/ismaelgarcia2"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 font-semibold"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/ismael-garc%C3%ADa-aquino/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 font-semibold"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default App;
