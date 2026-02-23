// src/components/SkillsExperience.jsx
import React, { useState } from "react";
import { Code, Briefcase } from "lucide-react";

import Skills from "./Skills";
import ExperienceContent from "./ExperienceContent";

export default function SkillsExperience() {
  const [activeTab, setActiveTab] = useState("skills");

  const tabs = [
    { key: "skills", label: "Skills", icon: <Code size={18} /> },
    { key: "experience", label: "Experience", icon: <Briefcase size={18} /> },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Skills & Experience
        </h2>

        <div className="flex justify-center mb-12">
          <div className="flex bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-lg">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === tab.key
                    ? "bg-cyan-500 text-black font-semibold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          {activeTab === "skills" ? <Skills /> : <ExperienceContent />}
        </div>

      </div>
    </section>
  );
}
