import { FaClock, FaChartLine, FaSyncAlt, FaHeadset } from "react-icons/fa";

const garanties = [
    {
    icon: <FaClock />,
    value: "24/7",
    title: "Surveillance continue de vos données",
    description: "",
    },
    {
    icon: <FaChartLine />,
    value: "99.9%",
    title: "Disponibilité garantie",
    description: "",
    },
    {
    icon: <FaSyncAlt />,
    value: "Automatisé",
    title: "Sauvegardes automatiques",
    description: "",
    },
    {
    icon: <FaHeadset />,
    value: "Support",
    title: "Équipe réactive et experte",
    description: "",
    },
];

export default function Tranquillite() {
    return (
    <section
        className="py-20 px-6 md:px-20"
        style={{
        background:
            "linear-gradient(to bottom right, var(--color-2) 0%, var(--color-5) 100%)",
        }}
    >
        <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Votre tranquillité d&apos;esprit
            </h2>
            <p className="text-white/70 text-lg">
            Des garanties solides pour protéger votre activité
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {garanties.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-4">

                <div className="w-16 h-16 rounded-full bg-[#ffffff20] flex items-center justify-center text-[var(--color-1)] text-3xl">
                {item.icon}
                </div>

                <span className="text-white text-2xl font-bold">{item.value}</span>
                <span className="text-white/70 text-sm">{item.title}</span>

            </div>
            ))}
        </div>

        </div>
    </section>
    );
}