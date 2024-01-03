"use client";
import Section from "@/components/common/Section";

import HeroHome from "@/components/HeroHome";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";

import FormContact from "@/components/common/FormContact";

import Divider from "@/components/common/Divider";
import ImgContent from "@/components/common/ImgContent";
import IconWpp from "@/components/icons/IconWpp";
import { useSelector } from "react-redux";
import TitleContent from "@/components/common/TitleContent";
import { styles } from "@/utils/styles";

const Home = () => {
  /*  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); */
  const language = useSelector((state) => state.values.languages);

  const james = {
    en: {
      title2: "Meet The Team",
      p1: "EB-3 Workforce Solutions, spearheaded by a visionary leader, is at the forefront of addressing the workforce needs of various industries across the United States. With a keen focus on serving international corporations and entrepreneurs, our founder played a pivotal role in establishing and steering multiple companies nationwide. ",
      p2: "Partnering strategically with silent investors, EB-3 Workforce Solutions has emerged as a trailblazer in connecting employers grappling with a persistent shortage of unskilled workers to immigrant candidates eager to pursue a US Green Card through the EB-3 Visa program. Our commitment to facilitating mutually beneficial employment relationships remains unwavering as we continue to bridge the gap between employers and prospective immigrant employees.",
    },
    es: {
      title2: "Conozca al equipo",
      p1: "EB-3 Workforce Solutions, encabezada por un líder visionario, está a la vanguardia de la respuesta a las necesidades de mano de obra de diversas industrias en todo Estados Unidos. Con un gran enfoque en el servicio a corporaciones y empresarios internacionales, nuestro fundador desempeñó un papel fundamental en el establecimiento y dirección de múltiples empresas en todo el país. ",
      p2: "Asociándose estratégicamente con inversores silenciosos, EB-3 Workforce Solutions ha surgido como pionera en la conexión de empleadores que lidian con una persistente escasez de trabajadores no cualificados con candidatos inmigrantes deseosos de obtener una tarjeta verde estadounidense a través del programa de visados EB-3. Nuestro compromiso es facilitar una mano de obra mutuamente beneficiosa para todos. Nuestro compromiso de facilitar relaciones laborales mutuamente beneficiosas sigue siendo inquebrantable a medida que continuamos tendiendo puentes entre los empleadores y los posibles empleados inmigrantes.",
    },
    por: {
      title2: "Conheça a equipa",
      p1: "A EB-3 Workforce Solutions, liderada por um líder visionário, está na vanguarda da resposta às necessidades de mão de obra de várias indústrias nos Estados Unidos. Com um grande enfoque na prestação de serviços a empresas e empresários internacionais, o nosso fundador desempenhou um papel fundamental na criação e direção de várias empresas a nível nacional. ",
      p2: "Em parceria estratégica com investidores silenciosos, a EB-3 Workforce Solutions surgiu como pioneira na ligação entre empregadores que lutam com uma escassez persistente de trabalhadores não qualificados e candidatos imigrantes ansiosos por obter um Green Card dos EUA através do programa de vistos EB-3. O nosso compromisso de facilitar relações de emprego mutuamente benéficas permanece inabalável à medida que continuamos a fazer a ponte entre empregadores e potenciais empregados imigrantes.",
    },
    fr: {
      title2: "Rencontrer l'équipe",
      p1: "EB-3 Workforce Solutions, dirigée par un leader visionnaire, est en première ligne pour répondre aux besoins en main-d'œuvre de diverses industries à travers les États-Unis. Notre fondateur a joué un rôle essentiel dans la création et la direction de plusieurs entreprises à l'échelle nationale, en mettant l'accent sur le service aux entreprises et aux entrepreneurs internationaux. ",
      p2: "Grâce à un partenariat stratégique avec des investisseurs silencieux, EB-3 Workforce Solutions est devenu un pionnier dans la mise en relation d'employeurs confrontés à une pénurie persistante de travailleurs non qualifiés avec des candidats à l'immigration désireux d'obtenir une carte verte américaine par le biais du programme de visa EB-3. Notre engagement à faciliter des relations de travail mutuellement bénéfiques reste inébranlable, car nous continuons à combler le fossé entre les employeurs et les candidats à l'immigration.",
    },
  };
  const jamesContent = james[language];

  const dividerStart = {
    en: {
      h1: "Start Your Journey! Contact Us:",
      p: "Call Us",
    },
    es: {
      h1: "¡Comience su viaje! Póngase en contacto con nosotros:",
      p: "Llámanos",
    },
    por: {
      h1: "Comece a sua viagem! Contacte-nos:",
      p: "Contactar-nos",
    },
    fr: {
      h1: "Commencez votre voyage! Contactez nous :",
      p: "Appelez-nous",
    },
  };
  const dividerStartContent = dividerStart[language];

  const want = {
    en: {
      title1: "Contact Us",
      title2: "Want to Know More?",
      p1: "If you find yourself in a situation where you are seeking a significant opportunity for a better life and career in the United States, or if you are facing challenges in navigating the complex immigration process and associated costs, then we have the perfect solution for you.",
      p2: "Introducing the EB-3 Visa Program, a long-term immigration solution specifically designed for individuals like yourself. This employment-based Green Card option is crafted to address your immigration goals and provide the pathway you need to the United States.",
    },
    es: {
      title1: "Contacte con nosotros",
      title2: "¿Quiere saber más?",
      p1: "Si usted se encuentra en una situación en la que está buscando una oportunidad significativa para una vida mejor y una carrera en los Estados Unidos, o si se enfrenta a desafíos en la navegación por el complejo proceso de inmigración y los costos asociados, entonces tenemos la solución perfecta para usted",
      p2: "Presentamos el programa de visados EB-3, una solución de inmigración a largo plazo diseñada específicamente para personas como usted. Esta opción de Green Card basada en el empleo está diseñada para abordar sus objetivos de inmigración y proporcionarle el camino que necesita hacia los Estados Unidos.",
    },
    por: {
      title1: "Contactar-nos",
      title2: "Quer saber mais?",
      p1: "Se se encontrar numa situação em que procura uma oportunidade significativa para uma vida e uma carreira melhores nos Estados Unidos, ou se estiver a enfrentar desafios para navegar no complexo processo de imigração e nos custos associados, então temos a solução perfeita para si.",
      p2: "Apresentamos o Programa de Vistos EB-3, uma solução de imigração a longo prazo concebida especificamente para pessoas como você. Esta opção de Green Card baseada no emprego foi concebida para responder aos seus objectivos de imigração e proporcionar-lhe o caminho que necessita para os Estados Unidos.",
    },
    fr: {
      title1: "Nous contacter",
      title2: "Vous voulez en savoir plus?",
      p1: "Si vous vous trouvez dans une situation où vous cherchez une opportunité significative pour une vie et une carrière meilleures aux États-Unis, ou si vous avez des difficultés à naviguer dans le processus d'immigration complexe et les coûts associés, alors nous avons la solution parfaite pour vous.",
      p2: "Nous vous présentons le programme de visa EB-3, une solution d'immigration à long terme conçue spécialement pour des personnes comme vous. Cette carte verte basée sur l'emploi est conçue pour répondre à vos objectifs en matière d'immigration et vous offrir la voie d'accès aux États-Unis dont vous avez besoin.",
    },
  };
  const wantContent = want[language];

  const eb3 = {
    en: {
      p1: "At EB-3 Workforce Solutions, we understand the significance of pursuing a better life and career opportunities in the United States. That's why we provide a unique solution to your immigration dreams - the EB-3 Visa program. Our dedicated team is committed to assisting interested individuals who are eager to contribute positively to the U.S. With a meticulous application process and a network of top-notch immigration experts, we ensure that you have the best support available for your EB-3 Visa journey. Say goodbye to the uncertainties of the immigration process and hello to a brighter future with EB-3 Workforce Solutions.",
    },
    es: {
      p1: "En EB-3 Workforce Solutions, entendemos la importancia de buscar una vida mejor y oportunidades de carrera en los Estados Unidos. Es por eso que ofrecemos una solución única a sus sueños de inmigración - el programa de Visa EB-3. Nuestro equipo dedicado está comprometido a ayudar a las personas interesadas que están deseosas de contribuir positivamente a los EE.UU. Con un meticuloso proceso de solicitud y una red de expertos en inmigración de primera categoría, nos aseguramos de que usted tenga el mejor apoyo disponible para su viaje de Visa EB-3. Diga adiós a la incertidumbre del proceso de inmigración y hola a un futuro más brillante con EB-3 Workforce Solutions.",
    },
    por: {
      p1: "Na EB-3 Workforce Solutions, compreendemos a importância de procurar uma vida melhor e oportunidades de carreira nos Estados Unidos. É por isso que oferecemos uma solução única para os seus sonhos de imigração - o programa de vistos EB-3. A nossa equipa dedicada está empenhada em ajudar os indivíduos interessados que estão ansiosos por contribuir positivamente para os EUA. Com um processo de candidatura meticuloso e uma rede de especialistas de imigração de topo, garantimos que tem o melhor apoio disponível para a sua viagem com o Visto EB-3. Diga adeus às incertezas do processo de imigração e olá a um futuro mais brilhante com a EB-3 Workforce Solutions.",
    },
    fr: {
      p1: "Chez EB-3 Workforce Solutions, nous comprenons l'importance de la recherche d'une vie meilleure et d'opportunités de carrière aux États-Unis. C'est pourquoi nous vous proposons une solution unique pour réaliser vos rêves d'immigration : le programme de visa EB-3. Notre équipe dévouée s'engage à aider les personnes intéressées qui souhaitent apporter une contribution positive aux États-Unis. Grâce à un processus de demande méticuleux et à un réseau d'experts en immigration de premier ordre, nous nous assurons que vous bénéficiez du meilleur soutien possible pour votre voyage vers le visa EB-3. Dites au revoir aux incertitudes du processus d'immigration et bonjour à un avenir meilleur avec EB-3 Workforce Solutions.",
    },
  };
  const eb3Content = eb3[language];

  const looking = {
    en: {
      title: "Looking To Start Your American Dream?",
      p1: "Discover the pathway to your American dream with our company! Say goodbye to the uncertainty of the immigration journey and hello to a dedicated team of professionals eager to assist you. Our partners are carefully selected to ensure a smooth process and unwavering commitment to your immigration goals. Trust us to guide you on the path to the American Dream.",
    },
    es: {
      title: "¿Quiere iniciar su sueño americano?",
      p1: "¡Descubra el camino hacia su sueño americano con nuestra empresa! Diga adiós a la incertidumbre del viaje de la inmigración y hola a un equipo dedicado de profesionales deseosos de ayudarle. Nuestros socios son cuidadosamente seleccionados para garantizar un proceso fluido y un compromiso inquebrantable con sus objetivos de inmigración. Confíe en nosotros para guiarle en el camino hacia el sueño americano.",
    },
    por: {
      title: "Quer começar o seu sonho americano?",
      p1: "Descubra o caminho para o seu sonho americano com a nossa empresa! Diga adeus à incerteza da viagem de imigração e olá a uma equipa dedicada de profissionais ansiosos por o ajudar. Os nossos parceiros são cuidadosamente seleccionados para garantir um processo tranquilo e um compromisso inabalável com os seus objectivos de imigração. Confie em nós para o guiarmos no caminho para o sonho americano.",
    },
    fr: {
      title: "Vous souhaitez réaliser votre rêve américain ?",
      p1: "Découvrez la voie de votre rêve américain avec notre société ! Dites adieu à l'incertitude du voyage d'immigration et bonjour à une équipe dévouée de professionnels désireux de vous aider. Nos partenaires sont soigneusement sélectionnés pour garantir un processus sans heurts et un engagement sans faille à l'égard de vos objectifs d'immigration. Faites-nous confiance pour vous guider sur le chemin du rêve américain.",
    },
  };
  const lookingContent = looking[language];

  return (
    <>
      <HeroHome language={language} />
      <Section>
        {/* James */}

        <div name="teach me" className="pt-20" />

        <ImgContent
          img="/home1.jpg"
          title1={jamesContent.title1}
          title2={jamesContent.title2}
          alt="eb3-usa"
        >
          <p className={`${styles.sectionText}`}>{jamesContent.p1}</p>
          <p className={`${styles.sectionText} mt-2`}>{jamesContent.p2}</p>
        </ImgContent>

        {/* Divider committed workers */}
        <div className="flex items-center justify-center gap-6 md:gap-40 p-6 flex-col md:flex-row bg-gray-100 w-full ">
          <h1 className="text-4xl font-bold capitalize">
            {dividerStartContent.h1}
          </h1>

          <div className="flex flex-col items-center justify-center gap-4 text-xl font-bold ">
            <div className="flex items-center justify-center gap-4">
              <a href="tel:+13055641311">
                <div className="bg-white p-3 rounded-full hover:scale-110 duration-500  ">
                  <BiPhoneCall className="text-4xl text-primary" />
                </div>
              </a>
              <a href="https://wa.me/c/12403437282" target="_blank">
                <div className="bg-white p-3 rounded-full hover:scale-110 duration-500 cursor-pointer   ">
                  <IconWpp className="h-9 w-9 text-primary" />
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
                  <AiOutlineMail className="text-primary text-4xl" />
                </div>
              </div>
              <p>recruiter@eb3wfs.com</p>
            </div>
          </a>
        </div>

        {/* Want to know more */}

        <ImgContent
          img="/usa3.jpg"
          title1={wantContent.title1}
          title2={wantContent.title2}
          alt="eb3-usa"
        >
          <p className={`${styles.sectionText} mb-6`}>{wantContent.p1}</p>
          <p className={`${styles.sectionText}`}>{wantContent.p2}</p>
        </ImgContent>

        <Divider language={language} />

        {/* EB-3 Worfkforce Solutions */}
        <TitleContent title="EB-3 Workforce Solutions">
          <p
            className={` max-w-[1080px] md:text-left text-center tracking-wider mx-auto `}
          >
            {eb3Content.p1}
          </p>
        </TitleContent>

        {/* Looking to Start
your American Dream?*/}
        <ImgContent
          img="/contact2.jpg"
          title2={lookingContent.title}
          alt="eb3-usa"
        >
          <p className={`${styles.sectionText}`}>{lookingContent.p1}</p>
        </ImgContent>

        <FormContact color="primary" language={language} />

        <Divider language={language} />
      </Section>
    </>
  );
};

export default Home;
