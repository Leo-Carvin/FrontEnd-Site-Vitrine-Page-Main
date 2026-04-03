"use client";

import { motion } from "motion/react";

const etapes = [
  {
    number: "1",
    title: "Analyse & Audit",
    description: "Évaluation complète de votre infrastructure existante et identification des besoins",
    color: "var(--color-1)",
  },
  {
    number: "2",
    title: "Recommandations",
    description: "Stratégie personnalisée avec roadmap détaillée et priorisation des actions",
    color: "var(--color-2)",
  },
  {
    number: "3",
    title: "Déploiement",
    description: "Mise en œuvre progressive avec tests rigoureux et formation des équipes",
    color: "var(--color-3)",
  },
  {
    number: "4",
    title: "Suivi & Support",
    description: "Maintenance continue, optimisations et support technique réactif",
    color: "var(--color-4)",
  },
];

export default function Methodologie() {
  return (
    <section className="bg-[#F9FAFB] py-16 px-6 md:px-20">

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Notre méthodologie éprouvée
        </h2>
        <p className="text-gray-500 text-lg">
          Un processus structuré en 4 étapes pour garantir le succès de votre projet IT
        </p>
      </motion.div>

      <motion.div
        className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
        }}
      >
        {etapes.map((etape, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
            }}
            className="flex flex-col items-center text-center gap-4"
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold"
              style={{ background: etape.color }}
            >
              {etape.number}
            </div>
            <h3 className="font-bold text-black text-lg">{etape.title}</h3>
            <p className="text-gray-500 text-sm">{etape.description}</p>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}