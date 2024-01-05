"use client";

import { useEffect } from "react";
import Section from "@/components/common/Section";

import HeroAbout from "@/components/HeroAbout";
import { GiWorld } from "react-icons/gi";
import { BsFillPersonVcardFill } from "react-icons/bs";
import ImgContent from "@/components/common/ImgContent";
import Divider from "@/components/common/Divider";
import TitleContent from "@/components/common/TitleContent";
import { styles } from "@/utils/styles";
import { useSelector } from "react-redux";

const AboutPage = () => {
  const language = useSelector((state) => state.values.languages);
  const our = {
    en: {
      title1: "Successful EB-3 Cases with EB-3 Workforce Solutions",
      title2: "Our Speciality",
      p1: "Our objective is the same as that of our clients: obtaining their U.S. Green Card via the EB-3 Unskilled Visa program.",
      p2: "Our recruitment and client engagement specialists have extensive experience in the entire EB-3 process. We have partnered with immigration attorneys who have over 25 years of experience in the field of immigration law and have successfully obtained permanent residency status for hundreds of EB-3 applicants.",
    },
    es: {
      title1: "Casos EB-3 exitosos con EB-3 Workforce Solutions",
      title2: "Nuestra especialidad",
      p1: "Nuestro objetivo es el mismo que el de nuestros clientes: obtener su Green Card estadounidense a través del programa EB-3 Unskilled Visa.",
      p2: "Nuestros especialistas en contratación y compromiso con el cliente tienen una amplia experiencia en todo el proceso EB-3. Nos hemos asociado con abogados de inmigración que tienen más de 25 años de experiencia en el campo de la ley de inmigración y han obtenido con éxito el estatus de residencia permanente para cientos de solicitantes EB-3.",
    },
    por: {
      title1:
        "Casos de EB-3 bem sucedidos com as Soluções de Força de Trabalho EB-3",
      title2: "A nossa especialidade",
      p1: "O nosso objetivo é o mesmo que o dos nossos clientes: obter o seu Green Card dos EUA através do programa de vistos EB-3 Unskilled.",
      p2: "Os nossos especialistas em recrutamento e envolvimento do cliente têm uma vasta experiência em todo o processo EB-3. Estabelecemos parcerias com advogados de imigração que têm mais de 25 anos de experiência no campo da lei de imigração e obtiveram com sucesso o estatuto de residência permanente para centenas de candidatos EB-3.",
    },
    fr: {
      title1: "Cas EB-3 réussis avec EB-3 Workforce Solutions",
      title2: "Notre spécialité",
      p1: "Notre objectif est le même que celui de nos clients : obtenir leur carte verte américaine via le programme EB-3 Unskilled Visa",
      p2: "Nos spécialistes du recrutement et de l'engagement des clients ont une grande expérience de l'ensemble du processus EB-3. Nous nous sommes associés à des avocats spécialisés en droit de l'immigration qui ont plus de 25 ans d'expérience dans ce domaine et qui ont réussi à obtenir le statut de résident permanent pour des centaines de candidats EB-3",
    },
  };
  const ourContent = our[language];

  const cards = {
    en: {
      title1:
        "We have built strong relationships with current and former Government officials.",

      p1: "50 +Countries represented throughout the globe",
      p2: "A large number of client green card approvals were granted in the year 2022, excluding dependents",
    },
    es: {
      title1:
        "Hemos establecido sólidas relaciones con funcionarios y ex funcionarios del Gobierno.",

      p1: "Más de 50 países representados en todo el mundo",
      p2: "En el año 2022 se concedió un gran número de permisos de residencia a clientes, excluidos los dependientes",
    },
    por: {
      title1:
        "Construímos fortes relações com actuais e antigos funcionários públicos.",

      p1: "50 +Países representados em todo o mundo",
      p2: "Um grande número de aprovações de green cards de clientes foi concedido no ano de 2022, excluindo os dependentes",
    },
    fr: {
      title1:
        "Nous avons établi de solides relations avec des fonctionnaires actuels et anciens",

      p1: "50 + pays représentés dans le monde entier",
      p2: "Un grand nombre d'approbations de cartes vertes de clients ont été accordées au cours de l'année 2022, à l'exclusion des personnes à charge",
    },
  };
  const cardsContent = cards[language];

  const history = {
    en: {
      title1: "History of EB-3",
      p1: "The EB-3 Green Card Program has had a substantial effect on the American labor market. By concentrating on offering U.S. companies alternatives for hiring entry-level workers, the EB-3 Green Card Program strives to become a top supplier of unskilled labor solutions to American firms.",
      p2: "To help non-immigrant visa holders change their visa status, and assist immigrants in achieving an EB-3 permanent residence Green Card, the program collaborates with some of the leading immigration law firms in the nation. By offering these services, the EB-3 Green Card Program hes been essential in assisting foreign nationals and those with non-immigrant visas to become lawful permanent residents of the United States.",
      p3: "The EB-3 Green Card Program assists American companies in hiring the qualified personnel they require to expand and prosper. It has assisted in addressing the persistent lack of unskilled employees in the American labor market by acting as a link between American firms and overseas workers. The program has established a solid reputation as a reliable source of talent acquisition due to its commitment to quality and its desire to see U.S. businesses prosper.",
    },
    es: {
      title1: "Historia del EB-3",
      p1: "El Programa de la Green Card EB-3 ha tenido un efecto sustancial en el mercado laboral estadounidense. Al concentrarse en ofrecer a las empresas estadounidenses alternativas para la contratación de trabajadores de nivel básico, el Programa de Green Card EB-3 se esfuerza por convertirse en uno de los principales proveedores de soluciones de mano de obra no cualificada para las empresas estadounidenses.",
      p2: "Para ayudar a los titulares de visados de no inmigrante a cambiar su situación de visado y asistir a los inmigrantes en la obtención de la Green Card de residencia permanente EB-3, el programa colabora con algunos de los principales bufetes de abogados de inmigración del país. Al ofrecer estos servicios, el Programa de Green Card EB-3 ha sido esencial para ayudar a los extranjeros y a los titulares de visados de no inmigrante a convertirse en residentes permanentes legales de los Estados Unidos.",
      p3: "El Programa de la Green Card EB-3 ayuda a las empresas estadounidenses a contratar al personal cualificado que necesitan para expandirse y prosperar. Ha contribuido a paliar la persistente falta de empleados no cualificados en el mercado laboral estadounidense actuando como enlace entre las empresas estadounidenses y los trabajadores extranjeros. El programa se ha labrado una sólida reputación como fuente fiable de adquisición de talentos gracias a su compromiso con la calidad y su deseo de ver prosperar a las empresas estadounidenses.",
    },
    por: {
      title1: "História do EB-3",
      p1: "O Programa EB-3 Green Card tem tido um efeito substancial no mercado de trabalho americano. Ao concentrar-se em oferecer às empresas americanas alternativas para a contratação de trabalhadores de nível básico, o Programa EB-3 Green Card esforça-se por se tornar um fornecedor de topo de soluções de mão de obra não qualificada para as empresas americanas.",
      p2: "Para ajudar os titulares de vistos de não-imigrante a alterar o seu estatuto de visto e ajudar os imigrantes a obter um Green Card de residência permanente EB-3, o programa colabora com algumas das principais empresas de advogados de imigração do país. Ao oferecer estes serviços, o Programa Green Card EB-3 tem sido essencial para ajudar os cidadãos estrangeiros e aqueles com vistos de não-imigrante a tornarem-se residentes permanentes legais nos Estados Unidos.",
      p3: "O Programa Green Card EB-3 ajuda as empresas americanas a contratar o pessoal qualificado de que necessitam para se expandirem e prosperarem. Tem ajudado a resolver a persistente falta de trabalhadores não qualificados no mercado de trabalho americano, actuando como um elo de ligação entre as empresas americanas e os trabalhadores estrangeiros. O programa estabeleceu uma sólida reputação como uma fonte fiável de aquisição de talentos devido ao seu compromisso com a qualidade e ao seu desejo de ver as empresas americanas prosperarem.",
    },
    fr: {
      title1: "Histoire de EB-3",
      p1: "Le programme de carte verte EB-3 a eu un effet substantiel sur le marché du travail américain. En se concentrant sur l'offre de solutions alternatives aux entreprises américaines pour l'embauche de travailleurs débutants, le programme de carte verte EB-3 s'efforce de devenir un fournisseur de premier plan de solutions de main-d'œuvre non qualifiée pour les entreprises américaines",
      p2: "Pour aider les détenteurs de visas non-immigrants à modifier leur statut et les immigrants à obtenir une carte verte de résidence permanente EB-3, le programme collabore avec certains des principaux cabinets d'avocats spécialisés dans l'immigration du pays. En offrant ces services, le programme de carte verte EB-3 a joué un rôle essentiel en aidant les ressortissants étrangers et les titulaires de visas de non-immigrant à devenir des résidents permanents légitimes aux États-Unis",
      p3: "Le programme de carte verte EB-3 aide les entreprises américaines à recruter le personnel qualifié dont elles ont besoin pour se développer et prospérer. Il a permis de remédier au manque persistant d'employés non qualifiés sur le marché du travail américain en servant de lien entre les entreprises américaines et les travailleurs étrangers. Le programme s'est forgé une solide réputation en tant que source fiable d'acquisition de talents grâce à son engagement en faveur de la qualité et à son désir de voir les entreprises américaines prospérer",
    },
  };
  const historyContent = history[language];

  return (
    <>
      <HeroAbout language={language} />
      <Section>
        {/* Our Speciality */}
        <ImgContent
          img="/contact.jpg"
          title1={ourContent.title1}
          title2={ourContent.title2}
          alt="our team offers legal assistance for migration to the U.S."
        >
          <p className={`${styles.sectionText} mb-6`}>{ourContent.p1}</p>
          <p className={`${styles.sectionText}`}>{ourContent.p2}</p>
        </ImgContent>

        {/* 2 Columns contend */}
        <TitleContent title={cardsContent.title1}>
          <div className="flex flex-col md:flex-row items-center w-full justify-between   gap-10 xl:w-[1080px] lg:w-[900px] md:w-[700px] ">
            <div className="shadow-black shadow-md rounded-3xl md:w-[600px] md:h-[300px] w-[200px]  flex flex-col items-center justify-center gap-6 p-3">
              <GiWorld className="text-7xl text-primary" />
              <p className="font-bold">{cardsContent.p1}</p>
            </div>
            <div className="shadow-black shadow-md rounded-3xl md:w-[600px] md:h-[300px] w-[200px]  flex flex-col items-center justify-center gap-6 p-3">
              <BsFillPersonVcardFill className="text-7xl text-primary" />
              <p className="font-bold">{cardsContent.p2}</p>
            </div>
          </div>
        </TitleContent>

        {/* History of EB-3 Solutions */}

        <TitleContent title={historyContent.title1}>
          <p className={`${styles.sectionTitleText}`}>{historyContent.p1}</p>
          <p className={`${styles.sectionTitleText}`}>{historyContent.p2}</p>
          <p className={`${styles.sectionTitleText}`}>{historyContent.p3}</p>
        </TitleContent>

        <Divider language={language} />
      </Section>
    </>
  );
};

export default AboutPage;
