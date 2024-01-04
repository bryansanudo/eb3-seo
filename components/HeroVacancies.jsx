import React from "react";

const HeroVacancies = ({ language }) => {
  const vacancies = {
    en: {
      h1: "Vacancies",
    },
    es: {
      h1: "Vacantes",
    },
    por: {
      h1: "Vagas",
    },
    fr: {
      h1: "Postes Vacants",
    },
  };
  const vacanciesContent = vacancies[language];
  return (
    <>
      <div
        className="hero min-h-[60vh] "
        style={{
          backgroundImage:
            "url(https://static.wixstatic.com/media/11062b_e6ba464aa23c45dfade71108a76f78c7~mv2.jpg/v1/fill/w_1903,h_440,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_e6ba464aa23c45dfade71108a76f78c7~mv2.jpg)",
        }}
      >
        <div className="hero-overlay bg-black opacity-50" />
        <div className="hero-content text-center text-white">
          <div className="max-w-5xl">
            <h1 className="my-5 lg:text-5xl md:text-3xl text-2xl font-bold">
              {vacanciesContent.h1}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroVacancies;
