import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import Hero from "../../../components/section/SecureDev/Hero";
import StatsDev from "../../../components/section/SecureDev/StatsDev";
import Pratiques from "../../../components/section/SecureDev/Pratiques";
import ProcessusDev from "../../../components/section/SecureDev/ProcessusDev";
import TypesDev from "../../../components/section/SecureDev/TypesDev";
import SecteursDev from "../../../components/section/SecureDev/SecteurDev";
import MethodologieDev from "../../../components/section/SecureDev/MethodologieDev";
import ExpertiseDev from "../../../components/section/SecureDev/ExpertiseDev";
import CTADev from "../../../components/section/SecureDev/CTADev";

export default function SecureDevPage() {
    return (
        <main>
            <Header />
            <Hero />
            <StatsDev />
            <Pratiques />
            <ProcessusDev />
            <TypesDev />
            <SecteursDev />
            <MethodologieDev />
            <ExpertiseDev />
            <CTADev />
            <Footer />
        </main>
    );
}