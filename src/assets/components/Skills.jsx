import { motion } from "framer-motion";

export default function Skills() {
  const skills = ["Java", "React", "Vite", "Tailwind CSS", "SQL", "JavaScript"];
  return (
    <section id="Skills" className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Mis Habilidades</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill) => (
          <motion.div
            key={skill}
            className="bg-white shadow-md rounded-xl p-4 w-32 text-center hover:scale-105 transition"
            whileHover={{ scale: 1.1 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
