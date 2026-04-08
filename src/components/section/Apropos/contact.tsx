"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function CTA() {
    return (
        <section className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-3xl mx-auto text-center">

            <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-black mb-6"
            >
            Prêt à transformer votre infrastructure IT ?
            </motion.h2>

            <motion.p
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-gray-500 text-lg mb-10"
            >
            Contactez nos experts pour un audit gratuit de votre infrastructure
            et découvrez comment CYNERIS peut vous accompagner.
            </motion.p>

            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
            >
            <Link
                href="/Page/Contact"
                className="bg-[var(--color-2)] hover:bg-[var(--color-1)] text-white font-semibold px-8 py-3 rounded-lg transition"
            >
                Nous contacter →
            </Link>
            <Link
                href="/Page/Services"
                className="border border-[var(--color-2)] text-[var(--color-2)] hover:bg-[var(--color-2)] hover:text-white font-semibold px-8 py-3 rounded-lg transition"
            >
                Nos services
            </Link>
            </motion.div>

        </div>
        </section>
    );
}