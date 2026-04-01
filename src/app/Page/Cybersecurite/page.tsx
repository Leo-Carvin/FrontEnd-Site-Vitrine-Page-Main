import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import Hero from "../../../components/section/Cybersecurite/Hero";
import CyberStats from "../../../components/section/Cybersecurite/Cyberattaque";
import MenacesCyber from "../../../components/section/Cybersecurite/Menace";
import SolutionsCyber from "../../../components/section/Cybersecurite/Solutions";
import ProtectionInfra from "../../../components/section/Cybersecurite/OutilsCollaboratifs";
import ExpertiseCyneris from "../../../components/section/Cybersecurite/expertise";
import CTACyber from "../../../components/section/Cybersecurite/Anticiper";
import ProtectionDonnees from "../../../components/section/Cybersecurite/Protection";
import Sensibilisation from "../../../components/section/Cybersecurite/Sensibilisation";
import MethodologieCyber from "../../../components/section/Cybersecurite/Methodologie";

export default function Page() {
    return (
        <div>
            <Header />
            <Hero />
            <CyberStats />
            <MenacesCyber />
            <SolutionsCyber />
            <ProtectionInfra />
            <ProtectionDonnees />
            <Sensibilisation />
            <MethodologieCyber />
            <ExpertiseCyneris />
            <CTACyber />
            <Footer />
        </div>
    );
}
