import { FaLightbulb, FaShieldAlt, FaCheckCircle, FaHeadset, } from "react-icons/fa";
import { JSX } from "react";

type NousChoisirItem = {
  title: string;
  description: string;
  icon: JSX.Element;
};

const NousChoisir: NousChoisirItem[] = [
  {
    title: "Expertise Technique",
    description: "Une équipe d'experts certifiés avec une maîtrise approfondie des technologies IT",
    icon: <FaLightbulb />,
  },
  {
    title: "Sécurité Maximale",
    description: "Protection renforcée de vos données et conformité aux standards de sécurité",
    icon: <FaShieldAlt />,
  },
  {
    title: "Fiabilité",
    description: "Infrastructure stable avec un taux de disponibilité de 99,9% garanti",
    icon: <FaCheckCircle />,
  },
  {
    title: "Accompagnement",
    description: "Support personnalisé et suivi continu pour optimiser vos performances",
    icon: <FaHeadset />,
  },
];

export default NousChoisir;