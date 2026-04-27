"use client";

import { FaCheckCircle, FaShieldAlt, FaClock, FaLock } from "react-icons/fa";
import { motion } from "motion/react";
import Link from "next/link";

const REASSURANCE = [
  { icon: FaClock, label: "Réponse sous 4h" },
  { icon: FaLock, label: "100% Confidentiel" },
  { icon: FaShieldAlt, label: "Sans engagement" },
];

export default function Hero() {
  return (
    <section className="mt-20 relative overflow-hidden py-20 px-6 md:px-20 bg-gradient-to-br from-[var(--color-5)] via-[var(--color-4)] to-[var(--color-5)]">
      {/* Effets décoratifs */}
      <div className="absolute top-0 left-0 w-[30vh] h-[30vh] bg-[var(--color-1)] rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[30vh] h-[30vh] bg-[var(--color-1)] rounded-full opacity-15 blur-3xl" />

      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-center relative z-10">
        
        {/* Texte */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-5">
          <span className="text-[var(--color-1)] font-bold tracking-widest uppercase text-xs border-b-2 border-[var(--color-1)] pb-1">
            Cabinet IT spécialisé · PME & ETI
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Parlons de votre <span className="text-[var(--color-1)] italic">sécurité IT</span>
          </h1>
          <p className="text-blue-100 text-lg max-w-md">
            Une vulnérabilité, un projet, une urgence ? Notre équipe certifiée <strong className="text-white">OSCP & ISO 27001</strong> analyse votre situation et vous répond sous 4h.
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            {REASSURANCE.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-lg px-3 py-1.5 text-white text-xs font-medium backdrop-blur-sm">
                <Icon className="text-[var(--color-1)]" /> {label}
              </div>
            ))}
          </div>
        </div>

        {/* Encart Audit */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-8 shadow-xl flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="bg-[var(--color-1)] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Offert</span>
            <h2 className="text-white font-bold text-lg">Audit de sécurité gratuit</h2>
          </div>
          <p className="text-blue-100 text-sm">En 30 minutes, Cyneris identifie vos risques prioritaires et vous remet un rapport actionnable.</p>
          <ul className="space-y-2">
            {["Analyse de surface d'attaque", "Identification des vulnérabilités", "Recommandations priorisées", "Restitution orale"].map(item => (
              <li key={item} className="flex items-start gap-2.5 text-white text-sm">
                <FaCheckCircle className="text-[var(--color-1)] shrink-0 mt-0.5" /> {item}
              </li>
            ))}
          </ul>
          <Link href="#contact-form" className="w-full bg-[var(--color-1)] hover:bg-white text-white hover:text-[var(--color-2)] font-bold py-3.5 rounded-xl transition-all text-center text-sm mt-2">
            🔍 Demander mon audit gratuit
          </Link>
        </motion.div>
      </div>
    </section>
  );
}