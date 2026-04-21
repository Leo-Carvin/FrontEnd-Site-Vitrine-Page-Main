"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FaCheck } from "react-icons/fa";
import DonneesImg from "../../../../public/Image/digital-world-banner-background-remixed-from-public-domain-by-nasa.jpg";

export default function Secteurs() {
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
                    Secteurs cibles
                </motion.h3>

                <motion.p
                    variants={{ hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
                    className="text-gray-500 leading-relaxed"
                >
                    NEX.ERIS s'adapte aux environnements les plus exigeants,
                    des infrastructures classifiées aux systèmes industriels critiques.
                </motion.p>

                <motion.ul
                    className="flex flex-col gap-3"
                    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } } }}
                >
                    {[
                        "Défense — Monitoring air-gapped, signaux faibles, conformité LPM",
                        "Retail — Supervision, Back Up, traçabilité des flux, NFZ 42020",
                        "Assurance — Détection de fraudes, pilotage du risque cyber",
                        "Santé — Protection des données patient, conformité HDS/NIS2",
                        "Industrie — Supervision IoT/OT, collecte multi-site, alerting critique",
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
                <Image src={DonneesImg} alt="Secteurs NEX.ERIS" className="rounded-2xl w-full max-w-sm h-auto object-contain" />
            </motion.div>

        </div>
        </div>
        </section>
    );
}