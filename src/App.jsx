import reactLogo from "/react.svg";
import viteLogo from "./assets/vite.svg";
import mdn from "/mdn_web.svg";
import "./App.css";
import Inicio from "./Inicio/InicioRapido";
import { useState } from "react";
import Login from "./login";
import Descubrir from "./principiante/Descubrir";
import Union from "./principiante/ImportExport";
import Marcado from "./principiante/marcadojsx";
import Llaves from "./principiante/llavesjsx";
import Props from "./principiante/props";
import Condicional from "./principiante/condicional";

function App() {
  const [isLogged, setIsLogged] = useState(0);
  function Next() {
    setIsLogged(isLogged + 1);
  }
  function Back() {
    isLogged <= 0 ? setIsLogged(0) : setIsLogged(isLogged - 1);
  }
  return (
    <>
      <h1>Vite + React</h1>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining" target="_blank" rel="noreferrer">
          <img src={mdn} className="logo mdn" alt="Mdn logo"/>
        </a>
      </div>

      {`Pagina: ${isLogged === 0 ? "Inicio" : isLogged}`}
      <Login isLogged={isLogged} onNext={Next} onBack={Back} />
      <div className="container">
        {!isLogged && <Inicio />}
        {isLogged == 1 && <Descubrir />}
        {isLogged == 2 && <Union />}
        {isLogged == 3 && <Marcado />}
        {isLogged == 4 && <Llaves />}
        {isLogged == 5 && <Props />}
        {isLogged == 6 && <Condicional />}
      </div>

      <a href="#irArriba">
        <button>irArriba</button>
      </a>
    </>
  );
}

export default App;
