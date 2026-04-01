import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import AuditImg from "../../../../public/Image/1a13666e-28ef-4873-98b4-a24505b97c26.jpg"; 

export default function SolutionsCloud() {
    return (
    <section className="bg-[#F9FAFB] py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">

-        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Nos solutions plateformes
            </h2>
            <p className="text-gray-500 text-lg">
            CYNERIS déploie des solutions technologiques adaptées à vos besoins spécifiques
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            <div className="flex flex-col gap-6">

            <h3 className="text-2xl font-bold text-black">
                Solutions Cloud
            </h3>

            <p className="text-gray-500 leading-relaxed">
                Migrez vers le cloud et bénéficiez d'une infrastructure moderne, évolutive et sécurisée pour vos applications critiques.
            </p>

            <ul className="flex flex-col gap-3">
                {[
                "Migration sécurisée vers AWS, Azure ou Google Cloud",
                "Hébergement haute disponibilité",
                "Gestion des environnements multi-cloud",
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
                src={AuditImg}
                alt="Audit de sécurité"
                className="rounded-2xl w-full max-w-sm h-auto object-contain"
            />
            </div>

        </div>
        </div>
    </section>
    );
}