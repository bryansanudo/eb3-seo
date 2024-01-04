"use client";

import Section from "@/components/common/Section";
import HeroVacancies from "@/components/HeroVacancies";
import { styles } from "@/utils/styles";
import { GrLocation } from "react-icons/gr";
import { MdPeopleAlt } from "react-icons/md";
import { useSelector } from "react-redux";

const VacanciesPage = () => {
  const language = useSelector((state) => state.values.languages);
  const positions = {
    en: {
      stoughton_des:
        "Stoughton Trailers is an industry leader in transportation equipment manufacturing. Our Wisconsin intermodal chassis plants are located 100 short miles from the Chicagoland intermodal rail yard, providing convenient and cost effective delivery of new chassis products.",
      travel_des:
        "Travel Kuz provides paid training while you become a professional CDL School Bus Driver!",
      subway_des:
        "Subway® has created a work environment, compensation and benefits program, and interactive culture that we believe foster positive working relationships. They support promotion from within and foster an entrepreneurial spirit through which each team member personally contributes to the company's success.",
      karst_des:
        "Located in Bozeman, MT, Karst Stage offers transportation for your group in the local Bozeman area, Yellowstone National Park, the western United States and Canada. It currently operates over 70 luxury charter vehicles.",
      wilder_des:
        "Occupying 600 acres, Wilderness Resort is the largest water park resort in the United States, located in the world capital of water parks, Wisconsin Dells!",
      chula_des:
        "Chula Vista Resort offers over 200,000 square feet of water parks, top-notch spas, culinary delights in one of the most outstanding chophouses in the USA, and even an 18-hole golf course!",
      transportation_des:
        "Chartering a Vehicle. Where would you like to go? We offer a full line of charter bus services, utilizing coach style and school buses.",
      anderson_des:
        "Since 1937, Anderson Coach & Travel has been at the forefront of the motorcoach industry. As a charter bus company serving PA, OH, NY and beyond, we are known for our large fleet of comfortable vehicles, friendly and skilled bus drivers, and a history of service that can only be provided by a family-owned and operated company. ",
      button: "View Details",
      location: "Locations",
      vacancies: "Vacancies",
      website: "Website",
    },
    es: {
      stoughton_des:
        "Stoughton Trailers es líder del sector en la fabricación de equipos de transporte. Nuestras plantas de chasis intermodales de Wisconsin están situadas a 100 millas escasas del patio ferroviario intermodal de Chicagoland, lo que proporciona una entrega cómoda y rentable de nuevos productos de chasis",
      travel_des:
        "¡Travel Kuz ofrece capacitación pagada mientras te conviertes en un conductor profesional de autobuses escolares CDL!",
      subway_des:
        "Subway® ha creado un entorno de trabajo, un programa de compensación y beneficios, y una cultura interactiva que creemos que fomentan relaciones laborales positivas. Apoyan la promoción desde dentro y fomentan un espíritu emprendedor a través del cual cada miembro del equipo contribuye personalmente al éxito de la empresa.",
      karst_des:
        "Situada en Bozeman, MT, Karst Stage ofrece transporte para su grupo en el área local de Bozeman, el Parque Nacional de Yellowstone, el oeste de Estados Unidos y Canadá. Actualmente opera más de 70 vehículos chárter de lujo",
      wilder_des:
        "Ocupando 600 acres, Wilderness Resort es el mayor complejo de parques acuáticos de Estados Unidos, situado en la capital mundial de los parques acuáticos, ¡Wisconsin Dells!",
      chula_des:
        "Chula Vista Resort ofrece más de 200.000 pies cuadrados de parques acuáticos, spas de primera categoría, delicias culinarias en una de las chophouses más destacadas de EE. UU., ¡e incluso un campo de golf de 18 hoyos!",
      transportation_des:
        "Alquilar un vehículo. ¿A dónde quiere ir? Ofrecemos una línea completa de servicios de autobuses chárter, utilizando autobuses de estilo autocar y autobuses escolares.",
      anderson_des:
        "Desde 1937, Anderson Coach & Travel ha estado a la vanguardia de la industria del autocar. Como una empresa de autobuses chárter que sirve PA, OH, NY y más allá, somos conocidos por nuestra gran flota de vehículos confortables, conductores de autobuses amables y cualificados, y una historia de servicio que sólo puede ser proporcionada por una empresa familiar y operada.",
      button: "Ver detalles",
      location: "Ubicaciones",
      vacancies: "Vacantes",
      website: "Página Web",
    },
    por: {
      stoughton_des:
        "A Stoughton Trailers é líder no sector do fabrico de equipamento de transporte. As nossas fábricas de chassis intermodais do Wisconsin estão localizadas a 100 milhas do estaleiro ferroviário intermodal de Chicagoland, proporcionando uma entrega conveniente e económica de novos produtos de chassis.",
      travel_des:
        "A Travel Kuz oferece formação paga enquanto se torna um condutor profissional de autocarros escolares CDL!",
      subway_des:
        "A Subway® criou um ambiente de trabalho, um programa de compensação e benefícios e uma cultura interactiva que, na nossa opinião, fomenta relações de trabalho positivas. Apoiam a promoção interna e fomentam um espírito empreendedor através do qual cada membro da equipa contribui pessoalmente para o sucesso da empresa",
      karst_des:
        "Localizada em Bozeman, MT, a Karst Stage oferece transporte para o seu grupo na área local de Bozeman, no Parque Nacional de Yellowstone, no oeste dos Estados Unidos e no Canadá. Atualmente, opera mais de 70 veículos charter de luxo",
      wilder_des:
        "Ocupando 600 acres, o Wilderness Resort é o maior parque aquático dos Estados Unidos, localizado na capital mundial dos parques aquáticos, Wisconsin Dells!",
      chula_des:
        "O Chula Vista Resort oferece mais de 200.000 pés quadrados de parques aquáticos, spas de primeira linha, delícias culinárias numa das mais notáveis chophouses dos EUA e até um campo de golfe de 18 buracos!",
      transportation_des:
        "Aluguer de um veículo. Para onde gostaria de ir? Oferecemos uma linha completa de serviços de autocarros fretados, utilizando autocarros escolares e de estilo autocarro.",
      anderson_des:
        "Desde 1937, a Anderson Coach & Travel tem estado na vanguarda da indústria de autocarros. Como empresa de autocarros fretados que serve PA, OH, NY e outros países, somos conhecidos pela nossa grande frota de veículos confortáveis, condutores de autocarros simpáticos e competentes e um historial de serviços que só pode ser prestado por uma empresa familiar.",
      button: "Ver detalhes",
      location: "Localizações",
      vacancies: "Vagas",
      website: "Sítio Web",
    },
    fr: {
      stoughton_des:
        "Stoughton Trailers est un leader dans la fabrication d'équipements de transport. Nos usines de châssis intermodaux du Wisconsin sont situées à une centaine de kilomètres de la gare de triage intermodale de Chicago, ce qui permet une livraison pratique et rentable des nouveaux châssis",
      travel_des:
        "Travel Kuz offre une formation rémunérée pendant que vous devenez un chauffeur de bus scolaire CDL professionnel !",
      subway_des:
        "Subway® a créé un environnement de travail, un programme de rémunération et d'avantages et une culture interactive qui, selon nous, favorisent des relations de travail positives. Ils soutiennent la promotion interne et encouragent l'esprit d'entreprise grâce auquel chaque membre de l'équipe contribue personnellement au succès de l'entreprise.",
      karst_des:
        "Situé à Bozeman, MT, Karst Stage propose le transport de votre groupe dans la région de Bozeman, dans le parc national de Yellowstone, dans l'ouest des États-Unis et au Canada. Elle exploite actuellement plus de 70 véhicules charters de luxe",
      wilder_des:
        "Wilderness Resort est le plus grand parc aquatique des États-Unis, situé dans la capitale mondiale des parcs aquatiques, Wisconsin Dells, et s'étend sur 600 hectares",
      chula_des:
        "Chula Vista Resort offre plus de 200 000 pieds carrés de parcs aquatiques, des spas de premier ordre, des délices culinaires dans l'un des chophouses les plus remarquables des États-Unis, et même un terrain de golf de 18 trous !",
      transportation_des:
        "Affrètement d'un véhicule. Où voulez-vous aller ? Nous proposons une gamme complète de services d'affrètement d'autobus, utilisant des autobus scolaires et des autocars.",
      anderson_des:
        "Depuis 1937, Anderson Coach & Travel est à l'avant-garde de l'industrie de l'autocar. En tant que compagnie de bus charter desservant la Pennsylvanie, l'Ohio, l'État de New York et au-delà, nous sommes connus pour notre vaste flotte de véhicules confortables, nos chauffeurs de bus sympathiques et compétents, et notre histoire de service qui ne peut être fournie que par une entreprise familiale.",
      button: "Voir les détails",
      location: "Localisation des sites",
      vacancies: "Postes Vacants",
      website: "Site web",
    },
  };
  const positionsContent = positions[language];

  const vacancies = [
    {
      id: 1,
      logo: "/partners/stoughton-logo.png",
      name: "Stoughton Trailers",
      description: positionsContent.stoughton_des,
      location: "Stoughton, Wisconsin",
      website: "https://www.stoughtontrailers.com/",
      v1: "Assembler",
    },
    /* {
      id: 2,
      logo: travelkuzLogo,
      category: "tourism",
      name: "Travel Kuz",
      description: positionsContent.travel_des,
      location: "Gill, MA",
      button: "/individuals/vacancies/kuz",
      website: "https://www.travelkuz.com/",
      v1: "General Labor",
      usd1: "$ 15 USD / Hour",
    }, */

    {
      id: 4,
      logo: "/partners/subway-logo.png",
      name: "Subway",
      description: positionsContent.subway_des,
      location: "Anchorage, Alaska",
      website: "https://www.subway.com/es-co",
      v1: "Sandwich Artist",
    },
    /* {
      id: 3,
      logo: kartsLogo,
      category: "tourism",
      name: "Karst Stage",
      description: positionsContent.karst_des,
      location: "Bozeman, MO",
      button: "/individuals/vacancies/karst",
      website: "https://karststage.com/",
      v1: "General Labor",
      usd1: "$ 15 USD / Hour",
    }, */

    {
      id: 6,
      logo: "/partners/wilderness-logo.png",
      name: "Wilderness Resort",
      location: "Wisconsin Dells, Wisconsin",
      description: positionsContent.wilder_des,
      website: "https://www.wildernessresort.com/",
      v1: "Room Attendant",
      v2: "Water Park Attendant",
    },
    {
      id: 7,
      logo: "/partners/chula-logo.png",
      name: "Chula Vista",
      description: positionsContent.chula_des,
      location: "Wisconsin Dells, Wisconsin",
      website: "https://chulavistaresort.com/",
      v1: "Room Attendant",
      v2: "Water Park Attendant",
    },
    {
      id: 8,
      logo: "/partners/transportation-logo.png",
      name: "AA Transportation",
      description: positionsContent.transportation_des,
      location: "Shrewsbury, Massachusetts",
      website: "https://aatransportation.com/",
      v1: "General Labor",
    },
    {
      id: 9,
      logo: "/partners/anderson-logo.png",
      name: "Anderson Coach",
      description: positionsContent.anderson_des,
      location: "Greenville, Pennsylvania",
      website: "https://www.goanderson.com/",
      v1: "General Labor",
    },
  ];
  return (
    <>
      <HeroVacancies language={language} />
      <Section>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 grid-cols-1 my-10 mx-6  ">
          {vacancies.map(
            ({
              id,
              logo,
              category,
              name,
              description,
              location,
              l2,
              l3,
              button,
              usd1,
              v1,
              usd2,
              v2,
              website,
              style,
            }) => {
              const uniqueId = `modal-${id}`;

              return (
                <div
                  key={id}
                  className="shadow-md gap-20 shadow-black rounded-3xl px-6 flex flex-col items-center justify-between max-w-[600px] pt-8  "
                >
                  <div className="max-w-[300px] hover:scale-110 duration-700">
                    <a href={website} target="_blank">
                      <img
                        src={logo}
                        className="object-contain  md:w-[350px] w-[200px] "
                      />
                    </a>
                  </div>
                  {/* <p className="font-bold text-xl">{name}</p> */}
                  <p className={`${styles.sectionText}`}>{description}</p>
                  {/* <p className="badge badge-primary badge-outline capitalize">{category}</p> */}
                  <div>
                    <button
                      className="btn btn-primary uppercase btn-outline mb-6"
                      onClick={() =>
                        document.getElementById(uniqueId).showModal()
                      }
                    >
                      {positionsContent.button}
                    </button>

                    <dialog id={uniqueId} className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>

                        <div className="flex flex-col gap-6  items-start justify-center">
                          {/* Vacancies */}
                          <div className="w-1/2 flex  flex-col items-center justify-center gap-2 ">
                            <div className="flex items-center justify-center gap-2">
                              <MdPeopleAlt />
                              <p className="font-bold">
                                {positionsContent.vacancies}
                              </p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                              <p>{v1}</p>
                              <p>{v2}</p>
                            </div>
                          </div>
                          {/* locations */}
                          <div className="w-1/2 flex  flex-col items-center justify-center gap-2 ">
                            <div className="flex items-center justify-center gap-2">
                              <GrLocation />
                              <p className="font-bold">
                                {positionsContent.location}
                              </p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                              <p>{location}</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-4 justify-end items-center ">
                          <a href={website} target="_blank">
                            <img
                              src={logo}
                              className="h-20 w-20 object-contain mx-auto "
                              alt=""
                            />
                            <span className="link link-hover hover:text-primary">
                              {positionsContent.website}
                            </span>
                          </a>
                        </div>
                      </div>
                    </dialog>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </Section>
    </>
  );
};

export default VacanciesPage;
