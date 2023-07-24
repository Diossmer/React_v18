import "./Principiante.css";

const Marcado = () => {
  return (
    <>
      <h1>Escribir marcado con JSX</h1>
      <p>
        JSX es una extensión de sintaxis para JavaScript que permite escribir marcado similar a HTML
        dentro de una archivo JavaScript. Aunque hay otras formas de escribir componentes, la
        mayoría de los desarrolladores de React prefieren la concisión de JSX, y la mayoría de las
        bases de código lo usan.
      </p>
      <h3 id="convertirReglasjsx">Las Reglas de JSX</h3>
      <h4>1. Devolver un solo elemento raíz </h4>
      <p>
        Para devolver múltiples elementos de un componente, envuélvelos con una sola etiqueta
        principal.
      </p>
      <p>
        Por ejemplo, puedes usar un <span className="shadow">&lt;div&gt;</span>:
        <pre className="ide">
          <code>
            <span className={"pink"}>export </span>
            <span className={"pink"}>default </span>
            <span className={"blue"}>function </span>
            <span className={"yellow"}>App</span>
            <span className={"yellow"}>&#40;</span>
            <span className={"yellow"}>&#41;</span>
            <span className={"yellow"}> &#123;</span>
            {"\n  "}
            <span className={"pink"}>return </span>
            <span className={"yellow"}>&#40;</span>
            {"\n    "}
            &lt;&gt;
            {"\n      "}
            &lt;<span className={"green"}>Book </span>/&gt;
            {"\n      "}
            &lt;<span className={"green"}>Library </span>/&gt;
            {"\n    "}
            &lt;/&gt;
            {"\n  "}
            <span className={"yellow"}>&#41;</span>;{"\n"}
            <span className={"yellow"}>&#125;</span>
          </code>
        </pre>
      </p>
    </>
  );
};
export default Marcado;
