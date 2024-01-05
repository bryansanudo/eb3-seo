import React from "react";

import { motion } from "framer-motion";

import { staggerContainer } from "@/utils/motion";
import { fadeIn, zoomIn } from "@/utils/motion";

import Image from "next/image";
const FourIcons = ({ language }) => {
  const four = {
    en: {
      title1: "Recruit and vet employer sponsors",
      title2: "Case management services",
      title3: "Attorney pairing",
      title4: "Relocation services",
    },
    es: {
      title1: "Reclutar y examinar a los empleadores patrocinadores",
      title2: "Servicios de gestión de casos",
      title3: "Emparejamiento de abogados",
      title4: "Servicios de reubicación",
    },
    por: {
      title1: "Recrutar e examinar os empregadores patrocinadores",
      title2: "Serviços de gestão de processos",
      title3: "Emparelhamento de advogados",
      title4: "Serviços de relocalização",
    },
    fr: {
      title1: "Recruter et contrôler les employeurs parrains",
      title2: "Services de gestion des dossiers",
      title3: "Jumelage d'avocats",
      title4: "Services de relocalisation",
    },
  };

  const fourContent = four[language];

  const icons = [
    {
      id: 1,
      title: fourContent.title1,
      icon: "/icons/recruit.jpg",
      alt: "Icon Recruit and vet employer sponsors",
    },
    {
      id: 2,
      title: fourContent.title2,
      icon: "/icons/case.jpg",
      alt: "Icon Case management services",
    },
    {
      id: 3,
      title: fourContent.title3,
      icon: "/icons/attorney.jpg",
      alt: "Icon Attorney pairing",
    },
    {
      id: 4,
      title: fourContent.title4,
      icon: "/icons/relocation.jpg",
      alt: "Icon Relocation services",
    },
  ];

  return (
    <motion.div
      /* variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }} */
      className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4  "
    >
      {icons.map(({ title, icon, id, alt }) => (
        <motion.div
          key={id}
          variants={fadeIn("down", "spring", id * 0.5, 2)}
          className="shadow-md shadow-black rounded-3xl w-[200px] h-[200px] flex flex-col items-center justify-between py-10"
        >
          <p className="font-bold mb-4 tracking-wider">{title}</p>
          <Image
            src={icon}
            className="object-contain "
            width={60}
            height={60}
            alt={alt}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FourIcons;
