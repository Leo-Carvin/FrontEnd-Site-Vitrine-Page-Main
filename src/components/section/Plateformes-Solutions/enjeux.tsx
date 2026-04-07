"use client";

import { motion } from "motion/react";
import { FaUsers, FaLayerGroup, FaCogs, FaShieldAlt } from "react-icons/fa";

const enjeux = [
  {
    icon: <FaUsers />,
    title: "Collaboration à distance",
    description: "Faciliter le travail collaboratif et la communication entre équipes dispersées géographiquement.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Centralisation des outils",
    description: "Unifier les applications métiers dans un environnement cohérent et accessible.",
  },
  {
    icon: <FaCogs />,
    title: "Automatisation des processus",
    description: "Optimiser les workflows et réduire les tâches manuelles répétitives.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Accès sécurisé",
    description: "Garantir un accès sécurisé aux applications critiques depuis n'importe où.",
  },
];

export default function EnjeuxCloud() {
    return (
        <section className="bg-[#F9FAFB] py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Les enjeux des entreprises modernes
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Face à la transformation digitale, les organisations doivent relever des défis technologiques majeurs
            </p>
        </motion.div>

        {/* CARDS */}
        <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.12,
                        delayChildren: 0.2,
                    },
                },
            }}
        >
            {enjeux.map((item, index) => (
                <motion.div
                    key={index}
                    variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.7, ease: "easeOut" },
                        },
                    }}
                    whileHover={{ scale: 1.04 }}
                    className="bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-sm"
                >
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-5)] flex items-center justify-center text-white text-xl">
                        {item.icon}
                    </div>

                    <h3 className="font-bold text-black text-lg">
                        {item.title}
                    </h3>

                    <p className="text-gray-500 text-sm leading-relaxed">
                        {item.description}
                    </p>
                </motion.div>
            ))}
        </motion.div>

        </div>
        </section>
    );
}