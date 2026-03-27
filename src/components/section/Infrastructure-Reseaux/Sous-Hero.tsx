import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import ReseauImg from "../../../../public/Image/57783.jpg";

export default function ReseauProductivite() {
    return (
    <section className="py-20 px-6 md:px-20" style={{ background: "linear-gradient(to bottom right, var(--color-5) 0%, var(--color-3) 100%)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <div className="order-2 md:order-1">
            <Image
            src={ReseauImg}
            alt="Réseau IT"
            className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
        </div>

        <div className="order-1 md:order-2 flex flex-col gap-6">

            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-1)] leading-tight">
            Votre réseau, le cœur de votre productivité
            </h2>

            <p className="text-white/80 leading-relaxed">
            Dans un monde hyperconnecté, la performance de votre réseau détermine directement
            l'efficacité de vos équipes et la satisfaction de vos clients.
            </p>

            <ul className="flex flex-col gap-4">
            {[
                "Réduction des temps de latence de 70%",
                "Sécurité renforcée contre les cyberattaques",
                "Supervision 24/7 et maintenance préventive",
            ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-white/90 text-sm">
                <FaCheckCircle className="text-[var(--color-1)] shrink-0" size={20} />
                {item}
                </li>
            ))}
            </ul>

        </div>

        </div>
    </section>
    );
}