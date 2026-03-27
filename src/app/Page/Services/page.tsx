import Hero from "../../../components/section/Services/Hero";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import Approche from "../../../components/section/Services/Approche";
import ReseauSection from "../../../components/section/Services/ReseauxSecu";
import Virtualisation from "../../../components/section/Services/Virtualisation";
import CyberSecu from "../../../components/section/Services/Cybersecurite";
import GestionDesDonnees from "../../../components/section/Services/GestionDesDonnees";
import Cloud from "../../../components/section/Services/Cloud";
import Partenaire from "../../../components/section/Services/Partenaire";
import Methodologie from "../../../components/section/Services/Methodologie";
import Contact from "../../../components/section/Services/Contact";

export default function MainPage() {
  return (
    <>
      <Header />
      <Hero />
      <Approche />
      <ReseauSection />
      <Virtualisation />
      <CyberSecu />
      <GestionDesDonnees />
      <Cloud />
      <Methodologie />
      <Partenaire />
      <Contact />
      <Footer />
    </>
  );
}