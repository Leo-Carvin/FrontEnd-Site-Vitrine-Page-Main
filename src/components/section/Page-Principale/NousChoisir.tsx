import nousChoisir from "../../../data/Choisir";

export default function NousChoisir() {
    return (
    <section className="relative overflow-hidden pt-20 pb-20 flex items-center" style={{ background: "linear-gradient(135deg, var(--color-5) 0%, var(--color-4) 40%, var(--color-5) 100%)" }}>
        
        <span className="absolute top-[-80px] left-[-80px] w-[40vh] h-[40vh] bg-[var(--color-1)] rounded-full opacity-20"></span>
        <span className="absolute bottom-[-60px] right-[-60px] w-[50vh] h-[50vh] bg-[var(--color-1)] rounded-full opacity-15"></span>

        <div className="max-w-7xl mx-auto w-full px-4 relative z-10">
        <div className="gap-12 items-center">
            <div className="flex flex-col items-center">
            <div className="w-fit p-2 pl-7 pr-7 rounded-[20px] bg-[#6bc3cd54] flex items-center gap-2 mb-6 text-white">
                <span className="text-sm">Nos Avantages</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white leading-tight">
                Pourquoi nous choisir ?
            </h1>

            <p className="text-blue-100 mb-8 text-lg">
                Des atouts qui font la différence pour votre infrastructure IT
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full mt-4">
                {nousChoisir.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center rounded-2xl p-6 gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#6bc3cd52] flex items-center justify-center text-[var(--color-1)] text-2xl border border-white border-[0.5px]">
                    {item.icon}
                    </div>
                    <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                    <p className="text-blue-100 text-sm">{item.description}</p>
                </div>
                ))}
            </div>
            </div>
        </div>
        </div>
    </section>
    );
}