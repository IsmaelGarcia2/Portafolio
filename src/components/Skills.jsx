// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";

// Logos (todos desde src/assets y en .svg)
import python from "../assets/python.svg";
import java from "../assets/java.svg";
import php from "../assets/php.svg";
import mysql from "../assets/mysql.svg";
import mongodb from "../assets/mongodb.svg";
import reactLogo from "../assets/react.svg";
import git from "../assets/git.svg";
import linux from "../assets/linux.svg";
import docker from "../assets/docker.svg";
import wordpress from "../assets/wordpress.svg";

// Si tienes estos en svg también:
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/js.svg";
import tailwind from "../assets/tailwind.svg";

const skillsData = {
  Backend: [
    { name: "Python", logo: python },
    { name: "Java", logo: java },
    { name: "PHP", logo: php },
    { name: "MySQL", logo: mysql },
    { name: "MongoDB", logo: mongodb },
  ],
  Frontend: [
    { name: "React", logo: reactLogo },
    { name: "HTML5", logo: html },
    { name: "CSS3", logo: css },
    { name: "JavaScript", logo: js },
    { name: "Tailwind CSS", logo: tailwind },
    { name: "WordPress", logo: wordpress },
  ],
  DevOps: [
    { name: "Docker", logo: docker },
    { name: "Git", logo: git },
    { name: "Linux", logo: linux },
  ],
};

export default function Skills() {
  return (
    <div className="space-y-16">
      {Object.entries(skillsData).map(([category, skills], index) => (
        <div key={index}>
          <h3 className="text-2xl font-semibold text-cyan-400 mb-8">
            {category}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08 }}
                className="flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg hover:border-cyan-400/40 hover:shadow-cyan-500/20 transition-all duration-300"
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-12 h-12 object-contain mb-4"
                />
                <p className="text-white text-sm font-medium text-center">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
