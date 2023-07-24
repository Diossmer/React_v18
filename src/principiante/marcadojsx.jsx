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
      </p>
      <pre className="ide">
        <code className="important">
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
          &lt;<span className="blue">div</span>&gt;
          {"\n      "}
          &lt;<span className="blue">ul</span>&gt;
          {"\n        "}
          &lt;<span className="blue">li</span>&gt;
          {"\n          "}
          <span className="white">...</span>
          {"\n        "}
          &lt;/<span className="blue">li</span>&gt;
          {"\n      "}
          &lt;/<span className="blue">ul</span>&gt;
          {"\n    "}
          &lt;/<span className="blue">div</span>&gt;
          {"\n  "}
          <span className={"yellow"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>
        </code>
      </pre>
      <p>
        Si no deseas agregar un <span className={"shadow"}>&lt;div&gt;</span> adicional a tu
        marcado, puedes escribir <span className={"shadow"}>&lt;&gt;</span> y{" "}
        <span className={"shadow"}>&lt;/&gt;</span> en su lugar:
      </p>
      <pre className="ide">
        <code className="important">
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
          &lt;<span className="blue"></span>&gt;
          {"\n      "}
          &lt;<span className="blue">ul</span>&gt;
          {"\n        "}
          &lt;<span className="blue">li</span>&gt;
          {"\n          "}
          <span className="white">...</span>
          {"\n        "}
          &lt;/<span className="blue">li</span>&gt;
          {"\n      "}
          &lt;/<span className="blue">ul</span>&gt;
          {"\n    "}
          &lt;/<span className="blue"></span>&gt;
          {"\n  "}
          <span className={"yellow"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>
        </code>
      </pre>
      <p>
        Esta etiqueta vacía se llama un <span className={"note"}>Fragmento</span>. Los Fragmentos te
        permiten agrupar cosas sin dejar ningún rastro en el árbol HTML del navegador.
      </p>
      <h4>2. Cierra todas las etiquetas</h4>
      <p>
        JSX requiere que las etiquetas se cierren explícitamente: las etiquetas de cierre automático
        como &lt;img&gt; deben convertirse en <span className={"note"}>&lt;img /&gt;</span>, y
        etiquetas envolventes como
        <span className={"note"}>&lt;li&gt;</span>naranjas deben convertirse como{" "}
        <span className={"note"}>&lt;li&gt;</span>naranjas
        <span className={"note"}>&lt;/li&gt;</span>.
      </p>
      <p>Así es como la imagen y los elementos de lista de Hedy Lamarr se ven cerrados:</p>
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
          &lt;<span className="blue"></span>&gt;
          {"\n      "}
          &lt;<span className="orange">ul</span>&gt;
          {"\n        "}
          &lt;<span className="orange">li</span>&gt;
          {"\n          "}
          <span className="white">...</span>
          {"\n        "}
          &lt;/<span className="orange">li</span>&gt;
          {"\n      "}
          &lt;/<span className="orange">ul</span>&gt;
          {"\n    "}
          &lt;/<span className="blue"></span>&gt;
          {"\n  "}
          <span className={"yellow"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>
        </code>
      </pre>
      <h4>3. ¡camelCase todo la mayoría de las cosas! </h4>
      <p>
        JSX se convierte en JavaScript y los atributos escritos en JSX se convierten en keys de
        objetos JavaScript. En tus propios componentes, a menudo vas a querer leer esos atributos en
        variables. Pero JavaScript tiene limitaciones en los nombres de variables. Por ejemplo, sus
        nombres no pueden contener guiones ni ser palabras reservadas como{" "}
        <span className={"shadow"}>class</span>.
      </p>
      <p>
        Por eso, en React, muchos atributos HTML y SVG están escritos en camelCase. Por ejemplo, en
        lugar de stroke-width usa strokeWidth. Dado que class es una palabra reservada, en React
        escribes className en su lugar, con el nombre de la{" "}
        <span className={"note"}>propiedad DOM correspondiente</span>:
      </p>
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
          &lt;<span className="blue"></span>&gt;
          {"\n      "}
          &lt;<span className="blue">img</span> <span className="celeste">className</span>
          <span className="white">=</span> <span className="orange">&quot;word&quot;</span> /&gt;
          {"\n    "}
          &lt;/<span className="blue"></span>&gt;
          {"\n  "}
          <span className={"yellow"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>
        </code>
      </pre>
      <p>
        Puedes{" "}
        <span className="note">
          encontrar todos estos atributos en la lista de props de los componentes DOM
        </span>
        . Si te equivocas en uno, no te preocupes, React imprimirá un mensaje con una posible
        corrección en la <span className="note">consola del navegador</span>.
      </p>
      <div className="alert">
        <span>❗Atención</span>
        <span>
          Por razones históricas, los atributos <span className="note">aria-*</span> y{" "}
          <span className="note">data-*</span> se escriben como en HTML, con guiones.
        </span>
      </div>
      <h4>Consejo profesional: usa un convertidor JSX</h4>
      <p>
        ¡Convertir todos estos atributos en el marcado existente puede ser tedioso! Recomendamos
        usar un <span className="note">convertidor</span> para traducir su HTML y SVG existente a
        JSX. Los convertidores son muy útiles en la práctica, pero aun así vale la pena entender lo
        que sucede así puedes escribir JSX cómodamente por tu cuenta.
      </p>
    </>
  );
};
export default Marcado;
