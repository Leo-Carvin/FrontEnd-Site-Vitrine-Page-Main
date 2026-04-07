"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FaCheck } from "react-icons/fa";
import AuditImg from "../../../../public/Image/1a13666e-28ef-4873-98b4-a24505b97c26.jpg";

export default function SolutionsCloud() {
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
                Nos solutions plateformes
            </h2>
            <p className="text-gray-500 text-lg">
                CYNERIS déploie des solutions technologiques adaptées à vos besoins spécifiques
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

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
                <motion.h3
                    variants={{
                        hidden: { opacity: 0, x: -80 },
                        visible: {
                            opacity: 1,
                            x: 0,
                            transition: { duration: 0.8, ease: "easeOut" },
                        },
                    }}
                    className="text-2xl font-bold text-black"
                >
                    Solutions Cloud
                </motion.h3>

                <motion.p
                    variants={{
                        hidden: { opacity: 0, x: -60 },
                        visible: {
                            opacity: 1,
                            x: 0,
                            transition: { duration: 0.8, ease: "easeOut" },
                        },
                    }}
                    className="text-gray-500 leading-relaxed"
                >
                    Migrez vers le cloud et bénéficiez d'une infrastructure moderne, évolutive et sécurisée pour vos applications critiques.
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
                        "Migration sécurisée vers AWS, Azure ou Google Cloud",
                        "Hébergement haute disponibilité",
                        "Gestion des environnements multi-cloud",
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
                <Image
                    src={AuditImg}
                    alt="Audit de sécurité"
                    className="rounded-2xl w-full max-w-sm h-auto object-contain"
                />
            </motion.div>

        </div>
        </div>
        </section>
    );
}