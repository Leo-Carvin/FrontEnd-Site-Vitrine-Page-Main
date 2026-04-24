"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");
        // On affiche le bandeau seulement si aucun choix n'a été fait
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleConsent = (choice: "accepted" | "refused") => {
        localStorage.setItem("cookieConsent", choice);
        setIsVisible(false);
        
        // Optionnel : si vous utilisez Google Analytics, 
        // vous devrez gérer le déclenchement des scripts ici.
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    exit={{ y: 100 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-gray-200 shadow-2xl"
                >
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-gray-600">
                            Nous utilisons des cookies pour améliorer votre expérience. 
                            En acceptant, vous nous aidez à optimiser nos services.
                            <Link href="/Page/Confidentialite" className="text-[var(--color-1)] underline ml-1">
                                En savoir plus
                            </Link>.
                        </p>
                        
                        <div className="flex gap-3">
                            <button
                                onClick={() => handleConsent("refused")}
                                className="px-5 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition text-sm font-medium"
                            >
                                Refuser
                            </button>
                            <button
                                onClick={() => handleConsent("accepted")}
                                className="bg-[var(--color-1)] text-white px-5 py-2 rounded-lg hover:bg-[var(--color-2)] transition text-sm font-medium"
                            >
                                Tout accepter
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}