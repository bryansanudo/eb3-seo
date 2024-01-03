import React from "react";

const HeroAbout = ({ language }) => {
  const about = {
    en: {
      h1: "About Us",
    },
    es: {
      h1: "Acerca de",
    },
    por: {
      h1: "Sobre nós",
    },
    fr: {
      h1: "À propos de nous",
    },
  };
  const aboutContent = about[language];
  return (
    <>
      <div
        className="hero min-h-[60vh] "
        style={{
          backgroundImage:
            "url(https://static.wixstatic.com/media/11062b_5f2e403e4cfa46e29ca37202af7f6f12~mv2.jpg/v1/fill/w_1903,h_549,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_5f2e403e4cfa46e29ca37202af7f6f12~mv2.jpg)",
        }}
      >
        <div className="hero-overlay bg-black opacity-50" />
        <div className="hero-content text-center text-white">
          <div className="max-w-5xl">
            <h1 className="my-5 lg:text-5xl md:text-3xl text-2xl font-bold tracking-wider">
              {aboutContent.h1}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroAbout;
