import Link from "next/link";

export default function CTADev() {
    return (
    <section className="py-20 px-6 md:px-20" style={{ background: "linear-gradient(to bottom right, var(--color-5) 0%, var(--color-3) 100%)" }}>
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">

        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Sécurisez votre code dès aujourd'hui
        </h2>

        <p className="text-white/70 text-lg">
            Nos experts intègrent la sécurité dans votre cycle de développement dès la première étape.
            Contactez-nous pour démarrer votre audit Secure by Design.
        </p>

        <Link
            href="/Page/Contact"
            className="mt-4 bg-[var(--color-1)] hover:bg-[var(--color-2)] text-white font-semibold px-10 py-4 rounded-lg transition"
        >
            Contactez CYNERIS — 04 94 46 26 93
        </Link>

        </div>
    </section>
    );
}