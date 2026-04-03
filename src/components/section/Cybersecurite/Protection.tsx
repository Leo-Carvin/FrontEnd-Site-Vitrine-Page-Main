"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FaCheck } from "react-icons/fa";
import DonneesImg from "../../../../public/Image/3786012.jpg";

export default function ProtectionDonnees() {
    return (
        <section className="bg-[#F9FAFB] py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            <div className="flex flex-col gap-6">

                <motion.h3
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-2xl font-bold text-black"
                >
                Protection des données
                </motion.h3>

                <motion.p
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-gray-500 leading-relaxed"
                >
                Chiffrement et sauvegarde sécurisée de vos données critiques avec plan de
                continuité d'activité.
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
                    "Chiffrement des données sensibles",
                    "Sauvegarde sécurisée et testée",
                    "Plan de reprise d'activité (PRA)",
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
                src={DonneesImg}
                alt="ProtectionDesDonnees"
                className="w-full max-w-sm h-auto object-contain"
                />
            </motion.div>

            </div>
        </div>
        </section>
    );
}