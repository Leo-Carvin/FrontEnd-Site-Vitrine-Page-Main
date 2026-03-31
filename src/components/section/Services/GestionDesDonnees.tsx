import Image from "next/image";
import Link from "next/link";
import { FaDatabase } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import InfraImg from "../../../../public/Image/hands-working-digital-device-network-graphic-overlay.jpg";

export default function GestionDesDonnees() {
    return (
    <section className="bg-[#F9FAFB] py-20 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <div className="order-2 md:order-1">
            <Image
            src={InfraImg}
            alt="Infrastructure & Virtualisation"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
        </div>

        <div className="flex flex-col gap-6 order-1 md:order-2">

            <div className="w-14 h-14 rounded-xl bg-[var(--color-5)] flex items-center justify-center text-white text-2xl">
            <FaDatabase />
            </div>

            <h2 className="text-3xl font-bold text-black">
            Gestion & Protection des Données
            </h2>

            <p className="text-gray-500 leading-relaxed">
            Stratégies complètes de sauvegarde, archivage et protection des données critiques de votre entreprise.            
            </p>

            <ul className="flex flex-col gap-3">
            {[
                "Sauvegarde externalisée sécurisée",
                "Stockage haute disponibilité",
                "Plan de reprise d'activité (PRA)",
                "Conformité RGPD et protection",
            ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-600 text-sm">
                <FaCheck className="text-[var(--color-3)] shrink-0" />
                {item}
                </li>
            ))}
            </ul>

            <Link href="/Page/GestionDesDonnees" className="text-[var(--color-3)] font-semibold hover:underline w-fit">
            En savoir plus →
            </Link>

        </div>

        </div>
    </section>
    );
}