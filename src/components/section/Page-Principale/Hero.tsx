"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { FaShieldAlt, FaDatabase, FaCode, FaCheckCircle } from "react-icons/fa";
import HeroImg from "../../../../public/Image/geralt-binary-1414315_1920.jpg";

const STATS = [
  { value: "20+", label: "Clients accompagnés" },
  { value: "5+", label: "Secteurs couverts" },
  { value: "OSCP", label: "Certified" },
  { value: "ISO 27001", label: "Lead Auditor" },
];

const PILLARS = [
  { icon: FaShieldAlt, label: "Cybersécurité & Pentest" },
  { icon: FaDatabase, label: "Data Science" },
  { icon: FaCode, label: "Secure Dev" },
];

export default function Hero() {
  return (
    <section
      className="relative flex items-center px-6 md:px-10 lg:px-15 overflow-hidden pt-28 pb-16 md:pt-50 md:pb-24"
      style={{
        background:
          "linear-gradient(135deg, var(--color-3) 0%, var(--color-4) 50%, var(--color-5) 100%)",
      }}
    >
      {/* Décor background */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[var(--color-1)] rounded-full blur-[100px] opacity-15 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[var(--color-1)] rounded-full blur-[120px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* ── Colonne texte ── */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-1">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="mb-3"
          >
            <span className="text-[var(--color-1)] font-bold tracking-widest uppercase text-[10px] sm:text-xs border-b-2 border-[var(--color-1)] pb-1">
              Cabinet IT spécialisé · PME & ETI
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight leading-[1.05]"
          >
            Sécurisez, optimisez,<br />
            <span className="text-[var(--color-1)] italic">bâtissez</span> votre IT.
          </motion.h1>

          {/* Sous-titre différenciateur */}
          <motion.p
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/85 text-sm sm:text-base md:text-lg mb-5 leading-relaxed max-w-xl"
          >
            Cyneris réunit <strong className="text-white">Cybersécurité offensive</strong>,{" "}
            <strong className="text-white">Data Science</strong> et{" "}
            <strong className="text-white">Développement sécurisé</strong> dans une seule expertise —
            pour transformer votre complexité IT en avantage concurrentiel réel.
          </motion.p>

          {/* Pilliers Sécu + Data + Dev */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap justify-center lg:justify-start gap-3 mb-7"
          >
            {PILLARS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-lg px-3 py-1.5 text-white text-xs sm:text-sm font-medium backdrop-blur-sm"
              >
                <Icon className="text-[var(--color-1)] shrink-0" />
                {label}
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center lg:items-start gap-3 w-full mb-8 lg:mb-0"
          >
            <Link href="/Page/Contact" className="w-full sm:w-auto">
              <button className="bg-[var(--color-1)] hover:bg-white text-white hover:text-[var(--color-2)] font-bold px-7 py-3.5 md:px-9 md:py-4 rounded-xl transition-all duration-300 text-sm md:text-base w-full sm:w-auto shadow-lg shadow-[var(--color-1)]/30">
                🔍 Demander mon audit gratuit
              </button>
            </Link>
            <Link href="/Page/Services" className="w-full sm:w-auto">
              <button className="border border-white/30 hover:border-white text-white font-semibold px-7 py-3.5 md:px-9 md:py-4 rounded-xl transition-all duration-300 text-sm md:text-base w-full sm:w-auto bg-white/5 hover:bg-white/10">
                Nos services →
              </button>
            </Link>
          </motion.div>

          {/* Réassurance audit */}
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-1.5 text-white/60 text-xs mt-3 lg:mt-4"
          >
            <FaCheckCircle className="text-[var(--color-1)]" />
            Sans engagement · Réponse sous 4h · 100% confidentiel
          </motion.p>
        </div>

        {/* ── Colonne image + stats ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full max-w-md md:max-w-xl lg:max-w-full mx-auto order-2"
        >
          {/* Image */}
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={HeroImg}
              alt="Cyneris – Cabinet IT Cybersécurité, Data & Développement"
              className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-5)]/40 to-transparent" />
          </div>

          {/* Décor derrière image */}
          <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[var(--color-1)] opacity-20 rounded-2xl -z-0 hidden lg:block" />

          {/* Stats flottantes */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute -bottom-5 left-1/2 -translate-x-1/2 lg:left-4 lg:translate-x-0 lg:-bottom-6 z-20 w-[calc(100%-2rem)] lg:w-auto"
          >
            <div className="bg-[var(--color-4)]/90 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4 shadow-xl flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3">
              {STATS.map(({ value, label }) => (
                <div key={label} className="flex flex-col items-center lg:items-start">
                  <span className="text-[var(--color-1)] font-extrabold text-lg leading-none">{value}</span>
                  <span className="text-white/60 text-[10px] mt-0.5 whitespace-nowrap">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}