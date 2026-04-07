"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FaCheck } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import PraImg from "../../../../public/Image/19199448.jpg";

export default function PlanRepriseActivite() {
    return (
        <section className="bg-white py-20 px-6 md:px-20">
            <div className="max-w-6xl mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    <motion.div
                        className="order-2 md:order-1"
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <Image
                            src={PraImg}
                            alt="Plan de reprise d'activité"
                            className="rounded-2xl w-full h-auto object-cover"
                        />
                    </motion.div>

                    <div className="order-1 md:order-2 flex flex-col gap-6">

                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="w-14 h-14 rounded-xl bg-blue-500 flex items-center justify-center text-white text-2xl"
                        >
                            <FiRefreshCw />
                        </motion.div>

                        <motion.h3
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="text-2xl font-bold text-black"
                        >
                            Plan de Reprise d'Activité
                        </motion.h3>

                        <motion.p
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="text-gray-500 leading-relaxed"
                        >
                            Assurez la continuité de votre activité avec un PRA adapté à vos besoins.
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
                                "Analyse des risques",
                                "Mise en place stratégie de reprise",
                                "Tests réguliers",
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, x: 20 },
                                        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
                                    }}
                                    className="flex items-center gap-3 text-gray-600 text-sm"
                                >
                                    <FaCheck className="text-green-500 shrink-0" />
                                    {item}
                                </motion.li>
                            ))}
                        </motion.ul>

                    </div>

                </div>
            </div>
        </section>
    );
}