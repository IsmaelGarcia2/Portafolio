// src/components/Skills.jsx
import React from "react";
import dockerLogo from "../assets/docker.svg";
import figmaLogo from "../assets/figma.svg";
import gitLogo from "../assets/git.svg";
import javaLogo from "../assets/java.svg";
import linuxLogo from "../assets/linux.svg";
import mongoLogo from "../assets/mongodb.svg";
import mysqlLogo from "../assets/mysql.svg";
import phpLogo from "../assets/php.svg";
import pythonLogo from "../assets/python.svg";
import reactLogo from "../assets/react.svg";
import wordpressLogo from "../assets/wordpress.svg";

const skillsIcons = [
    { src: dockerLogo, name: "Docker" },
    { src: figmaLogo, name: "Figma" },
    { src: gitLogo, name: "Git" },
    { src: javaLogo, name: "Java" },
    { src: linuxLogo, name: "Linux" },
    { src: mongoLogo, name: "MongoDB" },
    { src: mysqlLogo, name: "MySQL" },
    { src: phpLogo, name: "PHP" },
    { src: pythonLogo, name: "Python" },
    { src: reactLogo, name: "React" },
    { src: wordpressLogo, name: "WordPress" },
    { src: "devicon-html5-plain colored", name: "HTML5", isIcon: true },
    { src: "devicon-css3-plain colored", name: "CSS3", isIcon: true },
    { src: "devicon-javascript-plain colored", name: "JavaScript", isIcon: true },
    { src: "devicon-nodejs-plain colored", name: "Node.js", isIcon: true },
    { src: "devicon-tailwindcss-plain colored", name: "Tailwind", isIcon: true },
    { src: "devicon-visualstudio-plain colored", name: "VS Code", isIcon: true },
];

export default function Skills() {
    return (
        <section id="skills" className="py-16 bg-gray-900">
            <h2 className="text-center text-3xl font-bold text-cyan-400 mb-10 flex items-center justify-center gap-2">
                Skills
            </h2>
            <div className="max-w-6xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
                {skillsIcons.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center bg-white/5 rounded-xl p-4 shadow-md hover:scale-110 transition-transform duration-300"
                    >
                        {skill.isIcon ? (
                            <i className={`${skill.src} text-5xl`}></i>
                        ) : (
                            <img src={skill.src} alt={skill.name} className="h-12 w-12" />
                        )}
                        <p className="text-sm mt-2 text-white">{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
