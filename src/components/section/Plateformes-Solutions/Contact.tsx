import Link from "next/link";

export default function Contact() {
    return (
        <section
        className="relative overflow-hidden py-24 px-6 md:px-20 flex items-center"
        style={{
            background:
            "linear-gradient(135deg, var(--color-5) 0%, var(--color-4) 40%, var(--color-5) 100%)",
        }}
        >
        <span className=" absolute top-[0] left-[0] w-[40vh] h-[40vh] bg-[var(--color-1)] rounded-full opacity-20"></span>
        <span className="absolute bottom-[0] right-[0] w-[40vh] h-[40vh] bg-[var(--color-1)] rounded-full opacity-15"></span>

        <div className="max-w-3xl mx-auto w-full relative z-10 flex flex-col items-center text-center gap-6">

            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Modernisez vos outils et gagnez en efficacité
            </h2>

            <p className="text-blue-100 text-base md:text-lg max-w-xl">
            Faites confiance à CYNERIS pour transformer votre infrastructure et accélérer votre croissance digitale.
            </p>

            <Link
            href="Contact"
            className="bg-[var(--color-1)] mt-2 px-10 py-3 text-white font-semibold text-sm rounded-md hover:bg-white hover:text-[var(--color-5)] transition-colors"
            >
            Contactez CYNERIS
            </Link>

        </div>
        </section>
    );
}