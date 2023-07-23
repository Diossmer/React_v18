//import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Inicio from "./Inicio/InicioRapido";
import { useState } from "react";
import Login from "./login";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  function handleClick() {
    setIsLogged(!isLogged);
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
      <Login isLogged={isLogged} onClick={handleClick} />
      <div className="container">{isLogged && <Inicio />}</div>
    </>
  );
}

export default App;
