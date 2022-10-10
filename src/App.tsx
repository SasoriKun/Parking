import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Prueba } from "./Vistas/Registro";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App fondo">
      <Prueba></Prueba>
    </div>
  );
}

export default App;
