import Image from "next/image";
import LogoCyneris from "../../../public/Logo/LogoCyneris.png";

export default function Header() {
  return (
    <header className=" fixed w-[100%] z-30 bg-white text-black font-bold w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between pl-4 pr-4">
        
        <Image src={LogoCyneris} alt="Cyneris Logo" width={100} height={50} />

        <nav className="hidden md:flex gap-6">
          <div className="relative group">
            <a href="#" className="hover:text-accent flex items-center gap-1">
              Nos Services {'>'}
            </a>
            <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-lg py-2 w-56 border border-gray-200">
              <li><a href="#" className="block px-4 py-2 hover:bg-accent hover:text-white">Réseau</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-accent hover:text-white">Infrastructure</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-accent hover:text-white">Cyber Sécurité</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-accent hover:text-white">Gestion de données</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-accent hover:text-white">Plateformes & Solutions</a></li>
            </ul>
          </div>
          <a href="#" className="hover:text-accent">À propos</a>
          <a href="#" className="hover:text-accent">Avantages</a>
          <a href="#" className="hover:text-accent">Contact</a>
        </nav>

      </div>
    </header>
  );
}