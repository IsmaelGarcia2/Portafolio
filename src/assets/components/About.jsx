import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="About" className="py-20 px-6 bg-gray-100">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-4">Hola, soy Ismael García</h2>
        <p className="text-lg text-gray-700">
          Soy desarrollador de software especializado en Java y React. Me apasiona crear aplicaciones web limpias, rápidas y funcionales.
        </p>
      </motion.div>
    </section>
  );
}
