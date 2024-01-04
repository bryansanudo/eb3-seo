"use client";

import Section from "@/components/common/Section";

import HeroContact from "@/components/HeroContact";
import FormContact from "@/components/common/FormContact";
import TitleContent from "@/components/common/TitleContent";
import { styles } from "@/utils/styles";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const ContactPage = () => {
  const language = useSelector((state) => state.values.languages);
  const step = {
    en: {
      title: "Steps for the On-boarding Process",
      t1: "Complete the Online Questionnaire",
      s1: "Fill out this form to confirm your eligibility for the EB3 Visa.",
      t2: "Upload Documents",
      s2: "To complete your profile, upload your passport and US Visa.",
      t3: "Offering Selection",
      s3: "Choose the job and location from the current available positions offered by our partner employers.",
      t4: "Sign contract and pay Initial fee",
      s4: "A contract will be sent to you for signature and first payment to EB-3 Workforce Solutions will need to be made.",
      t5: "Get Updates on your Process",
      s5: "As the employer processes your applications, your EB-3 Workforce Solutions portal will be updated.",
    },
    es: {
      title: "Pasos para el proceso de incorporación",
      t1: "Rellene el cuestionario en línea",
      s1: "Rellene este formulario para confirmar su elegibilidad para el visado EB3",
      t2: "Subir Documentos",
      s2: "Para completar su perfil, cargue su pasaporte y su visado de EE.UU.",
      t3: "Selección de Oferta",
      s3: "Elija el trabajo y la ubicación entre los puestos disponibles actualmente ofrecidos por nuestros empleadores asociados",
      t4: "Firmar contrato y pagar cuota inicial",
      s4: "Se le enviará un contrato para su firma y deberá realizar el primer pago a EB-3 Workforce Solutions",
      t5: "Recibir actualizaciones sobre su proceso",
      s5: "A medida que el empleador procese sus solicitudes, su portal EB-3 Workforce Solutions será actualizado",
    },
    por: {
      title: "Etapas do processo de integração",
      t1: "Preencher o questionário em linha",
      s1: "Preencha este formulário para confirmar a sua elegibilidade para o visto EB3",
      t2: "Carregar documentos",
      s2: "Para completar o seu perfil, carregue o seu passaporte e o seu visto dos EUA.",
      t3: "Seleção da oferta",
      s3: "Escolha o emprego e o local de trabalho entre as vagas atualmente disponíveis oferecidas pelos nossos empregadores parceiros.",
      t4: "Assinar contrato e pagar a taxa inicial",
      s4: "Ser-lhe-á enviado um contrato para assinatura e será necessário efetuar o primeiro pagamento à EB-3 Workforce Solutions",
      t5: "Obter actualizações sobre o seu processo",
      s5: "À medida que a entidade patronal processa os seus pedidos, o seu portal da EB-3 Workforce Solutions será atualizado",
    },
    fr: {
      title: "Étapes du processus d'intégration",
      t1: "Compléter le questionnaire en ligne",
      s1: "Remplissez ce formulaire pour confirmer votre éligibilité au visa EB3",
      t2: "Télécharger les documents",
      s2: "Pour compléter votre profil, téléchargez votre passeport et votre visa américain",
      t3: "Offering Selection",
      s3: "Choisissez l'emploi et le lieu de travail parmi les postes actuellement disponibles proposés par nos employeurs partenaires",
      t4: "Signez le contrat et payez les frais initiaux",
      s4: "Un contrat vous sera envoyé pour signature et un premier paiement devra être effectué à la EB-3 Workforce Solutions",
      t5: "Obtenez des mises à jour sur votre processus",
      s5: "Au fur et à mesure que l'employeur traite vos demandes, votre portail EB-3 Workforce Solutions sera mis à jour",
    },
  };
  const stepContent = step[language];

  const feel = {
    en: {
      title1:
        "Feel free to apply without the need for any previous experience!",
      p1: "Are you keen on obtaining a U.S. Permanent Resident Card (Green Card) for yourself and your family? EB-3 Workforce Solutions collaborates with U.S. corporations that are willing to support your Green Card application in return for your commitment to work with them for at least one year.",
    },
    es: {
      title1:
        "¡No dude en presentar su solicitud sin necesidad de tener experiencia previa!",
      p1: "¿Está interesado en obtener la Tarjeta de Residente Permanente de los EE.UU. (Green Card) para usted y su familia? EB-3 Workforce Solutions colabora con empresas estadounidenses que están dispuestas a apoyar tu solicitud de Green Card a cambio de que te comprometas a trabajar con ellas durante al menos un año.",
    },
    por: {
      title1: "Pode candidatar-se sem necessidade de experiência prévia!",
      p1: "Está interessado em obter um Cartão de Residente Permanente dos EUA (Green Card) para si e para a sua família? O EB-3 Workforce Solutions colabora com empresas americanas que estão dispostas a apoiar o seu pedido de Green Card em troca do seu compromisso de trabalhar com elas durante pelo menos um ano.",
    },
    fr: {
      title1: "N'hésitez pas à postuler sans expérience préalable!",
      p1: "Souhaitez-vous obtenir une carte de résident permanent aux États-Unis (carte verte) pour vous et votre famille ? EB-3 Workforce Solutions collabore avec des entreprises américaines qui sont prêtes à soutenir votre demande de carte verte en échange de votre engagement à travailler avec elles pendant au moins un an",
    },
  };
  const feelContent = feel[language];

  const we = {
    en: {
      title1: "We are open Monday through Friday from 9:00am-5:00pm",
      p1: "You can contact us through multiple channels, including phone, email, live chat, and our website's contact form",
    },
    es: {
      title1: "Estamos abiertos de lunes a viernes de 9:00 a 17:00.",
      p1: "Puede ponerse en contacto con nosotros por teléfono, correo electrónico, chat en directo o a través del formulario de contacto de nuestro sitio web.",
    },
    por: {
      title1: "Estamos abertos de segunda a sexta-feira, das 9:00 às 17:00",
      p1: "Pode contactar-nos através de vários canais, incluindo telefone, e-mail, chat ao vivo e o formulário de contacto do nosso sítio Web",
    },
    fr: {
      title1: "Nous sommes ouverts du lundi au vendredi de 9h00 à 17h00",
      p1: "Vous pouvez nous contacter par différents moyens, notamment par téléphone, par courrier électronique, par chat en direct et par le biais du formulaire de contact de notre site web",
    },
  };
  const weContent = we[language];

  const steps = [
    {
      id: 1,
      title: stepContent.t1,
      subtitle: stepContent.s1,
    },
    {
      id: 2,
      title: stepContent.t2,
      subtitle: stepContent.s2,
    },
    {
      id: 3,
      title: stepContent.t3,
      subtitle: stepContent.s3,
    },
    {
      id: 4,
      title: stepContent.t4,
      subtitle: stepContent.s4,
    },
    {
      id: 5,
      title: stepContent.t5,
      subtitle: stepContent.s5,
    },
  ];

  useEffect(() => {
    // Coloca el código del script aquí
    var ifr = document.getElementById("JotFormIFrame-232636593677672");
    if (ifr) {
      var src = ifr.src;
      var iframeParams = [];
      if (window.location.href && window.location.href.indexOf("?") > -1) {
        iframeParams = iframeParams.concat(
          window.location.href
            .substr(window.location.href.indexOf("?") + 1)
            .split("&")
        );
      }
      if (src && src.indexOf("?") > -1) {
        iframeParams = iframeParams.concat(
          src.substr(src.indexOf("?") + 1).split("&")
        );
        src = src.substr(0, src.indexOf("?"));
      }
      iframeParams.push("isIframeEmbed=1");
      ifr.src = src + "?" + iframeParams.join("&");
    }

    window.handleIFrameMessage = function (e) {
      // El código del manejador del mensaje del iframe
      // ...
    };

    if (window.addEventListener) {
      window.addEventListener("message", handleIFrameMessage, false);
    } else if (window.attachEvent) {
      window.attachEvent("onmessage", handleIFrameMessage);
    }
  }, []);

  return (
    <>
      <HeroContact language={language} />
      <Section title="Contact" color="primary">
        {/* Feel free to apply */}
        <TitleContent title={feelContent.title1}>
          <p className={`${styles.sectionTitleText}`}>{feelContent.p1}</p>
        </TitleContent>

        <iframe
          id="JotFormIFrame-232636593677672"
          title="Eligibility EB3WFS"
          onLoad={() => {
            window.parent.scrollTo(0, 0);
          }}
          allowtransparency="true"
          allowFullScreen="True"
          allow="geolocation; microphone; camera"
          src="https://form.jotform.com/EB3_Recruiter/eligibility-eb3wfs"
          frameBorder="0"
          style={{
            minWidth: "100%",
            maxWidth: "100%",
            height: "539px",
            border: "none",
          }}
          scrolling="no"
        ></iframe>
        {/* steps */}

        <TitleContent title={stepContent.title}>
          <ul className="steps steps-vertical text-lg  lg:steps-horizontal px-4 md:mx-32">
            {steps.map(({ id, title, subtitle }) => {
              // Genera un id único para cada elemento de la lista
              const uniqueId = `modal-${id}`;

              return (
                <li key={id} className="step text-black font-bold">
                  <span
                    onClick={() =>
                      document.getElementById(uniqueId).showModal()
                    }
                    className="btn btn-outline px-1  btn-md btn-primary tracking-wider capitalize "
                  >
                    {title}
                  </span>
                  <dialog id={uniqueId} className="modal">
                    <div className="modal-box">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button
                          onClick={() =>
                            document.getElementById(uniqueId).close()
                          }
                          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        >
                          ✕
                        </button>
                      </form>
                      <h3 className="font-bold tracking-wider mb-4">{title}</h3>
                      <p className="tracking-wider font-normal">{subtitle}</p>
                    </div>
                  </dialog>
                </li>
              );
            })}
          </ul>
        </TitleContent>

        {/*  <TitleContent title="Steps for the On-boarding Process">
          <div className=" grid w-full grid-cols-1 gap-8 py-8 px-12 text-center sm:grid-cols-3">
            {steps.map(({ id, title, subtitle }) => (
              <div
                key={id}
                className={`rounded-lg p-6 shadow-md duration-500 hover:scale-105 shadow-primary`}
              >
                <p className="font-bold text-2xl">Step {id}</p>
                <p className="font-bold my-2">{title}</p>
                <p>{subtitle}</p>
              </div>
            ))}
          </div>
        </TitleContent> */}

        <TitleContent title={weContent.title1}>
          <p className={`${styles.sectionTitleText}`}>{weContent.p1}</p>
        </TitleContent>

        <FormContact color="primary" language={language} />
        {/* <div className="mb-16" /> */}
      </Section>
    </>
  );
};

export default ContactPage;
