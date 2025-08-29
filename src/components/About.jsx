import { motion } from "framer-motion";
import fotoIsmael from "../assets/Aduanas.JPEG";

export default function About() {
    return (
        <section id="About" className="py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
            <div className="max-w-screen-xl mx-auto">
                <motion.div
                    className="flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-sm p-10 rounded-2xl shadow-lg gap-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Foto */}
                    <div className="flex-shrink-0 md:w-1/3">
                        <img
                            src={fotoIsmael}
                            alt="Ismael García Aquino"
                            className="mx-auto mb-6 rounded-lg shadow-lg"
                            width={250}
                            height={320}
                        />
                    </div>

                    {/* Texto */}
                    <div className="md:w-2/3 text-center md:text-left">
                        <h1 className="text-4xl font-bold text-white drop-shadow-md mb-6">
                            Ismael García Aquino
                        </h1>

                        <p className="text-gray-300 text-lg mb-4">
                            Soy estudiante de <span className="font-semibold text-white">Ingeniería en Sistemas</span>, con la tesis presentada y próximo a graduarme.
                            Durante mi formación, he adquirido experiencia en <span className="font-semibold text-white">Java, HTML, CSS y SQL</span>, así como en otras tecnologías relacionadas con el desarrollo de software.
                        </p>

                        <p className="text-gray-300 text-lg mb-4">
                            Me interesa participar en programas de <span className="font-semibold text-white">formación profesional intensiva</span> y proyectos financieros,
                            con el objetivo de especializarme en <span className="font-semibold text-white">tecnologías financieras</span> y aportar soluciones innovadoras.
                        </p>

                        <p className="text-gray-300 text-lg mb-4">
                            Me caracterizo por mi <span className="font-semibold text-white">actitud proactiva</span>, compromiso con el aprendizaje continuo
                            y disposición para trabajar <span className="font-semibold text-white">100% presencial</span>.
                        </p>

                        <p className="text-gray-300 text-lg">
                            Actualmente, busco oportunidades como <span className="font-semibold text-white">desarrollador junior</span>, donde pueda aplicar mis conocimientos,
                            aprender nuevas herramientas y contribuir activamente al crecimiento del sector tecnológico mediante soluciones prácticas y eficientes.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
