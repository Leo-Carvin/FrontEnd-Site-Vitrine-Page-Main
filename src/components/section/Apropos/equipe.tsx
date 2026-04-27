"use client";

import { motion } from "motion/react";
import { FaLinkedin } from "react-icons/fa";

const equipe = [
  {
    nom: "Thomas Renard",
    poste: "Directeur Technique & Co-fondateur",
    expertise: "Architecte infrastructure hybride, ex-DSI PME industrielle",
    certifications: ["Microsoft Azure Expert", "ITIL v4"],
    initiales: "TR",
    color: "var(--color-1)",
  },
  {
    nom: "Sophie Martin",
    poste: "Responsable Cybersécurité",
    expertise: "Audits ANSSI, remédiation incidents, gouvernance SI",
    certifications: ["CISSP", "ISO 27001 Lead Auditor"],
    initiales: "SM",
    color: "var(--color-2)",
  },
  {
    nom: "Lucas Bernard",
    poste: "Ingénieur Réseau & Télécom",
    expertise: "Infrastructures multi-sites, SD-WAN, supervision NOC",
    certifications: ["CCNP Enterprise", "Fortinet NSE4"],
    initiales: "LB",
    color: "var(--color-3)",
  },
  {
    nom: "Camille Dubois",
    poste: "Ingénieure Cloud & Collaboration",
    expertise: "Migration M365, Azure AD, sauvegarde et PCA cloud",
    certifications: ["MS-102", "AZ-900", "Azure Solutions Architect"],
    initiales: "CD",
    color: "var(--color-4)",
  },
];

export default function Equipe() {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Des experts, pas des généralistes
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Chaque membre de l'équipe est certifié dans sa spécialité et intervient
            sur des environnements de production réels — pas en salle de formation.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.2 },
            },
          }}
        >
          {equipe.map((membre, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
              className="flex flex-col items-center text-center gap-4 bg-[#F9FAFB] rounded-2xl p-6"
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                style={{ background: membre.color }}
              >
                {membre.initiales}
              </div>

              <div>
                <h3 className="font-bold text-black text-lg">{membre.nom}</h3>
                <p className="text-[var(--color-2)] text-sm font-medium">{membre.poste}</p>
              </div>

              <p className="text-gray-500 text-sm leading-relaxed">{membre.expertise}</p>

              {/* Certifications */}
              <div className="flex flex-wrap gap-1 justify-center">
                {membre.certifications.map((cert, i) => (
                  <span
                    key={i}
                    className="text-[10px] bg-blue-50 text-blue-700 border border-blue-100 rounded-full px-2 py-0.5 font-medium"
                  >
                    {cert}
                  </span>
                ))}
              </div>

              <FaLinkedin className="text-[#0077b5] text-xl cursor-pointer hover:opacity-70 transition" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}