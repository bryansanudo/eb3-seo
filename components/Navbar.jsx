"use client";

import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useSelector } from "react-redux";
import { savelanguage } from "@/store/slice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const language = useSelector((state) => state.values.languages);
  const dispatch = useDispatch();
  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const navbar = {
    en: {
      home: "home",
      about: "about",
      services: "services",
      resources: "resources",
      contact: "contact",
      vacancies: "vacancies",
      news: "news",
      language: "Language",
      looking: "Looking For Employees?",
    },
    es: {
      home: "Inicio",
      about: "acerca de",
      services: "servicios",
      resources: "recursos",
      contact: "contacto",
      vacancies: "vacantes",
      news: "noticias",
      language: "Idioma",
      looking: "¿Buscando Empleados?",
    },
    por: {
      home: "casa",
      about: "sobre",
      services: "serviços",
      resources: "recursos",
      contact: "contacto",
      vacancies: "vagas",
      news: "notícias",
      language: "língua",
      looking: "à procura de empregados?",
    },
    fr: {
      home: "Accueil",
      about: "A propos de",
      services: "Services",
      resources: "Ressources",
      contact: "Contact",
      vacancies: "Offres d'emploi",
      news: "nouvelles",
      language: "langue",
      looking: "à la recherche d'employés?",
    },
  };
  const navbarContent = navbar[language];

  const menu = {
    en: {
      en: "English",
      es: "Spanish",
      por: "Português",
      fr: "French",
    },
    es: {
      en: "Ingles",
      es: "Español",
      por: "Português",
      fr: "Frances",
    },
    por: {
      en: "Inglês",
      es: "Espanhol",
      por: "Português",
      fr: "Francês",
    },
    fr: {
      en: "Anglais",
      es: "Espagnol",
      por: "Português",
      fr: "Français",
    },
  };
  const menuContent = menu[language];

  /*   const activeLink = ({ isActive }) =>
    isActive
      ? " relative after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[2px] after:bg-primary"
      : ""; */

  const [isMenuShown, setIsMenuShown] = useState(false);

  const links = [
    {
      id: 1,
      link: "/",
      name: navbarContent.home,
    },
    {
      id: 2,
      link: "/about",
      name: navbarContent.about,
    },
    {
      id: 3,
      link: "/services",
      name: navbarContent.services,
    },
    {
      id: 5,
      link: "/resources",
      name: navbarContent.resources,
    },
    {
      id: 6,
      link: "/contact",
      name: navbarContent.contact,
    },
    {
      id: 7,
      link: "/vacancies",
      name: navbarContent.vacancies,
    },
    {
      id: 8,
      link: "/news",
      name: navbarContent.news,
    },
  ];

  const [dropdown, setDropdown] = useState(true);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  const closeMenu = () => {
    // Encuentra el elemento del menú de idiomas
    const dropdown = document.querySelector(".dropdown");

    if (dropdown) {
      // Elimina el atributo 'open' para cerrar el menú
      dropdown.removeAttribute("open");
    }
  };

  const en = () => {
    dispatch(savelanguage("en"));
    setDropdown(true);
  };

  const es = () => {
    dispatch(savelanguage("es"));
    setDropdown(true);
  };

  const por = () => {
    dispatch(savelanguage("por"));
    setDropdown(true);
  };

  const fr = () => {
    dispatch(savelanguage("fr"));
    setDropdown(true);
  };

  let languageIcon;
  let languageText;

  if (language === "en") {
    languageIcon = "/icons/en.png";
    languageText = "EN";
  } else if (language === "es") {
    languageIcon = "/icons/es.png";
    languageText = "ES";
  } else if (language === "por") {
    languageIcon = "/icons/por.png";
    languageText = "PT";
  } else if (language === "fr") {
    languageIcon = "/icons/fr.png";
    languageText = "FR";
  }

  return (
    <>
      <div className="fixed w-full h-24 bg-gray-400 text-white z-20">
        <div className="flex justify-between gap-[6px] items-center lg:mx-10   h-full">
          <Link href="/individuals/home">
            <Image
              src="/logo.png"
              alt="logo navbar"
              className="object-contain hidden lg:block"
              width={300}
              height={300}
              priority={true}
            />
          </Link>

          <div className="hidden lg:flex items-center mr-24 gap-20">
            <ul className="flex gap-6">
              {links.map(({ id, link, name }) => (
                <Link key={id} href={link}>
                  <li
                    onClick={() => handleLinkClick(link)}
                    className={`capitalize duration-300 hover:text-primary hover:scale-110 cursor-pointer ${
                      activeLink === link
                        ? "relative after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[2px] after:bg-primary"
                        : ""
                    }`}
                  >
                    {name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <div
            onClick={() => setIsMenuShown(!isMenuShown)}
            className="block lg:hidden cursor-pointer"
          >
            {isMenuShown ? <FaTimes size={22} /> : <FaBars size={22} />}
          </div>

          <Image
            src="/favicon.png"
            alt="es"
            className="object-contain lg:hidden flex "
            width={40}
            height={40}
          />
          <div className="flex items-center">
            <Link href="/companies">
              <button
                onClick={() => handleLinkClick("")}
                className="btn btn-secondary text-[12px] p-2 capitalize hover:scale-105 duration-500 mr-4 hover:bg-gradient-to-r hover:to-secondary hover:from-primary"
              >
                {navbarContent.looking}
              </button>
            </Link>

            <details className="dropdown dropdown-end ">
              <summary
                onClick={handleDropdown}
                className="uppercase font-bold flex  items-center justify-center gap-1 cursor-pointer"
              >
                {languageText}

                <Image src={languageIcon} alt="es" width={24} height={24} />
                {dropdown ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
              </summary>

              <ul className="flex flex-col items-start dropdown-content text-black  bg-base-100 rounded-box w-36 ">
                <div className="w-full">
                  <div
                    onClick={() => {
                      en();
                      closeMenu();
                    }}
                    className="flex items-center justify-start gap-4 hover:bg-primary rounded-box p-2 cursor-pointer"
                  >
                    <Image
                      src="/icons/en.png"
                      alt="es"
                      className="object-contain "
                      width={26}
                      height={26}
                    />
                    <button>English</button>
                  </div>
                </div>
                <div className="w-full">
                  <div
                    onClick={() => {
                      es();
                      closeMenu();
                    }}
                    className="flex items-center justify-start gap-4 hover:bg-primary rounded-box p-2 cursor-pointer"
                  >
                    <Image
                      src="/icons/es.png"
                      alt="es"
                      className="object-contain "
                      width={26}
                      height={26}
                    />
                    <button>Español</button>
                  </div>
                </div>
                <div className="w-full">
                  <div
                    onClick={() => {
                      por();
                      closeMenu();
                    }}
                    className="flex items-center justify-start gap-4 hover:bg-primary rounded-box p-2 cursor-pointer"
                  >
                    <Image
                      src="/icons/por.png"
                      alt="es"
                      className="object-contain "
                      width={26}
                      height={26}
                    />
                    <button>Português</button>
                  </div>
                </div>
                <div className="w-full">
                  <div
                    onClick={() => {
                      fr();
                      closeMenu();
                    }}
                    className="flex items-center justify-start gap-4 hover:bg-primary rounded-box p-2 cursor-pointer"
                  >
                    <Image
                      src="/icons/fr.png"
                      alt="es"
                      className="object-contain "
                      width={26}
                      height={26}
                    />
                    <button>Français</button>
                  </div>
                </div>
              </ul>
            </details>
          </div>
        </div>
      </div>
      <div
        className={`fixed w-full text-white z-10 left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 ${
          isMenuShown ? "top-16 rounded-b-2xl bg-gray-400 " : "top-[-100%]"
        }`}
      >
        <ul className="flex flex-col">
          {links.map(({ id, link, name }) => (
            <Link
              onClick={() => setIsMenuShown(!isMenuShown)}
              href={link}
              key={id}
            >
              <li
                onClick={() => handleLinkClick(link)}
                className={`px-4 capitalize text-left duration-300 hover:text-white hover:scale-110 cursor-pointer ${
                  activeLink === link ? "text-primary" : ""
                }`}
              >
                {name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
