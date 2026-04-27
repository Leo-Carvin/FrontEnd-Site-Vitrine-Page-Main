import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import Hero from "../../../components/section/DataScience/Hero";
import StatsData from "../../../components/section/DataScience/StatsData";
import Demarche from "../../../components/section/DataScience/Demarche";
import Moyens from "../../../components/section/DataScience/Moyens";
import Cas from "../../../components/section/DataScience/CasUsage";
import Secteurs from "../../../components/section/DataScience/SecteursData";
import Methodologie  from "../../../components/section/DataScience/MethodologieData";
import Expertise from "../../../components/section/DataScience/ExpertiseData";
import CTA from "../../../components/section/DataScience/CTAData";
import ValeurDeliveree from "../../../components/section/DataScience/ValeurDeliveree";


export default function DataSciencePage() {
    return (
        <main>
            <Header />
            <Hero />
            <StatsData />
            <Demarche />
            <ValeurDeliveree />
            <Moyens />
            <Cas />
            <Secteurs />
            <Methodologie />
            <Expertise />
            <CTA />
            <Footer />
        </main>
    );
}  