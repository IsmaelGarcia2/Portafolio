import { motion } from "framer-motion";
import { FaReact, FaJava, FaWordpress, FaDatabase } from "react-icons/fa";

export default function Projects() {
    const projects = [
        {
            name: "Portafolio React",
            link: "https://github.com/IsmaelGarcia2/Portafolio",
            description:
                "Mi portafolio personal con React, Tailwind y Framer Motion. Incluye diseño responsive y despliegue en Vercel.",
            icon: <FaReact className="text-blue-400 w-6 h-6" />,
        },
        {
            name: "Catálogo de Productos (Java)",
            link: "https://github.com/IsmaelGarcia2/catalogo-productos-java",
            description:
                "Aplicación en Java que utiliza clases abstractas, interfaces y polimorfismo para la gestión de productos.",
            icon: <FaJava className="text-orange-500 w-6 h-6" />,
        },
        {
            name: "Validación de Formularios (Java)",
            link: "https://github.com/IsmaelGarcia2/formulario-validacion-abstracta-java",
            description:
                "Proyecto educativo que implementa validadores personalizados usando clases abstractas y generación dinámica de HTML.",
            icon: <FaJava className="text-orange-500 w-6 h-6" />,
        },
        {
            name: "Java Hilos",
            link: "https://github.com/IsmaelGarcia2/java-hilos",
            description:
                "Ejemplos prácticos de concurrencia en Java usando Threads y Runnable para ejecución paralela.",
            icon: <FaJava className="text-orange-500 w-6 h-6" />,
        },
        {
            name: "Sitio Web en Vivo",
            link: "http://ismaelguard.xo.je/",
            description:
                "Proyecto web desarrollado con WordPress, mostrando diseño, maquetación y funcionalidad en tiempo real.",
            icon: <FaWordpress className="text-blue-600 w-6 h-6" />,
        },
        {
            name: "BoletoBus (Web Monolítico)",
            link: "https://github.com/IsmaelGarcia2/BoletoBusMonolitic.Web",
            description:
                "Aplicación web monolítica para gestión de boletos de autobús. Proyecto colaborativo en T-SQL y C#.",
            icon: <FaDatabase className="text-green-500 w-6 h-6" />,
        },
    ];

    return (
        <section
            id="projects"
            className="py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800"
        >
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12 text-white drop-shadow-lg">
                    Proyectos Destacados
                </h2>

                {/* Slider horizontal */}
                <div className="flex gap-8 overflow-x-auto py-4 px-2 scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-700">
                    {projects.map(({ name, link, description, icon }) => (
                        <motion.a
                            key={name}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-800 shadow-xl rounded-2xl p-6 min-w-[300px] max-w-sm flex-shrink-0 hover:shadow-2xl transition transform"
                            whileHover={{ scale: 1.06 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="flex items-center justify-center mb-4">
                                {icon}
                                <h3 className="font-semibold text-white ml-2 text-lg">{name}</h3>
                            </div>
                            <p className="text-gray-300 text-sm">{description}</p>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
