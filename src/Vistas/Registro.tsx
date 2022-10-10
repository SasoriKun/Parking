import React from "react";

const Prueba = () => {
  return (
    <>
      <h2>Placa vehiculo</h2>
      <input type="text" placeholder="Ingrese la placa del vehiculo" />
      <br />
      <h2>Tipo de vehiculo</h2>
      <select name="TipoV">
        <option value="Automovil"> Automovil </option>
        <option value="Motocicleta"> Motocicleta </option>
      </select>
      <br />
      <br />
      <input type="button" value="Registrar" />
    </>
  );
};

export { Prueba };
