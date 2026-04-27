"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-3xl mx-auto text-center">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="inline-block bg-blue-50 text-[var(--color-2)] text-sm font-medium px-4 py-1.5 rounded-full mb-6"
        >
          Audit offert — sans engagement
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-black mb-4"
        >
          Votre infrastructure mérite un regard d'expert.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-gray-500 text-lg mb-10"
        >
          En 30 minutes, nos ingénieurs évaluent vos risques prioritaires et vous remettent
          un rapport d'audit clair — risques identifiés, actions recommandées, ordre de priorité.
          Gratuit, confidentiel, sans suite imposée.
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
            Réserver mon audit gratuit →
          </Link>
          <Link
            href="/Page/Contact"
            className="border border-[var(--color-2)] text-[var(--color-2)] hover:bg-[var(--color-2)] hover:text-white font-semibold px-8 py-3 rounded-lg transition"
          >
            Être rappelé par un expert
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-gray-400 text-xs mt-6"
        >
          Réponse sous 24h ouvrées · Basé à Toulon · Intervention nationale
        </motion.p>

      </div>
    </section>
  );
}