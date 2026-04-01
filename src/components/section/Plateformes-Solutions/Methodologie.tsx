const etapes = [
    {
    number: "1",
    title: "Analyse des besoins",
    description: "Audit complet de votre infrastructure et identification des enjeux métiers.",
    color: "var(--color-1)",
    },
    {
    number: "2",
    title: "Sélection des solutions",
    description: "Recommandation des plateformes les plus adaptées à votre contexte.",
    color: "var(--color-2)",
    },
    {
    number: "3",
    title: "Déploiement",
    description: "Mise en œuvre progressive avec tests et validation à chaque étape.",
    color: "var(--color-3)",
    },
    {
    number: "4",
    title: "Accompagnement",
    description: "Formation des équipes et support continu pour optimiser l'usage.",
    color: "var(--color-5)",
    },
];

export default function MethodologieCloud() {
    return (
    <section className="bg-[#F9FAFB] py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Notre méthodologie
            </h2>
            <p className="text-gray-500 text-lg">
            Un processus structuré pour garantir le succès de vos projets            
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {etapes.map((etape, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-4">

                <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                style={{ background: etape.color }}
                >
                {etape.number}
                </div>

                <h3 className="font-bold text-black text-lg">{etape.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{etape.description}</p>

            </div>
            ))}
        </div>

        </div>
    </section>
    );
}