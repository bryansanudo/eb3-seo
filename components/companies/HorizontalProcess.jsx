import React from "react";

import Interview from "@/components/icons/Interview";

import Image from "next/image";
const HorizontalProcess = ({ language }) => {
  const adjustment = {
    en: {
      m1: "Month 1",
      p1: "Labor Certification filed once employer obtains DOL prevailing wage",
      m6: "Month 6",
      p6: "Labor Certification Approved + Consular fees",
      m7: "Month 7",
      p7: "I-140 Filed, I-485 Filed, I-765 Filed",
      m8: "Month 8",
      p8: "I-140 Approved",
      m10: "Month 10",
      p10: "Employee can begin working for the employer sponsor",
      m13: "Month 13",
      p13: "I-485 Interview",
      m14: "Month 14",
      p14: "Green Card Issued",
    },
    es: {
      m1: "Mes 1",
      p1: "Certificación laboral presentada una vez que el empleador obtiene el salario prevaleciente del DOL",
      m6: "Mes 6",
      p6: "Certificación laboral aprobada + tasas consulares",
      m7: "Mes 7",
      p7: "I-140 presentado, I-485 presentado, I-765 presentado",
      m8: "Mes 8",
      p8: "I-140 Aprobado",
      m10: "Mes 10",
      p10: "El empleado puede empezar a trabajar para el empleador patrocinador",
      m13: "Mes 13",
      p13: "Entrevista I-485",
      m14: "Mes 14",
      p14: "Green Card expedida",
    },
    por: {
      m1: "Mês 1",
      p1: "Certificação de trabalho apresentada quando o empregador obtém o salário prevalecente do DOL",
      m6: "Mês 6",
      p6: "Certificação de Trabalho aprovada + taxas consulares",
      m7: "Mês 7",
      p7: "I-140 Arquivado, I-485 Arquivado, I-765 Arquivado",
      m8: "Mês 8",
      p8: "I-140 aprovado",
      m10: "Mês 10",
      p10: "O trabalhador pode começar a trabalhar para a entidade patronal patrocinadora",
      m13: "Mês 13",
      p13: "Entrevista I-485",
      m14: "Mês 14",
      p14: "Green Card emitida",
    },
    fr: {
      m1: "Mois 1",
      p1: "Labor Certification filed once employer obtains DOL prevailing wage",
      m6: "Mois 6",
      p6: "Labor Certification Approved + Consular fees",
      m7: "Mois 7",
      p7: "I-140 Filed, I-485 Filed, I-765 Filed",
      m8: "Mois 8",
      p8: "I-140 Approved",
      m10: "Mois 10",
      p10: "L'employé peut commencer à travailler pour l'employeur parrain",
      m13: "Mois 13",
      p13: "Entretien I-485",
      m14: "Mois 14",
      p14: "Carte verte délivrée",
    },
  };
  const adjustmentContent = adjustment[language];
  return (
    <div className="overflow-x-auto  flex items-center justify-center    ">
      <ul className="steps pb-52 w-full  ">
        {/* 1 content */}
        <li className="step step-secondary">
          <div className="dropdown dropdown-open dropdown-bottom   ">
            <label tabIndex={0} className=" m-1">
              <Image
                src="/process/process1.png"
                alt="Icon Labor Certification filed"
                width={50}
                height={50}
                className="mx-auto"
              />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-6 shadow-md shadow-black bg-base-100  rounded-box w-52"
            >
              <p className="tracking-wider font-bold">{adjustmentContent.m1}</p>
              <p className="tracking-wider">{adjustmentContent.p1}</p>
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
                alt="Icon Labor Certification Approved + Consular fees"
                width={65}
                height={65}
                className="hover:scale-110 duration-700"
              />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-6 shadow-md shadow-black bg-base-100  rounded-box w-52"
            >
              <p className="tracking-wider font-bold">{adjustmentContent.m6}</p>
              <p className="tracking-wider">{adjustmentContent.p6}</p>
            </ul>
          </div>
        </li>
        {/* 7 content */}
        <li className="step step-secondary">
          <div className="dropdown  dropdown-bottom   ">
            <label tabIndex={0} className=" m-1">
              <Image
                src="/process/process7.png"
                alt="Icon I-140 Filed, I-485 Filed, I-765 Filed"
                width={58}
                height={58}
                className="hover:scale-110 duration-700"
              />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-6 shadow-md shadow-black bg-base-100  rounded-box w-52"
            >
              <p className="tracking-wider font-bold">{adjustmentContent.m7}</p>
              <p className="tracking-wider">{adjustmentContent.p7}</p>
            </ul>
          </div>
        </li>
        {/* 8 content */}
        <li className="step step-secondary">
          <div className="dropdown  dropdown-bottom   ">
            <label tabIndex={0} className=" m-1">
              <Image
                src="/process/process8.png"
                alt="Icon I-140 Approved"
                width={62}
                height={62}
                className="hover:scale-110 duration-700"
              />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-6 shadow-md shadow-black bg-base-100  rounded-box w-52"
            >
              <p className="tracking-wider font-bold">{adjustmentContent.m8}</p>
              <p className="tracking-wider">{adjustmentContent.p8}</p>
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
                alt="Icon Employee can begin working for the employer sponsor"
                width={70}
                height={70}
                className="hover:scale-110 duration-700 pb-2"
              />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-6 shadow-md shadow-black bg-base-100  rounded-box w-52"
            >
              <p className="font-bold tracking-wider">
                {adjustmentContent.m10}{" "}
              </p>
              <p className="tracking-wider">{adjustmentContent.p10}</p>
            </ul>
          </div>
        </li>
        {/* 11 */}
        <li className="step "></li>
        {/* 12 */}
        <li className="step "></li>
        {/* 13 content */}
        <li className="step step-secondary">
          <div className="dropdown  dropdown-bottom   ">
            <label tabIndex={0} className=" m-1">
              <Interview className="mx-auto w-[50px] hover:scale-110 duration-700 " />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-6 shadow-md shadow-black bg-base-100  rounded-box w-52"
            >
              <p className="font-bold tracking-wider">
                {adjustmentContent.m13}
              </p>
              <p className="tracking-wider">{adjustmentContent.p13}</p>
            </ul>
          </div>
        </li>
        {/* 14 content */}
        <li className="step step-secondary">
          <div className="dropdown  dropdown-bottom   ">
            <label tabIndex={0} className=" m-1">
              <Image
                src="/process/process14.png"
                alt="Icon Green Card Issued"
                width={50}
                height={50}
                className="hover:scale-110 duration-700"
              />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-6 shadow-md shadow-black bg-base-100  rounded-box w-52"
            >
              <p className="font-bold tracking-wider">
                {adjustmentContent.m14}
              </p>
              <p className="tracking-wider">{adjustmentContent.p14}</p>
            </ul>
          </div>
        </li>
        {/* 15 */}
        <li className="step "></li>
        {/* 16 */}
        <li className="step "></li>
        {/* 17 */}
        <li className="step "></li>
        {/* 18 */}
        <li className="step "></li>
      </ul>
    </div>
  );
};

export default HorizontalProcess;
