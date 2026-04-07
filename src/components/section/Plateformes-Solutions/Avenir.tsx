"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FaCheckCircle } from "react-icons/fa";
import CloudImg from "../../../../public/Image/45208-removebg-preview.png";

export default function EnjeuxCloud() {
    return (
        <section
            className="py-20 px-6 md:px-20 relative overflow-hidden"
            style={{
                background:
                    "linear-gradient(to bottom right, var(--color-5) 0%, var(--color-2) 100%)",
            }}
        >
            <span className="absolute top-[10px] left-[10px] w-32 h-32 bg-white/10 rounded-full"></span>
            <span className="absolute bottom-[10px] right-[10px] w-32 h-32 bg-white/10 rounded-full"></span>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                <motion.div
                    className="flex flex-col gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.15,
                            },
                        },
                    }}
                >
                    <motion.h2
                        variants={{
                            hidden: { opacity: 0, x: -80 },
                            visible: {
                                opacity: 1,
                                x: 0,
                                transition: { duration: 0.8, ease: "easeOut" },
                            },
                        }}
                        className="text-3xl md:text-4xl font-bold text-white leading-tight"
                    >
                        L'avenir de votre entreprise se joue dans le cloud
                    </motion.h2>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, x: -60 },
                            visible: {
                                opacity: 1,
                                x: 0,
                                transition: { duration: 0.8, ease: "easeOut" },
                            },
                        }}
                        className="text-white/70 leading-relaxed"
                    >
                        La transformation digitale n'est plus une option mais une nécessité. Les plateformes modernes permettent aux entreprises d'être plus agiles, plus efficaces et plus compétitives.
                    </motion.p>

                    <motion.ul
                        className="flex flex-col gap-3"
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.08,
                                    delayChildren: 0.3,
                                },
                            },
                        }}
                    >
                        {[
                            "Réduction des coûts opérationnels de 30%",
                            "Amélioration de la productivité équipe",
                            "Évolutivité et flexibilité maximales",
                        ].map((item, index) => (
                            <motion.li
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, x: -30 },
                                    visible: {
                                        opacity: 1,
                                        x: 0,
                                        transition: { duration: 0.5, ease: "easeOut" },
                                    },
                                }}
                                className="flex items-center gap-3 text-white/90 text-sm"
                            >
                                <FaCheckCircle className="text-[var(--color-1)] shrink-0" />
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
                    <Image
                        src={CloudImg}
                        alt="Cloud computing"
                        className="w-full max-w-sm h-auto object-contain"
                    />
                </motion.div>

            </div>
        </section>
    );
}