import { motion } from "framer-motion";
import {
  FaJava, FaReact, FaHtml5, FaCss3Alt, FaJs, FaPhp, FaWordpress, FaGitAlt
} from "react-icons/fa";
import {
  SiTailwindcss, SiMongodb, SiMysql, SiFigma
} from "react-icons/si";

export default function Skills() {
  const categories = [
    {
      title: "Frontend",
      color: "from-pink-100 to-pink-200",
      skills: [
        { name: "React", icon: <FaReact className="text-5xl text-blue-400" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-5xl text-orange-400" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-5xl text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-5xl text-yellow-400" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="text-5xl text-cyan-400" /> },
        { name: "WordPress", icon: <FaWordpress className="text-5xl text-blue-700" /> },
      ],
    },
    {
      title: "Backend",
      color: "from-blue-100 to-blue-200",
      skills: [
        { name: "Java", icon: <FaJava className="text-5xl text-red-500" /> },
        { name: "PHP", icon: <FaPhp className="text-5xl text-indigo-400" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-5xl text-green-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-5xl text-blue-600" /> },
      ],
    },
    {
      title: "Herramientas",
      color: "from-green-100 to-green-200",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-5xl text-orange-500" /> },
        { name: "Figma", icon: <SiFigma className="text-5xl text-pink-500" /> },
      ],
    },
  ];

  return (
    <section
      id="Skills"
      className="py-20 px-6 bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50"
    >
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
        Mis Habilidades
      </h2>
      <div className="space-y-16">
        {categories.map((category) => (
          <div key={category.title}>
            <h3 className="text-2xl font-semibold mb-10 text-center text-gray-700">
              {category.title}
            </h3>
            <div
              className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 justify-items-center bg-gradient-to-r ${category.color} rounded-2xl shadow-md p-10`}
            >
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="flex flex-col items-center bg-white shadow-md rounded-xl p-6 w-28 hover:shadow-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  {skill.icon}
                  <p className="mt-2 text-sm font-medium text-gray-700">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
