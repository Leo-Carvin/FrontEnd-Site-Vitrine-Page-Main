"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { FaRocket, FaCheck } from "react-icons/fa";
import NexErisImg from "../../../../public/Image/hazel-z-FocSgUZ10JM-unsplash.jpg";

export default function NexEris() {
  return (
    <section className="bg-[#F9FAFB] py-20 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <Image src={NexErisImg} alt="NexEris" className="rounded-2xl shadow-lg w-full h-auto order-2 md:order-1" />
        <div className="flex flex-col gap-6 order-1 md:order-2">
          <div className="w-14 h-14 rounded-xl bg-[var(--color-5)] flex items-center justify-center text-white text-2xl">
            <FaRocket />
          </div>
          <h2 className="text-3xl font-bold text-black">NexEris : Automatisation Métier</h2>
          <p className="text-gray-500 leading-relaxed">
            Libérez votre potentiel. Notre plateforme propriétaire automatise vos tâches répétitives pour vous permettre de vous concentrer sur votre valeur ajoutée.
          </p>
          <ul className="flex flex-col gap-3">
            {["Workflows automatisés", "Connecteurs applicatifs", "Gain de productivité immédiat"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700 text-sm">
                <FaCheck className="text-[var(--color-3)]" /> {item}
              </li>
            ))}
          </ul>
          <Link href="/Page/NexEris" className="bg-[var(--color-1)] text-white font-bold px-8 py-4 rounded-lg w-fit hover:bg-opacity-90 transition">
            En savoir plus →
          </Link>
        </div>
      </div>
    </section>
  );
}