import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import Logo from "../../../public/Logo/LogoCyneris.png"; 

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        <div className="flex flex-col gap-4">
          <Image src={Logo} alt="Cyneris" width={100} height={60} />
          <p className="text-gray-500 text-sm leading-relaxed">
            Votre partenaire IT de confiance pour une infrastructure performante et sécurisée.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-black mb-2">Services</h3>
          <Link href="/Page/Infra-Reseaux" className="text-gray-500 hover:text-black text-sm transition">Réseau</Link>
          <Link href="/Page/Infra-Reseaux" className="text-gray-500 hover:text-black text-sm transition">Infrastructure</Link>
          <Link href="/Page/Cybersecurite" className="text-gray-500 hover:text-black text-sm transition">Cyber Sécurité</Link>
          <Link href="/Page/GestionDesDonnees" className="text-gray-500 hover:text-black text-sm transition">Gestion de données</Link>
          <Link href="/Page/Plateformes-Solutions" className="text-gray-500 hover:text-black text-sm transition">Plateformes & Solutions</Link>
        </div>

        {/* Entreprise */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-black mb-2">Entreprise</h3>
          <Link href="#a-propos" className="text-gray-500 hover:text-black text-sm transition">À propos</Link>
          <Link href="#valeurs" className="text-gray-500 hover:text-black text-sm transition">Nos valeurs</Link>
          <Link href="#carrieres" className="text-gray-500 hover:text-black text-sm transition">Carrières</Link>
          <Link href="#blog" className="text-gray-500 hover:text-black text-sm transition">Blog</Link>
          <Link href="#contact" className="text-gray-500 hover:text-black text-sm transition">Contact</Link>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-black mb-2">Contact</h3>
          <div className="flex items-start gap-3 text-sm text-gray-500">
            <FaMapMarkerAlt className="text-[var(--color-1)] mt-1 shrink-0" size={16} />
            <span>Bâtiment Le Nobel, 270 Av. Jean D'Ormesson, 83130 La Garde</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <FaPhone className="text-[var(--color-1)] shrink-0" size={16} />
            <span>04 XX XX XX XX</span>
          </div>
        </div>

      </div>
    </footer>
  );
}