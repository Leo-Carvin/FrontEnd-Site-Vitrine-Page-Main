import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import PraImg from "../../../../public/Image/19199448.jpg"; 

export default function PlanRepriseActivite() {
    return (
    <section className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            <div className="order-2 md:order-1">
            <Image
                src={PraImg}
                alt="Plan de reprise d'activité"
                className="rounded-2xl w-full h-auto object-cover"
            />
            </div>

            <div className="order-1 md:order-2 flex flex-col gap-6">

            <div className="w-14 h-14 rounded-xl bg-blue-500 flex items-center justify-center text-white text-2xl">
                <FiRefreshCw />
            </div>

            <h3 className="text-2xl font-bold text-black">
                Plan de Reprise d'Activité
            </h3>

            <p className="text-gray-500 leading-relaxed">
                Assurez la continuité de votre activité avec un PRA adapté à vos besoins.
            </p>

            <ul className="flex flex-col gap-3">
                {[
                "Analyse des risques",
                "Mise en place stratégie de reprise",
                "Tests réguliers",
                ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-600 text-sm">
                    <FaCheck className="text-green-500 shrink-0" />
                    {item}
                </li>
                ))}
            </ul>

            </div>

        </div>
        </div>
    </section>
    );
}