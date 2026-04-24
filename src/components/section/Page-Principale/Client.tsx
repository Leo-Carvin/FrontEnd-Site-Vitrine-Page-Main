"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react"; 
import Autoplay from "embla-carousel-autoplay";
import { motion } from "motion/react";
import Image from "next/image";
import LogoCyneris from "../../../../public/Logo/LogoCyneris.png";

const partners = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function Clients() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: "start", dragFree: true },
        [
            Autoplay({ 
                delay: 2800, 
                stopOnInteraction: false,
                playOnInit: true
            }) as any
        ]
    );

    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
        return () => {
            emblaApi.off("select", onSelect);
            emblaApi.off("reInit", onSelect);
        };
    }, [emblaApi, onSelect]);

    return (
        <section className="py-16 bg-gray-50 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                <p className="text-center text-xs font-semibold tracking-[0.25em] uppercase text-gray-400 mb-12">
                    Ils nous font confiance
                </p>

                <div className="relative">
                    <div className="embla overflow-hidden" ref={emblaRef}>
                        <div className="embla__container flex items-center">
                            {partners.map((id) => (
                                <motion.div
                                    key={id}
                                    className="embla__slide flex-none px-5"
                                >
                                    <div className="w-[88px] h-[88px] md:w-[100px] md:h-[100px] rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center p-4 hover:border-[var(--color-1)] transition-colors duration-300">
                                        <Image
                                            src={LogoCyneris}
                                            alt={`Partenaire ${id}`}
                                            width={72}
                                            height={72}
                                            className="object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent" />
                </div>

                <div className="flex justify-center gap-2 mt-8">
                    {partners.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => emblaApi?.scrollTo(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                index === selectedIndex 
                                ? "w-6 bg-[var(--color-1)]" 
                                : "w-2 bg-gray-300 hover:bg-gray-400"
                            }`}
                            aria-label={`Aller au logo ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}