import Image from "next/image";
import { FaCheck, FaChartBar } from "react-icons/fa";
import SupervisionImg from "../../../../public/Image/diverse-building-contractors-associates-checks-solar-power-systems.jpg";

export default function SupervisionOptimisation() {
    return (
    <section className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <div className="order-2 md:order-1">
            <Image
            src={SupervisionImg}
            alt="Supervision & Optimisation"
            className="rounded-2xl w-full h-auto object-cover"
            />
        </div>

        <div className="order-1 md:order-2 flex flex-col gap-6">

            <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white text-2xl">
            <FaChartBar />
            </div>

            <h3 className="text-2xl font-bold text-black">
            Supervision & Optimisation
            </h3>

            <p className="text-gray-500">
            Monitoring continu et amélioration des performances
            </p>

            <ul className="flex flex-col gap-3">
            {[
                "Surveillance 24/7",
                "Alertes proactives",
                "Optimisation continue",
            ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-600 text-sm">
                <FaCheck className="text-green-500 shrink-0" />
                {item}
                </li>
            ))}
            </ul>

        </div>

        </div>
    </section>
    );
}