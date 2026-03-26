import CTAContact from "../../../components/CTA";
import { FaCertificate } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

export default function APropos() {
  return (
    <div id="a-propos" className="bg-white flex flex-col md:flex-row gap-10 px-6 md:px-10 pt-20 pb-20">
      
      <img
        src="/Image/tim-van-der-kuip-CPs2X8JYmS8-unsplash.jpg"
        alt="Studio Nova"
        className="w-full md:w-1/2 object-cover rounded-2xl max-h-[400px] md:max-h-full"
      />

      <div className="text-black flex flex-col justify-center gap-6 w-full md:w-1/2">
        <h1 className="text-2xl font-bold">
          Une expertise reconnue au service de votre réussite
        </h1>

        <p>
          Nous accompagnons les entreprises dans leur transformation digitale avec des solutions IT innovantes et sécurisées. Notre équipe d'experts certifiés met son savoir-faire au service de votre performance.
        </p>

        <p>
          Nous comprenons les enjeux critiques de votre infrastructure informatique et nous engageons à fournir des services de qualité supérieure, disponibles 24/7 pour assurer la continuité de vos activités.
        </p>

        <div className="flex flex-col sm:flex-row gap-5">
          <div className="flex gap-2">
            <div className="text-xl text-[var(--color-5)] p-3 h-fit rounded-xl bg-[#17639473] flex items-center justify-center shrink-0">
              <FaCertificate />
            </div>
            <div>
              <h2 className="font-bold">Certifications</h2>
              <p className="text-sm text-gray-600">Équipe certifiée et formée aux dernières technologies</p>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="text-xl text-[var(--color-5)] p-3 h-fit rounded-xl bg-[#17639473] flex items-center justify-center shrink-0">
              <BiSupport />
            </div>
            <div>
              <h2 className="font-bold">Support 24/7</h2>
              <p className="text-sm text-gray-600">Assistance technique disponible à tout moment</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}