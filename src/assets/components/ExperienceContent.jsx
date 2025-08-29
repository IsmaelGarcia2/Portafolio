export default function ExperienceContent() {
  const experiences = [
    {
      company: "Biblioteca Nacional Pedro Henríquez Ureña (BNPHU)",
      role: "Software Programmer",
      period: "Mar 2025 - Jun 2025",
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
    <div className="space-y-8 max-w-3xl mx-auto text-left text-gray-300">
      {experiences.map((exp, idx) => (
        <div key={idx} className="bg-white/5 p-6 rounded-xl shadow-md backdrop-blur-sm">
          <p className="text-sm text-gray-400">{exp.period}</p>
          <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
          <h4 className="text-lg">{exp.role}</h4>
          <p>{exp.description}</p>
          <p className="text-sm text-gray-400 mt-1">{exp.location}</p>
        </div>
      ))}
    </div>
  );
}
