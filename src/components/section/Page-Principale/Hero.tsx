import Image from "next/image";
import HeroImg from "../../../../public/Image/geralt-binary-1414315_1920.jpg";

export default function Hero() {
  return (
    <section className="pl-15 min-h-[100vh] flex items-center" style={{ background: "linear-gradient(to bottom right, var(--color-3) 0%, var(--color-4) 50%, var(--color-5) 100%)" }}>
      <div className="max-w-7xl mx-auto w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div>
            <div className="w-fit p-2 rounded-[20px] bg-[#6bc3cd54] flex items-center gap-2 mb-6 text-white">
              <img className="w-[10%]" src="/Icones/svg(1).svg" alt="Solutions IT B2B"/>
              <span className="text-sm">Solutions IT B2B</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white leading-tight">
              Votre partenaire{" "}
              
              de confiance  
              <span className="relative inline-block">
                <span className="relative z-10 text-white">informatique</span>
                <span className="ml-[-40px] w-[40vh] h-[40vh] absolute bottom-0 left-0 bg-[var(--color-1)] rounded-full z-10 opacity-50"></span>
              </span>{" "}
            </h1>

            <p className="text-blue-100 mb-8 text-lg">
              Expertise technique, sécurité renforcée et solutions sur mesure pour accompagner la transformation digitale de votre entreprise.
            </p>

            <div className="flex gap-4">
              <button className="bg-[var(--color-1)] hover:bg-[var(--color-2)] text-white-900 font-semibold px-6 py-3 rounded-lg transition">
                Nous contacter →
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-700 font-semibold px-6 py-3 rounded-lg transition">
                Découvrir nos services
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <Image src={HeroImg} alt="Hero Cyneris" className="rounded-xl shadow-2xl w-full h-auto" />
          </div>


        </div>
      </div>
    </section>
  );
}