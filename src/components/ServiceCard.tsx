import Link from "next/link";
import Image from "next/image";

type ServiceProps = {
  title: string;
  description: string;
  href: string;
  icon: string;
  points: string[];
  cible?: string;
  livrables?: string[];
  benefices?: string;
};

export default function ServiceCard({ title, description, href, icon, points, cible, livrables, benefices }: ServiceProps) {
  return (
    <div className="flex flex-col justify-between h-full bg-white p-8 rounded-2xl shadow-[1px_1px_5px_#7d7d7d] hover:border-black transition-all duration-300 hover:scale-105">
      <div>
        <div className="w-14 h-14 rounded-xl bg-[var(--color-1)] flex items-center justify-center mb-6">
          <Image src={icon} alt={title} width={28} height={28} />
        </div>        
        {/* Titre un peu plus grand */}
        <h3 className="text-2xl font-semibold mb-3">{title}</h3>
        {/* Description plus lisible (text-base) */}
        <p className="text-base text-gray-500 mb-4">{description}</p>
        
        {/* Cible */}
        {cible && (
          <div className="mb-4">
            <p className="text-xs font-bold text-[var(--color-1)] uppercase tracking-wider mb-1">Pour qui ?</p>
            <p className="text-sm text-gray-700">{cible}</p>
          </div>
        )}

        {/* Livrables */}
        {livrables && livrables.length > 0 && (
          <div className="mb-4">
            <p className="text-xs font-bold text-[var(--color-1)] uppercase tracking-wider mb-1">Livrables</p>
            <ul className="space-y-1">
              {livrables.map((livrable, idx) => (
                <li key={idx} className="text-sm text-gray-600 flex items-center">
                  <span className="mr-2 text-[var(--color-1)]">→</span> {livrable}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Bénéfices */}
        {benefices && (
          <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-100">
            <p className="text-xs font-bold text-green-700 uppercase tracking-wider mb-1">Bénéfices</p>
            <p className="text-sm text-green-800">{benefices}</p>
          </div>
        )}

        {/* Points avec police plus lisible (text-sm) */}
        <ul className="space-y-2 mb-6">
          {points.map((point, idx) => (
            <li key={idx} className="flex items-center text-sm text-gray-700 font-medium">
              <span className="mr-2 text-[var(--color-1)]">✓</span> {point}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex flex-col sm:flex-row gap-3">
        <Link
          href="/Page/Contact"
          className="flex-1 text-center bg-[var(--color-1)] hover:bg-[var(--color-2)] text-white font-semibold px-4 py-2.5 rounded-lg transition text-sm"
        >
          Demander un audit →
        </Link>
        <Link
          href={href}
          className="flex-1 text-center border border-gray-300 hover:border-gray-400 text-gray-700 font-medium px-4 py-2.5 rounded-lg transition text-sm"
        >
          En savoir plus →
        </Link>
      </div>
    </div>
  );
}