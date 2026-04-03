"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { FaServer, FaCheck } from "react-icons/fa";
import InfraImg from "../../../../public/Image/long-hallway-with-row-servers-center.jpg";

export default function Virtualisation() {
    return (
        <section className="bg-[#F9FAFB] py-20 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            >
            <Image
                src={InfraImg}
                alt="Infrastructure & Virtualisation"
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
            </motion.div>

            <div className="flex flex-col gap-6 order-1 md:order-2">

            <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="w-14 h-14 rounded-xl bg-[var(--color-5)] flex items-center justify-center text-white text-2xl"
            >
                <FaServer />
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-3xl font-bold text-black"
            >
                Infrastructure & Virtualisation
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-gray-500 leading-relaxed"
            >
                Solutions d'infrastructure moderne alliant performance, fiabilité et optimisation
                des coûts grâce à la virtualisation.
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
                "Serveurs physiques et virtuels",
                "Virtualisation et consolidation",
                "Maintenance préventive et corrective",
                "Plan de continuité d'activité",
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
                <Link
                href="/Page/Services#infrastructure"
                className="text-[var(--color-3)] font-semibold hover:underline w-fit"
                >
                En savoir plus →
                </Link>
            </motion.div>

            </div>
        </div>
        </section>
    );
}