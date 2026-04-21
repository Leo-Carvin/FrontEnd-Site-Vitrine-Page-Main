"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import HeroImg from "../../../../public/Image/modern-data-center-providing-cloud-services-enabling-businesses-access-computing-resources-storage-demand-internet-server-room-infrastructure-3d-render-animation.jpg";

export default function Hero() {
    return (
        <section
        className="min-h-[100vh] pt-15 flex items-center px-6 lg:px-15"
        style={{ background: "linear-gradient(380deg, #0a0a1a 0%, #0d1b4b 60%, #061a2e 100%)" }}
        >
        <div className="max-w-7xl mx-auto w-full py-20 md:py-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="text-center md:text-left">

                <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="inline-block mb-6 px-4 py-2 rounded-full border border-[var(--color-1)]/30 bg-[var(--color-1)]/10 text-[var(--color-1)] text-sm font-mono"
                >
                Plateforme unifiée de Cybersecurity Monitoring
                </motion.div>

                <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white leading-tight"
                >
                NEX<span className="text-[var(--color-1)]">.</span>ERIS
                </motion.h1>

                <motion.p
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                className="text-blue-100/70 mb-3 text-sm font-mono tracking-widest"
                >
                Multi-Technology • Multi-environnement • Temps réel
                </motion.p>

                <motion.p
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="text-blue-100/80 mb-8 text-base md:text-lg"
                >
                NEX.ERIS fédère les signaux de vos infrastructures pour offrir
                une vue unifiée et actionnable. Vous pilotez votre posture cyber
                depuis un seul écran.
                </motion.p>

                <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                className="flex justify-center md:justify-start"
                >
                <Link href="/Page/Contact" className="hover:text-accent flex items-center gap-1">
                    <button className="bg-[var(--color-1)] hover:opacity-90 text-white font-semibold px-6 py-3 rounded-lg transition">
                    Demander une démo →
                    </button>
                </Link>
                </motion.div>

            </div>

            <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="flex justify-center md:justify-end"
            >
                <Image
                src={HeroImg}
                alt="NEX.ERIS"
                priority
                className="rounded-xl shadow-2xl w-full max-w-sm md:max-w-full h-auto"
                />
            </motion.div>

            </div>
        </div>
        </section>
    );
}