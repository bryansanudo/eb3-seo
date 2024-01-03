import React from "react";

const HeroServices = ({ language }) => {
  const services = {
    en: {
      h1: "Services",
    },
    es: {
      h1: "Servicios",
    },
    por: {
      h1: "Serviços",
    },
    fr: {
      h1: "Services",
    },
  };
  const servicesContent = services[language];
  return (
    <div
      className="hero min-h-[60vh] "
      style={{
        backgroundImage:
          "url(https://static.wixstatic.com/media/11062b_295bd793bed843b6ade312eaa41c5b81~mv2.jpg/v1/fill/w_1903,h_550,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_295bd793bed843b6ade312eaa41c5b81~mv2.jpg)",
      }}
    >
      <div className="hero-overlay bg-black opacity-50" />
      <div className="hero-content text-center text-white">
        <div className="max-w-5xl">
          <h2 className="my-5 lg:text-5xl md:text-3xl text-2xl font-bold tracking-wider">
            {servicesContent.h1}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroServices;
