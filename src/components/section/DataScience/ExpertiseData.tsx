"use client";

import { motion } from "motion/react";
import { FaRobot, FaCopy, FaDatabase, FaLayerGroup } from "react-icons/fa";

const benefices = [
  { icon: <FaRobot />, title: "Modèle métier duplicable", description: "Des modèles conçus pour être réutilisés et adaptés à d'autres contextes" },
  { icon: <FaCopy />, title: "Nouveaux services à forte valeur", description: "Créez de nouvelles offres et revenus grâce à l'intelligence de vos données" },
  { icon: <FaDatabase />, title: "Données nettoyées & réutilisables", description: "Un patrimoine data structuré, fiable et exploitable sur le long terme" },
  { icon: <FaLayerGroup />, title: "Architecture extensible", description: "Infrastructure data conçue pour évoluer avec vos volumes et vos usages" },
];

export default function ExpertiseData() {
    return (
        <section
        className="py-20 px-6 md:px-20"
        style={{ background: "linear-gradient(to bottom right, var(--color-3) 0%, var(--color-5) 100%)" }}
        >
        <div className="max-w-6xl mx-auto">

            <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center mb-16"
            >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Donner de l'intelligence à vos données
            </h2>
            <p className="text-white/60 text-lg">Pour éclairer vos décisions et accélérer votre croissance</p>
            </motion.div>

            <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
            >
            {benefices.map((item, index) => (
                <motion.div
                key={index}
                variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-[#ffffff10] rounded-2xl p-6 flex flex-col gap-4"
                >
                <div className="w-14 h-14 rounded-xl bg-[#ffffff15] flex items-center justify-center text-[var(--color-1)] text-2xl">
                    {item.icon}
                </div>
                <h3 className="font-bold text-white text-lg">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
            ))}
            </motion.div>

        </div>
        </section>
    );
}