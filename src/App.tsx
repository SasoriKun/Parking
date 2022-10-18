import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Registro, Validacion } from "./Vistas/Registro";
import { Formulario, idTicket } from "./Vistas/Calculo";
import { Pago } from "./Vistas/Pago";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="App fondo">
        <div>
          <Registro></Registro>
        </div>
        <div className="margin">
          <Validacion></Validacion>
        </div>
      </div>
      <div>
        <Formulario></Formulario>
      </div>
      <div>
        <idTicket></idTicket>
      </div>
    </div>
  );
}

export default App;
