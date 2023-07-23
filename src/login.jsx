import "./index.css";

/* eslint-disable react/prop-types */
export default function Login({ isLogged, onClick }) {
  return (
    <div>
      <button onClick={onClick} className={"button"}>
        Siguiente pagina
      </button>
    </div>
  );
}
