import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import Hero from "../../../components/section/Plateformes-Solutions/hero";
import EnjeuxSection from "../../../components/section/Plateformes-Solutions/enjeux";
import Avenir from "../../../components/section/Plateformes-Solutions/Avenir";
import Solutions from "../../../components/section/Plateformes-Solutions/Solutions";
import OutilsCollab from "../../../components/section/Plateformes-Solutions/OutilsCollaboratifs";
import Integration from "../../../components/section/Plateformes-Solutions/Integration";
import GestionPlateformes from "../../../components/section/Plateformes-Solutions/GestionPlateformes";
import MethodologieCloud from "../../../components/section/Plateformes-Solutions/Methodologie";
import Benefices from "../../../components/section/Plateformes-Solutions/Benefices";
import Contact from "../../../components/section/Plateformes-Solutions/Contact";

export default function Page() {
    return (
        <div>
            <Header />
            <Hero />
            <EnjeuxSection />
            <Avenir />
            <Solutions />
            <OutilsCollab />
            <Integration />
            <GestionPlateformes />
            <MethodologieCloud />
            <Benefices />
            <Contact />
            <Footer />
        </div>
    );
}
