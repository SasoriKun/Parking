import React from "react";

const Formulario = () => {
  return (
    <>
      <h2>Id ticket</h2>
      <input type="text" placeholder="Ingrese su Id del ticket" />
      <br />
      <br />
      <input type="button" value="Ticket" />
    </>
  );
};

const idTicket = () => {
  return (
    <>
      <h2>Id Ticket</h2>
      <input type="text" name="idT" disabled></input>
      <h2>Propietario del vehiculo</h2>
      <input type="text" name="nombre" disabled></input>
      <h2>Placa vehiculo</h2>
      <input type="text" name="pVehiT" disabled></input>
      <h2>Tipo de vehiculo</h2>
      <input type="text" name="tVehiT" disabled></input>
      <h2>Total a pagar</h2>
      <input type="text" name="tPagar" disabled></input>
      <br />
      <br />
      <input type="button" value="Calcular" />
    </>
  );
};

export { Formulario, idTicket };
