"use client";

import { motion } from "motion/react";
import { FaSearch, FaClipboardList, FaRocket, FaHeadset } from "react-icons/fa";

const etapes = [
    {
        icon: <FaSearch />,
        number: "1",
        title: "Audit gratuit",
        description: "Analyse complète de votre infrastructure existante sans engagement",
        color: "var(--color-1)",
    },
    {
        icon: <FaClipboardList />,
        number: "2",
        title: "Proposition sur mesure",
        description: "Plan d'action personnalisé adapté à votre budget et vos priorités",
        color: "var(--color-2)",
    },
    {
        icon: <FaRocket />,
        number: "3",
        title: "Déploiement rapide",
        description: "Mise en place progressive sans interruption de votre activité",
        color: "var(--color-3)",
    },
    {
        icon: <FaHeadset />,
        number: "4",
        title: "Suivi continu",
        description: "Support 24/7, supervision proactive et optimisations régulières",
        color: "var(--color-4)",
    },
];

export default function Processus() {
    return (
        <section className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">

            <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center mb-16"
            >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Démarrer avec CYNERIS en 4 étapes
            </h2>
            <p className="text-gray-500 text-lg">
                Un onboarding simple et sans stress pour une transition en douceur
            </p>
            </motion.div>

            <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
            }}
            >
            {etapes.map((etape, index) => (
                <motion.div
                key={index}
                variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
                }}
                className="flex flex-col items-center text-center gap-4"
                >
                <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                    style={{ background: etape.color }}
                >
                    {etape.icon}
                </div>
                <h3 className="font-bold text-black text-lg">{etape.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{etape.description}</p>
                </motion.div>
            ))}
            </motion.div>

        </div>
        </section>
    );
}