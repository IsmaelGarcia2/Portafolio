import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="Contact" className="py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
      <h2 className="text-3xl font-bold text-center mb-6 text-white drop-shadow-md">
        Contáctame
      </h2>
      <p className="text-center text-gray-300 mb-12 drop-shadow-sm">
        Estoy abierto a nuevas oportunidades y proyectos. ¡Hablemos!
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        <motion.a
          href="https://github.com/IsmaelGarcia2"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 bg-gray-800 shadow-lg rounded-xl px-6 py-3 hover:shadow-2xl transition"
        >
          <FaGithub className="text-white" size={24} />
          <span className="font-semibold text-white">GitHub</span>
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/ismael-garc%C3%ADa-aquino/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 bg-blue-700 shadow-lg rounded-xl px-6 py-3 hover:shadow-2xl transition"
        >
          <FaLinkedin className="text-white" size={24} />
          <span className="font-semibold text-white">LinkedIn</span>
        </motion.a>

        <motion.a
          href="https://wa.me/18494421480"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 bg-green-600 shadow-lg rounded-xl px-6 py-3 hover:shadow-2xl transition"
        >
          <FaWhatsapp className="text-white" size={24} />
          <span className="font-semibold text-white">WhatsApp</span>
        </motion.a>

        <motion.a
          href="mailto:ismaelgar336@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 bg-red-600 shadow-lg rounded-xl px-6 py-3 hover:shadow-2xl transition"
        >
          <FaEnvelope className="text-white" size={24} />
          <span className="font-semibold text-white">Email</span>
        </motion.a>
      </div>
    </section>
  );
}
