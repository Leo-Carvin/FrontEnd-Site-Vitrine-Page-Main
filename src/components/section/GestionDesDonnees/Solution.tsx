import Image from "next/image";
import { FaCheck, FaCloudUploadAlt } from "react-icons/fa";
import SauvegardeImg from "../../../../public/Image/19199030.jpg"; 

export default function SolutionsProtection() {
    return (
    <section className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Nos solutions de protection
            </h2>
            <p className="text-gray-500 text-lg">
            Une approche complète pour sécuriser vos données
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            <div className="flex flex-col gap-6">

            <div className="w-14 h-14 rounded-xl bg-blue-500 flex items-center justify-center text-white text-2xl">
                <FaCloudUploadAlt />
            </div>

            <h3 className="text-2xl font-bold text-black">
                Sauvegarde sécurisée
            </h3>

            <p className="text-gray-500 leading-relaxed">
                Protégez vos données avec nos solutions de sauvegarde automatisées et sécurisées.
            </p>

            <ul className="flex flex-col gap-3">
                {[
                "Sauvegarde locale & externalisée",
                "Planification automatique",
                "Vérification des sauvegardes",
                ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-600 text-sm">
                    <FaCheck className="text-green-500 shrink-0" />
                    {item}
                </li>
                ))}
            </ul>

            </div>

            <div>
            <Image
                src={SauvegardeImg}
                alt="Sauvegarde sécurisée"
                className="rounded-2xl w-full h-auto object-cover"
            />
            </div>

        </div>
        </div>
    </section>
    );
}