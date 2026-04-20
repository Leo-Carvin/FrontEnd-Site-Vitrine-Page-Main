"use client";

import { motion } from "motion/react";
import { FaSearch, FaDatabase, FaBroom, FaBrain, FaRocket } from "react-icons/fa";

const etapes = [
  { icon: <FaSearch />, title: "Cadrage du use case", description: "Co-construction du cas d'usage avec vos équipes métier" },
  { icon: <FaDatabase />, title: "Qualité des données", description: "Évaluation et cartographie de votre patrimoine data" },
  { icon: <FaBroom />, title: "Nettoyage & préparation", description: "Structuration et enrichissement de vos jeux de données" },
  { icon: <FaBrain />, title: "Entraînement du modèle", description: "Développement et optimisation du modèle IA adapté" },
  { icon: <FaRocket />, title: "Déploiement & monitoring", description: "Mise en production et supervision continue des performances" },
];

export default function Demarche() {
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
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Notre démarche</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Un processus itératif en 5 phases, du cadrage à la mise en production
            </p>
        </motion.div>

        <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
        >
            {etapes.map((item, index) => (
                <motion.div
                    key={index}
                    variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } }}
                    className="bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-sm"
                >
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-5)] flex items-center justify-center text-white text-xl">
                        {item.icon}
                    </div>
                    <span className="text-xs font-bold text-gray-400 tracking-widest">PHASE {index + 1}</span>
                    <h3 className="font-bold text-black text-sm leading-snug">{item.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
                </motion.div>
            ))}
        </motion.div>

        </div>
        </section>
    );
}