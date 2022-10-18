import React from "react";

const Registro = () => {
  return (
    <>
      <h2>Nombre del propietario</h2>
      <input type="text" placeholder="Ingrese su nombre" />
      <br />
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
      <input type="button" value="Registrar" onClick={validar} />
    </>
  );
};

const Validacion = () => {
  return (
    <>
      <h2>Id</h2>
      <input type="text" name="idV" disabled></input>
      <h2>Placa vehiculo</h2>
      <input type="text" name="pVehi" disabled></input>
      <h2>Tipo de vehiculo</h2>
      <input type="text" name="tVehi" disabled></input>
      <br />
      <br />
      <button onClick={validar}>Continuar</button>
    </>
  );
};

function validar() {}

export { Registro, Validacion };
