import Link from "next/link";
import Image from "next/image";

type Service = {
  title: string;
  description: string;
  href: string;
  icon: string;
};

export default function ServiceCard({ title, description, href, icon }: Service) {
  return (
    <div className="flex flex-col justify-between h-auto min-h-50 bg-white p-6 rounded-2xl shadow-[1px_1px_5px_#7d7d7d] hover:border-black transition-all duration-300 hover:scale-105">
      <div>
        <div className="w-12 h-12 rounded-xl bg-[var(--color-1)] flex items-center justify-center mb-4">
          <Image src={icon} alt={title} width={28} height={28} />
        </div>        
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
      <Link
        href={href}
        className="mt-4 self-start text-sm font-medium text-blue-600 hover:underline"
      >
        En savoir plus →
      </Link>
    </div>
  );
}