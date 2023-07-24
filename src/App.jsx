//import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Inicio from "./Inicio/InicioRapido";
import { useState } from "react";
import Login from "./login";
import Descubrir from "./principiante/Descubrir";
import Union from "./principiante/ImportExport";
import Marcado from "./principiante/marcadojsx";

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
      </div>

      {`Pagina: ${isLogged === 0 ? "Inicio" : isLogged}`}
      <Login isLogged={isLogged} onNext={Next} onBack={Back} />
      <div className="container">
        {!isLogged && <Inicio />}
        {isLogged == 1 && <Descubrir />}
        {isLogged == 2 && <Union />}
        {isLogged == 3 && <Marcado />}
      </div>
    </>
  );
}

export default App;
