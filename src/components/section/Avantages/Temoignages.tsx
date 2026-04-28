"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "motion/react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const temoignages = [
    {
        name: "Marie Dupont",
        role: "DSI - Cabinet d'architecture",
        text: "Depuis que nous travaillons avec CYNERIS, nos incidents informatiques ont diminué de 80%. L'équipe est réactive et toujours disponible.",
        result: "-80% incidents",
        initiales: "MD",
        color: "var(--color-1)",
    },
    {
        name: "Jean-Pierre Lefèvre",
        role: "Gérant - PME industrielle",
        text: "Le passage à CYNERIS nous a permis de maîtriser notre budget IT avec un forfait clair. Plus de mauvaises surprises en fin de mois.",
        result: "Budget maîtrisé",
        initiales: "JL",
        color: "var(--color-2)",
    },
    {
        name: "Sophie Renaud",
        role: "Directrice - Cabinet médical",
        text: "L'audit de sécurité réalisé par CYNERIS a révélé des vulnérabilités critiques que nous ignorions. Leur intervention a été décisive.",
        result: "Audit certifié",
        initiales: "SR",
        color: "var(--color-3)",
    },
    {
        name: "Philippe Bernard",
        role: "Responsable IT - Transport Logistique",
        text: "Nous avons réduit notre temps de réponse aux incidents de 70%. Un gain énorme pour notre productivité.",
        result: "-70% temps de réponse",
        initiales: "PB",
        color: "var(--color-4)",
    },
    {
        name: "Laura Martinez",
        role: "Directrice Administrative - Cabinet comptable",
        text: "La mise en place de NexEris a automatisé 60% de nos tâches récurrentes. Nos équipes peuvent enfin se concentrer sur leur cœur de métier.",
        result: "60% tâches automatisées",
        initiales: "LM",
        color: "var(--color-5)",
    },
];

export default function Temoignages() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
        emblaApi.on("select", onSelect);
        return () => { emblaApi.off("select", onSelect); };
    }, [emblaApi]);

    return (
        <section className="py-24 px-6 bg-[#F9FAFB]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                        Ils nous font confiance
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Découvrez ce que nos clients disent de leur expérience avec CYNERIS
                    </p>
                </motion.div>

                <div className="embla overflow-hidden" ref={emblaRef}>
                    <div className="embla__container flex -ml-6">
                        {temoignages.map((t, i) => (
                            <div key={i} className="embla__slide flex-none w-full md:w-1/3 pl-6">
                                <motion.div
                                    whileHover={{ y: -6 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="h-full bg-white rounded-2xl p-8 flex flex-col shadow-sm"
                                >
                                    <FaQuoteLeft className="text-3xl mb-6" style={{ color: t.color }} />
                                    <p className="text-gray-600 text-sm leading-relaxed italic flex-1 mb-4">
                                        {t.text}
                                    </p>
                                    {t.result && (
                                        <div
                                            className="mb-6 p-3 rounded-lg"
                                            style={{
                                                background: `color-mix(in srgb, ${t.color} 10%, transparent)`,
                                                borderLeft: `3px solid ${t.color}`,
                                            }}
                                        >
                                            <p className="font-bold text-sm" style={{ color: t.color }}>
                                                ✨ {t.result}
                                            </p>
                                        </div>
                                    )}
                                    <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
                                        <div
                                            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                                            style={{ background: t.color }}
                                        >
                                            {t.initiales}
                                        </div>
                                        <div>
                                            <p className="font-bold text-black text-sm">{t.name}</p>
                                            <p className="text-xs text-gray-400 mt-0.5">{t.role}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contrôles */}
                <div className="flex items-center justify-center gap-4 mt-12">
                    <button
                        onClick={scrollPrev}
                        aria-label="Précédent"
                        className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center"
                    >
                        <FaChevronLeft className="text-gray-600 text-xs" />
                    </button>

                    <div className="flex gap-2 items-center">
                        {temoignages.map((t, i) => (
                            <button
                                key={i}
                                onClick={() => emblaApi?.scrollTo(i)}
                                aria-label={`Aller au témoignage ${i + 1}`}
                                className="h-2 rounded-full transition-all duration-300"
                                style={{
                                    width: selectedIndex === i ? "24px" : "8px",
                                    background: selectedIndex === i ? t.color : "rgba(0,0,0,0.15)",
                                }}
                            />
                        ))}
                    </div>

                    <button
                        onClick={scrollNext}
                        aria-label="Suivant"
                        className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center"
                    >
                        <FaChevronRight className="text-gray-600 text-xs" />
                    </button>
                </div>
            </div>
        </section>
    );
}