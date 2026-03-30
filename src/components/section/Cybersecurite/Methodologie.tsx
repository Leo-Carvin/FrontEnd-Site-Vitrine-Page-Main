const etapes = [
    {
    number: "1",
    title: "Audit & Analyse",
    description: "Évaluation complète de votre infrastructure et identification des vulnérabilités",
    color: "var(--color-1)",
    },
    {
    number: "2",
    title: "Plan de sécurisation",
    description: "Conception d'une stratégie de sécurité adaptée à vos enjeux métier",
    color: "var(--color-2)",
    },
    {
    number: "3",
    title: "Déploiement des solutions",
    description: "Mise en œuvre des technologies et processus de sécurité",
    color: "var(--color-3)",
    },
    {
    number: "4",
    title: "Supervision continue",
    description: "Monitoring 24/7 et amélioration continue de votre posture de sécurité",
    color: "var(--color-5)",
    },
];

export default function MethodologieCyber() {
    return (
    <section className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Notre méthodologie
            </h2>
            <p className="text-gray-500 text-lg">
            Une approche structurée en 4 étapes pour sécuriser efficacement votre environnement
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