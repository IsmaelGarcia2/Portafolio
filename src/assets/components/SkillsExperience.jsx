import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Skills from "./Skills";
import ExperienceContent from "./ExperienceContent";

export default function SkillsExperience() {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-white drop-shadow-md">
          Habilidades & Experiencia
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveTab("skills")}
            className={`px-6 py-2 rounded-xl font-semibold transition-colors ${
              activeTab === "skills"
                ? "bg-white/20 text-white"
                : "bg-white/10 text-gray-300 hover:bg-white/20"
            }`}
          >
            Skills
          </button>
          <button
            onClick={() => setActiveTab("experience")}
            className={`px-6 py-2 rounded-xl font-semibold transition-colors ${
              activeTab === "experience"
                ? "bg-white/20 text-white"
                : "bg-white/10 text-gray-300 hover:bg-white/20"
            }`}
          >
            Experience
          </button>
        </div>

        {/* Contenido */}
        <div className="space-y-10">
          <AnimatePresence mode="wait">
            {activeTab === "skills" && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <Skills />
              </motion.div>
            )}
            {activeTab === "experience" && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <ExperienceContent />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
