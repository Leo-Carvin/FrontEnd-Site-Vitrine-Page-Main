"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FaCheckCircle } from "react-icons/fa";
import EngagImg from "../../../../public/Image/long-hallway-with-row-servers-center.jpg";

export default function Engagements() {
  return (
    <section
      className="py-20 px-6 md:px-20"
      style={{
        background:
          "linear-gradient(to bottom right, var(--color-5) 0%, var(--color-3) 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <motion.div
          className="order-2 md:order-1"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Image
            src={EngagImg}
            alt="Infrastructure serveurs CYNERIS"
            className="rounded-2xl shadow-2xl w-full h-auto object-cover"
          />
        </motion.div>

        <div className="order-1 md:order-2 flex flex-col gap-6">

          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-white leading-tight"
          >
            Des engagements écrits, pas des promesses verbales.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-white/80 leading-relaxed"
          >
            Chaque contrat CYNERIS inclut des SLA clairs, des indicateurs mesurables et
            un droit de regard sur notre performance. Votre activité ne peut pas attendre —
            nos engagements non plus.
          </motion.p>

          <motion.ul
            className="flex flex-col gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.08, delayChildren: 0.25 },
              },
            }}
          >
            {[
              "Intervention sur site sous 4h pour les incidents critiques",
              "Supervision proactive 24/7 avec alerting automatisé",
              "Un référent technique dédié — le même à chaque appel",
              "SLA personnalisés selon la criticité de votre activité",
              "Reporting mensuel : incidents, actions, recommandations",
              "Accompagnement de vos équipes internes (formation incluse)",
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
                className="flex items-start gap-3 text-white/90 text-sm"
              >
                <FaCheckCircle
                  className="text-[var(--color-1)] shrink-0 mt-0.5"
                  size={16}
                />
                {item}
              </motion.li>
            ))}
          </motion.ul>

        </div>
      </div>
    </section>
  );
}