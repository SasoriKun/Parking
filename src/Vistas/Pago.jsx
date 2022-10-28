import React from "react";

const Pago = () => {
  return (
    <>
      <h2>Id Ticket</h2>
      <input type="text" placeholder="Ingrese su Id del ticket a pagar" />
      <h2>Dinero a depositar</h2>
      <input
        type="text"
        placeholder="Ingrese la cantidad de dinero solicitada"
      />
      <br />
      <br />
      <input type="button" value="Pagar" />
    </>
  );
};

export { Pago };
