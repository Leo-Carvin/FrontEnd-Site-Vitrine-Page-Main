"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import HeroImg from "../../../../public/Image/standard-quality-control-collage-concept.jpg";

export default function Hero() {
    return (
        <section className="min-h-[100vh] pt-15 flex items-center px-6 lg:px-15" style={{ background: "linear-gradient(380deg, var(--color-5) 0%, var(--color-2) 60%, var(--color-1) 100%)" }}>
            <div className="max-w-7xl mx-auto w-full py-20 md:py-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    <motion.div
                        className="text-center md:text-left"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
                        }}
                    >
                        <motion.h1
                            variants={{
                                hidden: { opacity: 0, x: -60 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
                            }}
                            className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 text-white leading-tight"
                        >
                            Protégez et sécurisez vos données stratégiques
                        </motion.h1>

                        <motion.p
                            variants={{
                                hidden: { opacity: 0, x: -60 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
                            }}
                            className="text-blue-100 mb-8 text-base md:text-lg"
                        >
                            CYNERIS vous accompagne dans la gestion, la sauvegarde et
                            la protection de vos données afin de garantir la continuité de
                            votre activité.
                        </motion.p>

                        <motion.div
                            variants={{
                                hidden: { opacity: 0, x: -60 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
                            }}
                            className="flex justify-center md:justify-start"
                        >
                            <Link href="/Page/Contact" className="hover:text-accent flex items-center gap-1">
                            <button className="bg-white hover:bg-[var(--color-2)] text-[var(--color-5)] hover:text-white font-semibold px-6 py-3 rounded-lg transition">
                                Nous contacter →
                            </button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="flex justify-center md:justify-end"
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true, amount: 0.2 }}
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