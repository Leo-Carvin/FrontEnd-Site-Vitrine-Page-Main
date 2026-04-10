"use client";

import { motion } from "motion/react";
import { FaExclamationTriangle, FaClock, FaMoneyBillWave, FaUserSlash } from "react-icons/fa";

const problemes = [
    {
        icon: <FaExclamationTriangle />,
        iconBg: "#fecaca",
        iconColor: "#dc2626",
        title: "Pannes imprévues",
        description: "Des interruptions non planifiées qui paralysent votre activité et font perdre du temps et de l'argent",
    },
    {
        icon: <FaClock />,
        iconBg: "#fed7aa",
        iconColor: "#ea580c",
        title: "Support trop lent",
        description: "Des délais d'intervention trop longs qui prolongent les problèmes et frustrent vos équipes",
    },
    {
        icon: <FaMoneyBillWave />,
        iconBg: "#fef9c3",
        iconColor: "#ca8a04",
        title: "Coûts incontrôlés",
        description: "Des budgets IT imprévisibles avec des factures surprise qui déséquilibrent votre trésorerie",
    },
    {
        icon: <FaUserSlash />,
        iconBg: "#ede9fe",
        iconColor: "#7c3aed",
        title: "Manque d'expertise",
        description: "Des ressources internes insuffisantes face à la complexité croissante des enjeux IT et cyber",
    },
];

export default function ProblematiquesClients() {
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
                Ces problèmes vous parlent ?
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Nous connaissons les défis des PME et ETI face à leur infrastructure IT.
                CYNERIS est là pour les résoudre.
            </p>
            </motion.div>

            <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
            }}
            >
            {problemes.map((probleme, index) => (
                <motion.div
                key={index}
                variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
                }}
                className="bg-[#F9FAFB] rounded-2xl p-6 flex flex-col gap-4"
                >
                <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: probleme.iconBg, color: probleme.iconColor }}
                >
                    {probleme.icon}
                </div>
                <h3 className="font-bold text-black text-lg">{probleme.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{probleme.description}</p>
                </motion.div>
            ))}
            </motion.div>

        </div>
        </section>
    );
}