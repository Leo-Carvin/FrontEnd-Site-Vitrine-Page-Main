import { FaDatabase, FaBug, FaServer, FaGavel } from "react-icons/fa";

const risques = [
    {
    icon: <FaDatabase />,
    title: "Perte de données",
    description: "Corruption, suppression accidentelle ou défaillance matérielle",
    },
    {
    icon: <FaBug />,
    title: "Cyberattaques",
    description: "Ransomware, malware et tentatives d'intrusion",
    },
    {
    icon: <FaServer />,
    title: "Panne matérielle",
    description: "Défaillance serveur, disque dur ou infrastructure réseau",
    },
    {
    icon: <FaGavel />,
    title: "Non-conformité",
    description: "Sanctions RGPD et obligations réglementaires",
    },
];

export default function RisquesData() {
    return (
    <section className="bg-[#F9FAFB] py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Les risques que vous devez éviter
            </h2>
            <p className="text-gray-500 text-lg">
            Identifiez les menaces qui pèsent sur votre activité
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {risques.map((risque, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-sm">

                <div className="text-red-500 text-3xl">
                {risque.icon}
                </div>

                <h3 className="font-bold text-black text-lg">{risque.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{risque.description}</p>

            </div>
            ))}
        </div>

        </div>
    </section>
    );
}