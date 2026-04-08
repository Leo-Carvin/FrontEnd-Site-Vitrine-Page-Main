"use client";

import { motion } from "motion/react";
import { FaHandshake, FaLightbulb, FaShieldAlt, FaUsers } from "react-icons/fa";

const valeurs = [
  {
    icon: <FaHandshake />,
    iconBg: "#dbeafe",
    iconColor: "#2563eb",
    title: "Engagement",
    description: "Nous nous engageons pleinement dans chaque projet, avec une relation de confiance durable.",
  },
  {
    icon: <FaLightbulb />,
    iconBg: "#fef9c3",
    iconColor: "#ca8a04",
    title: "Innovation",
    description: "Nous adoptons les meilleures technologies pour garder votre infrastructure à la pointe.",
  },
  {
    icon: <FaShieldAlt />,
    iconBg: "#fecaca",
    iconColor: "#dc2626",
    title: "Sécurité",
    description: "La protection de vos données et de vos systèmes est au cœur de chacune de nos actions.",
  },
  {
    icon: <FaUsers />,
    iconBg: "#dcfce7",
    iconColor: "#16a34a",
    title: "Proximité",
    description: "Un interlocuteur dédié, disponible et réactif pour vous accompagner au quotidien.",
  },
];

export default function Valeurs() {
  return (
    <section className="bg-[#F9FAFB] py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Nos valeurs
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Les principes qui guident chacune de nos actions et décisions au quotidien
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
          }}
        >
          {valeurs.map((valeur, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
              }}
              className="bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-sm"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-xl"
                style={{ background: valeur.iconBg, color: valeur.iconColor }}
              >
                {valeur.icon}
              </div>
              <h3 className="font-bold text-black text-lg">{valeur.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{valeur.description}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}