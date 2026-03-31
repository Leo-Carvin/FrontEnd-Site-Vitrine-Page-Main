import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { HiServer } from "react-icons/hi2";
import StockageImg from "../../../../public/Image/modern-data-center-providing-cloud-services-enabling-businesses-access-computing-resources-storage-demand-internet-server-room-infrastructure-3d-render-animation.jpg"; 

export default function Stockage() {
    return (
    <section className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            <div className="flex flex-col gap-6">

            <div className="w-14 h-14 rounded-xl bg-blue-500 flex items-center justify-center text-white text-2xl">
                <HiServer />
            </div>

            <h3 className="text-2xl font-bold text-black">
                Stockage sécurisé
            </h3>

            <p className="text-gray-500 leading-relaxed">
                Solutions de stockage haute disponibilité avec redondance des données.
            </p>

            <ul className="flex flex-col gap-3">
                {[
                "Serveurs sécurisés",
                "Cloud sécurisé",
                "Redondance des données",
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
                src={StockageImg}
                alt="Stockage sécurisé"
                className="rounded-2xl w-full h-auto object-cover"
            />
            </div>

        </div>
        </div>
    </section>
    );
}