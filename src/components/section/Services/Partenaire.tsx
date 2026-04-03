"use client";

import { motion } from "motion/react";
import { FaCog, FaHeadset, FaStar } from "react-icons/fa";

const stats = [
  {
    icon: <FaCog />,
    value: "99.9%",
    title: "Disponibilité garantie",
    description: "Infrastructure haute disponibilité avec SLA garanti",
  },
  {
    icon: <FaHeadset />,
    value: "24/7",
    title: "Support réactif",
    description: "Équipe d'experts disponible en permanence",
  },
  {
    icon: <FaStar />,
    value: "15+",
    title: "Années d'expertise",
    description: "Certifications et expérience reconnues",
  },
];

export default function Partenaire() {
  return (
    <section
      className="py-16 px-6 md:px-20"
      style={{ background: "linear-gradient(to bottom right, var(--color-1) 0%, var(--color-2) 100%)" }}
    >

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-white text-2xl md:text-3xl font-bold text-center mb-12"
      >
        Votre partenaire IT de confiance
      </motion.h2>

      <motion.div
        className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
        }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
            }}
            className="flex flex-col items-center text-center gap-3"
          >
            <div className="w-14 h-14 rounded-full bg-[#ffffff30] flex items-center justify-center text-white text-2xl">
              {stat.icon}
            </div>
            <span className="text-white text-4xl font-bold">{stat.value}</span>
            <span className="text-white font-semibold text-lg">{stat.title}</span>
            <span className="text-white/70 text-sm">{stat.description}</span>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}