import Image from "next/image";
import { FaCheck, FaSitemap } from "react-icons/fa";
import ReseauImg from "../../../../public/Image/57789.jpg"; 

export default function ExpertisesReseau() {
    return (
    <section className="bg-[#F9FAFB] py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Nos expertises réseau
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Une approche complète pour optimiser, sécuriser et maintenir votre infrastructure
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            <div className="flex flex-col gap-6">

            <div className="w-14 h-14 rounded-full bg-[var(--color-4)] flex items-center justify-center text-white text-2xl">
                <FaSitemap />
            </div>

            <h3 className="text-2xl font-bold text-black">Architecture réseau</h3>

            <p className="text-gray-500">
                Conception sur mesure d'infrastructures évolutives et performantes
            </p>

            <ul className="flex flex-col gap-3">
                {[
                "Audit de l'existant",
                "Dimensionnement optimal",
                "Architecture redondante",
                ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-600 text-sm">
                    <FaCheck className="text-[var(--color-4)] shrink-0" />
                    {item}
                </li>
                ))}
            </ul>

            </div>

            <div>
            <Image
                src={ReseauImg}
                alt="Architecture réseau"
                className="rounded-2xl w-full h-auto object-cover"
            />
            </div>

        </div>
        </div>
    </section>
    );
}