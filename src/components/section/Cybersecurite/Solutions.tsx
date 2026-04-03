"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FaCheck } from "react-icons/fa";
import AuditImg from "../../../../public/Image/cybersecurity-data-protection-concept.jpg";

export default function SolutionsCyber() {
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
                Nos solutions de cybersécurité
            </h2>
            <p className="text-gray-500 text-lg">
                Une approche complète pour sécuriser votre environnement digital
            </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            <div className="flex flex-col gap-6">

                <motion.h3
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-2xl font-bold text-black"
                >
                Audit de sécurité
                </motion.h3>

                <motion.p
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-gray-500 leading-relaxed"
                >
                Évaluation complète de votre posture de sécurité pour identifier les
                vulnérabilités avant qu'elles ne soient exploitées.
                </motion.p>

                <motion.ul
                className="flex flex-col gap-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.25 } },
                }}
                >
                {[
                    "Analyse des vulnérabilités système et réseau",
                    "Tests d'intrusion en conditions réelles",
                    "Évaluation des risques et plan d'action prioritaire",
                ].map((item, index) => (
                    <motion.li
                    key={index}
                    variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
                    }}
                    className="flex items-center gap-3 text-gray-600 text-sm"
                    >
                    <FaCheck className="text-[var(--color-1)] shrink-0" />
                    {item}
                    </motion.li>
                ))}
                </motion.ul>

            </div>

            <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <Image
                src={AuditImg}
                alt="Audit de sécurité"
                className="w-full max-w-sm h-auto object-contain"
                />
            </motion.div>

            </div>
        </div>
        </section>
    );
}