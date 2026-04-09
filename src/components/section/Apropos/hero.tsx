"use client";

import Image from "next/image";
import { motion } from "motion/react";
import HeroImg from "../../../../public/Image/annie-spratt-QckxruozjRg-unsplash-_1__11zon.webp";

export default function Hero() {
    return (
        <section
        className="min-h-[100vh] pt-15 flex items-center px-6 lg:px-15"
        style={{ background: "linear-gradient(380deg, var(--color-5) 0%, var(--color-2) 60%, var(--color-1) 100%)" }}
        >
        <div className="max-w-7xl mx-auto w-full py-20 md:py-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="text-center md:text-left">

                <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-fit p-2 pl-7 pr-7 rounded-[20px] bg-[#6bc3cd54] flex items-center gap-2 mb-6 text-white mx-auto md:mx-0"
                >
                <span className="text-sm">Qui sommes-nous ?</span>
                </motion.div>

                <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 text-white leading-tight"
                >
                Une équipe d'experts au service de votre{" "}
                <span className="text-[var(--color-1)]">transformation IT</span>
                </motion.h1>

                <motion.p
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="text-blue-100 mb-8 text-base md:text-lg"
                >
                CYNERIS accompagne les PME et ETI dans leur
                transformation numérique avec expertise, proximité et engagement.
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
                alt="Équipe CYNERIS"
                className="rounded-xl shadow-2xl w-full max-w-sm md:max-w-full h-auto"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                />
            </motion.div>

            </div>
        </div>
        </section>
    );
}