import Image from "next/image";
import { FaUsers, FaLayerGroup, FaCogs, FaShieldAlt, FaCheckCircle } from "react-icons/fa";
import CloudImg from "../../../../public/Image/cloud.jpg"; // adapte le chemin

const enjeux = [
  {
    icon: <FaUsers />,
    title: "Collaboration à distance",
    description: "Faciliter le travail collaboratif et la communication entre équipes dispersées géographiquement.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Centralisation des outils",
    description: "Unifier les applications métiers dans un environnement cohérent et accessible.",
  },
  {
    icon: <FaCogs />,
    title: "Automatisation des processus",
    description: "Optimiser les workflows et réduire les tâches manuelles répétitives.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Accès sécurisé",
    description: "Garantir un accès sécurisé aux applications critiques depuis n'importe où.",
  },
];

export default function EnjeuxCloud() {
    return (
        <>
        <section className="bg-[#F9FAFB] py-20 px-6 md:px-20">
            <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Les enjeux des entreprises modernes
                </h2>
                <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Face à la transformation digitale, les organisations doivent relever des défis technologiques majeurs
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {enjeux.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-5)] flex items-center justify-center text-white text-xl">
                    {item.icon}
                    </div>
                    <h3 className="font-bold text-black text-lg">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
                ))}
            </div>
            </div>
        </section>
        </>
    );
}