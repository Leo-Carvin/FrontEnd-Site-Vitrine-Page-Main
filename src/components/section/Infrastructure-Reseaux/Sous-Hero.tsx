"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FaCheckCircle } from "react-icons/fa";
import ReseauImg from "../../../../public/Image/57783.jpg";

export default function ReseauProductivite() {
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
                src={ReseauImg}
                alt="Réseau IT"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
            </motion.div>

            <div className="order-1 md:order-2 flex flex-col gap-6">

            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-3xl md:text-4xl font-bold text-[var(--color-1)] leading-tight"
            >
                Votre réseau, le cœur de votre productivité
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-white/80 leading-relaxed"
            >
                Dans un monde hyperconnecté, la performance de votre réseau détermine directement
                l'efficacité de vos équipes et la satisfaction de vos clients.
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
                "Réduction des temps de latence de 70%",
                "Sécurité renforcée contre les cyberattaques",
                "Supervision 24/7 et maintenance préventive",
                ].map((item, index) => (
                <motion.li
                    key={index}
                    variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
                    }}
                    className="flex items-center gap-3 text-white/90 text-sm"
                >
                    <FaCheckCircle className="text-[var(--color-1)] shrink-0" size={20} />
                    {item}
                </motion.li>
                ))}
            </motion.ul>

            </div>
        </div>
        </section>
    );
}