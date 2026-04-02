import { FaEnvelopeOpenText } from "react-icons/fa";

export default function Hero() {
    return (
        <section
        className="mt-20 relative overflow-hidden py-24 px-6 md:px-20 flex items-center"
        style={{
            background:
            "linear-gradient(135deg, var(--color-5) 0%, var(--color-4) 40%, var(--color-5) 100%)",
        }}
        >
        <span className=" absolute top-[0] left-[0] w-[30vh] h-[30vh] bg-[var(--color-1)] rounded-full opacity-20"></span>
        <span className="absolute bottom-[0] right-[0] w-[30vh] h-[30vh] bg-[var(--color-1)] rounded-full opacity-15"></span>

        <div className="max-w-3xl mx-auto w-full relative z-10 flex flex-col items-center text-center gap-6">
            <FaEnvelopeOpenText className="text-[var(--color-1)] h-10 w-10 shrink-0" />

            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Contactez CYNERIS
            </h2>

            <p className="text-blue-100 text-base md:text-lg max-w-xl">
            Une question ou un projet informatique ? Notre équipe est à votre écoute.
            </p>

        </div>
        </section>
    );
}