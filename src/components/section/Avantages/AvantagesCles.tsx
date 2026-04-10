"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FaCheckCircle } from "react-icons/fa";
import AvantagesImg from "../../../../public/Image/workers-it-company-working-computer.jpg";

export default function AvantagesCles() {
    return (
        <section
        className="py-20 px-6 md:px-20"
        style={{ background: "linear-gradient(to bottom right, var(--color-5) 0%, var(--color-3) 100%)" }}
        >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            >
            <Image
                src={AvantagesImg}
                alt="Avantages clés CYNERIS"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
            </motion.div>

            <div className="order-1 md:order-2 flex flex-col gap-6">

            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-3xl md:text-4xl font-bold text-white leading-tight"
            >
                Ce que CYNERIS vous apporte concrètement
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-white/80 leading-relaxed"
            >
                Un partenaire IT unique qui centralise toute votre infrastructure,
                vous fait gagner du temps et vous permet de vous concentrer sur votre cœur de métier.
            </motion.p>

            <motion.ul
                className="flex flex-col gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.25 } },
                }}
            >
                {[
                "Réduction des incidents de 70% grâce à la supervision proactive",
                "Intervention garantie en moins de 4h sur site",
                "Budget IT prévisible avec nos forfaits mensuels fixes",
                "Un interlocuteur unique pour toutes vos problématiques",
                "Conformité RGPD et sécurité certifiée",
                ].map((item, index) => (
                <motion.li
                    key={index}
                    variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
                    }}
                    className="flex items-center gap-3 text-white/90 text-sm"
                >
                    <FaCheckCircle className="text-[var(--color-1)] shrink-0" size={18} />
                    {item}
                </motion.li>
                ))}
            </motion.ul>

            </div>
        </div>
        </section>
    );
}