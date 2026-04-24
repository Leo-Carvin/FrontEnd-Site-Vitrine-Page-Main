import Hero from "../../../components/section/Page-Principale/Hero";
import Services from "../../../components/section/Page-Principale/Services";
import APropos from "../../../components/section/Page-Principale/Apropos";
import NousChoisir from "../../../components/section/Page-Principale/NousChoisir";
import Contact from "../../../components/section/Page-Principale/Contact";
import Testimonial from "../../../components/section/Page-Principale/TestimonialCard";
import Client from "../../../components/section/Page-Principale/Client";

export default function MainPage() {
  return (
    <>
        <Hero />
        <Services />
        <APropos />
        <NousChoisir />
        <Testimonial />
        <Client />
        <Contact />
    </>
  );
}