import Image from "next/image";
import { FaCheck, FaLock } from "react-icons/fa";
import SecuImg from "../../../../public/Image/abstract-cybersecurity-concept-design.jpg";

export default function SecurisationReseau() {
    return (
    <section className="bg-[#F9FAFB] py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <div className="order-1 flex flex-col gap-6">

            <div className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center text-white text-2xl">
            <FaLock />
            </div>

            <h3 className="text-2xl font-bold text-black">
            Sécurisation réseau
            </h3>

            <p className="text-gray-500">
            Protection avancée contre les menaces internes et externes
            </p>

            <ul className="flex flex-col gap-3">
            {[
                "Firewalls nouvelle génération",
                "VPN sécurisés",
                "Détection d'intrusion",
            ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-600 text-sm">
                <FaCheck className="text-red-500 shrink-0" />
                {item}
                </li>
            ))}
            </ul>

        </div>

        <div className="order-2">
            <Image
            src={SecuImg}
            alt="Sécurisation réseau"
            className="rounded-2xl w-full h-auto object-cover"
            />
        </div>

        </div>
    </section>
    );
}