import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import Hero from "../../../components/section/GestionDesDonnees/hero";
import ImportanceDonnees from "../../../components/section/GestionDesDonnees/ImportanceDonnees";
import RisquesData from "../../../components/section/GestionDesDonnees/RisqueEviter";
import SolutionsProtection from "../../../components/section/GestionDesDonnees/Solution";
import PlanRepriseActivite from "../../../components/section/GestionDesDonnees/PlanDeReprise";
import Stockage from "../../../components/section/GestionDesDonnees/Stockage";
import Protection from "../../../components/section/GestionDesDonnees/Protection";
import Methodologie from "../../../components/section/GestionDesDonnees/Methodologie";
import Tranquillite from "../../../components/section/GestionDesDonnees/Tranquillite";
import CTA from "../../../components/section/GestionDesDonnees/Contact";

export default function Page() {
    return (
        <div>
            <Header />
            <Hero />
            <ImportanceDonnees />
            <RisquesData />
            <SolutionsProtection />
            <PlanRepriseActivite />
            <Stockage />
            <Protection />
            <Methodologie />
            <Tranquillite />
            <CTA />
            <Footer />
        </div>
    );
}
