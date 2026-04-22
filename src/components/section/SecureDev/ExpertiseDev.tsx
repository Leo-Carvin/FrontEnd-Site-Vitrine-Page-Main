"use client";

import { motion } from "motion/react";
import { FaBug, FaSyncAlt, FaFileContract, FaBox } from "react-icons/fa";

const expertises = [
    {
        icon: <FaBug />,
        title: "Vulnérabilités éliminées dès la conception",
        description: "Le Threat Modeling identifie les risques avant la première ligne de code",
    },
    {
        icon: <FaSyncAlt />,
        title: "Détection en continu",
        description: "SAST/DAST intégré à vos CI/CD pour un feedback immédiat à chaque commit",
    },
    {
        icon: <FaFileContract />,
        title: "Conformité native",
        description: "OWASP Top 10, ISO 27001 et NIST SSDF intégrés dès la conception",
    },
    {
        icon: <FaBox />,
        title: "Conteneurs hardened",
        description: "Images Docker et orchestration Kubernetes durcies et prêtes pour la production",
    },
];

export default function ExpertiseDev() {
    return (
        <section className="py-20 px-6 md:px-20" style={{ background: "var(--color-5)" }}>
            <div className="max-w-6xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        La valeur délivrée
                    </h2>
                    <p className="text-white/60 text-lg">
                        Coder sécurisé dès le premier jour, c'est livrer sereinement chaque jour
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } } }}
                >
                    {expertises.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
                            className="bg-[#ffffff10] rounded-2xl p-6 flex flex-col gap-4"
                        >
                            <div className="w-14 h-14 rounded-xl bg-[var(--color-2)] flex items-center justify-center text-white text-2xl">
                                {item.icon}
                            </div>
                            <h3 className="font-bold text-white text-lg">{item.title}</h3>
                            <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}