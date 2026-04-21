"use client";

import { motion } from "motion/react";
import { FaDatabase, FaFilter, FaBell, FaTv, FaPlug } from "react-icons/fa";

const etapes = [
    { icon: <FaDatabase />, title: "Collecte multi-sources", description: "Switches, firewalls, sondes, SIEM, EDR, NDR unifiés" },
    { icon: <FaFilter />, title: "Normalisation & enrichissement", description: "Standardisation et contextualisation des événements" },
    { icon: <FaBell />, title: "Corrélation & alerting", description: "Alertes par seuils, patterns et fenêtres temporelles" },
    { icon: <FaTv />, title: "Cockpit unifié", description: "Vues SOC, CISO, NOC et Management en temps réel" },
    { icon: <FaPlug />, title: "Intégrations & exports", description: "ITSM, SSO, webhooks, API ouverte, exports CSV/JSON" },
];

export default function ChainTraitement() {
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
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">La chaîne de traitement</h2>
                    <p className="text-gray-500 text-lg">De la collecte à la décision, un pipeline cyber unifié</p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } } }}
                >
                    {etapes.map((etape, index) => (
                        <motion.div
                            key={index}
                            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
                            className="bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-sm"
                        >
                            <div className="text-[var(--color-2)] text-3xl">{etape.icon}</div>
                            <span className="text-xs font-bold text-gray-400 tracking-widest">ÉTAPE {index + 1}</span>
                            <h3 className="font-bold text-black text-sm">{etape.title}</h3>
                            <p className="text-gray-500 text-xs leading-relaxed">{etape.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}