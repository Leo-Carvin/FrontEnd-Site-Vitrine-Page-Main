"use client";

import { motion } from "motion/react";
import services from "../../../data/services";
import ServiceCard from "../../../components/ServiceCard";
import SectionTitle from "../../../components/SectionTitle";

export default function Services() {
  return (
    <div id="services" className="pt-16 md:pt-30 text-black bg-[#F9FAFB] px-6 md:px-20 pb-16 md:pb-30">

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <SectionTitle
          title="Solutions IT complètes pour votre entreprise"
          subtitle="Des services informatiques professionnels adaptés à vos besoins spécifiques"
        />
      </motion.div>

      <motion.div
        className="mt-10 md:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
            }}
          >
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </motion.div>

    </div>
  );
}