import { FaChartLine, FaHandshake, FaExpandArrowsAlt, FaLock } from "react-icons/fa";

const benefices = [
  {
    icon: <FaChartLine />,
    title: "Productivité améliorée",
    description: "+35% d'efficacité moyenne constatée chez nos clients",
  },
  {
    icon: <FaHandshake />,
    title: "Collaboration simplifiée",
    description: "Travail d'équipe fluide et communication optimisée",
  },
  {
    icon: <FaExpandArrowsAlt />,
    title: "Infrastructure évolutive",
    description: "Adaptabilité aux besoins futurs de votre entreprise",
  },
  {
    icon: <FaLock />,
    title: "Solutions sécurisées",
    description: "Protection maximale de vos données critiques",
  },
];

export default function Benefices() {
  return (
    <section
      className="py-20 px-6 md:px-20"
      style={{
        background: "linear-gradient(to bottom right, var(--color-3) 0%, var(--color-5) 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Les bénéfices pour votre entreprise
          </h2>
          <p className="text-white/60 text-lg">
            Des résultats concrets et mesurables
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {benefices.map((item, index) => (
            <div key={index} className="bg-[#ffffff10] rounded-2xl p-6 flex flex-col gap-4">

              <div className="w-14 h-14 rounded-xl bg-[#ffffff15] flex items-center justify-center text-[var(--color-1)] text-2xl">
                {item.icon}
              </div>

              <h3 className="font-bold text-white text-lg">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}