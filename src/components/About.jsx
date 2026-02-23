import { motion } from "framer-motion";
import fotoIsmael from "../assets/new.png";

export default function About() {
    return (
        <section id="About" className="relative py-24 px-6 bg-gradient-to-br from-[#0f172a] via-[#0b1120] to-[#020617] overflow-hidden">

            {/* Glow decorativo */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

            <div className="max-w-screen-xl mx-auto relative z-10">
                <motion.div
                    className="flex flex-col md:flex-row items-center gap-16 bg-white/5 backdrop-blur-xl p-12 rounded-3xl border border-white/10 shadow-2xl"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {/* Foto */}
                    <div className="relative md:w-1/3 flex justify-center">
                        <div className="absolute w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full"></div>

                        <motion.img
                            src={fotoIsmael}
                            alt="Ismael García Aquino"
                            className="relative w-72 h-96 object-cover rounded-3xl shadow-2xl border border-white/10"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        />
                    </div>

                    {/* Texto */}
                    <div className="md:w-2/3 text-center md:text-left">
                        <h1 className="text-5xl font-bold text-white mb-4">
                            Ismael García Aquino
                        </h1>

                        <h2 className="text-cyan-400 text-xl mb-6 font-medium tracking-wide">
                            Software Engineer · Backend & Web Development · Process Automation
                        </h2>

                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            Ingeniero en Sistemas con experiencia en desarrollo de software y construcción de soluciones web.
                            Trabajo en el diseño de sistemas escalables, integración de APIs y optimización de procesos empresariales,
                            utilizando tecnologías modernas y buenas prácticas de arquitectura.
                        </p>

                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Me enfoco en crear soluciones eficientes, automatizar flujos de trabajo y desarrollar aplicaciones
                            que generen impacto real y valor medible para los proyectos en los que participo.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
