import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import SensibilisationImg from "../../../../public/Image/20945823.jpg"; 

export default function Sensibilisation() {
    return (
    <section className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <div className="flex justify-center order-2 md:order-1">
            <Image
            src={SensibilisationImg}
            alt="Protection des infrastructures"
            className="w-full max-w-sm h-auto object-contain"
            />
        </div>

        <div className="order-1 md:order-2 flex flex-col gap-6">

            <h3 className="text-2xl font-bold text-black">
            Sensibilisation & accompagnement
            </h3>

            <p className="text-gray-500 leading-relaxed">
            Formation de vos équipes aux bonnes pratiques de sécurité et accompagnement continu.            
            </p>

            <ul className="flex flex-col gap-3">
            {[
                "Formation des collaborateurs aux risques cyber",
                "Mise en place de bonnes pratiques",
                "Support et maintenance continue",
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