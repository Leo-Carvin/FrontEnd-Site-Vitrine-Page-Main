"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FaCheck } from "react-icons/fa";
import SensibilisationImg from "../../../../public/Image/20945823.jpg";

export default function Sensibilisation() {
    return (
        <section className="bg-white py-20 px-6 md:px-20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                <motion.div
                    className="flex justify-center order-2 md:order-1"
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <Image
                        src={SensibilisationImg}
                        alt="Protection des infrastructures"
                        className="w-full max-w-sm h-auto object-contain"
                    />
                </motion.div>

                <div className="order-1 md:order-2 flex flex-col gap-6">

                    <motion.h3
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="text-2xl font-bold text-black"
                    >
                        Sensibilisation & accompagnement
                    </motion.h3>

                    <motion.p
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="text-gray-500 leading-relaxed"
                    >
                        Formation de vos équipes aux bonnes pratiques de sécurité et accompagnement continu.
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
                            "Formation des collaborateurs aux risques cyber",
                            "Mise en place de bonnes pratiques",
                            "Support et maintenance continue",
                        ].map((item, index) => (
                            <motion.li
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, x: 20 },
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

            </div>
        </section>
    );
}