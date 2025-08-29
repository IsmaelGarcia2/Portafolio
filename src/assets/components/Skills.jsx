// src/assets/components/Skills.jsx
import React from "react";

// Lista de 18 logos Devicon
const skillsIcons = [
  "devicon-java-plain colored",
  "devicon-csharp-plain colored",
  "devicon-dot-net-plain colored",
  "devicon-react-original colored",
  "devicon-javascript-plain colored",
  "devicon-html5-plain colored",
  "devicon-css3-plain colored",
  "devicon-php-plain colored",
  "devicon-python-plain colored",
  "devicon-nodejs-plain colored",
  "devicon-mysql-plain colored",
  "devicon-mongodb-plain colored",
  "devicon-wordpress-plain colored",
  "devicon-git-plain colored",
  "devicon-figma-plain colored",
  "devicon-visualstudio-plain colored",
  "devicon-linux-plain colored",
  "devicon-docker-plain colored",
];

export default function Skills() {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6 justify-center items-center">
      {skillsIcons.map((iconClass, index) => (
        <div
          key={index}
          className="flex justify-center items-center p-4 rounded-lg bg-white/5 border border-gray-700/50 hover:bg-white/10 transition-colors duration-300"
        >
          <i className={`${iconClass} text-5xl`}></i>
        </div>
      ))}
    </div>
  );
}
