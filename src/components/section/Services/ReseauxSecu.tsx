import Image from "next/image";
import Link from "next/link";
import { FaNetworkWired } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import ReseauImg from "../../../../public/Image/OIUH1Z0.jpg"; 

export default function ReseauSection() {
  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        <div className="flex flex-col gap-6">
          
          <div className="w-14 h-14 rounded-xl bg-[var(--color-5)] flex items-center justify-center text-white text-2xl">
            <FaNetworkWired />
          </div>

          <h2 className="text-3xl font-bold text-black">
            Infrastructure Réseau Sécurisée
          </h2>

          <p className="text-gray-500 leading-relaxed">
            Conception et déploiement d'architectures réseau robustes, sécurisées et évolutives, adaptées aux enjeux de votre entreprise.
          </p>

          <ul className="flex flex-col gap-3">
            {[
              "Architecture réseau sécurisée et segmentée",
              "Installation et configuration équipements",
              "Supervision proactive 24/7",
              "Optimisation des performances réseau",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-600 text-sm">
                <FaCheck className="text-[var(--color-3)] shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <Link href="/Page/Services#reseau" className="text-[var(--color-3)] font-semibold hover:underline w-fit">
            En savoir plus →
          </Link>

        </div>

        <div>
          <Image
            src={ReseauImg}
            alt="Infrastructure Réseau"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </div>

      </div>
    </section>
  );
}