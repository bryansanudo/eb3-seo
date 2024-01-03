import React from "react";

const Divider = ({ language = "en" }) => {
  const divider = {
    en: {
      p1: "GET IN TOUCH TODAY!",
      p2: "AVAILABLE 24/7",
    },
    es: {
      p1: "PÓNGASE EN CONTACTO HOY MISMO",
      p2: "DISPONIBLE 24/7",
    },
    por: {
      p1: "ENTRE EM CONTACTO HOJE MESMO!",
      p2: "DISPONÍVEL 24/7",
    },
    fr: {
      p1: "CONTACTEZ-NOUS DÈS AUJOURD'HUI !",
      p2: "DISPONIBLE  24/7",
    },
  };
  const dividerContent = divider[language];

  return (
    <>
      <div className="md:text-3xl text-xl flex  flex-col md:flex-row items-center justify-center w-full bg-gradient-to-r from-primary to-gray-500 mt-8 ">
        <div className=" w-full md:py-8 py-4 flex items-center justify-center ">
          <p className="text-white font-bold">{dividerContent.p1}</p>
        </div>
        <div className=" w-full md:py-8 py-4 hover:scale-110 duration-500">
          <a href="tel:+13055641311">
            <p className="text-white font-bold">+1 (305) 564-1311</p>
            <p className="text-sm font-normal text-white">
              {dividerContent.p2}
            </p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Divider;
