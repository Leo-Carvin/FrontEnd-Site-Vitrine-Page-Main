"use client";

import { motion } from "motion/react";
import services from "../../../data/services"; 
import ServiceCard from "../../../components/ServiceCard";

export default function Services() {
  return (
    <div id="services" className="pt-20 md:pt-32 text-black bg-[#F9FAFB] px-6 md:px-20 pb-20 md:pb-32">

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Votre complexité technique, <br/>
            <span className="text-[var(--color-1)]">notre levier de performance.</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Des services informatiques experts pour sécuriser et accélérer votre croissance.
        </p>
      </motion.div>

      <motion.div
        className="mt-10 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
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