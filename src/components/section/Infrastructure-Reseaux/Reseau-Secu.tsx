"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FaCheck, FaLock } from "react-icons/fa";
import SecuImg from "../../../../public/Image/abstract-cybersecurity-concept-design.jpg";

export default function SecurisationReseau() {
    return (
        <section className="bg-[#F9FAFB] py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            <div className="order-1 flex flex-col gap-6">

            <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center text-white text-2xl"
            >
                <FaLock />
            </motion.div>

            <motion.h3
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-2xl font-bold text-black"
            >
                Sécurisation réseau
            </motion.h3>

            <motion.p
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-gray-500"
            >
                Protection avancée contre les menaces internes et externes
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
                "Firewalls nouvelle génération",
                "VPN sécurisés",
                "Détection d'intrusion",
                ].map((item, index) => (
                <motion.li
                    key={index}
                    variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
                    }}
                    className="flex items-center gap-3 text-gray-600 text-sm"
                >
                    <FaCheck className="text-red-500 shrink-0" />
                    {item}
                </motion.li>
                ))}
            </motion.ul>

            </div>

            <motion.div
            className="order-2"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            >
            <Image
                src={SecuImg}
                alt="Sécurisation réseau"
                className="rounded-2xl w-full h-auto object-cover"
            />
            </motion.div>

        </div>
        </section>
    );
}