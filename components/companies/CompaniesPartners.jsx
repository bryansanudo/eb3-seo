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
      <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto mt-10 ">
        <h1 className={`${styles.cTitleText} capitalize `}>
          {partnersContent.title1}
        </h1>
      </div>

      <section className={`my-4 max-w-[1080px]  `}>
        <div className="flex overflow-hidden  group ">
          <div
            className="flex items-center justify-center space-x-16 animate-loop-scroll group-hover:paused"
            aria-hidden="true"
          >
            <Image
              src="/partners/chula-logo.png"
              alt="chula logo"
              width={170}
              height={170}
            />

            <Image
              src="/partners/lesters-logo.png"
              alt="lesters logo"
              width={130}
              height={130}
            />

            <Image
              src="/partners/stoughton-logo.png"
              alt="stoughton logo"
              width={250}
              height={250}
            />

            <Image
              src="/partners/subway-logo.png"
              alt="subway logo"
              width={250}
              height={250}
            />

            <Image
              src="/partners/transportation-logo.png"
              alt="transportation logo"
              width={200}
              height={200}
            />

            <Image
              src="/partners/travelkuz-logo-bg.png"
              alt="travelkuz logo"
              width={250}
              height={250}
            />

            <Image
              src="/partners/wilderness-logo.png"
              alt="wilderness logo"
              width={200}
              height={200}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CompaniesPartners;
