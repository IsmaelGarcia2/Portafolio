import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    { name: "Portafolio React", link: "https://portafolio-three-sigma-20.vercel.app/" },
    { name: "Otro Proyecto", link: "#" },
  ];

  return (
    <section id="Projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Proyectos</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project) => (
            <motion.a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-md rounded-xl p-6 w-64 text-center hover:scale-105 transition"
              whileHover={{ scale: 1.05 }}
            >
              {project.name}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
