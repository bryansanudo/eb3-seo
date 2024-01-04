"use client";

import Section from "@/components/common/Section";

import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";

import { styles } from "@/utils/styles";

import CompaniesHero from "@/components/companies/CompaniesHero";
import CompaniesDivider from "@/components/companies/CompaniesDivider";
import CompaniesImgContent from "@/components/companies/CompaniesImgContent";
import CompaniesEbTwoCol from "@/components/companies/CompaniesEbTwoCol";
import CompaniesTitleContent from "@/components/companies/CompaniesTitleContent";
import CompaniesPartners from "@/components/companies/CompaniesPartners";

import CHorizontalProcess from "@/components/companies/CHorizontalProcess";
import HorizontalProcess from "@/components/companies/HorizontalProcess";

import FormContact from "@/components/common/FormContact";

import IconWpp from "@/components/icons/IconWpp";
import { useSelector } from "react-redux";

const CHome = () => {
  const language = useSelector((state) => state.values.languages);
  const james = {
    en: {
      title1: "Meet The Founder",
      title2: "James Baker, CPA",
      p1: "James is the head of different companies around the US, serving international Corporations and international entrepreneurs with different services and companies. ​ James allied with silent investors to create EB-3 Workforce solutions, a company that connects employers which are facing a chronic shortage of unskilled workers with immigrant employees willing to apply for a US Green Card through the EB-3 Visa program.",
    },
    es: {
      title1: "Conozca al fundador",
      title2: "James Baker, CPA",
      p1: "James dirige diferentes empresas en EE.UU. que prestan servicios a corporaciones y empresarios internacionales. James se alió con inversores silenciosos para crear EB-3 Workforce solutions, una empresa que pone en contacto a empresarios que se enfrentan a una escasez crónica de trabajadores no cualificados con empleados inmigrantes dispuestos a solicitar una Green Card estadounidense a través del programa de visados EB-3.",
    },
    por: {
      title1: "Conheça o fundador",
      title2: "James Baker, CPA",
      p1: "James está à frente de diferentes empresas nos EUA, servindo corporações internacionais e empresários internacionais com diferentes serviços e empresas. James aliou-se a investidores silenciosos para criar a EB-3 Workforce Solutions, uma empresa que liga empregadores que enfrentam uma escassez crónica de trabalhadores não qualificados a trabalhadores imigrantes dispostos a candidatar-se a um Green Card dos EUA através do programa de vistos EB-3.",
    },
    fr: {
      title1: "Rencontre avec le fondateur",
      title2: "James Baker, CPA",
      p1: "James est à la tête de plusieurs entreprises aux États-Unis, au service de sociétés internationales et d'entrepreneurs internationaux avec différents services et entreprises. James s'est allié à des investisseurs silencieux pour créer EB-3 Workforce solutions, une société qui met en relation des employeurs confrontés à une pénurie chronique de travailleurs non qualifiés avec des employés immigrés désireux de demander une carte verte américaine dans le cadre du programme de visa EB-3.",
    },
  };
  const jamesContent = james[language];

  const dividerGet = {
    en: {
      h1: "Get Committed Workers! Contact Us: ",
      p: "Call Us",
    },
    es: {
      h1: "Consigue trabajadores comprometidos Póngase en contacto con nosotros:",
      p: "Llámanos",
    },
    por: {
      h1: "Obter trabalhadores empenhados! Contactar-nos:",
      p: "Contactar-nos",
    },
    fr: {
      h1: "Des travailleurs engagés! Contactez-nous :",
      p: "Appelez-nous",
    },
  };
  const dividerGetContent = dividerGet[language];

  const want = {
    en: {
      title1: "Contact Us",
      title2: "Want to Know More?",
      p1: "If you find yourself in a situation where you are struggling to find a significant number of qualified, accessible, and highly motivated U.S. employees to fill various entry-level positions, or if you are facing challenges with relentless turnover and overwhelming HR responsibilities and charges, then we have the perfect solution for you.",
      p2: "Introducing the EB-3 Visa Program, a long-term staffing solution specifically designed for U.S. employers like yourself. This employment-based Green Card option is tailored to address your staffing needs and provide the qualified workforce you require.",
    },
    es: {
      title1: "Contacte con nosotros",
      title2: "¿Quiere saber más?",
      p1: "Si se encuentra en una situación en la que está luchando por encontrar un número significativo de empleados estadounidenses cualificados, accesibles y altamente motivados para cubrir varios puestos de nivel inicial, o si se enfrenta a retos con una rotación implacable y unas responsabilidades y cargas de RRHH abrumadoras, entonces tenemos la solución perfecta para usted.",
      p2: "Presentamos el Programa de Visados EB-3, una solución de dotación de personal a largo plazo diseñada específicamente para empresarios estadounidenses como usted. Esta opción de Green Card basada en el empleo está diseñada para satisfacer sus necesidades de personal y proporcionarle la mano de obra cualificada que necesita.",
    },
    por: {
      title1: "Contactar-nos",
      title2: "Quer saber mais?",
      p1: "Se se encontra numa situação em que está a lutar para encontrar um número significativo de funcionários americanos qualificados, acessíveis e altamente motivados para preencher várias posições de nível de entrada, ou se está a enfrentar desafios com uma rotatividade implacável e responsabilidades e encargos de RH esmagadores, então temos a solução perfeita para si.",
      p2: "Apresentamos o Programa de Vistos EB-3, uma solução de recrutamento a longo prazo especificamente concebida para empregadores americanos como o seu. Esta opção de Green Card baseada no emprego foi concebida para responder às suas necessidades de pessoal e fornecer a mão de obra qualificada de que necessita.",
    },
    fr: {
      title1: "Nous contacter",
      title2: "Want to Know More ?",
      p1: "Si vous vous trouvez dans une situation où vous avez du mal à trouver un nombre important de salariés américains qualifiés, accessibles et très motivés pour occuper divers postes de débutants, ou si vous êtes confronté à des défis liés à un taux de rotation incessant et à des responsabilités et charges écrasantes en matière de ressources humaines, alors nous avons la solution idéale pour vous.",
    },
  };
  const wantContent = want[language];

  const eb3 = {
    en: {
      title1: "EB-3 Workforce Solutions",

      p1: "At EB-3 Workforce Solutions, we understand the importance of finding reliable and dedicated employees. That's why we offer a unique solution to your staffing needs - EB-3 visa workers. Our team is dedicated to finding and placing highly qualified personnel who are committed to making a positive impact on your business. With a rigorous screening process and a network of top-notch talent, we ensure that you receive the highest quality workforce available. Say goodbye to the struggles of finding committed workers and hello to a bright future with EB-3 Workforce Solutions.",
    },
    es: {
      title1: "EB-3 Workforce Solutions",

      p1: "En EB-3 Workforce Solutions, entendemos la importancia de encontrar empleados confiables y dedicados. Es por eso que ofrecemos una solución única a sus necesidades de personal - trabajadores con visa EB-3. Nuestro equipo está dedicado a encontrar y colocar personal altamente calificado que esté comprometido a tener un impacto positivo en su negocio. Con un riguroso proceso de selección y una red de talentos de primera categoría, nos aseguramos de que usted reciba la mano de obra de la más alta calidad disponible. Diga adiós a las luchas por encontrar trabajadores comprometidos y hola a un futuro brillante con EB-3 Workforce Solutions.",
    },
    por: {
      title1: "EB-3 Workforce Solutions",

      p1: "Na EB-3 Workforce Solutions, compreendemos a importância de encontrar trabalhadores fiáveis e dedicados. É por isso que oferecemos uma solução única para as suas necessidades de pessoal - trabalhadores com visto EB-3. A nossa equipa dedica-se a encontrar e colocar pessoal altamente qualificado que esteja empenhado em ter um impacto positivo na sua empresa. Com um rigoroso processo de seleção e uma rede de talentos de topo, garantimos que recebe a mão de obra de maior qualidade disponível. Diga adeus às dificuldades de encontrar trabalhadores empenhados e olá a um futuro brilhante com a EB-3 Workforce Solutions.",
    },
    fr: {
      title1: "EB-3 Workforce Solutions",

      p1: "Chez EB-3 Workforce Solutions, nous comprenons l'importance de trouver des employés fiables et dévoués. C'est pourquoi nous proposons une solution unique pour répondre à vos besoins en personnel : les travailleurs titulaires d'un visa EB-3. Notre équipe se consacre à la recherche et au placement de personnel hautement qualifié qui s'engage à avoir un impact positif sur votre entreprise. Grâce à un processus de sélection rigoureux et à un réseau de talents de premier ordre, nous vous garantissons une main-d'œuvre de la plus haute qualité. Dites adieu aux difficultés liées à la recherche de travailleurs motivés et bonjour à un avenir radieux grâce à EB-3 Workforce Solutions",
    },
  };
  const eb3Content = eb3[language];

  const struggling = {
    en: {
      title1: "Struggling to Find Commited Workers?",

      p1: "Discover the solution to your staffing needs with our company! Say goodbye to the hassle of unreliable workers and hello to a team of dedicated and committed professionals. Our EB-3 visa workers are handpicked to ensure top-notch performance and complete commitment to your projects. Trust us to provide the workforce you deserve.",
    },
    es: {
      title1: "¿Le cuesta encontrar trabajadores comprometidos?",

      p1: "Descubra la solución a sus necesidades de personal con nuestra empresa. Diga adiós a las molestias de los trabajadores poco fiables y hola a un equipo de profesionales dedicados y comprometidos. Nuestros trabajadores con visado EB-3 son seleccionados cuidadosamente para garantizar un rendimiento de primera clase y un compromiso total con sus proyectos. Confíe en nosotros para proporcionarle la mano de obra que se merece.",
    },
    por: {
      title1: "Está a ter dificuldades em encontrar trabalhadores empenhados?",

      p1: "Descubra a solução para as suas necessidades de pessoal com a nossa empresa! Diga adeus ao incómodo de trabalhadores pouco fiáveis e olá a uma equipa de profissionais dedicados e empenhados. Os nossos trabalhadores com visto EB-3 são escolhidos a dedo para garantir um desempenho de alto nível e um empenho total nos seus projectos. Confie em nós para fornecer a força de trabalho que você merece.",
    },
    fr: {
      title1: "Vous avez du mal à trouver des travailleurs engagés?",

      p1: "Découvrez la solution à vos besoins en personnel avec notre entreprise ! Dites adieu aux tracas des travailleurs peu fiables et bonjour à une équipe de professionnels dévoués et engagés. Nos travailleurs titulaires d'un visa EB-3 sont triés sur le volet pour garantir des performances de premier ordre et un engagement total dans vos projets. Faites-nous confiance pour vous fournir la main-d'œuvre que vous méritez",
    },
  };
  const strugglingContent = struggling[language];

  const timeline = {
    en: {
      title1: "EB-3 Unskilled Visa",
      title2: "Consular Processing Typical Timeline",
      title3: "Adjustment of Status Typical Timeline",
    },
    es: {
      title1: "EB-3 Visado no cualificado",
      title2: "Plazos habituales de la tramitación consular",
      title3: "Plazos habituales para el ajuste de estatus",
    },
    por: {
      title1: "Visto EB-3 não qualificado",
      title2: "Cronograma típico do processamento consular",
      title3: "Calendário típico de ajustamento do estatuto",
    },
    fr: {
      title1: "Visa EB-3 pour les travailleurs non qualifiés",
      title2: "Délai type de traitement consulaire",
      title3: "Délai type pour l'adaptation du statut",
    },
  };
  const timelineContent = timeline[language];

  return (
    <>
      <CompaniesHero language={language} />

      <Section>
        {/* James */}

        <div name="teach me s" className="pt-20" />
        <CompaniesImgContent
          img="/James-bg.jpg"
          title1={jamesContent.title1}
          title2={jamesContent.title2}
        >
          <p className={`${styles.sectionText}`}>{jamesContent.p1}</p>
        </CompaniesImgContent>

        {/* Divider committed workers */}
        <div className="flex items-center justify-center gap-6 md:gap-40 p-6 flex-col md:flex-row bg-gray-100 w-full ">
          <h1 className="text-4xl font-bold capitalize">
            {dividerGetContent.h1}
          </h1>

          <div className="flex flex-col items-center justify-center gap-4 text-xl font-bold ">
            <div className="flex items-center justify-center gap-4">
              <a href="tel:+13055641311">
                <div className="bg-white p-3 rounded-full hover:scale-110 duration-500  ">
                  <BiPhoneCall className="text-4xl text-secondary" />
                </div>
              </a>
              <a href="https://wa.me/c/12403437282" target="_blank">
                <div className="bg-white p-3 rounded-full hover:scale-110 duration-500 cursor-pointer   ">
                  <IconWpp className="h-9 w-9 text-secondary" />
                </div>
              </a>
            </div>
            <a href="tel:+13055641311">
              <p>+1 (305) 564-1311</p>
            </a>
          </div>
          <a href="mailto:recruiter@eb3wfs.com">
            <div className="flex flex-col items-center justify-center gap-4 font-bold text-xl hover:scale-110 duration-500">
              <div className="flex items-center justify-center gap-4">
                <div className="bg-white p-3 rounded-full ">
                  <AiOutlineMail className="text-secondary text-4xl" />
                </div>
              </div>
              <p>recruiter@eb3wfs.com</p>
            </div>
          </a>
        </div>

        {/* Want to know more */}

        <CompaniesImgContent
          img="/home1.jpg"
          title1={wantContent.title1}
          title2={wantContent.title2}
        >
          <p className={`${styles.sectionText} mb-6`}>{wantContent.p1}</p>
          <p className={`${styles.sectionText}`}>{wantContent.p2}</p>
        </CompaniesImgContent>

        {/* EB-3 VISA */}

        <CompaniesEbTwoCol language={language} />

        <CompaniesDivider language={language} />

        {/* EB-3 Worfkforce Solutions */}
        <CompaniesTitleContent title={eb3Content.title1}>
          <p className={`${styles.sectionTitleText}`}>{eb3Content.p1}</p>
        </CompaniesTitleContent>

        {/* Struggling to Find Commited Workers? */}
        <CompaniesImgContent
          img="/contact2.jpg"
          title2={strugglingContent.title1}
        >
          <p className={`${styles.sectionText}`}>{strugglingContent.p1}</p>
        </CompaniesImgContent>
      </Section>

      <CompaniesTitleContent
        title={timelineContent.title2}
      ></CompaniesTitleContent>
      <CHorizontalProcess language={language} />
      <CompaniesTitleContent
        title={timelineContent.title3}
      ></CompaniesTitleContent>
      <HorizontalProcess language={language} />

      <Section>
        <CompaniesDivider language={language} />
        <CompaniesPartners language={language} />
        <FormContact color="secondary" language={language} />

        <CompaniesDivider language={language} />
      </Section>
    </>
  );
};

export default CHome;
