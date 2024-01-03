"use client";
import React from "react";

import { motion } from "framer-motion";
import { staggerContainer, slideIn, zoomIn } from "@/utils/motion";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { FaLinkedinIn, FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";

import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { styles } from "@/utils/styles";
const Footer = () => {
  const language = useSelector((state) => state.values.languages);
  const footer = {
    en: {
      p: "EB-3 Workforce Solutions is not a law firm and does not provide legal advice. Your communication with EB-3 Workforce Solutions does not create an attorney-client relationship and is not protected by attorney-client privilege.",
      h1: "QUICK LINKS",
      l1: "Home",
      l2: "About",
      l3: "Services",
      l4: "Resources",
      l5: "Contact",
      l6: "Vacancies",
      h2: "Contact Us",
      h3: "Legal",
      u1: "Copyright © 2023 All Right Reserved",
      u2: "Privacy Policy",
      u3: "Terms of Services",
    },
    es: {
      p: "EB-3 Workforce Solutions no es un bufete de abogados y no proporciona asesoramiento jurídico. Su comunicación con EB-3 Workforce Solutions no crea una relación abogado-cliente y no está protegida por el privilegio abogado-cliente",
      h1: "ENLACES RÁPIDOS",
      l1: "Inicio",
      l2: "Acerca de",
      l3: "Servicios",
      l4: "Recursos",
      l5: "Contacto",
      l6: "Vacantes",
      h2: "Contacto",
      h3: "Aviso legal",
      u1: "Copyright © 2023 Todos los derechos reservados",
      u2: "Política de Privacidad",
      u3: "Condiciones del servicio",
    },
    por: {
      p: "A EB-3 Workforce Solutions não é um escritório de advogados e não presta aconselhamento jurídico. A sua comunicação com a EB-3 Workforce Solutions não cria uma relação advogado-cliente e não está protegida pelo privilégio advogado-cliente.",
      h1: "LINKS RÁPIDOS",
      l1: "Início",
      l2: "Sobre",
      l3: "Serviços",
      l4: "Recursos",
      l5: "Contacto",
      l6: "Vagas",
      h2: "Contacte-nos",
      h3: "Legal",
      u1: "Direitos de autor © 2023 Todos os direitos reservados",
      u2: "Política de Privacidade",
      u3: "Termos de serviços",
    },
    fr: {
      p: "EB-3 Workforce Solutions n'est pas un cabinet d'avocats et ne fournit pas de conseils juridiques. Votre communication avec EB-3 Workforce Solutions ne crée pas de relation avocat-client et n'est pas protégée par le secret professionnel",
      h1: "LIENS RAPIDES",
      l1: "Accueil",
      l2: "A propos",
      l3: "Services",
      l4: "Ressources",
      l5: "Contact",
      l6: "Postes vacants",
      h2: "Nous contacter",
      h3: "Mentions légales",
      u1: "Copyright © 2023 Tous droits réservés",
      u2: "Politique de Confidentialité",
      u3: "Conditions d'utilisation",
    },
  };
  const footerContent = footer[language];

  const socials = [
    {
      id: 1,
      logo: <FaFacebookF />,
      link: "https://www.facebook.com/eb3wfs",
    },
    {
      id: 2,
      logo: <FaInstagram />,
      link: "https://www.instagram.com/eb3wfs/",
    },
    {
      id: 3,
      logo: <FaXTwitter />,
      link: "https://twitter.com/eb3wfs",
    },
    {
      id: 4,
      logo: <FaLinkedinIn />,
      link: "https://www.linkedin.com/company/eb3wfs",
    },
    {
      id: 5,
      logo: <FaTiktok />,
      link: "https://www.tiktok.com/@eb3wfs",
    },
    {
      id: 6,
      logo: <FaYoutube />,
      link: "https://www.youtube.com/channel/UCfxU5idccR3tODIifeTQevA",
    },
  ];

  return (
    <motion.div
    /* variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }} */
    >
      <motion.footer
        /* variants={slideIn("left", "tween", 0.2, 1)} */

        className="footer p-10 bg-base-200 text-base-content"
      >
        <aside>
          <Image
            src="/logo.png"
            width={300}
            height={300}
            alt="logo footer"
            className="  object-contain  "
          />
          <p className="tracking-wider text-left max-w-[550px]">
            {footerContent.p}
          </p>
          <div className="flex items-center w-full    gap-1  mt-6">
            {socials.map(({ id, logo, link }) => (
              <a key={id} href={link} target="_blank">
                <div
                  className={` h-[30px] w-[30px]  md:w-[44px] md:h-[44px] rounded-lg ${styles.flexCenter} hover:scale-105 group  duration-300 cursor-pointer bg-primary`}
                >
                  {/*                 <FaLinkedinIn className="dark:text-white text-2xl" /> */}
                  <span className="group-hover: duration-300 text-white text-lg md:text-2xl">
                    {logo}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </aside>

        {/*  <motion.nav variants={zoomIn(0, 1)}>
          <header className="footer-title text-black font-extrabold">
            {footerContent.h1}
          </header>
          <a className="link link-hover">{footerContent.l1}</a>
          <a className="link link-hover">{footerContent.l2}</a>
          <a className="link link-hover">{footerContent.l3}</a>
          <a className="link link-hover">{footerContent.l4}</a>
          <a className="link link-hover">{footerContent.l5}</a>
          <a className="link link-hover">{footerContent.l6}</a>
        </motion.nav> */}
        <motion.nav variants={zoomIn(0.5, 1)}>
          <header className="footer-title text-black font-extrabold">
            {footerContent.h2}
          </header>
          <p className="">+1(305) 564-1311</p>
          <p className="">recruiter@eb3wfs.com</p>
          <p className="">EB3WFS LLC</p>
          <p className="">777 Brickell Avenue Suite 500</p>
          <p className="">Miami, FL 33131</p>
        </motion.nav>
        <motion.nav variants={zoomIn(1, 1)}>
          <header className="footer-title text-black font-extrabold">
            {footerContent.h3}
          </header>
          <div className="">{footerContent.u1}</div>
          <Link href="/individuals/privacy-policy">
            <div className="link link-hover">{footerContent.u2}</div>
          </Link>
          <Link href="/individuals/terms-services">
            <div className="link link-hover">{footerContent.u3}</div>
          </Link>
        </motion.nav>
      </motion.footer>
    </motion.div>
  );
};

export default Footer;
