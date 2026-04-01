import Image from "next/image";
import HeroImg from "../../../../public/Image/37655-removebg-preview.png";

export default function Hero() {
    return (
    <section className="min-h-[100vh] pt-15 flex items-center px-6 lg:px-15" style={{ background: "linear-gradient(380deg, var(--color-5) 0%, var(--color-2) 60%, var(--color-1) 100%)" }}>
    <div className="max-w-7xl mx-auto w-full py-20 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 text-white leading-tight">
            Des plateformes technologiques pour        
            <span className="relative z-10 text-[var(--color-1)]"> accélérer </span>
            votre performance
            </h1>

            <p className="text-blue-100 mb-8 text-base md:text-lg">
            CYNERIS vous accompagne dans le déploiement et 
            l'intégration de solutions modernes pour améliorer la 
            collaboration, la productivité et la gestion de votre 
            infrastructure informatique.
            </p>

            <div className="flex justify-center md:justify-start">
            <button className="bg-white hover:bg-[var(--color-2)] text-[var(--color-5)] hover:text-white font-semibold px-6 py-3 rounded-lg transition">
                Nous contacter →
            </button>
            </div>
        </div>

        <div className="flex justify-center md:justify-end">
            <Image
            src={HeroImg}
            alt="Hero Cyneris"
            className="rounded-xl w-full max-w-sm md:max-w-full h-auto"
            />
        </div>

        </div>
    </div>
    </section>
    );
}