"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FaCheck } from "react-icons/fa";
import DonneesImg from "../../../../public/Image/digital-world-banner-background-remixed-from-public-domain-by-nasa.jpg";

export default function SecteursData() {
    return (
        <section className="bg-[#F9FAFB] py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            <motion.div
                className="flex flex-col gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
            >
                <motion.h3
                    variants={{ hidden: { opacity: 0, x: -80 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
                    className="text-2xl font-bold text-black"
                >
                    Exemples sectoriels
                </motion.h3>

                <motion.p
                    variants={{ hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
                    className="text-gray-500 leading-relaxed"
                >
                    Notre expertise data s'adapte aux spécificités de chaque secteur
                    avec des cas d'usage éprouvés et mesurables.
                </motion.p>

                <motion.ul
                    className="flex flex-col gap-3"
                    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } } }}
                >
                    {[
                        "Défense — Signaux faibles et analyse prédictive de menaces",
                        "Aéronautique — Réduction empreinte carbone via IoT et data science",
                        "Assurance — Détection de fraudes et optimisation des processus",
                        "Santé — Excellence numérique et analyse de parcours patient",
                        "Retail — Marketing prédictif, CRM, optimisation supply chain",
                    ].map((item, index) => (
                        <motion.li
                            key={index}
                            variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } } }}
                            className="flex items-center gap-3 text-gray-600 text-sm"
                        >
                            <FaCheck className="text-[var(--color-1)] shrink-0" />
                            {item}
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>

            <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <Image src={DonneesImg} alt="Secteurs Data Science" className="rounded-2xl w-full max-w-sm h-auto object-contain" />
            </motion.div>

        </div>
        </div>
        </section>
    );
}