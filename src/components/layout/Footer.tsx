import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import Logo from "../../../public/Logo/LogoCyneris.png"; 

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

        {/* Bloc Logo & Mission */}
        <div className="flex flex-col gap-4">
          <Image src={Logo} alt="Cyneris" width={120} height={70} className="object-contain" />
          <p className="text-gray-500 text-sm leading-relaxed">
            Votre partenaire IT de confiance pour une infrastructure performante et sécurisée. 
            Accompagnement sur-mesure pour votre transformation numérique.
          </p>
        </div>

        {/* Services - Liens mis à jour */}
        <div className="flex flex-col gap-3">
          <h3 className="font-extrabold text-black mb-3 uppercase text-sm tracking-widest">Expertises</h3>
          <Link href="/Page/PenTest" className="text-gray-600 hover:text-[var(--color-1)] text-sm transition">Pentest</Link>
          <Link href="/Page/DataScience" className="text-gray-600 hover:text-[var(--color-1)] text-sm transition">DataScience</Link>
          <Link href="/Page/SecureDev" className="text-gray-600 hover:text-[var(--color-1)] text-sm transition">SecureDev</Link>
          <Link href="/Page/NexEris" className="text-gray-600 hover:text-[var(--color-1)] text-sm transition">NexEris</Link>
        </div>

        {/* Entreprise */}
        <div className="flex flex-col gap-3">
          <h3 className="font-extrabold text-black mb-3 uppercase text-sm tracking-widest">Cyneris</h3>
          <Link href="/Page/Apropos" className="text-gray-600 hover:text-[var(--color-1)] text-sm transition">À propos</Link>
          <Link href="/Page/MentionsLegales" className="text-gray-600 hover:text-[var(--color-1)] text-sm transition">Mentions Légales</Link>
          <Link href="/Page/Confidentialite" className="text-gray-600 hover:text-[var(--color-1)] text-sm transition">Politique de confidentialité</Link>
          <Link href="/Page/Contact" className="text-gray-600 hover:text-[var(--color-1)] text-sm transition">Contact</Link>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <h3 className="font-extrabold text-black mb-3 uppercase text-sm tracking-widest">Contact</h3>
          <div className="flex items-start gap-3 text-sm text-gray-600">
            <FaMapMarkerAlt className="text-[var(--color-1)] mt-1 shrink-0" size={16} />
            <span>LE NOBEL 270 AVENUE JEAN D'ORMESSON , <br/>83160 LA VALETTE-DU-VAR</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <FaPhone className="text-[var(--color-1)] shrink-0" size={16} />
            <span>04 94 46 26 93</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <FaEnvelope className="text-[var(--color-1)] shrink-0" size={16} />
            <a href="mailto:contact@cyneris.fr" className="hover:text-[var(--color-1)] transition">contact@cyneris.fr</a>
          </div>
        </div>
      </div>

      {/* Barre de Copyright */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
        <p>© {currentYear} Cyneris. Tous droits réservés.</p>
        <p>Design & Développement par Cyneris</p>
      </div>
    </footer>
  );
}