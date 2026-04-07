"use client";

import { motion } from "motion/react";
import { FaClock, FaChartLine, FaSyncAlt, FaHeadset } from "react-icons/fa";

const garanties = [
    {
        icon: <FaClock />,
        value: "24/7",
        title: "Surveillance continue de vos données",
    },
    {
        icon: <FaChartLine />,
        value: "99.9%",
        title: "Disponibilité garantie",
    },
    {
        icon: <FaSyncAlt />,
        value: "Automatisé",
        title: "Sauvegardes automatiques",
    },
    {
        icon: <FaHeadset />,
        value: "Support",
        title: "Équipe réactive et experte",
    },
];

export default function Tranquillite() {
    return (
        <section
            className="py-20 px-6 md:px-20"
            style={{
                background:
                    "linear-gradient(to bottom right, var(--color-2) 0%, var(--color-5) 100%)",
            }}
        >
        <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center mb-16"
        >
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
                Votre tranquillité d&apos;esprit
            </h2>
            <p className="text-white/70 text-lg">
                Des garanties solides pour protéger votre activité
            </p>
        </motion.div>

        {/* CARDS */}
        <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.15,
                        delayChildren: 0.2,
                    },
                },
            }}
        >
            {garanties.map((item, index) => (
                <motion.div
                    key={index}
                    variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.8, ease: "easeOut" },
                        },
                    }}
                    className="flex flex-col items-center text-center gap-4"
                >
                    <div className="w-16 h-16 rounded-full bg-[#ffffff20] flex items-center justify-center text-[var(--color-1)] text-3xl">
                        {item.icon}
                    </div>

                    <span className="text-white text-2xl font-bold">
                        {item.value}
                    </span>

                    <span className="text-white/70 text-sm">
                        {item.title}
                    </span>
                </motion.div>
            ))}
        </motion.div>

        </div>
        </section>
    );
}