import Image from "next/image";
import {FaCheckCircle } from "react-icons/fa";
import CloudImg from "../../../../public/Image/45208-removebg-preview.png"; 

export default function EnjeuxCloud() {
    return (
        <>
        <section className="py-20 px-6 md:px-20 relative overflow-hidden" style={{ background: "linear-gradient(to bottom right, var(--color-5) 0%, var(--color-2) 100%)" }}>
            <span className="absolute top-[10px] left-[10px] w-32 h-32 bg-white/10 rounded-full"></span>
            <span className="absolute bottom-[10px] right-[10px] w-32 h-32 bg-white/10 rounded-full"></span>


            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            <div className="flex flex-col gap-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                L'avenir de votre entreprise se joue dans le cloud
                </h2>
                <p className="text-white/70 leading-relaxed">
                La transformation digitale n'est plus une option mais une nécessité. Les plateformes modernes permettent aux entreprises d'être plus agiles, plus efficaces et plus compétitives.
                </p>
                <ul className="flex flex-col gap-3">
                {[
                    "Réduction des coûts opérationnels de 30%",
                    "Amélioration de la productivité équipe",
                    "Évolutivité et flexibilité maximales",
                ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-white/90 text-sm">
                    <FaCheckCircle className="text-[var(--color-1)] shrink-0" />
                    {item}
                    </li>
                ))}
                </ul>
            </div>

            <div className="flex justify-center">
                <Image
                src={CloudImg}
                alt="Cloud computing"
                className="w-full max-w-sm h-auto object-contain"
                />
            </div>

            </div>
        </section>
        </>
    );
}