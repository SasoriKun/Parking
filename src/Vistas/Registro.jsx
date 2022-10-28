import React, { useState } from "react";

const Registro = ({onChangeData}) => {
  const [data, setdata] = useState({ tipo: "Automovil" });

  const validar = () => {
    const dataSend = {
      ...data,
      fecha: new Date()
    }
    console.log("Datos a enviar ", dataSend);
    onChangeData(dataSend)
    setdata({tipo:"Automovil"})
  };

  return (
    <>
      <h2>Nombre del propietario</h2>
      <input value={data?.nombre}
        type="text"
        placeholder="Ingrese su nombre"
        onChange={(e) => {
          console.log(e.target.value);
          setdata({
            ...data,
            nombre: e.target.value,
          });
        }}
      />
      <br />
      <h2>Placa vehiculo</h2>
      <input
        value={data?.placa}
        type="text"
        placeholder="Ingrese la placa del vehiculo"
        onChange={(e) => {
          console.log(e.target.value);
          setdata({
            ...data,
            placa: e.target.value,
          });
        }}
      />
      <br />
      <h2>Tipo de vehiculo</h2>
      <select
      value={data.tipo}
        name="TipoV"
        onChange={(e) => {
          console.log(e.target.value);
          setdata({
            ...data,
            tipo: e.target.value,
          });
        }}
      >
        <option value="Automovil"> Automovil </option>
        <option value="Motocicleta"> Motocicleta </option>
      </select>
      <br />
      <br />
      <input type="button" value="Registrar" onClick={validar} />
    </>
  );
};

const Validacion = ({data}) => {
  console.log("llego ", data) 
    return (
      <>
        <h2>Id</h2>
        <input type="text" name="idV" disabled></input>
        <h2>Nombre del usuario</h2>
        <input type="text" name="nombreV" disabled value={data?.nombre}></input>
        <h2>Placa vehiculo</h2>
        <input type="text" name="pVehi" disabled value={data?.placa}></input>
        <h2>Tipo de vehiculo</h2>
        <input type="text" name="tVehi" disabled value={data?.tipo}></input>
        <h2>Fecha</h2>
        <input type="text" name="fechaV" disabled value={data?.fecha}></input>
        <br />
        <br />
        <button>Continuar</button>
      </> 
    );
};

export { Registro, Validacion };
