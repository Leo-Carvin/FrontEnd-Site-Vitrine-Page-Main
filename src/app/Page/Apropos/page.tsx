import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import Hero from "../../../components/section/Apropos/hero";
import Histoire from "../../../components/section/Apropos/histoire";
import Valeurs from "../../../components/section/Apropos/valeurs";
import Equipe from "../../../components/section/Apropos/equipe";
import Chiffres from "../../../components/section/Apropos/chiffres";
import Engagement from "../../../components/section/Apropos/Engagement";
import Contact from "../../../components/section/Apropos/contact";

export default function Page() {
    return (
        <div>
            <Header />
            <Hero />
            <Histoire />
            <Valeurs />
            <Equipe />
            <Chiffres />
            <Engagement />
            <Contact />
            <Footer />
        </div>
    );
}
