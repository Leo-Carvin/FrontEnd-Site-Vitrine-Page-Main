import services from "../../../data/services";
import ServiceCard from "../../../components/ServiceCard";
import SectionTitle from "../../../components/SectionTitle";


export default function Services() {
  return (
    <div id="services" className="pt-30 text-black bg-[#F9FAFB] pl-20 pr-20 pb-30">
      <SectionTitle 
        title="Solutions IT complètes pour votre entreprise" 
        subtitle="Des services informatiques professionnels adaptés à vos besoins spécifiques" 
      />
      
      <div className="mt-20 grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))
          }
          
      </div>
    </div>
  );
}