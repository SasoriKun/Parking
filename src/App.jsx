import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Registro, Validacion } from "./Vistas/Registro";
import { Formulario, IdTicket } from "./Vistas/Calculo";
import { Pago } from "./Vistas/Pago";

function App() {
  const [data, setData] = useState(null);

  return (
    <div>
      <div className="App fondo">
        <div>
          <Registro onChangeData = {(objData) => {
            setData(objData)
          }} ></Registro>
        </div>
        <div className="margin">
          <Validacion data={data} ></Validacion>
        </div>
      </div>
      <div>
        <Formulario></Formulario>
      </div>
      <div>
        <IdTicket></IdTicket>
      </div>
      <Pago></Pago>
    </div>
  );
}

export default App;
