import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="About" className="py-20 px-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="max-w-3xl mx-auto text-center bg-white/70 backdrop-blur-sm p-10 rounded-2xl shadow-lg">
          <motion.h2
            className="text-4xl font-bold mb-6 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Sobre mí
          </motion.h2>

          <motion.p
            className="text-lg leading-relaxed text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Soy estudiante de <span className="font-semibold">Ingeniería en Sistemas</span>,
            con tesis presentada y próximo a graduarme. Poseo conocimientos sólidos en
            <span className="font-semibold"> Java, HTML, SQL</span> y otras tecnologías de desarrollo de software.
            Mi nivel de inglés es <span className="font-semibold">intermedio</span>, lo que me permite leer documentación técnica,
            mantener conversaciones y colaborar en equipos multiculturales.
          </motion.p>

          <motion.p
            className="text-lg leading-relaxed text-gray-700 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Estoy interesado en programas de <span className="font-semibold">formación intensiva</span> y desarrollo profesional
            enfocados en plataformas financieras, con el objetivo de especializarme en
            <span className="font-semibold"> tecnologías financieras</span> y contribuir con soluciones innovadoras.
            Me caracterizo por mi <span className="font-semibold">actitud proactiva</span>, compromiso con el aprendizaje y
            disponibilidad para trabajar <span className="font-semibold">100% presencial</span>.
          </motion.p>

          <motion.p
            className="text-lg leading-relaxed text-gray-700 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            Actualmente, busco oportunidades como <span className="font-semibold">desarrollador junior</span>,
            donde pueda aplicar mis conocimientos, aprender nuevas herramientas y aportar con entusiasmo
            al crecimiento del sector tecnológico.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
