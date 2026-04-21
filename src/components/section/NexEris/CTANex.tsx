import Link from "next/link";

export default function CTANex() {
    return (
        <section
        className="relative overflow-hidden py-24 px-6 md:px-20 flex items-center"
        style={{ background: "linear-gradient(135deg, #0a0a1a 0%, #0d1b4b 40%, #0a0a1a 100%)" }}
        >
        <span className="absolute top-[0] left-[0] w-[40vh] h-[40vh] bg-[var(--color-1)] rounded-full opacity-10"></span>
        <span className="absolute bottom-[0] right-[0] w-[40vh] h-[40vh] bg-[var(--color-1)] rounded-full opacity-10"></span>

        <div className="max-w-3xl mx-auto w-full relative z-10 flex flex-col items-center text-center gap-6">

            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            NEX.ERIS — Voir, comprendre, agir en temps réel
            </h2>

            <p className="text-blue-100/70 text-base md:text-lg max-w-xl">
            Demandez une démonstration et découvrez comment NEX.ERIS transforme votre posture cyber.
            </p>

            <Link
            href="/Page/Contact"
            className="bg-[var(--color-1)] mt-2 px-10 py-3 text-white font-semibold text-sm rounded-md hover:opacity-90 transition-opacity"
            >
            Demander une démo — 04 94 46 26 93
            </Link>

        </div>
        </section>
    );
}