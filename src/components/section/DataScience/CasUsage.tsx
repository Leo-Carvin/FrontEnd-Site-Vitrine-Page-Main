"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FaCheck } from "react-icons/fa";
import ProtectionImg from "../../../../public/Image/rm373batch10-47.jpg";

export default function CasUsage() {
    return (
        <section className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <motion.div
            className="flex justify-center order-2 md:order-1"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <Image src={ProtectionImg} alt="Cas d'usage Data" className="rounded-2xl w-full max-w-sm h-auto object-contain" />
        </motion.div>

        <motion.div
            className="order-1 md:order-2 flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
            <motion.h3
                variants={{ hidden: { opacity: 0, x: 80 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
                className="text-2xl font-bold text-black"
            >
                Cas d'usage
            </motion.h3>

            <motion.p
                variants={{ hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
                className="text-gray-500 leading-relaxed"
            >
                Des applications concrètes couvrant vos enjeux les plus critiques,
                de la cybersécurité à l'optimisation commerciale.
            </motion.p>

            <motion.ul
                className="flex flex-col gap-3"
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } } }}
            >
                {[
                    "Détection d'anomalies réseau et menaces cyber en temps réel",
                    "Chatbot intelligent pour le support client et l'assistance technique",
                    "Conformité aux normes de sécurité (ISO 27001, NIS2...)",
                    "Scoring prédictif pour la qualification d'opportunités commerciales",
                    "Tarification dynamique basée sur l'analyse comportementale",
                ].map((item, index) => (
                    <motion.li
                        key={index}
                        variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } } }}
                        className="flex items-center gap-3 text-gray-600 text-sm"
                    >
                        <FaCheck className="text-[var(--color-1)] shrink-0" />
                        {item}
                    </motion.li>
                ))}
            </motion.ul>

        </motion.div>

        </div>
        </section>
    );
}