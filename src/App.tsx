import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Registro, Validacion } from "./Vistas/Registro";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App fondo">
      <div>
        <Registro></Registro>
      </div>
      <div className="margin">
        <Validacion></Validacion>
      </div>
    </div>
  );
}

export default App;
