"use client";

import { motion } from "motion/react";
import { FaShieldAlt, FaClock, FaFileContract, FaSyncAlt } from "react-icons/fa";

const garanties = [
    {
        icon: <FaShieldAlt />,
        value: "99.9%",
        title: "Disponibilité garantie",
        description: "SLA contractuel avec pénalités en cas de non-respect",
        color: "var(--color-1)",
    },
    {
        icon: <FaClock />,
        value: "< 4h",
        title: "Délai d'intervention",
        description: "Engagement contractuel sur nos délais de réponse et d'intervention",
        color: "var(--color-2)",
    },
    {
        icon: <FaFileContract />,
        value: "100%",
        title: "Transparence tarifaire",
        description: "Forfait mensuel fixe, sans frais cachés ni mauvaises surprises",
        color: "var(--color-3)",
    },
    {
        icon: <FaSyncAlt />,
        value: "24/7",
        title: "Supervision continue",
        description: "Monitoring permanent de votre infrastructure, 365 jours par an",
        color: "var(--color-4)",
    },
];

export default function Garanties() {
    return (
        <section
        className="py-16 px-6 md:px-20"
        style={{ background: "linear-gradient(to bottom right, var(--color-1) 0%, var(--color-2) 100%)" }}
        >
        <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-white text-2xl md:text-3xl font-bold text-center mb-12"
        >
            Nos garanties contractuelles
        </motion.h2>

        <motion.div
            className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
            }}
        >
            {garanties.map((item, index) => (
            <motion.div
                key={index}
                variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
                }}
                className="flex flex-col items-center text-center gap-3"
            >
                <div className="w-14 h-14 rounded-full bg-[#ffffff30] flex items-center justify-center text-white text-2xl">
                {item.icon}
                </div>
                <span className="text-white text-4xl font-bold">{item.value}</span>
                <span className="text-white font-semibold text-sm">{item.title}</span>
                <span className="text-white/70 text-xs">{item.description}</span>
            </motion.div>
            ))}
        </motion.div>
        </section>
    );
}