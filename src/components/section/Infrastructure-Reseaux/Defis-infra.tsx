"use client";

import { motion } from "motion/react";
import { FaClock, FaExclamationTriangle, FaShieldAlt, FaChartLine } from "react-icons/fa";

const defis = [
    {
        icon: <FaClock />,
        iconBg: "#fecaca",
        iconColor: "#dc2626",
        title: "Lenteurs réseau",
        description: "Perte de productivité et frustration des utilisateurs face aux temps de réponse élevés",
    },
    {
        icon: <FaExclamationTriangle />,
        iconBg: "#fed7aa",
        iconColor: "#ea580c",
        title: "Interruptions",
        description: "Pannes récurrentes qui paralysent l'activité et impactent la continuité de service",
    },
    {
        icon: <FaShieldAlt />,
        iconBg: "#fecaca",
        iconColor: "#dc2626",
        title: "Failles de sécurité",
        description: "Vulnérabilités exposant vos données sensibles aux cybermenaces externes",
    },
    {
        icon: <FaChartLine />,
        iconBg: "#fef08a",
        iconColor: "#ca8a04",
        title: "Manque de supervision",
        description: "Absence de monitoring proactif pour anticiper et prévenir les incidents",
    },
];

export default function Defis() {
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
                Les défis de votre infrastructure réseau
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Identifiez et résolvez les problématiques qui impactent votre performance business
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
            {defis.map((defi, index) => (
                <motion.div
                key={index}
                variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
                }}
                className="bg-[#F9FAFB] rounded-2xl p-6 flex flex-col gap-6"
                >
                <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-xl"
                    style={{ background: defi.iconBg, color: defi.iconColor }}
                >
                    {defi.icon}
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-black text-lg">{defi.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{defi.description}</p>
                </div>
                </motion.div>
            ))}
            </motion.div>

        </div>
        </section>
    );
}