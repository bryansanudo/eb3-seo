import React from "react";

import Image from "next/image";

const ServicesCard = ({ language }) => {
  const services = {
    en: {
      title1: "Historic Success",
      p1: "The Immigration and Nationality Act, passed in 1990, created the EB-3 Unskilled Visa program.",
      title2: "Opportunity Awaits",
      p2: "Anyone can participate in this program. There are no educational or skill prerequisites for applying.",
      title3: "Versatile Process",
      p3: "Applicants can complete this procedure either from within the United States, if they live in the US on a different type of visa, or from their country of origin or where they currently reside.",
    },
    es: {
      title1: "Éxito histórico",
      p1: "La Ley de Inmigración y Nacionalidad, aprobada en 1990, creó el programa de visados no cualificados EB-3.",
      title2: "La oportunidad aguarda",
      p2: "Cualquiera puede participar en este programa. No hay requisitos previos de educación o cualificación para solicitarlo.",
      title3: "Proceso versátil",
      p3: "Los solicitantes pueden realizar este trámite tanto desde Estados Unidos, si viven en el país con otro tipo de visado, como desde su país de origen o donde residan actualmente.",
    },
    por: {
      title1: "Sucesso histórico",
      p1: "A Lei de Imigração e Nacionalidade, aprovada em 1990, criou o programa de vistos EB-3 não qualificados.",
      title2: "A oportunidade está à espera",
      p2: "Qualquer pessoa pode participar neste programa. Não há pré-requisitos educacionais ou de habilidades para se candidatar.",
      title3: "Processo versátil",
      p3: "Os candidatos podem completar este processo a partir dos Estados Unidos, se viverem nos EUA com um tipo de visto diferente, ou a partir do seu país de origem ou onde residem atualmente.",
    },
    fr: {
      title1: "Succès historique",
      p1: "La loi sur l'immigration et la nationalité, adoptée en 1990, a créé le programme de visa EB-3 pour les travailleurs non qualifiés",
      title2: "Une opportunité à saisir",
      p2: "Tout le monde peut participer à ce programme. Il n'y a pas de conditions préalables en matière d'éducation ou de compétences pour postuler.",
      title3: "Processus polyvalent",
      p3: "Les candidats peuvent suivre cette procédure depuis les États-Unis, s'ils y vivent avec un autre type de visa, ou depuis leur pays d'origine ou l'endroit où ils résident actuellement",
    },
  };
  const servicesContent = services[language];

  return (
    <div className="flex flex-col items-center  p-2 mb-6 xl:w-[1080px] lg:w-[900px] md:w-[700px] w-full">
      <div className="relative  md:order-2">
        <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
          <div
            className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
            style={{
              background:
                "linear-gradient(90deg, #94171A -0.55%, #ffffff 22.86%, #000000 48.36%, #ffffff 73.33%, #94171A 99.34%)",
            }}
          ></div>
        </div>

        <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
          {/* Card one */}
          <div className="flex flex-col overflow-hidden shadow-md shadow-black rounded-3xl">
            <div className="flex flex-col items-center justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7 gap-4">
              <Image
                src="/icons/success.jpg"
                alt="succes"
                width={50}
                height={50}
              />
              <p className="font-bold text-2xl tracking-wider">
                {servicesContent.title1}
              </p>
              <p className="tracking-wider">{servicesContent.p1}</p>
            </div>
          </div>
          {/* Card two */}
          <div className="flex flex-col overflow-hidden shadow-md shadow-black rounded-3xl">
            <div className="flex flex-col items-center justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7 gap-4">
              <Image
                src="/icons/opportunity.jpg"
                alt="succes"
                width={50}
                height={50}
              />
              <p className="font-bold text-2xl tracking-wider">
                {servicesContent.title2}
              </p>
              <p className="tracking-wider">{servicesContent.p2}</p>
            </div>
          </div>
          {/* Card three */}
          <div className="flex flex-col overflow-hidden shadow-md shadow-black rounded-3xl">
            <div className="flex flex-col items-center justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7 gap-4">
              <Image
                src="/icons/versatile.jpg"
                alt="succes"
                width={50}
                height={50}
              />
              <p className="font-bold text-2xl tracking-wider">
                {servicesContent.title3}
              </p>
              <p className="tracking-wider">{servicesContent.p3}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServicesCard;
