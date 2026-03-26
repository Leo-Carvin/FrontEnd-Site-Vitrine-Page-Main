import nousChoisir from "../../../data/Choisir";
import { FaPhone } from "react-icons/fa6";


export default function NousChoisir() {
    return (
    <section className="relative overflow-hidden p-20 flex items-center bg-[#f9fafb]" >
        
        
        <div className="rounded-2xl max-w-7xl mx-auto w-full px-4 relative z-10" style={{ background: "linear-gradient(135deg, var(--color-5) 0%, var(--color-4) 40%, var(--color-5) 100%)" }}>
        <div className=" mt-20 mb-20 gap-12 items-center">
        <span className="absolute bottom-[0px] left-[0px] w-[20vh] h-[20vh] bg-[var(--color-1)] rounded-full opacity-20"></span>
        <span className="absolute right-[0px] top-[0px] w-[20vh] h-[20vh] bg-[var(--color-1)] rounded-full opacity-15"></span>

            <div className="flex flex-col items-center">

            <h1 className="text-5xl text-center md:text-6xl font-bold mb-4 text-white leading-tight">
                Prêt à transformer votre infrastructure IT ?
            </h1>

            <p className="text-blue-100 text-center mb-8 text-lg">
                Contactez nos experts dès aujourd'hui pour un audit gratuit de votre système informatique et découvrez comment nous pouvons optimiser vos performances.
            </p>

            <div className="flex gap-4">
              <button className="bg-[var(--color-1)] hover:bg-[var(--color-2)] text-white-900 font-semibold px-6 py-3 rounded-lg transition">
                Contacter-nous →
              </button>
              <button className="flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-blue-700 font-semibold px-6 py-3 rounded-lg transition">
                <FaPhone /> 04 00 00 00 00
              </button>
            </div>
            </div>
        </div>
        </div>
    </section>
    );
}