import Image from "next/image";
import { FaCheck, FaTools } from "react-icons/fa";
import InstallImg from "../../../../public/Image/two-business-people-standing-server-room-with-laptop-discussing.jpg";

export default function InstallationConfig() {
    return (
    <section className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <div className="order-2 md:order-1">
            <Image
            src={InstallImg}
            alt="Installation & Configuration"
            className="rounded-2xl w-full h-auto object-cover"
            />
        </div>

        <div className="order-1 md:order-2 flex flex-col gap-6">

            <div className="w-14 h-14 rounded-full bg-[var(--color-1)] flex items-center justify-center text-white text-2xl">
            <FaTools />
            </div>

            <h3 className="text-2xl font-bold text-black">
            Installation & Configuration
            </h3>

            <p className="text-gray-500">
            Déploiement professionnel de vos équipements réseau
            </p>

            <ul className="flex flex-col gap-3">
            {[
                "Installation certifiée",
                "Configuration optimisée",
                "Tests de performance",
            ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-600 text-sm">
                <FaCheck className="text-[var(--color-1)] shrink-0" />
                {item}
                </li>
            ))}
            </ul>

        </div>

        </div>
    </section>
    );
}