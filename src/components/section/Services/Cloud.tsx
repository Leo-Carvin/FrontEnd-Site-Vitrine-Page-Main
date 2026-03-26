import Image from "next/image";
import Link from "next/link";
import { FaCloud } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import ReseauImg from "../../../../public/Image/hazel-z-FocSgUZ10JM-unsplash.jpg"; 

export default function Cloud() {
    return (
    <section className="bg-white py-20 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <div className="flex flex-col gap-6">
            
            <div className="w-14 h-14 rounded-xl bg-[var(--color-5)] flex items-center justify-center text-white text-2xl">
            <FaCloud />
            </div>

            <h2 className="text-3xl font-bold text-black">
            Plateformes & Solutions Cloud
            </h2>

            <p className="text-gray-500 leading-relaxed">
            Déploiement et intégration de solutions cloud et logiciels métiers pour optimiser votre productivité.            
            </p>

            <ul className="flex flex-col gap-3">
            {[
                "Solutions cloud hybrides",
                "Outils collaboratifs Microsoft 365",
                "Intégration logiciels métiers",
                "Migration et déploiement IT",
            ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-600 text-sm">
                <FaCheck className="text-[var(--color-3)] shrink-0" />
                {item}
                </li>
            ))}
            </ul>

            <Link href="/Page/Services#reseau" className="text-[var(--color-3)] font-semibold hover:underline w-fit">
            En savoir plus →
            </Link>

        </div>

        <div>
            <Image
            src={ReseauImg}
            alt="Infrastructure Réseau"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
        </div>

        </div>
    </section>
    );
}