import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const links = [
    {
      href: "https://github.com/IsmaelGarcia2",
      icon: <FaGithub size={22} />,
      label: "GitHub",
      color: "hover:bg-white hover:text-black"
    },
    {
      href: "https://www.linkedin.com/in/ismael-garc%C3%ADa-aquino/",
      icon: <FaLinkedin size={22} />,
      label: "LinkedIn",
      color: "hover:bg-blue-600"
    },
    {
      href: "https://wa.me/18494421480",
      icon: <FaWhatsapp size={22} />,
      label: "WhatsApp",
      color: "hover:bg-green-600"
    },
    {
      href: "mailto:ismaelgar336@gmail.com",
      icon: <FaEnvelope size={22} />,
      label: "Email",
      color: "hover:bg-red-600"
    }
  ];

  return (
    <section id="Contact" className="relative py-24 px-6 bg-gradient-to-br from-[#0f172a] via-[#0b1120] to-[#020617]">

      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-white mb-4">
          Contáctame
        </h2>

        <p className="text-gray-400 mb-12 text-lg">
          Disponible para oportunidades remotas y proyectos backend / automatización.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className={`flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 text-white transition-all duration-300 ${link.color}`}
            >
              {link.icon}
              <span className="font-medium">{link.label}</span>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
