"use client";

import { motion } from "motion/react";
import { FaQuoteLeft } from "react-icons/fa";

const temoignages = [
    {
        texte: "Depuis que nous travaillons avec CYNERIS, nos incidents informatiques ont diminué de 80%. L'équipe est réactive et toujours disponible.",
        auteur: "Marie Dupont",
        poste: "DSI - Cabinet d'architecture",
        initiales: "MD",
        color: "var(--color-1)",
    },
    {
        texte: "Le passage à CYNERIS nous a permis de maîtriser notre budget IT avec un forfait clair. Plus de mauvaises surprises en fin de mois.",
        auteur: "Jean-Pierre Lefèvre",
        poste: "Gérant - PME industrielle",
        initiales: "JL",
        color: "var(--color-2)",
    },
    {
        texte: "L'audit de sécurité réalisé par CYNERIS a révélé des vulnérabilités critiques que nous ignorions. Leur intervention a été décisive.",
        auteur: "Sophie Renaud",
        poste: "Directrice - Cabinet médical",
        initiales: "SR",
        color: "var(--color-3)",
    },
];

export default function Temoignages() {
    return (
        <section className="bg-[#F9FAFB] py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">

            <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center mb-16"
            >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Ils nous font confiance
            </h2>
            <p className="text-gray-500 text-lg">
                Découvrez ce que nos clients disent de leur expérience avec CYNERIS
            </p>
            </motion.div>

            <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
            }}
            >
            {temoignages.map((t, index) => (
                <motion.div
                key={index}
                variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
                }}
                className="bg-white rounded-2xl p-8 flex flex-col gap-6 shadow-sm"
                >
                <FaQuoteLeft className="text-3xl" style={{ color: t.color }} />
                <p className="text-gray-600 text-sm leading-relaxed italic">{t.texte}</p>
                <div className="flex items-center gap-4 mt-auto">
                    <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                    style={{ background: t.color }}
                    >
                    {t.initiales}
                    </div>
                    <div>
                    <p className="font-bold text-black text-sm">{t.auteur}</p>
                    <p className="text-gray-400 text-xs">{t.poste}</p>
                    </div>
                </div>
                </motion.div>
            ))}
            </motion.div>

        </div>
        </section>
    );
}