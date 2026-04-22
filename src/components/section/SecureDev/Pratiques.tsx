"use client";

import { motion } from "motion/react";
import { FaShieldAlt, FaSearch, FaLock } from "react-icons/fa";

const pratiques = [
    {
        icon: <FaShieldAlt />,
        iconBg: "#dbeafe",
        iconColor: "#2563eb",
        title: "Threat Modeling",
        description: "Identification systématique STRIDE/DREAD des menaces dès la phase de design, avant la première ligne de code.",
    },
    {
        icon: <FaSearch />,
        iconBg: "#fef9c3",
        iconColor: "#ca8a04",
        title: "SAST / DAST",
        description: "Analyse statique et dynamique intégrée dans vos pipelines CI/CD. Détection automatisée à chaque commit.",
    },
    {
        icon: <FaLock />,
        iconBg: "#dcfce7",
        iconColor: "#16a34a",
        title: "Hardening & Revue de code",
        description: "Durcissement des conteneurs Docker/K8s et revue de code sécurisée par des experts pour traquer les failles logiques.",
    },
];

export default function Pratiques() {
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
                Nos pratiques Secure by Design
            </h2>
            <p className="text-gray-500 text-lg">
                Shift-left security, résultats mesurables
            </p>
            </motion.div>

            <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
            >
            {pratiques.map((pratique, index) => (
                <motion.div
                key={index}
                variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
                className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-6"
                >
                <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: pratique.iconBg, color: pratique.iconColor }}
                >
                    {pratique.icon}
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-black text-lg">{pratique.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{pratique.description}</p>
                </div>
                </motion.div>
            ))}
            </motion.div>

        </div>
        </section>
    );
}