import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Skills from "./Skills.jsx";
import ExperienceContent from "./ExperienceContent.jsx";

export default function SkillsExperience() {
    const [activeTab, setActiveTab] = useState("experience");

    const tabs = [
        {
            key: "experience",
            label: "Experience",
            icon: (
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z"></path>
                </svg>
            ),
        },
        {
            key: "skills",
            label: "Technologies",
            icon: (
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 576 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M528 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm8 336c0 4.411-3.589 8-8 8H48c-4.411 0-8-3.589-8-8V112c0-4.411 3.589-8 8-8h480c4.411 0 8 3.589 8 8v288zM170 270v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12zm96 0v-28c0-6.627-5.373-12-12-12h-28c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12z"></path>
                </svg>
            ),
        },
    ];

    return (
        <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
            <div className="max-w-screen-xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8 text-white drop-shadow-md">
                    Habilidades & Experiencia
                </h2>

                {/* Tabs estilo article */}
                <article className="_titles-section_x1g2s_1 flex justify-center gap-6 mb-10">
                    {tabs.map((tab) => (
                        <div
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            style={{ borderBottom: activeTab === tab.key ? "2px solid rgb(59, 52, 134)" : "none", cursor: "pointer" }}
                            className="flex items-center gap-2 px-4 py-2 transition-colors"
                        >
                            {tab.icon}
                            <h2 className="_subtitle_16zr6_1 text-white font-semibold">{tab.label}</h2>
                        </div>
                    ))}
                </article>

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
