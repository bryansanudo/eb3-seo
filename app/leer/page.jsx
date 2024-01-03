"use client";

import React from "react";
import { useSelector } from "react-redux";

const LeerPage = () => {
  const miNombre = useSelector((state) => state.valores.nombre);
  return (
    <>
      <div>LeerPage</div>
      <h2>{miNombre}</h2>
    </>
  );
};

export default LeerPage;
