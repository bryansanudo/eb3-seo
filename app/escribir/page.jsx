"use client";
import React from "react";
import { guardarnombre } from "@/store/slice";
import { useDispatch } from "react-redux";

const EscribirPage = () => {
  const nuevoValor = "hola";

  const dispatch = useDispatch();

  const modificar = () => {
    dispatch(guardarnombre("hola"));
  };

  return (
    <>
      <div>EscribirPage</div>
      <div onClick={modificar}>modificar</div>
    </>
  );
};

export default EscribirPage;
