import CTAContact from "../../../components/CTA";
import SectionTitle from "../../../components/SectionTitle";
import {
  FaCertificate ,
} from "react-icons/fa"; 
import { BiSupport } from "react-icons/bi";


export default function APropos() {
  return (
    <div id="a-propos" className="bg-white gap-10 flex space-y-6 pl-10 pr-10 pt-30 pb-20 ">
        <img 
            src="/Image/tim-van-der-kuip-CPs2X8JYmS8-unsplash.jpg"
            alt="Studio Nova"
            className="img-Apropos w-1/2 object-cover rounded-2xl"
        />

        <div className="a-propos-title text-black flex flex-col justify-center gap-6 w-1/2">
          <h1 className="text-2xl font-bold ">
            Une expertise reconnue au service de votre réussite
          </h1>
          
          <p>Nous accompagnons les entreprises dans 
            leur transformation digitale avec des solutions IT innovantes et 
            sécurisées. Notre équipe d'experts certifiés met son savoir-faire au 
            service de votre performance. 
          </p>

          <p>
            Nous comprenons les enjeux critiques de votre infrastructure 
            informatique et nous engageons à fournir des services de qualité 
            supérieure, disponibles 24/7 pour assurer la continuité de vos 
            activités.
          </p>

          <div className="Apropos flex gap-5 ">
            <div className="flex gap-2 max-w-70">
                <div className="text-xl text-[var(--color-5)] p-3 h-fit rounded-xl bg-[#17639473] flex items-center justify-center mb-4">
                  <FaCertificate />
                </div>    
                <div>
                  <h2 className="text-xl-900"> Certifications </h2>
                  <p>Équipe certifiée et formée aux dernières technologies </p>
                </div>
            </div>

            <div className="flex gap-2 max-w-70">
                <div className="text-xl text-[var(--color-5)] p-3 h-fit rounded-xl bg-[#17639473] flex items-center justify-center mb-4">
                  <BiSupport />
                </div>    
                <div>
                  <h2 className="text-xl-900"> Support 24/7 </h2>
                  <p>Assistance technique disponible à tout moment </p>
                </div>
            </div>
          </div>
          

        </div>    
    </div>
        
);
}