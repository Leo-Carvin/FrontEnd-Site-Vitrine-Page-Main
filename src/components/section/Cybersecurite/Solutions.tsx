import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import AuditImg from "../../../../public/Image/cybersecurity-data-protection-concept.jpg"; 

export default function SolutionsCyber() {
    return (
    <section className="bg-[#F9FAFB] py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">

-        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Nos solutions de cybersécurité
            </h2>
            <p className="text-gray-500 text-lg">
            Une approche complète pour sécuriser votre environnement digital
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            <div className="flex flex-col gap-6">

            <h3 className="text-2xl font-bold text-black">
                Audit de sécurité
            </h3>

            <p className="text-gray-500 leading-relaxed">
                Évaluation complète de votre posture de sécurité pour identifier les vulnérabilités avant qu'elles ne soient exploitées.
            </p>

            <ul className="flex flex-col gap-3">
                {[
                "Analyse des vulnérabilités système et réseau",
                "Tests d'intrusion en conditions réelles",
                "Évaluation des risques et plan d'action prioritaire",
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
                className="w-full max-w-sm h-auto object-contain"
            />
            </div>

        </div>
        </div>
    </section>
    );
}