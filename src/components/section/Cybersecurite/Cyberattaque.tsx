import Image from "next/image";
import { FaExclamationTriangle, FaClock } from "react-icons/fa";
import ShieldImg from "../../../../public/Image/cybersecurity-virus-protection-machine-learning.jpg"; 

export default function CyberStats() {
    return (
    <section className="bg-black py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <div className="order-2 md:order-1 flex justify-center">
            <Image
            src={ShieldImg}
            alt="Cyber sécurité"
            className="w-full max-w-sm h-auto object-cover"
            />
        </div>

        <div className="order-1 md:order-2 flex flex-col gap-6">

            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Les cyberattaques coûtent en moyenne{" "}
            <span className="text-red-500">466 000 d'euros</span>{" "}
            aux entreprises
            </h2>

            <p className="text-gray-400 leading-relaxed">
            Chaque seconde, une entreprise est victime d'une cyberattaque.
            Les ransomwares, le phishing et les intrusions réseau menacent
            votre continuité d'activité et votre réputation.
            </p>

            <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3 text-gray-300 text-sm">
                <FaExclamationTriangle className="text-red-500 shrink-0 mt-1" />
                <span>93% des violations de données sont évitables avec une protection adéquate</span>
            </li>
            <li className="flex items-start gap-3 text-gray-300 text-sm">
                <FaClock className="text-blue-400 shrink-0 mt-1" />
                <span>280 jours en moyenne pour détecter une intrusion</span>
            </li>
            </ul>

        </div>

        </div>
    </section>
    );
}