import {
  FaArrowRight
} from "react-icons/fa";


export default function CTAContact() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 mt-5">
      <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:scale-110 hover:from-purple-600 hover:to-pink-600 transition-colors duration-300">
        <a className="flex items-center gap-2" href="#contact">
        Contactez-nous <FaArrowRight />
        </a>
      </button>
    </div>
  );
}

export function CTAServices() {
  return (
    <a href="#services" className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
      Découvrez nos services <FaArrowRight />
    </a>
  );
}


