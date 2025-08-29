import { motion } from "framer-motion";
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaPhp } from "react-icons/fa";
import { SiCsharp, SiDotnet, SiJavascript } from "react-icons/si";

// Colores pastel muy claros para las tarjetas
const pastelColors = [
  "bg-pink-100/10",
  "bg-purple-100/10",
  "bg-blue-100/10",
  "bg-green-100/10",
  "bg-yellow-100/10",
  "bg-orange-100/10",
];

const skillCategories = [
  {
    title: "💻 Desarrollo",
    skills: [
      { name: "Java", icon: <FaJava className="text-orange-400 text-5xl" /> },
      { name: "C#", icon: <SiCsharp className="text-purple-400 text-5xl" /> },
      { name: "ASP.NET", icon: <SiDotnet className="text-blue-400 text-5xl" /> },
      { name: "React", icon: <FaReact className="text-cyan-400 text-5xl" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-5xl" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
      { name: "PHP", icon: <FaPhp className="text-indigo-400 text-5xl" /> },
    ],
  },
  {
    title: "🗄 Bases de Datos",
    skills: [
      { name: "SQL Server", icon: "devicon-microsoftsqlserver-plain colored" },
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "PhpMyAdmin", icon: "devicon-php-plain colored" },
    ],
  },
  {
    title: "🌐 Web & WordPress",
    skills: [
      { name: "WordPress", icon: "devicon-wordpress-plain colored" },
      { name: "SEO", icon: "devicon-google-plain colored" },
      { name: "Yoast SEO", icon: "devicon-google-plain colored" },
      { name: "AMP", icon: "devicon-google-plain colored" },
    ],
  },
  {
    title: "🛠 Herramientas",
    skills: [
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "Figma", icon: "devicon-figma-plain colored" },
      { name: "Power BI", icon: "devicon-google-plain colored" },
      { name: "IntelliJ IDEA", icon: "devicon-intellij-plain colored" },
      { name: "Visual Studio", icon: "devicon-visualstudio-plain colored" },
    ],
  },
  {
    title: "🔐 Redes & Seguridad",
    skills: [
      { name: "Networking", icon: "devicon-linux-plain colored" },
      { name: "Seguridad en Redes", icon: "devicon-linux-plain colored" },
      { name: "SCCM", icon: "devicon-windows8-original colored" },
      { name: "MDT", icon: "devicon-windows8-original colored" },
      { name: "Crontab", icon: "devicon-linux-plain colored" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="Skills"
      className="py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-white drop-shadow-md">
        Habilidades Técnicas
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {skillCategories.map((category, idx) => (
          <div key={category.title}>
            <h3 className="text-xl font-semibold text-white mb-6 drop-shadow-sm text-center">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  className={`flex flex-col items-center rounded-xl p-4 hover:shadow-2xl transition shadow-md ${
                    pastelColors[(i + idx) % pastelColors.length]
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  {typeof skill.icon === "string" ? (
                    <i className={`${skill.icon} text-5xl mb-2 text-white`} />
                  ) : (
                    <div className="mb-2">{skill.icon}</div>
                  )}
                  <p className="text-sm font-medium text-gray-300 text-center">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
