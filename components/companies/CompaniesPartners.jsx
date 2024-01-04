import React from "react";
import Image from "next/image";

import { styles } from "@/utils/styles";
const CompaniesPartners = ({ language }) => {
  const partners = {
    en: {
      title1: "Our Trusted Employer Sponsors",
    },
    es: {
      title1: "Nuestros empleadores patrocinadores de confianza",
    },
    por: {
      title1: "Os nossos patrocinadores de confiança",
    },
    fr: {
      title1: "Nos employeurs de confiance",
    },
  };
  const partnersContent = partners[language];

  return (
    <>
      <div className="container mx-auto ">
        <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto mt-10 ">
          <h1 className={`${styles.cTitleText} capitalize `}>
            {partnersContent.title1}
          </h1>
        </div>
        <div className="my-10 px-15 flex flex-wrap">
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center  xl:pb-10 pb-16 items-center px-6 md:px-0">
            <Image
              src="/partners/chula-logo.png"
              alt="chula logo"
              width={170}
              height={170}
            />
          </div>
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center  xl:pb-10 pb-16 items-center px-6 md:px-0">
            <Image
              src="/partners/lesters-logo.png"
              alt="lesters logo"
              width={130}
              height={130}
            />
          </div>
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center  xl:pb-10 pb-16 pt-4 items-center px-6 md:px-0">
            <Image
              src="/partners/stoughton-logo.png"
              alt="stoughton logo"
              width={250}
              height={250}
            />
          </div>
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center  xl:pb-10 pb-16 items-center px-6 md:px-0">
            <Image
              src="/partners/subway-logo.png"
              alt="subway logo"
              width={250}
              height={250}
            />
          </div>
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center  xl:pt-10 items-center px-6 md:px-0">
            <Image
              src="/partners/transportation-logo.png"
              alt="transportation logo"
              width={200}
              height={200}
            />
          </div>
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center  xl:pt-10 items-center px-6 md:px-0">
            <Image
              src="/partners/travelkuz-logo-bg.png"
              alt="travelkuz logo"
              width={250}
              height={250}
            />
          </div>
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 lg:pt-10 md:pt-2 pt-16 px-6 md:px-0">
            <Image
              src="/partners/wilderness-logo.png"
              alt="wilderness logo"
              width={200}
              height={200}
            />
          </div>
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center  xl:pt-10 lg:pt-10 md:pt-2 pt-16"></div>
        </div>
      </div>
    </>
  );
};

export default CompaniesPartners;
