import "./Principiante.css";

const Descubrir = () => {
  return (
    <>
      <h1 id="descubrir">Describir la UI</h1>
      <p>
        React es una biblioteca de JavaScript para renderizar interfaces de usuario (UI por sus
        siglas en inglés). La UI se construye a partir de pequeñas unidades como botones, texto e
        imágenes. React te permite combinarlas en componentes reutilizables y anidables. Desde
        sitios web hasta aplicaciones de teléfonos, todo en la pantalla se puede descomponer en
        componentes. En este capítulo aprenderás a crear, adaptar y mostrar de forma condicional
        componentes de React.
      </p>
      <h3 id="firstComponent">Tu primer componente</h3>
      <p>
        Las aplicaciones de React se construyen a partir de piezas independientes de UI llamadas
        componentes. Un componente de React es una función de JavaScript a la que le puedes agregar
        un poco de marcado (markup). Los componentes pueden ser tan pequeños como un botón, o tan
        grandes como una página entera. Aquí vemos un componente Library que renderiza tres
        components:
      </p>
      <pre className="ide">
        <code>
          <span className={"pink"}>import </span>
          <span className={"yellow"}>&#123;</span>
          <span className={"celeste"}> React </span>
          <span className={"yellow"}>&#125;</span>
          <span className={"pink"}> from </span>
          <span className={"orange"}>&#39;react&#39;</span>;{"\n\n"}
        </code>
        <code>
          <span className={"blue"}>function </span>
          <span className={"yellow"}>MyComponent</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"yellow"}>&#123;</span>
          <span className={"blue"}>count</span>,<span className={"blue"}>onClick</span>
          <span className={"yellow"}>&#125;</span>
          <span className={"yellow"}>&#41;</span>
          <span className={"yellow"}> &#123;</span>
          {"\n  "}
          <span className={"pink"}>return </span>
          <span className={"yellow"}>&#40;</span>
          &lt;<span className={"blue"}>img</span> <span className={"celeste"}>src</span>
          <span className={"white"}>=</span>
          <span className={"blue"}>&#123;</span>
          <span className={"orange"}>&quot;https://imgur.com&quot;</span>
          <span className={"blue"}>&#125; </span>
          <span className={"celeste"}>alt</span>
          <span className={"white"}>=</span>
          <span className={"blue"}>&#123;</span>
          <span className={"orange"}>&quot;imgur&quot;</span>
          <span className={"blue"}>&#125; </span>
          /&gt;
          <span className={"yellow"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>
        </code>
        {"\n\n"}
        <code>
          <span className={"pink"}>export </span>
          <span className={"pink"}>default </span>
          <span className={"blue"}>function </span>
          <span className={"yellow"}>Library</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"yellow"}>&#41;</span>
          <span className={"yellow"}> &#123;</span>
          {"\n  "}
          <span className={"pink"}>return </span>
          <span className={"yellow"}>&#40;</span>
          {"\n    "}
          &lt;<span className={"blue"}>section</span>&gt;
          {"\n      "}&lt;<span className={"blue"}>h1</span>&gt;
          <span className="white">Libros increíbles</span>
          &lt;/<span className={"blue"}>h1</span>&gt;
          {"\n      "}
          &lt;<span className={"green"}>MyComponent </span>/&gt;
          {"\n      "}
          &lt;<span className={"green"}>MyComponent </span>/&gt;
          {"\n      "}
          &lt;<span className={"green"}>MyComponent </span>/&gt;
          {"\n    "}
          &lt;/<span className={"blue"}>section</span>&gt;{"\n  "}
          <span className={"yellow"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>
        </code>
      </pre>
      <p>
        En la medida en que tu proyecto crece, notarás que muchos de tus diseños se pueden componer
        mediante la reutilización de componentes que ya escribiste, acelerando el desarrollo.
        ¡Nuestra tabla de contenido de arriba podría añadirse a cualquier página con &lt;
        <span className={"green"}>MyComponent</span> /&gt;! Incluso puedes montar tu proyecto con
        los miles de componentes compartidos por la comunidad de código abierto de React como{" "}
        <span className="note">Chakra UI</span> y <span className="note">Material UI</span>.
      </p>
      <h2 id="costruir-componente">Como construir un componente</h2>
      <h3>paso1: Exportar el componente</h3>
      <p>
        El prefijo <span className="shadow">export default</span> es parte de la sintaxis{" "}
        <span className="note">estándar de Javascript</span> &#40;no es específico de React&#41;. Te
        permite marcar la función principal en un archivo para que luego puedas importarlas en otros
        archivos. &#40;¡Más sobre importar en{" "}
        <span className="note">Importar y exportar componentes</span>!&#41;.
      </p>
      <h3>Paso2: Define la función</h3>
      <p>
        Con <span className="shadow">function Book&#40;&#41; &#123; &#125;</span> defines una
        función con el nombre <span className="shadow">Book</span>.
      </p>
      <div className="alert">
        <span>❗Atención</span>
        <span>
          ¡Los componentes de React son funciones regulares de JavaScript, pero sus nombres{" "}
          <span className="shadow">deben comenzar con letra mayúscula</span> o no funcionarán!
        </span>
      </div>
      <h3>Paso3: Añade mercado</h3>
      <p>
        El componente retorna una etiqueta <span className="shadow">&lt;img /&gt;</span> con
        atributos <span className="shadow">src</span> y <span className="shadow">alt</span>.{" "}
        <span className="shadow">&lt;img /&gt;</span> se escribe como en HTML, ¡pero en realidad es
        JavaScript por detrás! Esta sintaxis se llama <span className="note">JSX</span>, y te
        permite incorporar marcado dentro de JavaScript.
      </p>
      <p>
        Las sentencias <span className="shadow">return</span> se pueden escribir todo en una línea,
        como en este componente:
      </p>
      <pre className="ide">
        <span className={"pink"}>return </span>
        &lt;<span className={"blue"}>img</span> <span className={"celeste"}>src</span>
        <span className={"white"}>=</span>
        <span className={"orange"}>&quot;https://imgur.com&quot;</span>
        <span className={"celeste"}>alt</span>
        <span className={"white"}>=</span>
        <span className={"orange"}>&quot;imgur&quot;</span>
        /&gt;;
      </pre>
      <p>
        Pero si tu marcado no está todo en la misma línea que la palabra clave{" "}
        <span className="shadow">return</span>, debes ponerlo dentro de paréntesis como en este
        ejemplo:
      </p>
      <pre className="ide">
        <span className={"pink"}>return </span>
        <span className={"yellow"}>&#40;</span>
        {"\n  "}&lt;<span className={"blue"}>div</span>&gt;
        {"\n    "}&lt;
        <span className={"blue"}>img</span> <span className={"celeste"}>src</span>
        <span className={"white"}>=</span>
        <span className={"orange"}>&quot;https://imgur.com&quot;</span>
        <span className={"celeste"}>alt</span>
        <span className={"white"}>=</span>
        <span className={"orange"}>&quot;imgur&quot;</span>
        /&gt;{"\n  "}
        &lt;/<span className={"blue"}>div</span>&gt;
        {"\n"}
        <span className={"yellow"}>&#41;</span>;
      </pre>
      <div className="alert">
        <span>❗Atención</span>
        <span>
          ¡Sin paréntesis, todo el código que está en las líneas posteriores al{" "}
          <span className="shadow">return</span> <span className="note">serán ignoradas</span>!
        </span>
      </div>
      <h3 id="usar-componente">Usar un componente</h3>
      <p>
        Ahora que has definido tu componente <span className="shadow">Book</span>, puedes anidarlo
        dentro de otros componentes. Por ejemplo, puedes exportar un componente{" "}
        <span className="shadow">Library</span> que utilice múltiples componentes
        <span className="shadow">Book</span>:
      </p>
      <pre className="ide">
        <code>
          <span className={"pink"}>import </span>
          <span className={"yellow"}>&#123;</span>
          <span className={"celeste"}> React </span>
          <span className={"yellow"}>&#125;</span>
          <span className={"pink"}> from </span>
          <span className={"orange"}>&#39;react&#39;</span>;{"\n\n"}
        </code>
        <code>
          <span className={"blue"}>function </span>
          <span className={"yellow"}>Book</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"yellow"}>&#123;</span>
          <span className={"blue"}>count</span>,<span className={"blue"}>onClick</span>
          <span className={"yellow"}>&#125;</span>
          <span className={"yellow"}>&#41;</span>
          <span className={"yellow"}> &#123;</span>
          {"\n  "}
          <span className={"pink"}>return </span>
          &lt;<span className={"blue"}>img</span> <span className={"celeste"}>src</span>
          <span className={"white"}>=</span>
          <span className={"blue"}>&#123;</span>
          <span className={"orange"}>&quot;https://imgur.com&quot;</span>
          <span className={"blue"}>&#125; </span>
          <span className={"celeste"}>alt</span>
          <span className={"white"}>=</span>
          <span className={"blue"}>&#123;</span>
          <span className={"orange"}>&quot;imgur&quot;</span>
          <span className={"blue"}>&#125; </span>
          /&gt;;{"\n"}
          <span className={"yellow"}>&#125;</span>
        </code>
        {"\n\n"}
        <code>
          <span className={"pink"}>export </span>
          <span className={"pink"}>default </span>
          <span className={"blue"}>function </span>
          <span className={"yellow"}>Library</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"yellow"}>&#41;</span>
          <span className={"yellow"}> &#123;</span>
          {"\n  "}
          <span className={"pink"}>return </span>
          <span className={"yellow"}>&#40;</span>
          {"\n    "}
          &lt;<span className={"blue"}>section</span>&gt;
          {"\n      "}&lt;<span className={"blue"}>h1</span>&gt;
          <span className="white">Libros increíbles</span>
          &lt;/<span className={"blue"}>h1</span>&gt;
          {"\n      "}
          &lt;<span className={"green"}>Book </span>/&gt;
          {"\n      "}
          &lt;<span className={"green"}>Book </span>/&gt;
          {"\n      "}
          &lt;<span className={"green"}>Book </span>/&gt;
          {"\n    "}
          &lt;/<span className={"blue"}>section</span>&gt;{"\n  "}
          <span className={"yellow"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>
        </code>
      </pre>
      <h3 id="anidar-componente">Anidar y organizar componentes</h3>
      <p>
        Los componentes son funciones regulares de JavaScript, por lo que puedes tener múltiples
        componentes en el mismo archivo. Esto es conveniente cuando los componentes son
        relativamente pequeños o están estrechamente relacionados entre sí. Si este archivo se torna
        abarrotado, siempre puedes mover <span className="shadow">Book</span> a un archivo separado.
        Aprenderás como hacer esto pronto en la{" "}
        <span className="note">página sobre importaciones</span>.
      </p>
      <p>
        Dado que el componente <span className="shadow">Book</span> se renderiza dentro de{" "}
        <span className="shadow"></span> &#40;¡incluso varias veces!&#41; podemos decir que{" "}
        <span className="shadow">Library</span> es un <b>componente padre</b>, que renderiza cada{" "}
        <span className="shadow">Book</span> como un «hijo». Este es la parte mágica de React:
        puedes definir un componente una vez, y luego usarlo en muchos lugares y tantas veces como
        quieras.
      </p>
      <div className="alert">
        <span>❗Atención</span>
        <span>
          Los componentes pueden renderizar otros componentes, pero{" "}
          <span className="shadow">nunca debes anidar sus definiciones</span>:
        </span>
        <pre className="ide">
          <code>
            <span className={"pink"}>export </span>
            <span className={"pink"}>default </span>
            <span className={"blue"}>function </span>
            <span className={"yellow"}>Library</span>
            <span className={"yellow"}>&#40;</span>
            <span className={"yellow"}>&#41;</span>
            <span className={"yellow"}> &#123;</span>
            {"\n  "}
            <span className={"greendark"}>&#47;&#47;</span>
            <span className={"greendark"}>❌</span>
            <span className={"greendark"}>
              ¡Nunca definas un componente dentro de otro componente!{" "}
            </span>
            {"\n  "}
            <span className={"blue"}>function </span>
            <span className={"yellow"}>Book</span>
            <span className={"yellow"}>&#40;</span>
            <span className={"yellow"}>&#41;</span>
            <span className={"yellow"}> &#123;</span>
            {"\n    "}
            <span className={"greendark"}>&#47;&#47;</span>
            <span className={"greendark"}>...</span>
            {"\n  "}
            <span className={"yellow"}>&#125;</span>
            {"\n  "}
            <span className={"greendark"}>&#47;&#47;</span>
            <span className={"greendark"}>...</span>
            {"\n"}
            <span className={"yellow"}>&#125;</span>
          </code>
        </pre>
        <p>
          El fragmento de código de arriba es
          <span className="note">muy lento y causa errores</span>. En su lugar, define cada
          componente en el primer nivel:
        </p>
        <pre className="ide">
          <span className={"pink"}>export </span>
          <span className={"pink"}>default </span>
          <span className={"blue"}>function </span>
          <span className={"yellow"}>Library</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"yellow"}>&#41;</span>
          <span className={"yellow"}> &#123;</span>
          {"\n  "}
          <span className={"greendark"}>&#47;&#47;</span>
          <span className={"greendark"}>...</span>
          {"\n"}
          <span className={"yellow"}>&#125;</span>
          {"\n"}
          <span className={"greendark"}>&#47;&#47;</span>
          <span className={"greendark"}>✅</span>
          <span className={"greendark"}>Declara los componentes en el primer nivel</span>
          {"\n"}
          <span className={"blue"}>function </span>
          <span className={"yellow"}>Book</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"yellow"}>&#41;</span>
          <span className={"yellow"}> &#123;</span>
          {"\n  "}
          <span className={"greendark"}>&#47;&#47;</span>
          <span className={"greendark"}>...</span>
          {"\n"}
          <span className={"yellow"}>&#125;</span>
        </pre>
        <p>
          Cuando un componente hijo necesita datos de su padre,
          <span className="note">
            pásalo por <b>props</b>
          </span>{" "}
          en lugar de anidar las definiciones.
        </p>
      </div>
    </>
  );
};
export default Descubrir;
