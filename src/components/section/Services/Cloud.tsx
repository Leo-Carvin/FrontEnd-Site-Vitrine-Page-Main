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

            {/* Pour qui */}
            <div>
                <p className="text-xs font-bold text-[var(--color-1)] uppercase tracking-wider mb-1">Pour qui ?</p>
                <p className="text-sm text-gray-700">PME & ETI souhaitant moderniser leur infrastructure et outils de travail</p>
            </div>

            {/* Livrables */}
            <div>
                <p className="text-xs font-bold text-[var(--color-1)] uppercase tracking-wider mb-1">Livrables</p>
                <ul className="space-y-1">
                    {["Architecture cloud sur-mesure", "Environnement de travail configuré", "Documentation technique"].map((item, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-center">
                        <span className="mr-2 text-[var(--color-1)]">→</span> {item}
                    </li>
                    ))}
                </ul>
            </div>

            {/* Bénéfices */}
            <div className="p-3 bg-green-50 rounded-lg border border-green-100">
                <p className="text-xs font-bold text-green-700 uppercase tracking-wider mb-1">Bénéfices</p>
                <p className="text-sm text-green-800">Productivité accrue, flexibilité, réduction des coûts IT</p>
            </div>

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
                <div className="flex flex-col sm:flex-row gap-3 mt-2">
                    <Link href="/Page/Contact" className="bg-[var(--color-1)] text-white font-bold px-6 py-3 rounded-lg w-fit hover:bg-opacity-90 transition text-center">
                    Demander un audit →
                    </Link>
                    <Link href="/Page/Plateformes-Solutions" className="border border-gray-300 text-gray-700 font-medium px-6 py-3 rounded-lg w-fit hover:border-gray-400 transition text-center">
                    En savoir plus →
                    </Link>
                </div>
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