import Image from "next/image";
import Link from "next/link";
import HeroImg from "../../../../public/Image/geralt-binary-1414315_1920.jpg";

export default function Hero() {
  return (
    <section className="min-h-[100vh] pt-15 flex items-center px-6 lg:px-15" style={{ background: "linear-gradient(to bottom right, var(--color-3) 0%, var(--color-4) 50%, var(--color-5) 100%)" }}>
      <div className="max-w-7xl mx-auto w-full py-20 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="text-center md:text-left">
            <div className="w-fit p-2 rounded-[20px] bg-[#6bc3cd54] flex items-center gap-2 mb-6 text-white mx-auto md:mx-0">
              <img className="w-[10%]" src="/Icones/svg(1).svg" alt="Solutions IT B2B"/>
              <span className="text-sm">Solutions IT B2B</span>
            </div>

            <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 text-white leading-tight">
              Votre partenaire{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[var(--color-1)]">informatique </span>
                de confiance
                <span className="ml-[-40px] w-[30vh] h-[30vh] md:w-[40vh] md:h-[40vh] absolute bottom-0 left-0 bg-[var(--color-1)] rounded-full z-10 opacity-50"></span>
              </span>
            </h1>

            <p className="text-blue-100 mb-8 text-base md:text-lg">
              Expertise technique, sécurité renforcée et solutions sur mesure pour accompagner la transformation digitale de votre entreprise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-[var(--color-1)] hover:bg-[var(--color-2)] text-white font-semibold px-6 py-3 rounded-lg transition">
                Nous contacter →
              </button>

              <Link href="/Page/Services" className="hover:text-accent flex items-center gap-1">
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-700 font-semibold px-6 py-3 rounded-lg transition">
                Découvrir nos services
              </button>
              </Link>

            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src={HeroImg}
              alt="Hero Cyneris"
              className="rounded-xl shadow-2xl w-full max-w-sm md:max-w-full h-auto"
            />
          </div>

        </div>
      </div>
    </section>
  );
}