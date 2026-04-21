import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import Hero from "../../../components/section/NexEris/Hero";
import CockpitUnifie from "../../../components/section/NexEris/CockpitUnifie";
import ChainTraitement from "../../../components/section/NexEris/ChainTraitement";
import CeQueVousGagnez from "../../../components/section/NexEris/CeQueVousGagnez";
import Architecture from "../../../components/section/NexEris/Architecture";
import Capacites from "../../../components/section/NexEris/Capacites";
import Secteurs from "../../../components/section/NexEris/Secteurs";
import MethodologieNex from "../../../components/section/NexEris/MethodologieNex";
import ExpertiseNex from "../../../components/section/NexEris/ExpertiseNex";
import CTANex from "../../../components/section/NexEris/CTANex";

export default function NexErisPage() {
    return (
        <main>
            <Header />
            <Hero />
            <CockpitUnifie />
            <ChainTraitement />
            <CeQueVousGagnez />
            <Architecture />
            <Capacites />
            <Secteurs />
            <MethodologieNex />
            <ExpertiseNex />
            <CTANex />
            <Footer />
        </main>
    );
}