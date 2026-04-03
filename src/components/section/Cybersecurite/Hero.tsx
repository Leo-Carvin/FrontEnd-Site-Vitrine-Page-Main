"use client";

import Image from "next/image";
import { motion } from "motion/react";
import HeroImg from "../../../../public/Image/v617batch2-kul-19-technology.jpg";

export default function Hero() {
    return (
        <section
        className="min-h-[100vh] pt-15 flex items-center px-6 lg:px-15"
        style={{ background: "linear-gradient(0deg, var(--color-3) 0%, var(--color-2) 50%, var(--color-5) 100%)" }}
        >
        <div className="max-w-7xl mx-auto w-full py-20 md:py-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="text-center md:text-left">

                <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 text-white leading-tight"
                >
                Protégez votre système d'information contre les{" "}
                <span className="relative z-10 text-[var(--color-1)]">cybermenaces</span>
                </motion.h1>

                <motion.p
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                className="text-blue-100 mb-8 text-base md:text-lg"
                >
                CYNERIS sécurise vos infrastructures, vos données et vos utilisateurs grâce à
                des solutions de cybersécurité avancées.
                </motion.p>

                <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                className="flex justify-center md:justify-start"
                >
                <button className="bg-white hover:bg-[var(--color-2)] text-[var(--color-5)] hover:text-white font-semibold px-6 py-3 rounded-lg transition">
                    Nous contacter →
                </button>
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
                alt="Hero Cyneris"
                className="rounded-xl shadow-2xl w-full max-w-sm md:max-w-full h-auto"
                />
            </motion.div>

            </div>
        </div>
        </section>
    );
}