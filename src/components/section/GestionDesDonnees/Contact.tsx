import Link from "next/link";

export default function CTA() {
    return (
    <section className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">

        <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            Assurez la continuité de votre activité dès aujourd&apos;hui
        </h2>

        <p className="text-gray-500 text-base md:text-lg max-w-xl">
            Ne laissez pas le hasard décider du sort de vos données. Contactez nos experts pour un audit personnalisé.
        </p>

        <Link
            href="/contact"
            className="mt-2 px-10 py-4 bg-[var(--color-5)] text-white font-semibold text-base rounded-md hover:opacity-90 transition-opacity"
        >
            Contactez CYNERIS
        </Link>

        </div>
    </section>
    );
}