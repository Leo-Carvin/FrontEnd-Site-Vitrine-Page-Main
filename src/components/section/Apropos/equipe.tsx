"use client";

import { motion } from "motion/react";
import { FaLinkedin } from "react-icons/fa";

const equipe = [
    {
        nom: "Thomas Renard",
        poste: "CEO & Fondateur",
        expertise: "15 ans d'expérience en infrastructure IT",
        initiales: "TR",
        color: "var(--color-1)",
    },
    {
        nom: "Sophie Martin",
        poste: "Directrice Technique",
        expertise: "Experte en cybersécurité certifiée CISSP",
        initiales: "SM",
        color: "var(--color-2)",
    },
    {
        nom: "Lucas Bernard",
        poste: "Responsable Réseau",
        expertise: "Architecte réseau certifié Cisco",
        initiales: "LB",
        color: "var(--color-3)",
    },
    {
        nom: "Camille Dubois",
        poste: "Ingénieure Cloud",
        expertise: "Spécialiste Azure & Microsoft 365",
        initiales: "CD",
        color: "var(--color-4)",
    },
];

export default function Equipe() {
    return (
        <section className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">

            <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center mb-16"
            >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Notre équipe
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Des experts passionnés et certifiés, dédiés à la réussite de vos projets IT
            </p>
            </motion.div>

            <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
            }}
            >
            {equipe.map((membre, index) => (
                <motion.div
                key={index}
                variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
                }}
                className="flex flex-col items-center text-center gap-4 bg-[#F9FAFB] rounded-2xl p-6"
                >
                <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                    style={{ background: membre.color }}
                >
                    {membre.initiales}
                </div>
                <div>
                    <h3 className="font-bold text-black text-lg">{membre.nom}</h3>
                    <p className="text-[var(--color-2)] text-sm font-medium">{membre.poste}</p>
                </div>
                <p className="text-gray-500 text-sm">{membre.expertise}</p>
                <FaLinkedin className="text-[#0077b5] text-xl cursor-pointer hover:opacity-70 transition" />
                </motion.div>
            ))}
            </motion.div>

        </div>
        </section>
    );
}