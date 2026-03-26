import services from "../../../data/services";
import ServiceCard from "../../../components/ServiceCard";
import SectionTitle from "../../../components/SectionTitle";

export default function Services() {
  return (
    <div id="services" className="pt-16 md:pt-30 text-black bg-[#F9FAFB] px-6 md:px-20 pb-16 md:pb-30">
      <SectionTitle
        title="Solutions IT complètes pour votre entreprise"
        subtitle="Des services informatiques professionnels adaptés à vos besoins spécifiques"
      />

      <div className="mt-10 md:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
}