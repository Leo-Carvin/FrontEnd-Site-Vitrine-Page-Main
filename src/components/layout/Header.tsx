"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaChevronDown, FaShieldAlt, FaServer, FaBrain } from "react-icons/fa";
import LogoCyneris from "../../../public/Logo/LogoCyneris.png";

const CATS = [
  {
    title: "Sécurité", icon: FaShieldAlt, color: "text-rose-500", bg: "bg-rose-50", border: "border-rose-200",
    subtitle: "Protégez votre entreprise",
    items: [
      { label: "Cyber Sécurité", href: "/Page/Cybersecurite", desc: "Protection & détection" },
      { label: "Pentest",        href: "/Page/PenTest",        desc: "Tests d'intrusion" },
      { label: "Sécurité Dev",   href: "/Page/SecureDev",      desc: "DevSecOps & SAST" },
    ],
  },
  {
    title: "Infrastructure", icon: FaServer, color: "text-blue-500", bg: "bg-blue-50", border: "border-blue-200",
    subtitle: "Maîtrisez votre SI",
    items: [
      { label: "Réseau",                  href: "/Page/Infra-Reseaux",           desc: "LAN, WAN, SD-WAN" },
      { label: "Infrastructure",          href: "/Page/Services#infrastructure",  desc: "Serveurs & cloud" },
      { label: "Plateformes & Solutions", href: "/Page/Plateformes-Solutions",    desc: "Intégration & MCO" },
    ],
  },
  {
    title: "Data & IA", icon: FaBrain, color: "text-violet-500", bg: "bg-violet-50", border: "border-violet-200",
    subtitle: "Exploitez vos données",
    items: [
      { label: "Data Science",       href: "/Page/DataSciense",       desc: "ML & analytics" },
      { label: "Gestion de données", href: "/Page/GestionDesDonnees", desc: "Gouvernance & ETL" },
      { label: "NEX.ERIS",           href: "/Page/NexEris",           desc: "Plateforme IA propriétaire" },
    ],
  },
];

const ALL = -1;

function ServiceItem({ item, cat, onClose }: { item: typeof CATS[0]["items"][0]; cat: typeof CATS[0]; onClose: () => void }) {
  const pathname = usePathname();
  const active = pathname === item.href || pathname === item.href.split("#")[0];
  return (
    <Link href={item.href} onClick={onClose}
      className={`flex items-start gap-3 p-3 rounded-xl border transition-all group/item ${active ? `${cat.bg} ${cat.border}` : "border-transparent hover:bg-gray-50"}`}>
      <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${active ? cat.color.replace("text-", "bg-") : "bg-black/15 group-hover/item:bg-black/35"}`} />
      <div>
        <p className="text-[16px] font-semibold text-black">{item.label}</p>
        <p className="text-[13px] text-black/45 mt-0.5">{item.desc}</p>
      </div>
      <span className={`ml-auto text-xs opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all ${cat.color}`}>→</span>
    </Link>
  );
}

function MobileAllServices({ onClose }: { onClose: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-3 py-3 rounded-xl text-sm font-semibold text-[var(--color-5)] bg-blue-50">
        <span>Tous nos services</span>
        <FaChevronDown className={`text-[10px] transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="mt-1 flex flex-col gap-1 pl-2">
          {CATS.map(c => (
            <div key={c.title}>
              <div className="flex items-center gap-2 px-3 py-2">
                <c.icon className={`text-xs ${c.color}`} />
                <p className="text-[10px] font-bold text-black/35 uppercase tracking-widest">{c.title}</p>
              </div>
              {c.items.map(item => <ServiceItem key={item.href} item={item} cat={c} onClose={onClose} />)}
            </div>
          ))}
          <Link href="/Page/Services" onClick={onClose} className="mx-3 mt-1 mb-2 text-xs font-semibold text-[var(--color-5)]">
            Voir tous les services →
          </Link>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [activeCat, setActiveCat] = useState<number>(ALL);
  const [scrolled, setScrolled] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const isActive = (href: string) => pathname === href || pathname === href.split("#")[0];
  const isServicesActive = CATS.flatMap(c => c.items).some(i => isActive(i.href));
  const open  = () => { clearTimeout(timer.current!); setDropOpen(true); };
  const close = () => { timer.current = setTimeout(() => setDropOpen(false), 150); };

  const cat = activeCat !== ALL ? CATS[activeCat] : null;

  return (
<header className={`fixed top-0 w-full z-30 transition-all duration-300 ${
  scrolled
    ? "bg-white/80 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06),0_8px_32px_-8px_rgba(0,0,0,0.12)]"
    : "bg-white border-b border-black/6"
}`}>      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 md:px-12">

        <Link href="/" className="py-3">
          <Image src={LogoCyneris} className="w-14 md:w-[72px]" alt="Cyneris Logo" />
        </Link>

        <nav className="hidden md:flex items-center h-full">
          <div className="relative h-full flex items-center"
            onMouseEnter={() => { open(); setActiveCat(ALL); }} onMouseLeave={close}>
            <Link href="/Page/Services">
              <button className={`h-full flex items-center gap-1.5 px-5 text-base font-semibold border-b-2 transition-colors ${isServicesActive ? "text-[var(--color-5)] border-[var(--color-5)]" : "text-black border-transparent hover:text-[var(--color-5)] hover:border-[var(--color-5)]/40"}`}>
                Nos Services
                <FaChevronDown className={`text-[9px] transition-transform ${dropOpen ? "rotate-180" : ""}`} />
              </button>
            </Link>

            {dropOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full" onMouseEnter={open} onMouseLeave={close}>
                <div className="h-3" />
                <div className="flex rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.14)] border border-black/8 w-[720px] bg-white">

                  <div className="bg-gray-50 border-r border-black/6 p-3 flex flex-col gap-1 w-[210px]">
                    <p className="text-[10px] font-semibold text-black/30 uppercase tracking-widest px-3 mb-2">Domaines</p>

                    <button onMouseEnter={() => setActiveCat(ALL)}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-left w-full transition-all ${activeCat === ALL ? "bg-white shadow-sm border border-black/6" : "hover:bg-white/70"}`}>
                      <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 16 16">
                          <rect x="1" y="1" width="6" height="6" rx="1.5"/><rect x="9" y="1" width="6" height="6" rx="1.5"/>
                          <rect x="1" y="9" width="6" height="6" rx="1.5"/><rect x="9" y="9" width="6" height="6" rx="1.5"/>
                        </svg>
                      </span>
                      <span className={`text-sm font-semibold transition-colors ${activeCat === ALL ? "text-black" : "text-black/55"}`}>Tous nos services</span>
                    </button>

                    <span className="w-full h-px bg-black/6 my-1" />

                    {CATS.map((c, i) => (
                      <button key={c.title} onMouseEnter={() => setActiveCat(i)}
                        className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-left transition-all group ${activeCat === i ? "bg-white shadow-sm border border-black/6" : "hover:bg-white/70"}`}>
                        <span className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${activeCat === i ? `${c.bg} border ${c.border}` : "bg-black/5"}`}>
                          <c.icon className={`text-xs ${activeCat === i ? c.color : "text-black/40"}`} />
                        </span>
                        <span className={`text-sm font-semibold transition-colors ${activeCat === i ? "text-black" : "text-black/55 group-hover:text-black"}`}>{c.title}</span>
                      </button>
                    ))}

                    <div className="mt-auto pt-3 border-t border-black/6">
                      <Link href="/Page/Contact" onClick={() => setDropOpen(false)}
                        className="flex items-center justify-between px-3 py-2 text-xs font-semibold text-[var(--color-5)] hover:text-[var(--color-4)] transition">
                        Parler à un expert <span>→</span>
                      </Link>
                    </div>
                  </div>

                  <div className="p-5 flex-1">
                    <div className={`flex items-center gap-3 mb-4 pb-3 border-b border-black/6`}>
                      <span className={`w-9 h-9 rounded-xl flex items-center justify-center ${cat ? `${cat.bg} border ${cat.border}` : "bg-gradient-to-br from-blue-500 to-violet-500"}`}>
                        {cat
                          ? <cat.icon className={`text-base ${cat.color}`} />
                          : <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 16 16"><rect x="1" y="1" width="6" height="6" rx="1.5"/><rect x="9" y="1" width="6" height="6" rx="1.5"/><rect x="1" y="9" width="6" height="6" rx="1.5"/><rect x="9" y="9" width="6" height="6" rx="1.5"/></svg>
                        }
                      </span>
                      <div>
                        <p className="text-sm font-bold text-black">{cat ? cat.title : "Tous nos services"}</p>
                        <p className="text-[11px] text-black/40">{cat ? cat.subtitle : "Vue d'ensemble de notre offre"}</p>
                      </div>
                    </div>

                      <div className="flex flex-col gap-3">
                        {cat
                          ? <div className="flex flex-col gap-1">
                              {cat.items.map(item => <ServiceItem key={item.href} item={item} cat={cat} onClose={() => setDropOpen(false)} />)}
                            </div>
                          : CATS.map(c => (
                              <div key={c.title}>
                                <div className="flex items-center gap-2 mb-1">
                                  <span className={`w-4 h-4 rounded-md flex items-center justify-center ${c.bg} border ${c.border}`}>
                                    <c.icon className={`text-[8px] ${c.color}`} />
                                  </span>
                                  <p className="text-[10px] font-bold text-black/35 uppercase tracking-wider">{c.title}</p>
                                </div>
                                <div className="flex flex-wrap gap-1">
                                  {c.items.map(item => <ServiceItem key={item.href} item={item} cat={c} onClose={() => setDropOpen(false)} />)}
                                </div>
                              </div>
                            ))
                        }
                      </div>

                    {!cat && (
                      <div className="pt-3 mt-2 border-t border-black/6">
                        <Link href="/Page/Services" onClick={() => setDropOpen(false)}
                          className="text-xs font-semibold text-[var(--color-5)] hover:text-[var(--color-4)] transition">
                          Voir la page services complète →
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {[{ href: "/Page/Apropos", label: "À propos" }, { href: "/Page/Avantages", label: "Avantages" }].map(({ href, label }) => (
            <Link key={href} href={href} className={`h-full flex items-center px-5 text-base font-semibold border-b-2 transition-colors ${isActive(href) ? "text-[var(--color-5)] border-[var(--color-5)]" : "text-black border-transparent hover:text-[var(--color-5)] hover:border-[var(--color-5)]/40"}`}>
              {label}
            </Link>
          ))}

          <span className="w-px h-5 bg-black/10 mx-3" />

          <Link href="/Page/Contact" className="px-5 py-2.5 rounded-xl text-base font-semibold text-white bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 transition-all hover:-translate-y-px hover:shadow-[0_6px_24px_rgba(37,99,235,0.4)]">
            Nous contacter
          </Link>
        </nav>

        <button className="md:hidden text-xl p-2 rounded-lg hover:bg-black/5 text-black transition" onClick={() => setMenuOpen(m => !m)}>          
        {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-black/6 px-5 py-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
          <MobileAllServices onClose={() => setMenuOpen(false)} />
          {[{ href: "/Page/Apropos", label: "À propos" }, { href: "/Page/Avantages", label: "Avantages" }].map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)}
              className={`block px-3 py-3 rounded-xl text-sm font-semibold transition ${isActive(href) ? "text-[var(--color-5)] bg-blue-50" : "text-black hover:bg-black/4"}`}>
              {label}
            </Link>
          ))}
          <Link href="/Page/Contact" onClick={() => setMenuOpen(false)}
            className="mt-2 block text-center bg-gradient-to-br from-blue-600 to-blue-700 text-white font-semibold text-sm px-5 py-3 rounded-xl">
            Nous contacter
          </Link>
        </div>
      )}
    </header>
  );
}