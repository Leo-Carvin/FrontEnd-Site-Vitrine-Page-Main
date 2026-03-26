"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import LogoCyneris from "../../../public/Logo/LogoCyneris.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed w-full z-30 bg-white text-black font-bold">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">

        <Link href="/" onClick={() => setMenuOpen(false)}>
          <Image src={LogoCyneris} className="w-10 md:w-20 lg:w-20" alt="Cyneris Logo"/>
        </Link>

        <nav className="hidden md:flex gap-6">
          <div className="relative group">
            <Link href="/Page/Services" className="hover:text-accent flex items-center gap-1">
              Nos Services {'>'}
            </Link>
            <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-lg py-2 w-56 border border-gray-200">
              <li><Link href="/Page/Services#reseau" className="block px-4 py-2 hover:bg-accent hover:text-[var(--color-1)]">Réseau</Link></li>
              <li><Link href="/Page/Services#infrastructure" className="block px-4 py-2 hover:bg-accent hover:text-[var(--color-1)]">Infrastructure</Link></li>
              <li><Link href="/Page/Services#cyber-securite" className="block px-4 py-2 hover:bg-accent hover:text-[var(--color-1)]">Cyber Sécurité</Link></li>
              <li><Link href="/Page/Services#gestion-donnees" className="block px-4 py-2 hover:bg-accent hover:text-[var(--color-1)]">Gestion de données</Link></li>
              <li><Link href="/Page/Services#plateformes" className="block px-4 py-2 hover:bg-accent hover:text-[var(--color-1)]">Plateformes & Solutions</Link></li>
            </ul>
          </div>
          <Link href="/#a-propos" className="hover:text-accent">À propos</Link>
          <Link href="/#avantages" className="hover:text-accent">Avantages</Link>
          <Link href="/#contact" className="hover:text-accent">Contact</Link>
        </nav>

        <button
          className="md:hidden text-black text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 flex flex-col gap-4">
          
          <div>
            <button
              className="flex items-center gap-2 font-bold w-full text-left"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Nos Services <FaChevronDown className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <ul className="mt-2 flex flex-col gap-2 pl-4 border-l-2 border-[var(--color-1)]">
                <li><Link href="/Page/Services" className="text-gray-600 font-normal" onClick={() => setMenuOpen(false)}>Tous nos services</Link></li>
                <li><Link href="/Page/Services#reseau" className="text-gray-600 font-normal" onClick={() => setMenuOpen(false)}>Réseau</Link></li>
                <li><Link href="/Page/Services#infrastructure" className="text-gray-600 font-normal" onClick={() => setMenuOpen(false)}>Infrastructure</Link></li>
                <li><Link href="/Page/Services#cyber-securite" className="text-gray-600 font-normal" onClick={() => setMenuOpen(false)}>Cyber Sécurité</Link></li>
                <li><Link href="/Page/Services#gestion-donnees" className="text-gray-600 font-normal" onClick={() => setMenuOpen(false)}>Gestion de données</Link></li>
                <li><Link href="/Page/Services#plateformes" className="text-gray-600 font-normal" onClick={() => setMenuOpen(false)}>Plateformes & Solutions</Link></li>
              </ul>
            )}
          </div>

          <Link href="/#a-propos" onClick={() => setMenuOpen(false)}>À propos</Link>
          <Link href="/#avantages" onClick={() => setMenuOpen(false)}>Avantages</Link>
          <Link href="/#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}

    </header>
  );
}