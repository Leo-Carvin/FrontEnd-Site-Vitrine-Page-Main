import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-center bg-white border-t border-gray-800">
      <div className="flex justify-around">
        <div className="max-w-6xl flex flex-col md:flex-row justify-start items-center gap-20">
        <div className="w-50 flex gap-6 flex-col">
          <img
            src="/Logo/LogoCyneris.png"
            alt="Studio Nova"
            className="w-32 h-auto mx-auto md:mx-0"
          />
          <p>
            Votre partenaire IT de confiance 
            pour une infrastructure 
            performante et sécurisée.
          </p>
        </div>
          
          <div className="flex gap-6 flex-col">
            <h2 className="font-bold"> Liens Importants </h2>
            <li><a href="/mentions-legales" className="hover:text-white">
              Mentions légales
            </a> </li>
            <li><a href="#" className="hover:text-white">
              Politique de confidentialité
            </a> </li>
          </div>

          <div className="flex gap-6 flex-col">
            <p className="font-bold"> 
              Notre Expertise
            </p>
            <li><a href="#" className="hover:text-white">
              Front-End
            </a></li>
            <li><a href="#" className="hover:text-white">
              Back-end
            </a></li>
          </div>

          <div className="flex gap-6 flex-col">
            <h2 className="font-bold"> Navigation </h2>
            <li><a href="/#a-propos" className="hover:text-white">
              À propos
            </a></li>
            <li><a href="/#services" className="hover:text-white">
              Services
            </a></li>
            <li> <a href="/#contact" className="hover:text-white">
              Contact
            </a> </li>
            <a href="/#mentions-legales" className="hover:text-white"></a>
          </div>

          <div className="flex gap-2 flex-col">
            <h2 className="font-bold"> Zone intervention </h2>
            <p> TOULON </p>
            <p> Aix en PROVENCE </p>
            <p>BORDEAUX</p>
            <p> PARIS </p>
            <p> TANGER</p>
          </div>

        </div>
      </div>

          <div className="flex justify-center gap-4 text-2xl mt-6 mb-4">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
      <p>2026 Studio Nova. Tous droits réservés.</p>
    </footer>
  );
}
