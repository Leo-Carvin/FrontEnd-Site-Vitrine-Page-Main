import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import GestionImg from "../../../../public/Image/cloud-system-tablet-background-smart-technology-remixed-media.jpg"; 

export default function GestionPlateformes() {
    return (
    <section className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <div className="flex justify-center order-2 md:order-1">
            <Image
            src={GestionImg}
            alt="Gestion des plateformes"
            className="rounded-2xl w-full max-w-sm h-auto object-contain"
            />
        </div>

        <div className="order-1 md:order-2 flex flex-col gap-6">

            <h3 className="text-2xl font-bold text-black">
            Gestion des Plateformes
            </h3>

            <p className="text-gray-500 leading-relaxed">
            Bénéficiez d'un accompagnement complet pour la gestion et la maintenance de vos solutions technologiques.            
            </p>

            <ul className="flex flex-col gap-3">
            {[
                "Administration système 24/7",
                "Maintenance préventive et corrective",
                "Support technique expert",
            ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-600 text-sm">
                <FaCheck className="text-[var(--color-1)] shrink-0" />
                {item}
                </li>
            ))}
            </ul>
 
        </div>

        </div>
    </section>
    );
}