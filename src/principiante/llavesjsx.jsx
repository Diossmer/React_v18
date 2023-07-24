import "./Principiante.css";

export default function Llaves() {
  return (
    <>
      <h1>JavaScript en JSX con llaves</h1>
      <p>
        JSX te permite escribir marcas similares a HTML dentro de un archivo JavaScript, manteniendo
        la lógica de renderizado y el contenido en el mismo lugar. A veces vas a querer agregar un
        poco de lógica JavaScript o hacer referencia a una propiedad dinámica dentro de ese marcado.
        En esta situación, puedes usar llaves en tu JSX para abrir una ventana a JavaScript.
      </p>
      <h3 id="strings">Pasando strings con comillas</h3>
      <p>Cuando desees pasar un atributo string a JSX, lo pones entre comillas simples o dobles:</p>
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
          <span className="white">=</span>
          <span className="orange">&quot;word&quot;</span> <span className="celeste">src</span>
          <span className="white">=</span>
          <span className="orange">&quot;https://imgur.com&quot;</span>{" "}
          <span className="celeste">alt</span>
          <span className="white">=</span>
          <span className="orange">&quot;imgur&quot;</span> /&gt;
          {"\n    "}
          &lt;/<span className="blue"></span>&gt;
          {"\n  "}
          <span className={"yellow"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>
        </code>
      </pre>
      <p>
        Aquí, <span className={"shadow"}>&quot;https://imgur.com&quot;</span> y{" "}
        <span className={"shadow"}>&quot;imgur&quot;</span> están siendo pasados como strings.
      </p>
      <p>
        Pero, ¿qué sucede si quieres especificar dinámicamente el texto{" "}
        <span className={"shadow"}>src</span> o <span className={"shadow"}>alt</span>? Puedes{" "}
        <b>
          usar un valor de JavaScript reemplazando las comillas de apertura{" "}
          <span className={"shadow"}>&quot;</span> y de cierre{" "}
          <span className={"shadow"}>&quot;</span> con las llaves de apertura{" "}
          <span className={"shadow"}>&#123;</span> y de cierre{" "}
          <span className={"shadow"}>&#125;</span>
        </b>
        :
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
          <span className="blue">const</span> <span className="celeste">books</span>
          <span className="white">=</span> <span className="yellow">&#123;</span>
          {"\n    "}
          <span className="celeste">author</span>
          <span className="white">:</span>
          <span className="orange">&quot;https://imgur.com&quot;</span>,{"\n    "}
          <span className="celeste">description</span>
          <span className="white">:</span>
          <span className="orange">&quot;imgur&quot;</span>
          {"\n  "}
          <span className="yellow">&#125;</span>
          {"\n  "}
          <span className={"pink"}>return </span>
          <span className={"yellow"}>&#40;</span>
          {"\n    "}
          &lt;<span className="blue"></span>&gt;
          {"\n      "}
          &lt;<span className="blue">img</span> <span className="celeste">className</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="orange">&quot;word&quot;</span>
          <span className="blue">&#125;</span> <span className="celeste">src</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="celeste">books.author</span>
          <span className="blue">&#125;</span> <span className="celeste">alt</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="celeste">books.description</span>
          <span className="blue">&#125;</span> /&gt;
          {"\n    "}
          &lt;/<span className="blue"></span>&gt;
          {"\n  "}
          <span className={"yellow"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>
        </code>
      </pre>
      <p>
        Observa la diferencia entre <span className={"shadow"}>className=&quot;avatar&quot;</span>,
        que especifica un nombre de clase CSS <span className={"shadow"}>&quot;avatar&quot;</span>{" "}
        que hace que la imagen sea redonda, y{" "}
        <span className={"shadow"}>src=&#123;avatar&#125;</span> que lee el valor de una variable
        JavaScript llamada <span className={"shadow"}>avatar</span>. ¡Eso es porque las llaves te
        permiten trabajar con JavaScript allí mismo en tu marcado!.
      </p>
      <h3 id="usedKey">Usando llaves: Una ventana al mundo de JavaScript</h3>
      <p>
        JSX es una forma especial de escribir JavaScript. Eso significa que es posible utilizar
        JavaScript dentro de él, con llaves <span className={"shadow"}>&#123; &#125;</span>. El
        ejemplo siguiente declara primero un nombre para el científico,{" "}
        <span className={"shadow"}>name</span>, y luego lo inserta con llaves dentro de{" "}
        <span className={"shadow"}>&lt;h1&gt;</span>:
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
          {"\n\n  "}
          <span className="blue">const</span> <span className="celeste">books</span>
          <span className="white">=</span> <span className="blue">&#91;</span>
          <span className="yellow">&#123;</span>
          <span className="celeste">name</span>
          <span className="white">:</span>
          <span className="orange">&quot;imgur&quot;</span>
          <span className="yellow">&#125;</span>,<span className="yellow">&#123;</span>
          <span className="celeste">name</span>
          <span className="white">:</span>
          <span className="orange">&quot;imgur2&quot;</span>
          <span className="yellow">&#125;</span>
          <span className="blue">&#93;</span>;{"\n\n  "}
          <span className={"pink"}>return </span>
          <span className={"yellow"}>&#40;</span>
          {"\n    "}
          &lt;<span className="blue"></span>&gt;
          {"\n      "}
          &lt;<span className="blue">h1</span>&gt;{"\n        "}
          <span className="white">El libro tiene dos partes: </span>
          <span className="blue">&#123;</span>
          <span className="celeste">
            books<span className="yellow">&#91;</span>
            <span className="white">0</span>
            <span className="yellow">&#93;</span>.name
          </span>
          <span className="blue">&#125;</span> <span className="blue">&#123;</span>
          <span className="celeste">
            books<span className="yellow">&#91;</span>
            <span className="white">1</span>
            <span className="yellow">&#93;</span>.name
          </span>
          <span className="blue">&#125;</span>
          {"\n      "}
          &lt;/<span className="blue">h1</span>&gt;
          {"\n    "}
          &lt;/<span className="blue"></span>&gt;
          {"\n  "}
          <span className={"yellow"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>
        </code>
      </pre>
    </>
  );
}
