"use client";

import { motion } from "motion/react";
import { FaCheck, FaTimes } from "react-icons/fa";

const criteres = [
  { label: "Support 24/7", cyneris: true, concurrent: false },
  { label: "Interlocuteur dédié", cyneris: true, concurrent: false },
  { label: "Forfait mensuel fixe", cyneris: true, concurrent: false },
  { label: "Intervention < 4h", cyneris: true, concurrent: false },
  { label: "Audit sécurité inclus", cyneris: true, concurrent: false },
  { label: "Conseil stratégique", cyneris: true, concurrent: false },
  { label: "Formation des équipes", cyneris: true, concurrent: false },
];

export default function Comparatif() {
    return (
        <section className="bg-[#F9FAFB] py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">

            <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center mb-16"
            >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                CYNERIS vs prestataires classiques
            </h2>
            <p className="text-gray-500 text-lg">
                Comparez par vous-même ce que nous offrons face au marché
            </p>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.1 }}
            className="bg-white rounded-2xl shadow-sm overflow-hidden"
            >
            <div className="grid grid-cols-3 bg-[var(--color-5)] text-white text-center py-4 px-6">
                <div className="text-left font-semibold">Critère</div>
                <div className="font-bold text-[var(--color-1)]">CYNERIS</div>
                <div className="font-semibold text-white/70">Prestataire classique</div>
            </div>

            {criteres.map((critere, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.06 }}
                viewport={{ once: true, amount: 0.1 }}
                className={`grid grid-cols-3 text-center py-4 px-6 items-center ${
                    index % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"
                }`}
                >
                <div className="text-left text-gray-700 text-sm font-medium">{critere.label}</div>
                <div className="flex justify-center">
                    {critere.cyneris ? (
                    <FaCheck className="text-green-500 text-lg" />
                    ) : (
                    <FaTimes className="text-red-400 text-lg" />
                    )}
                </div>
                <div className="flex justify-center">
                    {critere.concurrent ? (
                    <FaCheck className="text-green-500 text-lg" />
                    ) : (
                    <FaTimes className="text-red-400 text-lg" />
                    )}
                </div>
                </motion.div>
            ))}
            </motion.div>

        </div>
        </section>
    );
}