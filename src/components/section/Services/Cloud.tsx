"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { FaCloud, FaCheck } from "react-icons/fa";
import ReseauImg from "../../../../public/Image/hazel-z-FocSgUZ10JM-unsplash.jpg";

export default function Cloud() {
    return (
        <section className="bg-white py-20 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            <div className="flex flex-col gap-6">

            <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="w-14 h-14 rounded-xl bg-[var(--color-5)] flex items-center justify-center text-white text-2xl"
            >
                <FaCloud />
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-3xl font-bold text-black"
            >
                Plateformes & Solutions Cloud
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-gray-500 leading-relaxed"
            >
                Déploiement et intégration de solutions cloud et logiciels métiers pour optimiser
                votre productivité.
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
                "Solutions cloud hybrides",
                "Outils collaboratifs Microsoft 365",
                "Intégration logiciels métiers",
                "Migration et déploiement IT",
                ].map((item, index) => (
                <motion.li
                    key={index}
                    variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
                    }}
                    className="flex items-center gap-3 text-gray-600 text-sm"
                >
                    <FaCheck className="text-[var(--color-3)] shrink-0" />
                    {item}
                </motion.li>
                ))}
            </motion.ul>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <Link href="/Page/Plateformes-Solutions" className="text-[var(--color-3)] font-semibold hover:underline w-fit">
                En savoir plus →
                </Link>
            </motion.div>

            </div>

            <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            >
            <Image
                src={ReseauImg}
                alt="Plateformes & Solutions Cloud"
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
            </motion.div>

        </div>
        </section>
    );
}