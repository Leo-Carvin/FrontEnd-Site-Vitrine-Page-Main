type Props = { title: string; subtitle?: string; };

export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="text-center">
      <h2 className="text-5xl font-bold">
        {title}
      </h2>

      {subtitle && (
        <p className="text-white-400 text-[1.2rem] mt-2">
          {subtitle}
        </p>
      )}
    </div>
  );
}