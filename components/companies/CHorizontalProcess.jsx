import React from "react";

import Interview from "@/components/icons/Interview";

import Image from "next/image";

const CHorizontalProcess = ({ language }) => {
  const consular = {
    en: {
      m1: "Month 1",
      p1: "Labor Certification filed once employer obtains DOL prevailing wage",
      m6: "Month 6",
      p6: "Labor Certification Approved",
      m7: "Month 7",
      p7: "Dependent fees due I-140 Filed",
      m8: "Month 8",
      p8: "I-140 Approved",
      m10: "Month 10",
      p10: "DS-260",
      m15: "Month 15",
      p15: "Interview scheduled",
      m16: "Month 16",
      p16: "EB-3 visa interview at usconsulate in your home country",
      m17: "Month 17",
      p17: "Received visa and travel to us",
      m18: "Month 18",
      p18: "Green Card Issued",
    },
    es: {
      m1: "Mes 1",
      p1: "Certificación laboral presentada una vez que el empleador obtiene el salario predominante del DOL",
      m6: "Mes 6",
      p6: "Certificación laboral aprobada",
      m7: "Mes 7",
      p7: "Tasas debidas dependientes I-140 Presentado",
      m8: "Mes 8",
      p8: "I-140 Aprobado",
      m10: "Mes 10",
      p10: "DS-260",
      m15: "Mes 15",
      p15: "Entrevista programada",
      m16: "Mes 16",
      p16: "Entrevista para visado EB-3 en el consulado de los EE.UU. en su país de origen",
      m17: "Mes 17",
      p17: "Recibimos el visado y viajamos",
      m18: "Mes 18",
      p18: "Green Card expedida",
    },
    por: {
      m1: "Mês 1",
      p1: "Certificação de Trabalho apresentada quando o empregador obtém o salário prevalecente do DOL",
      m6: "Mês 6",
      p6: "Certificação de trabalho aprovada",
      m7: "Mês 7",
      p7: "Taxas de dependentes devidas I-140 Arquivado",
      m8: "Mês 8",
      p8: "I-140 aprovado",
      m10: "Mês 10",
      p10: "DS-260",
      m15: "Mês 15",
      p15: "Entrevista marcada",
      m16: "Mês 16",
      p16: "Entrevista para obtenção de visto EB-3 no consulado dos EUA no seu país de origem",
      m17: "Mês 17",
      p17: "Visto recebido e viagem até nós",
      m18: "Mês 18",
      p18: "Green Card emitida",
    },
    fr: {
      m1: "Mois 1",
      p1: "Labor Certification filed once employer obtains DOL prevailing wage",
      m6: "Mois 6",
      p6: "Labor Certification Approved",
      m7: "Mois 7",
      p7: "Dependent fees due I-140 Filed",
      m8: "Mois 8",
      p8: "I-140 Approved",
      m10: "Mois 10",
      p10: "DS-260",
      m15: "Mois 15",
      p15: "Entretien prévu",
      m16: "Mois 16",
      p16: "EB-3 visa interview at usconsulate in your home country",
      m17: "Mois 17",
      p17: "Received visa and travel to us",
      m18: "Mois 18",
      p18: "Carte verte délivrée",
    },
  };
  const consularContent = consular[language];

  return (
    <div className="overflow-x-auto  flex items-center justify-center my-20  ">
      <ul className="steps pb-52 w-full xl:overflow-x-hidden  ">
        {/* 1 content */}
        <li className="step step-secondary">
          <div className="dropdown dropdown-open dropdown-bottom">
            <label tabIndex={0} className=" m-1">
              <Image
                src="/process/process1.png"
                alt="proces1"
                width={50}
                height={50}
                className="mx-auto"
              />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-6 shadow-md shadow-black bg-base-100  rounded-box w-52"
            >
              <p className="tracking-wider font-bold">{consularContent.m1}</p>
              <p className="tracking-wider">{consularContent.p1}</p>
            </ul>
          </div>
        </li>
        {/* 2 */}
        <li className="step "></li>
        {/* 3 */}
        <li className="step "></li>
        {/* 4 */}
        <li className="step "></li>
        {/* 5 */}
        <li className="step "></li>
        {/* 6 content */}
        <li className="step step-secondary">
          <div className="dropdown  dropdown-bottom   ">
            <label tabIndex={0} className=" m-1">
              {/* <FillForm className="mx-auto w-[50px]  " /> */}

              <Image
                src="/process/process6.png"
                alt="proces6"
                width={65}
                height={65}
                className="hover:scale-110 duration-700"
              />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-6 shadow-md shadow-black bg-base-100  rounded-box w-52"
            >
              <p className="tracking-wider font-bold">{consularContent.m6}</p>
              <p className="tracking-wider">{consularContent.p6}</p>
            </ul>
          </div>
        </li>
        {/* 7 content */}
        <li className="step step-secondary">
          <div className="dropdown  dropdown-bottom   ">
            <label tabIndex={0} className=" m-1">
              <Image
                src="/process/process7.png"
                alt="proces7"
                width={58}
                height={58}
                className="hover:scale-110 duration-700"
              />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-6 shadow-md shadow-black bg-base-100  rounded-box w-52"
            >
              <p className="tracking-wider font-bold">{consularContent.m7}</p>
              <p className="tracking-wider">{consularContent.p7}</p>
            </ul>
          </div>
        </li>
        {/* 8 content */}
        <li className="step step-secondary">
          <div className="dropdown  dropdown-bottom   ">
            <label tabIndex={0} className=" m-1">
              <Image
                src="/process/process8.png"
                alt="proces8"
                width={62}
                height={62}
                className="hover:scale-110 duration-700"
              />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-6 shadow-md shadow-black bg-base-100  rounded-box w-52"
            >
              <p className="tracking-wider font-bold">{consularContent.m8}</p>
              <p className="tracking-wider">{consularContent.p8}</p>
            </ul>
          </div>
        </li>
        {/* 9 */}
        <li className="step "></li>
        {/* 10 content */}
        <li className="step step-secondary">
          <div className="dropdown  dropdown-bottom  ">
            <label tabIndex={0} className=" m-1">
              <Image
                src="/process/process10.png"
                alt="proces10"
                width={70}
                height={70}
                className="hover:scale-110 duration-700"
              />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-6 shadow-md shadow-black bg-base-100  rounded-box w-52"
            >
              <p className="font-bold tracking-wider">{consularContent.m10}</p>
              <p className="tracking-wider">{consularContent.p10}</p>
            </ul>
          </div>
        </li>
        {/* 11 */}
        <li className="step "></li>
        {/* 12 */}
        <li className="step "></li>
        {/* 13  */}
        <li className="step "></li>
        {/* 14  */}
        <li className="step "></li>
        {/* 15 content */}
        <li className="step step-secondary ">
          <div className="dropdown  dropdown-bottom  ">
            <label tabIndex={0} className=" m-1">
              <Image
                src="/process/process15.png"
                alt="proces15"
                width={70}
                height={70}
                className="hover:scale-110 duration-700 pb-2"
              />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-6 shadow-md shadow-black bg-base-100  rounded-box w-52"
            >
              <p className="font-bold tracking-wider">{consularContent.m15}</p>
              <p className="tracking-wider">{consularContent.p15}</p>
            </ul>
          </div>
        </li>
        {/* 16 content */}
        <li className="step step-secondary ">
          <div className="dropdown  dropdown-bottom  ">
            <label tabIndex={0} className=" m-1">
              <Interview className="mx-auto w-[50px] hover:scale-110 duration-700 " />
            </label>

            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-6 shadow-md shadow-black bg-base-100  rounded-box w-52"
            >
              <p className="font-bold tracking-wider">{consularContent.m16} </p>
              <p className="tracking-wider">{consularContent.p16}</p>
            </ul>
          </div>
        </li>
        {/* 17 content  */}
        <li className="step step-secondary ">
          <div className="dropdown  dropdown-bottom dropdown-end  ">
            <label tabIndex={0} className=" m-1">
              <Image
                src="/process/process17.png"
                alt="proces17"
                width={65}
                height={65}
                className="hover:scale-110 duration-700 pb-2"
              />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-6 shadow-md shadow-black bg-base-100  rounded-box w-52"
            >
              <p className="font-bold tracking-wider">{consularContent.m17}</p>
              <p className="tracking-wider">{consularContent.p17}</p>
            </ul>
          </div>
        </li>
        {/* 18 content */}
        <li className="step step-secondary ">
          <div className="dropdown  dropdown-bottom dropdown-end ">
            <label tabIndex={0} className=" m-1">
              <Image
                src="/process/process14.png"
                alt="proces18"
                width={70}
                height={70}
                className="hover:scale-110 duration-700 pb-2"
              />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-6 shadow-md shadow-black bg-base-100  rounded-box w-52"
            >
              <p className="font-bold tracking-wider">{consularContent.m18} </p>
              <p className="tracking-wider">{consularContent.p18}</p>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CHorizontalProcess;
