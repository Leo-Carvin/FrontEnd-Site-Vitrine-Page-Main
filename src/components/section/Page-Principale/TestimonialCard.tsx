"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "motion/react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const temoignages = [
    {
        name: "Sophie Martin",
        role: "Directrice, TechSolutions",
        text: "Cyneris a sécurisé tout notre parc informatique en moins d'une semaine. Une équipe extrêmement réactive. Nous avons obtenu la certification ISO 27001 grâce à leur accompagnement.",
        result: "Certification ISO 27001 obtenue",
    },
    {
        name: "Marc Durand",
        role: "Gérant, BTP Sud",
        text: "Plus aucune panne depuis le déploiement de leurs solutions. Un vrai soulagement pour notre activité. Notre productivité a augmenté de 25%.",
        result: "0 panne en 18 mois",
    },
    {
        name: "Lucas Bernard",
        role: "CTO, Innov'Provence",
        text: "L'audit de sécurité a été déterminant pour notre mise en conformité. Clair, net et précis. Ils ont identifié 12 vulnérabilités critiques que nous avons corrigées.",
        result: "12 vulnérabilités corrigées",
    },
    {
        name: "Jean Dupont",
        role: "PDG, EntrepriseX",
        text: "Grâce à Cyneris, nous avons réduit nos coûts IT de 30% tout en améliorant notre performance. Un partenaire de confiance.",
        result: "-30% coûts IT",
    },
    {
        name: "Catherine Moreau",
        role: "DSI, Hôpital de la Côte d'Azur",
        text: " Leur expertise en cybersécurité nous a permis de protéger les données patients. Réactivité et professionnalisme exceptionnels.",
        result: "100% données patients sécurisées",
    },
    {
        name: "Antoine Roux",
        role: "Dir. SI, Groupe Mediterranean",
        text: "La migration vers le cloud s'est faite sans interruption de service. Un accompagnement irréprochable du début à la fin.",
        result: "0 interruption de service",
    },
];

export default function Testimonials() {
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
        <section className="py-24 px-6 bg-[var(--color-5)] text-white">
            <div className="max-w-7xl mx-auto">
                <p className="text-center text-xs font-semibold tracking-[0.25em] uppercase text-[var(--color-1)] mb-4">
                    Témoignages
                </p>
                <h2 className="text-4xl font-extrabold text-center mb-16">
                    Ce que disent nos clients
                </h2>

                <div className="embla overflow-hidden" ref={emblaRef}>
                    <div className="embla__container flex -ml-6">
                        {temoignages.map((t, i) => (
                            <div key={i} className="embla__slide flex-none w-full md:w-1/3 pl-6">
                                <motion.div
                                    whileHover={{ y: -6 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="h-full bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col"
                                >
                                    <FaQuoteLeft className="text-[var(--color-1)] text-2xl mb-6 opacity-50" />
                                    <p className="text-gray-300 leading-relaxed italic flex-1 mb-4">
                                        {t.text}
                                    </p>
                                    {t.result && (
                                        <div className="mb-6 p-3 bg-[var(--color-1)]/20 rounded-lg border border-[var(--color-1)]/30">
                                            <p className="text-[var(--color-1)] font-bold text-sm">
                                                ✨ {t.result}
                                            </p>
                                        </div>
                                    )}
                                    <div className="flex items-center gap-3 pt-6 border-t border-white/10">
                                        <div className="w-10 h-10 rounded-xl bg-[var(--color-1)] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                                            {t.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-bold text-white text-sm">{t.name}</p>
                                            <p className="text-xs text-[var(--color-2)] mt-0.5">{t.role}</p>
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
                        className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[var(--color-1)] transition-colors duration-200 flex items-center justify-center"
                    >
                        <FaChevronLeft className="text-white text-xs" />
                    </button>

                    <div className="flex gap-2">
                        {temoignages.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => emblaApi?.scrollTo(i)}
                                aria-label={`Aller au témoignage ${i + 1}`}
                                className="h-2 rounded-full transition-all duration-300"
                                style={{
                                    width: selectedIndex === i ? "24px" : "8px",
                                    background: selectedIndex === i ? "var(--color-1)" : "rgba(255,255,255,0.2)",
                                }}
                            />
                        ))}
                    </div>

                    <button
                        onClick={scrollNext}
                        aria-label="Suivant"
                        className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[var(--color-1)] transition-colors duration-200 flex items-center justify-center"
                    >
                        <FaChevronRight className="text-white text-xs" />
                    </button>
                </div>
            </div>
        </section>
    );
}