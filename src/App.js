import React, { useState } from "react";
import ComponenteMultiple from "./components/ComponenteMultiple";
import "./styles.css";

export default function App() {
  const [datos1, setDatos1] = new useState();
  const [datos2, setDatos2] = new useState();
  return (
    <React.Fragment>
      <input type="text" onChange={(e) => setDatos1(e.target.value)} />
      <input type="text" onChange={(e) => setDatos2(e.target.value)} />
      <ComponenteMultiple opcion={1} datos1={datos1} datos2={datos2} />
      <ComponenteMultiple opcion={2} datos1={datos1} datos2={datos2} />
      <ComponenteMultiple opcion={3} datos1={datos1} datos2={datos2} />
    </React.Fragment>
  );
}
