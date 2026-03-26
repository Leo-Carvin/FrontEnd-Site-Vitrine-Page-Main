import { FaShieldAlt, FaRocket, FaUsers } from "react-icons/fa";

const points = [
    {
    icon: <FaShieldAlt />,
    title: "Sécurité renforcée",
    description: "Protection multicouche de vos données critiques",
    },
    {
    icon: <FaRocket />,
    title: "Performance optimale",
    description: "Infrastructure dimensionnée pour vos besoins",
    },
    {
    icon: <FaUsers />,
    title: "Accompagnement expert",
    description: "Support technique et conseil stratégique",
    },
];

export default function Approche() {
    return (
    <section className="bg-[#F9FAFB] py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Une approche globale de votre infrastructure IT
        </h2>

        <p className="text-gray-500 text-lg leading-relaxed mb-16">
            CYNERIS combine expertise technique et vision stratégique pour transformer votre
            système d'information en véritable avantage concurrentiel. Notre approche holistique
            garantit sécurité, performance et évolutivité.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {points.map((point, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
                <div className="text-4xl text-[var(--color-3)]">
                {point.icon}
                </div>
                <h3 className="font-bold text-black text-lg">{point.title}</h3>
                <p className="text-gray-500 text-sm text-center">{point.description}</p>
            </div>
            ))}
        </div>

        </div>
    </section>
    );
}