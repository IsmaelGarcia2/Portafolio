// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";

// Logos
import python from "../assets/skills/python.png";
import java from "../assets/skills/java.png";
import php from "../assets/skills/php.png";
import node from "../assets/skills/node.png";
import reactLogo from "../assets/skills/react.png";
import mysql from "../assets/skills/mysql.png";
import mongodb from "../assets/skills/mongodb.png";
import docker from "../assets/skills/docker.png";
import git from "../assets/skills/git.png";
import linux from "../assets/skills/linux.png";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import js from "../assets/skills/js.png";
import tailwind from "../assets/skills/tailwind.png";
import wordpress from "../assets/skills/wordpress.png";

const skillsData = {
  Backend: [
    { name: "Python", logo: python },
    { name: "Java", logo: java },
    { name: "PHP", logo: php },
    { name: "Node.js", logo: node },
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
