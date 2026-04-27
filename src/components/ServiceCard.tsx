import Link from "next/link";
import Image from "next/image";

type ServiceProps = {
  title: string;
  description: string;
  href: string;
  icon: string;
  points: string[];
};

export default function ServiceCard({ title, description, href, icon, points }: ServiceProps) {
  return (
    <div className="flex flex-col justify-between h-full bg-white p-8 rounded-2xl shadow-[1px_1px_5px_#7d7d7d] hover:border-black transition-all duration-300 hover:scale-105">
      <div>
        <div className="w-14 h-14 rounded-xl bg-[var(--color-1)] flex items-center justify-center mb-6">
          <Image src={icon} alt={title} width={28} height={28} />
        </div>        
        {/* Titre un peu plus grand */}
        <h3 className="text-2xl font-semibold mb-3">{title}</h3>
        {/* Description plus lisible (text-base) */}
        <p className="text-base text-gray-500 mb-6">{description}</p>
        
        {/* Points avec police plus lisible (text-sm) */}
        <ul className="space-y-2 mb-6">
          {points.map((point, idx) => (
            <li key={idx} className="flex items-center text-sm text-gray-700 font-medium">
              <span className="mr-2 text-[var(--color-1)]">✓</span> {point}
            </li>
          ))}
        </ul>
      </div>

      <Link
        href={href}
        className="mt-4 self-start text-base font-medium text-blue-600 hover:underline"
      >
        En savoir plus →
      </Link>
    </div>
  );
}