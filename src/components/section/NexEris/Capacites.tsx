"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FaCheck } from "react-icons/fa";
import ProtectionImg from "../../../../public/Image/rm373batch10-47.jpg";

export default function Capacites() {
    return (
        <section className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <motion.div
            className="flex justify-center order-2 md:order-1"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <Image src={ProtectionImg} alt="Capacités NEX.ERIS" className="rounded-2xl w-full max-w-sm h-auto object-contain" />
        </motion.div>

        <motion.div
            className="order-1 md:order-2 flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
            <motion.h3
                variants={{ hidden: { opacity: 0, x: 80 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
                className="text-2xl font-bold text-black"
            >
                Capacités clés
            </motion.h3>

            <motion.p
                variants={{ hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
                className="text-gray-500 leading-relaxed"
            >
                Un cockpit cyber unifié pour protéger, prouver et piloter
                votre posture de sécurité en temps réel.
            </motion.p>

            <motion.ul
                className="flex flex-col gap-3"
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } } }}
            >
                {[
                    "Cockpit temps réel avec vues SOC, CISO, NOC et Management",
                    "Alerting par seuils, patterns et fenêtres temporelles",
                    "Corrélation multi-sources et investigation enrichie",
                    "Conformité NIS2 / ISO 27001 avec audit trail et RBAC",
                    "Connecteurs ITSM, SSO, API ouverte et SDK extensible",
                ].map((item, index) => (
                    <motion.li
                        key={index}
                        variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } } }}
                        className="flex items-center gap-3 text-gray-600 text-sm"
                    >
                        <FaCheck className="text-[var(--color-1)] shrink-0" />
                        {item}
                    </motion.li>
                ))}
            </motion.ul>

        </motion.div>

        </div>
        </section>
    );
}