import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 px-6 md:px-20" style={{ background: "var(--color-5)" }}>
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">

        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Discutons de votre projet IT dès aujourd'hui
        </h2>

        <p className="text-white/70 text-lg">
          Transformez votre infrastructure IT en avantage concurrentiel. Nos experts analysent
          vos besoins et vous proposent des solutions sur-mesure.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Link
            href="/#contact"
            className="bg-[var(--color-4)] hover:bg-[var(--color-3)] text-white font-semibold px-10 py-4 rounded-lg transition text-center"
          >
            Contactez CYNERIS
          </Link>
          <Link
            href="/plaquette.pdf"
            className="border-2 border-white text-white hover:bg-white hover:text-[var(--color-5)] font-semibold px-10 py-4 rounded-lg transition text-center"
          >
            Télécharger notre plaquette
          </Link>
        </div>

      </div>
    </section>
  );
}