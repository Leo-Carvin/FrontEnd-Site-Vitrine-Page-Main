import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import DonneesImg from "../../../../public/Image/digital-world-banner-background-remixed-from-public-domain-by-nasa.jpg"; 

export default function Integration() {
    return (
    <section className="bg-[#F9FAFB] py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            <div className="flex flex-col gap-6">

            <h3 className="text-2xl font-bold text-black">
                Intégration Logiciels Métiers
            </h3>

            <p className="text-gray-500 leading-relaxed">
            Intégrez vos outils métiers dans un écosystème cohérent pour optimiser vos processus business.            
            </p>

            <ul className="flex flex-col gap-3">
                {[
                "ERP, CRM et solutions sectorielles",
                "APIs et connecteurs personnalisés",
                "Optimisation des workflows",
                ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-600 text-sm">
                    <FaCheck className="text-[var(--color-1)] shrink-0" />
                    {item}
                </li>
                ))}
            </ul>

            </div>

            <div className="flex justify-center">
            <Image
                src={DonneesImg}
                alt="ProtectionDesDonnees"
                className="rounded-2xl w-full max-w-sm h-auto object-contain"
            />
            </div>

        </div>
        </div>
    </section>
    );
}