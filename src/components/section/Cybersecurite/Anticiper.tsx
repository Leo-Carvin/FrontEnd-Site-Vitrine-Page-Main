import Link from "next/link";

export default function CTACyber() {
    return (
    <section className="py-20 px-6 md:px-20" style={{ background: "linear-gradient(to bottom right, var(--color-3) 0%, var(--color-5) 100%)" }}>
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">

        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Anticipez les menaces avant qu'elles n'impactent votre activité
        </h2>

        <p className="text-white/70 text-lg">
            Ne laissez pas les cybercriminels compromettre votre business. Contactez CYNERIS dès aujourd'hui pour sécuriser votre avenir numérique.
        </p>

        <Link
            href="/#contact"
            className="mt-4 bg-[var(--color-1)] hover:bg-[var(--color-2)] text-white font-semibold px-10 py-4 rounded-lg transition"
        >
            Contactez CYNERIS
        </Link>

        </div>
    </section>
    );
}