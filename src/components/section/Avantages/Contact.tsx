"use client";

import Link from "next/link";
import { motion } from "motion/react";

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
            Prêt à bénéficier de tous ces avantages ?
            </motion.h2>

            <motion.p
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-gray-500 text-lg mb-10"
            >
            Demandez votre audit gratuit et sans engagement. Nos experts analysent
            votre infrastructure et vous proposent un plan d'action concret sous 48h.
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
                Demander un audit gratuit →
            </Link>
            <Link
                href="/Page/Services"
                className="border border-[var(--color-2)] text-[var(--color-2)] hover:bg-[var(--color-2)] hover:text-white font-semibold px-8 py-3 rounded-lg transition"
            >
                Voir nos services
            </Link>
            </motion.div>

        </div>
        </section>
    );
}