"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FaCheck } from "react-icons/fa";
import HistoireImg from "../../../../public/Image/cybersecurity-data-protection-concept.jpg";

export default function Histoire() {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <motion.div
          className="order-2 md:order-1"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Image
            src={HistoireImg}
            alt="Infrastructure sécurisée CYNERIS"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </motion.div>

        <div className="order-1 md:order-2 flex flex-col gap-6">

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-fit p-2 pl-6 pr-6 rounded-[20px] bg-blue-100 text-[var(--color-2)] text-sm font-medium"
          >
            Notre histoire
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-3xl font-bold text-black"
          >
            Créée à Toulon pour combler un vide : des experts IT vraiment dédiés aux PME.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-gray-500 leading-relaxed"
          >
            CYNERIS est née d'un constat simple : les PME méritent le même niveau d'expertise IT
            que les grandes entreprises — sans les délais, sans l'opacité, sans les coûts
            disproportionnés. Fondée en 2026 par des praticiens de terrain, notre équipe
            réunit des ingénieurs certifiés Microsoft, Cisco et ANSSI, avec une culture
            du résultat avant tout.
          </motion.p>

          <motion.ul
            className="flex flex-col gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.08, delayChildren: 0.3 },
              },
            }}
          >
            {[
              "Fondée en 2026 à Toulon, rayonnement national",
              "Équipe de praticiens certifiés (Microsoft, Cisco, ANSSI)",
              "Intervention sur site garantie sous 4 heures",
              "SLA personnalisés selon la criticité de votre activité",
              "Aucun ticket sans réponse : un interlocuteur dédié",
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5, ease: "easeOut" },
                  },
                }}
                className="flex items-center gap-3 text-gray-600 text-sm"
              >
                <FaCheck className="text-[var(--color-1)] shrink-0" />
                {item}
              </motion.li>
            ))}
          </motion.ul>

        </div>
      </div>
    </section>
  );
}