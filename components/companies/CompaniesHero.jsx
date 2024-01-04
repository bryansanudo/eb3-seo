import { Link } from "react-scroll";
import React, { useState, useEffect } from "react";

const messages = {
  en: [
    "Harness Global Talent: The EB-3 Program connects you to an untapped pool of motivated workers.",
    "Cut Recruitment Costs: With EB-3, access a cost-effective pipeline to diligent, job-ready labor.",
    "Solve Labor Shortages: Where local talent falls short, EB-3 provides a dependable source of labor.",
    "Gain Competitive Advantage: Use EB-3 to bring in labor skills that are rare or lacking in the domestic workforce.",
    "Diversify Your Team: EB-3 introduces cultural richness and different perspectives into your workforce.",
    "Optimized Retention: Workers under EB-3 often demonstrate higher commitment levels, staying longer with your company.",
    "Fast-Track Hiring: The EB-3 Program offers a streamlined process to expedite your recruitment timeline.",
    " Minimize Training Costs: Many EB-3 candidates already possess the basic skills required, reducing your onboarding overheads. ",
    "Compliance Confidence: The EB-3 Program ensures all legal steps are covered for permanent residency, reducing your legal risk.",
    "Future-Proof Your Business: Secure a steady, reliable workforce for tomorrow by hiring through EB-3 today.",
  ],
  es: [
    "Desbloquee su sueño americano: Elija hoy la vía del visado EB-3",
    "¿Por qué conformarse con menos? Eleve su futuro con un visado EB-3",
    "Puertas abiertas en EE.UU.: haga del visado EB-3 su llave",
    "Entre en un mundo de oportunidades: Obtenga Su Visa EB-3 Ahora",
    "Visa EB-3: Su Puerta a la Residencia Permanente y Más Allá",
    "Descubra el Camino más Rápido a su Vida Americana con una Visa EB-3",
    "Trace su curso hacia el éxito: El visado EB-3 le espera",
    "Forme parte de la historia de crecimiento de Estados Unidos con un visado EB-3",
    "Logre lo impensable: La residencia en EE.UU. a través del visado EB-3",
    "Su viaje hacia un futuro mejor comienza con un visado EB-3",
  ],
  por: [
    "Desbloqueie o seu sonho americano: Escolha o caminho do visto EB-3 hoje!",
    "Porquê contentar-se com menos? Eleve o seu futuro com um visto EB-3.",
    "Abra Portas nos EUA - Faça do Visto EB-3 a sua Chave.",
    "Entre num mundo de oportunidades: Obtenha já o seu visto EB-3.",
    "Visto EB-3: A sua porta de entrada para a residência permanente e mais além.",
    "Descubra o caminho mais rápido para a sua vida americana com um visto EB-3.",
    "Trace a sua rota para o sucesso: O visto EB-3 aguarda-o.",
    "Faça parte da história de crescimento da América com um visto EB-3.",
    "Alcance o impensável: Residência nos EUA através do Visto EB-3.",
    "A sua viagem para um futuro melhor começa com um visto EB-3",
  ],
  fr: [
    "Débloquez votre rêve américain : Choisissez la voie du visa EB-3 dès aujourd'hui",
    "Pourquoi se contenter de moins ? Améliorez votre avenir avec un visa EB-3",
    "Ouvrez les portes aux États-Unis - Faites du visa EB-3 votre clé",

    "Entrez dans un monde d'opportunités : Obtenez votre visa EB-3 maintenant",
    "Visa EB-3 : Votre porte d'entrée vers la résidence permanente et au-delà",
    "Découvrez le chemin le plus rapide vers votre vie américaine avec un visa EB-3",
    "Tracez votre route vers le succès : Le visa EB-3 vous attend",
    "Faites partie de l'histoire de la croissance de l'Amérique avec un visa EB-3",
    "Réalisez l'impensable : La résidence aux États-Unis grâce au visa EB-3",
    "Votre voyage vers un avenir meilleur commence avec un visa EB-3",
  ],
};

const CompaniesHero = ({ language }) => {
  const btn = {
    en: {
      title: "Yes, Teach Me How!",
    },
    es: {
      title: "Sí, ¡enséñame cómo!",
    },
    por: {
      title: "Sim, ensina-me como!",
    },
    fr: {
      title: "Oui, apprenez-moi à faire !",
    },
  };
  const btnContent = btn[language];
  const [randomMessage, setRandomMessage] = useState("");

  useEffect(() => {
    const messagesForLanguage = messages[language];
    if (messagesForLanguage) {
      const randomIndex = Math.floor(
        Math.random() * messagesForLanguage.length
      );
      setRandomMessage(messagesForLanguage[randomIndex]);
    }
  }, [language]);
  return (
    <>
      <div
        className="hero min-h-[100vh]"
        style={{
          backgroundImage: "url(/companies-home.jpg)",
        }}
      >
        <div className="hero-overlay bg-black opacity-50" />
        <div className="hero-content text-center text-white">
          <div className="max-w-5xl">
            <h1 className="my-5 lg:text-5xl md:text-3xl text-2xl font-bold">
              {randomMessage}
            </h1>

            <Link to="teach me s" smooth duration={500}>
              <button className="btn hover:scale-105 btn-secondary capitalize tracking-wider">
                {btnContent.title}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompaniesHero;
