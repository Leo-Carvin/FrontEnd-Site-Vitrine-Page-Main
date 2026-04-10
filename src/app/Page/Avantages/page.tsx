import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import Hero from "../../../components/section/Avantages/Hero";
import ProblematiquesClients from "../../../components/section/Avantages/ProblematiquesClients";
import AvantagesCles from "../../../components/section/Avantages/AvantagesCles";
import Comparatif from "../../../components/section/Avantages/Comparatif";
import Processus from "../../../components/section/Avantages/Processus";
import Temoignages from "../../../components/section/Avantages/Temoignages";
import Garanties from "../../../components/section/Avantages/Garanties";
import CTA from "../../../components/section/Avantages/Contact";

export default function AvantagesPage() {
    return (
        <main>
        <Header />
        <Hero />
        <ProblematiquesClients />
        <AvantagesCles />
        <Comparatif />
        <Processus />
        <Temoignages />
        <Garanties />
        <CTA />
        <Footer />
        </main>
    );
}