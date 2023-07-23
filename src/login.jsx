import "./index.css";

/* eslint-disable react/prop-types */
export default function Login({ onClick }) {
  return (
    <div>
      <ul>
        <li className="button">
          <a href="https://es.react.dev/learn/describing-the-ui" target="__blank">
            Descubrir la UI
          </a>
        </li>
      </ul>
      <button onClick={onClick} className={"button"}>
        Siguiente pagina
      </button>
    </div>
  );
}
