import React from "react";

export default function ExperienceContent() {
    const experiences = [
        {
            company: "Nax Solutions",
            role: "Backend Support Engineer (Python & APIs)",
            period: "Feb 2026 - Present",
            location: "Alicante, Spain · Remote",
            description: [
                "Management and resolution of technical incidents through ticketing systems",
                "Development and maintenance of API integrations",
                "Creation of automation scripts using Python",
                "Backend troubleshooting and system optimization",
                "Collaboration with cross-functional technical teams"
            ],
        },
        {
            company: "Komanda F5",
            role: "CRM Automation Trainee",
            period: "Sep 2025 - Nov 2025",
            location: "Dubai, United Arab Emirates · Remote",
            description: [
                "Automation of CRM processes using Kommo CRM (Salesbots, triggers, and workflows)",
                "Design of intelligent lead routing systems based on custom business logic",
                "Optimization of lead lifecycle management through automated task flows",
                "Implementation of trigger-based actions and conditional automations",
                "Performance monitoring and documentation of CRM automation results"
            ],
        },
        {
            company: "Biblioteca Nacional Pedro Henríquez Ureña (BNPHU)",
            role: "Software Programmer",
            period: "Feb 2025 - Jun 2025",
            location: "Dominican Republic · On-site",
            description: [
                "Development and maintenance of institutional web applications",
                "Creation of HTML email templates",
                "Backend development using PHP and MySQL",
                "Database management with PhpMyAdmin",
                "Process automation with Crontab"
            ],
        },
        {
            company: "Dirección General de Aduanas (DGA)",
            role: "Technical Support & Network Support Analyst",
            period: "Jul 2024 - Oct 2024",
            location: "Distrito Nacional, Dominican Republic · On-site",
            description: [
                "Technical support for internal users",
                "Data analysis and reporting with Microsoft Power BI",
                "System deployment using MDT",
                "Software management and distribution with SCCM"
            ],
        },
        {
            company: "Agrevo Dominicana",
            role: "Technical Support",
            period: "Jan 2024 - May 2024",
            location: "Dominican Republic · On-site",
            description: [
                "User support and troubleshooting",
                "Hardware and software diagnostics",
                "Maintenance of IT equipment"
            ],
        },
    ];

    return (
        <section className="py-16 bg-gray-900">
            <h2 className="text-center text-3xl font-bold text-cyan-400 mb-10">
                Experiencia Laboral
            </h2>

            <div className="relative border-l-4 border-indigo-500 pl-6 space-y-12">
                {experiences.map((exp, idx) => (
                    <div
                        key={idx}
                        className="relative bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700/40 hover:scale-[1.02] transition-transform duration-300"
                    >
                        <span className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-indigo-500 border-4 border-gray-900"></span>

                        <p className="text-sm text-indigo-300 font-medium">{exp.period}</p>
                        <h3 className="text-xl font-semibold text-white mt-1">
                            {exp.company}
                        </h3>
                        <h4 className="text-lg text-gray-300 mb-3">{exp.role}</h4>

                        <ul className="text-gray-400 text-sm list-disc list-inside space-y-1">
                            {exp.description.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>

                        <p className="text-sm text-gray-500 mt-4">{exp.location}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
