import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import Hero from "../../../components/section/Infrastructure-Reseaux/hero";
import SousHero from "../../../components/section/Infrastructure-Reseaux/Sous-Hero";
import Defis from "../../../components/section/Infrastructure-Reseaux/Defis-infra";
import ExpertisesReseau from "../../../components/section/Infrastructure-Reseaux/ArchitectureReseaux";
import Installation from "../../../components/section/Infrastructure-Reseaux/Installation";
import ReseauSecu from "../../../components/section/Infrastructure-Reseaux/Reseau-Secu";
import Supervision from "../../../components/section/Infrastructure-Reseaux/Supervision";
import Methodologie from "../../../components/section/Infrastructure-Reseaux/methodologie";
import Contact from "../../../components/section/Infrastructure-Reseaux/Contact";

export default function Page() {
    return (
        <div>
            <Header />
            <Hero />
            <SousHero />
            <Defis />
            <ExpertisesReseau />
            <Installation />
            <ReseauSecu />
            <Supervision />
            <Methodologie />
            <Contact />
            <Footer />
        </div>
    );
}
