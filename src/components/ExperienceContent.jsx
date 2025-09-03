import React from "react";

export default function ExperienceContent() {
    const experiences = [
        {
            company: "Biblioteca Nacional Pedro Henríquez Ureña (BNPHU)",
            role: "Software Programmer",
            period: "Feb 2025 - Jun 2025",
            location: "Dominican Republic · On-site",
            description: "HTML Emails, PHP y +6 skills",
        },
        {
            company: "Direccion General de Aduanas (DGA)",
            role: "Technical Support Analysts & Network Support Analysts",
            period: "Jul 2024 - Oct 2024",
            location: "Distrito Nacional, Dominican Republic · On-site",
            description: "Microsoft Power BI, MDT y +1 skill",
        },
        {
            company: "Agrevo Dominicana",
            role: "Technical Support",
            period: "2024 - May 2024",
            location: "Dominican Republic · On-site",
            description: "",
        },
    ];

    return (
        <section className="py-16 bg-gray-900">
            <h2 className="text-center text-3xl font-bold text-cyan-400 mb-10 flex items-center justify-center gap-2">
                Experiencia Laboral
            </h2>

            <div className="relative border-l-4 border-indigo-500 pl-6 space-y-12">
                {experiences.map((exp, idx) => (
                    <div
                        key={idx}
                        className="relative bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700/40"
                    >
                        {/* Punto en la línea */}
                        <span className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-indigo-500 border-4 border-gray-900"></span>

                        {/* Contenido */}
                        <p className="text-sm text-indigo-300 font-medium">{exp.period}</p>
                        <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
                        <h4 className="text-lg text-gray-200">{exp.role}</h4>
                        {exp.description && (
                            <p className="text-gray-400 text-sm mt-2">{exp.description}</p>
                        )}
                        <p className="text-sm text-gray-500 mt-1">{exp.location}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
