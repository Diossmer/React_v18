/* eslint-disable react/prop-types */
import "./index.css";

export default function Login({ isLogged, onNext, onBack }) {
  return (
    <div>
      <button onClick={onBack} className={"button"}>
        Regresar pagina
      </button>
      <button onClick={onNext} className={"button"}>
        Siguiente pagina
      </button>
      <a href="https://es.react.dev/learn/describing-the-ui" target="__blank">
        🤽‍♀️ Descubrir la UI
      </a>
      <ul className={isLogged === 0 ? "show" : "hide"}>
        <li>
          <a href="#inicio">Inicio Rapido</a>
        </li>
        <li>
          <a href="#añadirEstilo">Añadir Estilos</a>
        </li>
        <li>
          <a href="#mostrarDato">Mostrar Datos</a>
        </li>
        <li>
          <a href="#renderCond">Renderizado condicional</a>
        </li>
        <li>
          <a href="#renderList">Renderizado de listas</a>
        </li>
        <li>
          <a href="#responEvent">Responder a eventos</a>
        </li>
        <li>
          <a href="#actualPantalla">Actualizar la pantalla</a>
        </li>
        <li>
          <a href="#usedHook">El uso de los Hooks</a>
        </li>
        <li>
          <a href="#usedHook">El uso de los Hooks</a>
        </li>
      </ul>
      <ul className={isLogged === 1 ? "show" : "hide"}>
        <li>
          <a href="#descubrir">Descubrir</a>
        </li>
        <li>
          <a href="#firstComponent">Tu primer componente</a>
        </li>
        <li>
          <a href="#costruir-componente">Costruir componente</a>
        </li>
        <li>
          <a href="#usar-componente">Usar componente</a>
        </li>
        <li>
          <a href="#anidar-componente">Anidar componente</a>
        </li>
      </ul>
      <ul className={isLogged === 2 ? "show" : "hide"}>
        <li>
          <a href="#archivo-componente">Exportar e importar un componente</a>
        </li>
        <li>
          <a href="#exportimportmultiple">
            Exportar e importar múltiples componentes del mismo archivo
          </a>
        </li>
      </ul>
      <ul className={isLogged === 3 ? "show" : "hide"}>
        <li>
          <a href="#convertirReglasjsx">Las Reglas de JSX</a>
        </li>
      </ul>
      <ul className={isLogged === 4 ? "show" : "hide"}>
        <li>
          <a href="#strings">Pasando strings con comillas</a>
        </li>
        <li>
          <a href="#usedKey">Usando llaves: Una ventana al mundo de JavaScript</a>
        </li>
        <li>
          <a href="#llavesdoubles">Usando «llaves dobles»: CSS y otros objetos en JSX</a>
        </li>
        <li>
          <a href="#masObjetos">Más diversión con objetos de JavaScript y llaves</a>
        </li>
      </ul>
      <ul className={isLogged === 5 ? "show" : "hide"}>
        <li>
          <a href="#props">Props conocidas</a>
        </li>
        <li>
          <a href="#asingValue">Asignar un valor predeterminado para una prop</a>
        </li>
        <li>
          <a href="#pasarchildrem">Pasar JSX como hijos</a>
        </li>
        <li>
          <a href="#masObjetos">Más diversión con objetos de JavaScript y llaves</a>
        </li>
      </ul>
    </div>
  );
}
