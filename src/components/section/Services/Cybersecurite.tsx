"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { FaDatabase, FaCheck } from "react-icons/fa";
import DataImg from "../../../../public/Image/representation-user-experience-interface-design (1).jpg";

export default function DataScience() {
  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-6">
          <div className="w-14 h-14 rounded-xl bg-[var(--color-5)] flex items-center justify-center text-white text-2xl">
            <FaDatabase />
          </div>
          <h2 className="text-3xl font-bold text-black">Data Science : Pilotez par la donnée</h2>
          <p className="text-gray-500 leading-relaxed">
            Ne subissez plus vos chiffres. Nous transformons vos données brutes en outils de décision stratégique pour optimiser votre rentabilité.
          </p>
          
          {/* Pour qui */}
          <div>
            <p className="text-xs font-bold text-[var(--color-1)] uppercase tracking-wider mb-1">Pour qui ?</p>
            <p className="text-sm text-gray-700">Entreprises souhaitant industrialiser leur usage de la donnée</p>
          </div>

          {/* Livrables */}
          <div>
            <p className="text-xs font-bold text-[var(--color-1)] uppercase tracking-wider mb-1">Livrables</p>
            <ul className="space-y-1">
              {["Modèles prédictifs sur-mesure", "Dashboard analytics", "Documentation technique"].map((item, i) => (
                <li key={i} className="text-sm text-gray-600 flex items-center">
                  <span className="mr-2 text-[var(--color-1)]">→</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Bénéfices */}
          <div className="p-3 bg-green-50 rounded-lg border border-green-100">
            <p className="text-xs font-bold text-green-700 uppercase tracking-wider mb-1">Bénéfices</p>
            <p className="text-sm text-green-800">Décisions data-driven, optimisation des processus, gain de productivité</p>
          </div>

          <ul className="flex flex-col gap-3">
            {["Analyse prédictive & tendances", "Data Viz & Dashboards métiers", "Nettoyage & Structuration"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700 text-sm">
                <FaCheck className="text-[var(--color-3)]" /> {item}
              </li>
            ))}
          </ul>
          
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <Link href="/Page/Contact" className="bg-[var(--color-4)] text-white font-bold px-6 py-3 rounded-lg w-fit hover:bg-opacity-90 transition text-center">
              Demander un audit →
            </Link>
            <Link href="/Page/DataScience" className="border border-gray-300 text-gray-700 font-medium px-6 py-3 rounded-lg w-fit hover:border-gray-400 transition text-center">
              En savoir plus →
            </Link>
          </div>
        </div>
        <Image src={DataImg} alt="Data Science" className="rounded-2xl shadow-lg w-full h-auto" />
      </div>
    </section>
  );
}