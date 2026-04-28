"use client";

import { motion } from "motion/react";
import { FaArrowRight, FaChartLine, FaShieldAlt, FaRocket } from "react-icons/fa";
import Link from "next/link";

const casEtudes = [
  {
    icon: <FaShieldAlt />,
    title: "Cybersécurité",
    client: "Hôpital de la Côte d'Azur",
    challenge: "Protection des données patients sensibles",
    result: "-100% incidents de sécurité",
    metric: "Certification HDS obtenue",
    color: "var(--color-1)",
  },
  {
    icon: <FaChartLine />,
    title: "Data Science",
    client: "Groupe Mediterranean",
    challenge: "Optimisation des processus logistiques",
    result: "+35% productivité",
    metric: "Économies : 25K€/an",
    color: "var(--color-2)",
  },
  {
    icon: <FaRocket />,
    title: "Automatisation",
    client: "Cabinet Comptable Martin",
    challenge: "Automatisation des tâches récurrentes",
    result: "60% temps gagné",
    metric: "3 semaines de déploiement",
    color: "var(--color-3)",
  },
];

export default function Proof() {
    return (
        <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
            <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
            >
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-[var(--color-1)] mb-4">
                Preuves
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Des résultats concrets
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Découvrez comment nous avons aidé nos clients à transformer leur infrastructure IT
            </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {casEtudes.map((cas, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-[#F9FAFB] rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow"
                >
                <div className="flex items-center gap-3 mb-4">
                    <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                    style={{ background: cas.color }}
                    >
                    {cas.icon}
                    </div>
                    <span
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: cas.color }}
                    >
                    {cas.title}
                    </span>
                </div>

                <h3 className="font-bold text-black text-lg mb-2">{cas.client}</h3>
                <p className="text-gray-500 text-sm mb-4">{cas.challenge}</p>

                <div className="bg-white rounded-xl p-4 border border-gray-100 mb-4">
                    <p className="text-xs text-gray-400 mb-1">Résultat</p>
                    <p className="font-bold text-xl" style={{ color: cas.color }}>
                    {cas.result}
                    </p>
                </div>

                <p className="text-xs text-gray-400">
                    <span className="font-semibold">✦</span> {cas.metric}
                </p>
                </motion.div>
            ))}
            </div>

            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
            >
            <Link
                href="/Page/Avantages"
                className="inline-flex items-center gap-2 text-[var(--color-1)] font-semibold hover:gap-3 transition-all"
            >
                Voir tous nos avantages <FaArrowRight />
            </Link>
            </motion.div>
        </div>
        </section>
    );
}