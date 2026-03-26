import Image from "next/image";
import Link from "next/link";
import { FaServer } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import InfraImg from "../../../../public/Image/long-hallway-with-row-servers-center.jpg"; 

export default function Virtualisation() {
    return (
    <section className="bg-[#F9FAFB] py-20 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <div>
            <Image
            src={InfraImg}
            alt="Infrastructure & Virtualisation"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
        </div>

        <div className="flex flex-col gap-6">

            <div className="w-14 h-14 rounded-xl bg-[var(--color-5)] flex items-center justify-center text-white text-2xl">
            <FaServer />
            </div>

            <h2 className="text-3xl font-bold text-black">
            Infrastructure & Virtualisation
            </h2>

            <p className="text-gray-500 leading-relaxed">
            Solutions d'infrastructure moderne alliant performance, fiabilité et optimisation des coûts grâce à la virtualisation.
            </p>

            <ul className="flex flex-col gap-3">
            {[
                "Serveurs physiques et virtuels",
                "Virtualisation et consolidation",
                "Maintenance préventive et corrective",
                "Plan de continuité d'activité",
            ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-600 text-sm">
                <FaCheck className="text-[var(--color-3)] shrink-0" />
                {item}
                </li>
            ))}
            </ul>

            <Link href="/Page/Services#infrastructure" className="text-[var(--color-3)] font-semibold hover:underline w-fit">
            En savoir plus →
            </Link>

        </div>

        </div>
    </section>
    );
}