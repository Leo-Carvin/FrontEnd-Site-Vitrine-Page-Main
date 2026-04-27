"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { FaShieldAlt, FaCheck } from "react-icons/fa";
import PentestImg from "../../../../public/Image/thedigitalartist-cyber-4610993_1920.jpg";

export default function Pentest() {
  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-6">
          <div className="w-14 h-14 rounded-xl bg-[var(--color-5)] flex items-center justify-center text-white text-2xl">
            <FaShieldAlt />
          </div>
          <h2 className="text-3xl font-bold text-black">Anticipez les cyberattaques</h2>
          <p className="text-gray-500 leading-relaxed">
            Ne subissez plus les failles de sécurité. Nous simulons des intrusions réelles pour identifier et corriger vos vulnérabilités critiques avant qu'elles ne soient exploitées.
          </p>
          <ul className="flex flex-col gap-3">
            {["Audit complet de périmètre",
              "Rapport de remédiation priorisé",
              "Conformité & certificat"]
              .map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700 text-sm">
                <FaCheck className="text-[var(--color-3)]" /> {item}
              </li>
            ))}
          </ul>
          <Link href="/Page/PenTest" className="bg-[var(--color-1)] text-white font-bold px-8 py-4 rounded-lg w-fit hover:bg-opacity-90 transition">
            En savoir plus →
          </Link>
        </div>
        <Image src={PentestImg} alt="Pentest" className="rounded-2xl shadow-lg w-full h-auto" />
      </div>
    </section>
  );
}