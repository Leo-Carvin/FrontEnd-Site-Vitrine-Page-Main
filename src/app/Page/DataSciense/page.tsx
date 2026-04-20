import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import Hero from "../../../components/section/DataScience/Hero";
import StatsData from "../../../components/section/DataScience/StatsData";
import Demarche from "../../../components/section/DataScience/Demarche";
import ValeurDeliveree from "../../../components/section/DataScience/ValeurDeliveree";


export default function DataSciencePage() {
    return (
        <main>
            <Header />
            <Hero />
            <StatsData />
            <Demarche />
            <ValeurDeliveree />
            <Footer />
        </main>
    );
}  