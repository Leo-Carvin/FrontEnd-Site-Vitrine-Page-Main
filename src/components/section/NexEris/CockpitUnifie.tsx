"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FaTv } from "react-icons/fa";
import DataImg from "../../../../public/Image/protection-concept-with-lock.jpg";

export default function CockpitUnifie() {
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
                        Un cockpit unique pour piloter{" "}
                        <span className="text-[var(--color-1)]">votre posture cyber</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="text-gray-400 leading-relaxed"
                    >
                        NEX.ERIS fédère les signaux de vos infrastructures (switches, firewalls,
                        sondes, SIEM, EDR, NDR) pour offrir une vue unifiée et actionnable.
                        Que ce soit en termes de failles technologiques, de Business Impact
                        ou de Compliance, vous monitorez la situation et prenez les bonnes décisions.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex items-center gap-3 text-[var(--color-1)] font-semibold"
                    >
                        <FaTv />
                        <span>Visibilité 360° en temps réel sur 100% de vos sources</span>
                    </motion.div>

                </div>

                <motion.div
                    className="order-2 md:order-1"
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <Image src={DataImg} alt="Cockpit NEX.ERIS" className="rounded-2xl w-full h-auto object-cover" />
                </motion.div>

            </div>
        </section>
    );
}