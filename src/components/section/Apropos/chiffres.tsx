"use client";

import { motion } from "motion/react";
import { FaBuilding, FaUserTie, FaStar, FaProjectDiagram } from "react-icons/fa";

const chiffres = [
    { icon: <FaBuilding />, value: "200+", label: "Clients accompagnés" },
    { icon: <FaUserTie />,  value: "30",   label: "Experts certifiés" },
    { icon: <FaStar />,     value: "15+",  label: "Années d'expertise" },
    { icon: <FaProjectDiagram />, value: "500+", label: "Projets réalisés" },
    ];

    export default function Chiffres() {
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
            CYNERIS en chiffres
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
            {chiffres.map((item, index) => (
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
                <span className="text-white/80 text-sm">{item.label}</span>
            </motion.div>
            ))}
        </motion.div>
        </section>
    );
}