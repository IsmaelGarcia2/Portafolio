import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      name: "Portafolio React",
      link: "https://github.com/IsmaelGarcia2/Portafolio",
      description: "Mi portafolio personal con React, Tailwind y Framer Motion. Incluye diseño responsive y despliegue en Vercel."
    },
    {
      name: "Catálogo de Productos (Java)",
      link: "https://github.com/IsmaelGarcia2/catalogo-productos-java",
      description: "Aplicación en Java que utiliza clases abstractas, interfaces y polimorfismo para la gestión de productos."
    },
    {
      name: "Validación de Formularios (Java)",
      link: "https://github.com/IsmaelGarcia2/formulario-validacion-abstracta-java",
      description: "Proyecto educativo que implementa validadores personalizados usando clases abstractas y generación dinámica de HTML."
    },
    {
      name: "Java Hilos",
      link: "https://github.com/IsmaelGarcia2/java-hilos",
      description: "Ejemplos prácticos de concurrencia en Java usando Threads y Runnable para ejecución paralela."
    },
    {
      name: "Sitio Web en Vivo",
      link: "http://ismaelguard.xo.je/",
      description: "Proyecto web desarrollado con WordPress, mostrando diseño, maquetación y funcionalidad en tiempo real."
    },
    {
      name: "BoletoBus (Web Monolítico)",
      link: "https://github.com/IsmaelGarcia2/BoletoBusMonolitic.Web",
      description: "Aplicación web monolítica para gestión de boletos de autobús. Proyecto colaborativo en T-SQL y C#."
    },
  ];

  return (
    <section id="Projects" className="py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-white drop-shadow-md">
          Proyectos
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {projects.map(({ name, link, description }) => (
            <motion.a
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 shadow-lg rounded-xl p-6 w-64 text-center hover:shadow-2xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="font-semibold mb-2 text-white">{name}</h3>
              <p className="text-gray-300 text-sm">{description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
