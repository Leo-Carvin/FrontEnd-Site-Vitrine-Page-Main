"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FaCode, FaBug } from "react-icons/fa";
import ShieldImg from "../../../../public/Image/cybersecurity-virus-protection-machine-learning.jpg";

export default function StatsDev() {
    return (
        <section className="bg-black py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            <motion.div
            className="order-2 md:order-1 flex justify-center"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            >
            <Image src={ShieldImg} alt="Secure Dev" className="rounded-xl w-full max-w-sm h-auto object-cover" />
            </motion.div>

            <div className="order-1 md:order-2 flex flex-col gap-6">

            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-3xl md:text-4xl font-bold text-white leading-tight"
            >
                La sécurité n'est pas une option,{" "}
                <span className="text-[var(--color-1)]">c'est une fondation</span>
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-gray-400 leading-relaxed"
            >
                Intégrer la sécurité dès la conception évite 80% des vulnérabilités
                critiques. CYNERIS applique une approche Shift-Left Security pour que
                chaque commit soit sécurisé dès le premier jour.
            </motion.p>

            <motion.ul
                className="flex flex-col gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.25 } } }}
            >
                <motion.li
                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } } }}
                className="flex items-start gap-3 text-gray-300 text-sm"
                >
                <FaBug className="text-red-500 shrink-0 mt-1" />
                <span>Vulnérabilités éliminées dès la conception avec le Threat Modeling STRIDE/DREAD</span>
                </motion.li>
                <motion.li
                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } } }}
                className="flex items-start gap-3 text-gray-300 text-sm"
                >
                <FaCode className="text-blue-400 shrink-0 mt-1" />
                <span>Détection en continu dans les pipelines CI/CD à chaque commit</span>
                </motion.li>
            </motion.ul>

            </div>
        </div>
        </section>
    );
}