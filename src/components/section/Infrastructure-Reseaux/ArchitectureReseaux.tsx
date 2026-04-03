"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FaCheck, FaSitemap } from "react-icons/fa";
import ReseauImg from "../../../../public/Image/57789.jpg";

export default function ExpertisesReseau() {
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
                Nos expertises réseau
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Une approche complète pour optimiser, sécuriser et maintenir votre infrastructure
            </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            <div className="flex flex-col gap-6">

                <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="w-14 h-14 rounded-full bg-[var(--color-4)] flex items-center justify-center text-white text-2xl"
                >
                <FaSitemap />
                </motion.div>

                <motion.h3
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-2xl font-bold text-black"
                >
                Architecture réseau
                </motion.h3>

                <motion.p
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-gray-500"
                >
                Conception sur mesure d'infrastructures évolutives et performantes
                </motion.p>

                <motion.ul
                className="flex flex-col gap-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
                }}
                >
                {[
                    "Audit de l'existant",
                    "Dimensionnement optimal",
                    "Architecture redondante",
                ].map((item, index) => (
                    <motion.li
                    key={index}
                    variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
                    }}
                    className="flex items-center gap-3 text-gray-600 text-sm"
                    >
                    <FaCheck className="text-[var(--color-4)] shrink-0" />
                    {item}
                    </motion.li>
                ))}
                </motion.ul>

            </div>

            <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <Image
                src={ReseauImg}
                alt="Architecture réseau"
                className="rounded-2xl w-full h-auto object-cover"
                />
            </motion.div>

            </div>
        </div>
        </section>
    );
}