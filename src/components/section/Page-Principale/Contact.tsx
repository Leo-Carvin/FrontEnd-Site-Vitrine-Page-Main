import nousChoisir from "../../../data/Choisir";
import { FaPhone } from "react-icons/fa6";

export default function NousChoisir() {
    return (
    <section className="relative overflow-hidden px-6 py-16 md:px-20 md:py-20 lg:px-50 flex items-center bg-[#f9fafb]">

        <div className="min-h-[50vh] items-center flex lg:p-[50px] p-6 rounded-2xl max-w-7xl mx-auto w-full relative z-10" style={{ background: "linear-gradient(380deg, var(--color-5) 0%, var(--color-4) 40%, var(--color-5) 100%)" }}>
        
        <span className="absolute bottom-0 left-0 w-[20vh] h-[20vh] md:w-[30vh] md:h-[30vh] bg-[var(--color-5)] rounded-full opacity-20"></span>
        <span className="absolute right-0 top-0 w-[20vh] h-[20vh] md:w-[30vh] md:h-[30vh] bg-[var(--color-1)] rounded-full opacity-15"></span>

        <div className="my-10 md:my-20 gap-12 items-center w-full">
            <div className="flex flex-col items-center">

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white leading-tight text-center">
                Prêt à transformer votre infrastructure IT ?
            </h1>

            <p className="text-blue-100 text-center mb-8 text-base md:text-lg max-w-2xl">
                Contactez nos experts dès aujourd'hui pour un audit gratuit de votre système informatique et découvrez comment nous pouvons optimiser vos performances.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[var(--color-1)] hover:bg-[var(--color-2)] text-white font-semibold px-6 py-3 rounded-lg transition">
                Contacter-nous →
                </button>
                <button className="flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-blue-700 font-semibold px-6 py-3 rounded-lg transition">
                <FaPhone /> 04 00 00 00 00
                </button>
            </div>

            </div>
        </div>

        </div>
    </section>
    );
}