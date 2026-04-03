"use client";

import { motion } from "motion/react";
import { FaLock, FaFish, FaNetworkWired, FaDatabase } from "react-icons/fa";

const menaces = [
    {
        icon: <FaLock />,
        iconBg: "#fecaca",
        iconColor: "#dc2626",
        title: "Ransomware",
        description: "Chiffrement malveillant de vos données avec demande de rançon",
    },
    {
        icon: <FaFish />,
        iconBg: "#fef9c3",
        iconColor: "#ca8a04",
        title: "Phishing",
        description: "Usurpation d'identité pour voler vos informations confidentielles",
    },
    {
        icon: <FaNetworkWired />,
        iconBg: "#ede9fe",
        iconColor: "#7c3aed",
        title: "Intrusions réseau",
        description: "Accès non autorisé à votre infrastructure informatique",
    },
    {
        icon: <FaDatabase />,
        iconBg: "#cffafe",
        iconColor: "#0891b2",
        title: "Fuite de données",
        description: "Exposition de données sensibles clients et entreprise",
    },
];

export default function MenacesCyber() {
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
                Principales menaces cyber
            </h2>
            <p className="text-gray-500 text-lg">
                Identifiez et anticipez les risques qui pèsent sur votre infrastructure informatique
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
            {menaces.map((menace, index) => (
                <motion.div
                key={index}
                variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
                }}
                className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-6"
                >
                <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: menace.iconBg, color: menace.iconColor }}
                >
                    {menace.icon}
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-black text-lg">{menace.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{menace.description}</p>
                </div>
                </motion.div>
            ))}
            </motion.div>

        </div>
        </section>
    );
}