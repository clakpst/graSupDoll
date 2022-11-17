import React from "react";

export default function ComponenteMultiple(props) {
  const calculaDolar = () => {
    if (!isNaN(props.datos1) && props.datos1 !== "") {
      return props.datos1 * 2;
    } else return "";
  };
  const calcularGrados = () => {
    if (!isNaN(props.datos1) && props.datos1 !== "") {
      return (9 / 5) * props.datos1 + 32;
    } else return "";
  };

  const calcularSuperficie = () => {
    if (
      !isNaN(props.datos1) &&
      props.datos1 !== "" &&
      !isNaN(props.datos2) &&
      props.datos2 !== ""
    ) {
      return props.datos1 * props.datos2;
    } else return "";
  };

  return (
    <>
      <div>{props.opcion === 1 ? "Dolares:" + calculaDolar() : ""}</div>
      <div>{props.opcion === 2 ? "Grados:" + calcularGrados() : ""}</div>
      <div>
        {props.opcion === 3 ? "Superficie:" + calcularSuperficie() : ""}
      </div>
    </>
  );
}
