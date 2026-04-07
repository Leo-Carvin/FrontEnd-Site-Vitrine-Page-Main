"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FaShieldAlt } from "react-icons/fa";
import DataImg from "../../../../public/Image/protection-concept-with-lock.jpg";

export default function ImportanceDonnees() {
    return (
        <section className="bg-black py-20 px-6 md:px-20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                <div className="order-1 md:order-2 flex flex-col gap-6">

                    <motion.h2
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="text-3xl md:text-4xl font-bold text-white leading-tight"
                    >
                        L'importance cruciale de vos données
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="text-gray-400 leading-relaxed"
                    >
                        Dans un monde numérique en constante évolution, vos données représentent le cœur de votre activité. Une perte, une corruption ou un accès non autorisé peut compromettre votre entreprise en quelques minutes.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="text-gray-400 leading-relaxed"
                    >
                        C'est pourquoi CYNERIS met à votre disposition des solutions de protection et de sauvegarde de niveau entreprise, adaptées à vos enjeux métier.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex items-center gap-3 text-[var(--color-1)] font-semibold"
                    >
                        <FaShieldAlt />
                        <span>Protection garantie 24/7</span>
                    </motion.div>

                </div>

                <motion.div
                    className="order-2 md:order-1 md:order-last"
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <Image
                        src={DataImg}
                        alt="Importance des données"
                        className="rounded-2xl w-full h-auto object-cover"
                    />
                </motion.div>

            </div>
        </section>
    );
}