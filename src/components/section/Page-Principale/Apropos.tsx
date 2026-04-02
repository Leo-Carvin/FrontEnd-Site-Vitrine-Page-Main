"use client";

import { motion } from "motion/react";
import { FaCertificate } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

export default function APropos() {
  return (
    <div id="a-propos" className="bg-white flex flex-col md:flex-row gap-10 px-6 md:px-10 pt-20 pb-20">

      <motion.img
        src="/Image/tim-van-der-kuip-CPs2X8JYmS8-unsplash.jpg"
        alt="Studio Nova"
        className="w-full md:w-1/2 object-cover rounded-2xl max-h-[400px] md:max-h-full"
        initial={{ opacity: 0, x: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      />

      <motion.div
        className="text-black flex flex-col justify-center gap-6 w-full md:w-1/2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        <motion.h1
          className="text-2xl font-bold"
          variants={{
            hidden: { opacity: 0, x: 60 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
          }}
        >
          Une expertise reconnue au service de votre réussite
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, x: 60 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
          }}
        >
          Nous accompagnons les entreprises dans leur transformation digitale avec des solutions IT innovantes et sécurisées. Notre équipe d'experts certifiés met son savoir-faire au service de votre performance.
        </motion.p>

        <motion.p
          variants={{
            hidden: { opacity: 0, x: 60 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
          }}
        >
          Nous comprenons les enjeux critiques de votre infrastructure informatique et nous engageons à fournir des services de qualité supérieure, disponibles 24/7 pour assurer la continuité de vos activités.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-5"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.div
            className="flex gap-2"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
            }}
          >
            <div className="text-xl text-[var(--color-5)] p-3 h-fit rounded-xl bg-[#17639473] flex items-center justify-center shrink-0">
              <FaCertificate />
            </div>
            <div>
              <h2 className="font-bold">Certifications</h2>
              <p className="text-sm text-gray-600">Équipe certifiée et formée aux dernières technologies</p>
            </div>
          </motion.div>

          <motion.div
            className="flex gap-2"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
            }}
          >
            <div className="text-xl text-[var(--color-5)] p-3 h-fit rounded-xl bg-[#17639473] flex items-center justify-center shrink-0">
              <BiSupport />
            </div>
            <div>
              <h2 className="font-bold">Support 24/7</h2>
              <p className="text-sm text-gray-600">Assistance technique disponible à tout moment</p>
            </div>
          </motion.div>
        </motion.div>

      </motion.div>
    </div>
  );
}