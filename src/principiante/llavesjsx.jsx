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
        Observa la diferencia entre <span className={"shadow"}>className=&quot;word&quot;</span>,
        que especifica un nombre de clase CSS <span className={"shadow"}>&quot;word&quot;</span> que
        hace que la imagen sea redonda, y{" "}
        <span className={"shadow"}>src=&#123;books.author&#125;</span> que lee el valor de una
        variable dentro del objeto JavaScript llamada <span className={"shadow"}>books.author</span>
        . ¡Eso es porque las llaves te permiten trabajar con JavaScript allí mismo en tu marcado!.
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
          {"\n  "}
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
          <span className="blue">&#93;</span>;{"\n "}
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
          <span className="blue">&#125;</span> y <span className="blue">&#123;</span>
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
      <p>
        Intenta cambiar el valor de name de <span className={"shadow"}>&#39;imgur&#39;</span> a{" "}
        <span className={"shadow"}>&#39;Hedy Lamarr&#39;</span>. ¿Ves cómo cambia la partes del
        nombre de los libros?
      </p>
      <p>
        Cualquier expresión JavaScript funcionará entre llaves, incluidas las llamadas a funciones
        como formatDate&#40;&#41;:
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
          <span className={"blue"}>const </span>
          <span className={"celeste"}>today </span>
          <span className={"white"}>=</span> <span className={"blue"}>new</span>{" "}
          <span className={"orange"}>Date</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"yellow"}>&#41;</span>;{"\n\n"}
        </code>
        <code>
          <span className={"blue"}>function </span>
          <span className={"orange"}>formatDate</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"celeste"}>date</span>
          <span className={"yellow"}>&#41;</span>
          <span className={"yellow"}> &#123;</span>
          <span className={"pink"}>return </span>
          <span className={"blue"}>new</span> <span className={"green"}>Intl</span>
          <span className={"white"}>.</span>
          <span className={"green"}>DateTimeFormat</span>
          <span className={"pink"}>&#40;</span>
          <span className={"orange"}>&quot;es-Es&quot;</span>,{"\n  "}
          <span className={"blue"}>&#123;</span>
          <span className={"celeste"}>weekday</span>
          <span className={"celeste"}>:</span>
          <span className={"orange"}>&#39;long&#39;</span>
          <span className={"blue"}>&#125;</span>
          <span className={"pink"}>&#41;</span>
          <span className={"white"}>.</span>
          <span className={"yellow"}>format</span>
          <span className={"pink"}>&#40;</span>
          <span className={"celeste"}>date</span>
          <span className={"pink"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>
          {"\n\n"}
        </code>
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
          &lt;<span className="blue">h1</span>&gt;
          <span className="white">Dia pendiente para el </span>
          <span className="blue">&#123;</span>
          <span className={"orange"}>formatDate</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"celeste"}>today</span>
          <span className={"yellow"}>&#41;</span>
          <span className="blue">&#125;</span>
          &lt;/<span className="blue">h1</span>&gt;
          {"\n  "}
          <span className={"yellow"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>
        </code>
      </pre>
      <h3>Dónde usar llaves</h3>
      <p>Solo puedes usar llaves de dos maneras dentro de JSX:</p>
      <ol type="1" start={"1"}>
        <li>
          Como texto directamente dentro de una etiqueta JSX:{" "}
          <span className={"shadow"}>
            &lt;h1&gt;Dia pendiente para el &#123;name&#125;&lt;/h1&gt;
          </span>{" "}
          funcionará, pero{" "}
          <span className={"shadow"}>
            &lt;&#123;tag&#125;&gt;Dia pendiente para el author: Gregorio Y.
            Zara&lt;/&#123;tag&#125;&gt;
          </span>{" "}
          no lo hará.
        </li>
        <li>
          Como atributos inmediatamente después del signo <span className={"shadow"}>=</span>:{" "}
          <span className={"shadow"}>src=&#123;Book&#125;</span> leerá la variable{" "}
          <span className={"shadow"}>Book</span>, pero{" "}
          <span className={"shadow"}>src=&quot;&#123;Book&#125;&quot;</span> pasará el string
          <span className={"shadow"}>&quot;&#123;Book&#125;&quot;</span>.
        </li>
      </ol>
      <h3 id="llavesdoubles">Usando «llaves dobles»: CSS y otros objetos en JSX</h3>
      <p>
        Además de strings, números, y otras expresiones de JavaScript, incluso puedes pasar objetos
        en JSX. Los objetos también se indican con llaves, como{" "}
        <span className={"shadow"}>&#123; name: &quot;Hedy Lamarr&quot;, inventions: 5 &#125;</span>
        . Por lo tanto, para pasar un objeto de JavaScript en JSX, debes envolver el objeto en otro
        par de llaves:{" "}
        <span className={"shadow"}>
          person=&#123;&#123; name: &quot;Hedy Lamarr&quot;, inventions: 5 &#125;&#125;
        </span>
        .
      </p>
      <p>
        Puedes ver esto con estilos en línea CSS, en JSX. React no requiere que uses estilos en
        línea &#40;las clases CSS funcionan muy bien para la mayoría de los casos&#41;. Pero cuando
        necesitas un estilo en línea, pasas un objeto al atributo{" "}
        <span className={"shadow"}>style</span>:
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
          &lt;&gt;
          {"\n      "}
          &lt;<span className="blue">ul</span> <span className="celeste">style</span>
          <span className="white">=</span>
          <span className="blue">&#123;&#123;</span>
          <span className="celeste">backgroundColor</span>
          <span className="white">:</span>
          <span className="orange">&#39;black&#39;</span>,<span className="celeste">color</span>
          <span className="white">:</span>
          <span className="orange">&#39;pink&#39;</span>
          <span className="blue">&#125;&#125;</span>
          &gt;
          {"\n        "}
          &lt;<span className="blue">li</span>&gt;
          <span className="white">Mejorar el videoteléfono</span>
          &lt;/<span className="blue">li</span>&gt;
          {"\n        "}
          &lt;<span className="blue">li</span>&gt;
          <span className="white">Preparar clases de aeronáutica</span>
          &lt;/<span className="blue">li</span>&gt;
          {"\n        "}
          &lt;<span className="blue">li</span>&gt;
          <span className="white">Trabajar en el motor de alcohol</span>
          &lt;/<span className="blue">li</span>&gt;
          {"\n      "}
          &lt;/<span className="blue">ul</span>&gt;
          {"\n    "}&lt;/&gt;
          {"\n  "}
          <span className={"yellow"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>
        </code>
      </pre>
      <p>
        Intenta cambiar los valores de <span className={"shadow"}>backgroundColor</span> y{" "}
        <span className={"shadow"}>color</span>.
      </p>
      <p>Realmente puedes ver el objeto JavaScript dentro de las llaves cuando lo escribes así:</p>
      <pre className="ide">
        <code>
          &lt;<span className="blue">ul</span> <span className="celeste">style</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          {"\n  "}
          <span className="blue">&#123;</span>
          {"\n    "}
          <span className="celeste">backgroundColor</span>
          <span className="white">:</span>
          <span className="orange">&#39;black&#39;</span>,{"\n    "}
          <span className="celeste">color</span>
          <span className="white">:</span>
          <span className="orange">&#39;pink&#39;</span>
          {"\n  "}
          <span className="blue">&#125;</span>
          {"\n"}
          <span className="blue">&#125;</span>
          &gt;
        </code>
      </pre>
      <p>
        La próxima vez que veas <span className={"shadow"}>&#123;&#123;</span> y{" "}
        <span className={"shadow"}>&#125;&#125;</span> en JSX, ¡sabe que no es más que un objeto
        dentro de las llaves JSX !
      </p>
      <div className="alert">
        <span>❗Atención</span>
        <span>
          Las propiedades de <span className={"shadow"}>style</span> en línea se escriben en
          camelCase. Por ejemplo, el HTML{" "}
          <span className={"shadow"}>&lt;ul style=&quot;background-color: black&quot;&gt;</span> se
          escribiría como{" "}
          <span className={"shadow"}>
            &lt;ul style= &#123;&#123; backgroundColor: &quot;black&quot; &#125;&#125;&gt;
          </span>{" "}
          en tu componente.
        </span>
      </div>
      <h3 id="masObjetos">Más diversión con objetos de JavaScript y llaves </h3>
      <p>
        Puedes mover varias expresiones a un objeto, y hacer referencia a ellas en tu JSX dentro de
        llaves:
      </p>
      <pre className="ide">
        <code>
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
          {"\n"}
        </code>
        <code>
          <span className="blue">const</span> <span className="celeste">person</span>
          <span className="white">=</span>
          <span className="yellow">&#123;</span>
          {"\n    "}
          <span className="celeste">name</span>
          <span className="white">:</span>
          <span className="orange">&#39;Gregorio Y. Zara&#39;</span>,{"\n    "}
          <span className="celeste">theme</span>
          <span className="white">:</span>
          <span className="blue">&#123;</span>
          {"\n      "}
          <span className="celeste">backgroundColor</span>
          <span className="white">:</span>
          <span className="orange">&#39;black&#39;</span>,{"\n      "}
          <span className="celeste">color</span>
          <span className="white">:</span>
          <span className="orange">&#39;pink&#39;</span>
          {"\n    "}
          <span className="blue">&#125;</span>
          {"\n  "}
          <span className="yellow">&#125;</span>;{"\n\n"}
        </code>
        <code>
          <span className={"pink"}>export </span>
          <span className={"pink"}>default </span>
          <span className={"blue"}>function </span>
          <span className={"yellow"}>TodoList</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"yellow"}>&#41;</span>
          <span className={"yellow"}> &#123;</span>
          {"\n  "}
          <span className={"pink"}>return </span>
          <span className={"yellow"}>&#40;</span>
          {"\n    "}
          &lt;<span className={"blue"}>div</span> <span className={"celeste"}>style</span>
          <span className={"white"}>=</span>
          <span className="blue">&#123;</span>
          <span className={"celeste"}>person</span>
          <span className={"yellow"}>.</span>
          <span className={"celeste"}>theme</span>
          <span className="blue">&#125;</span>
          &gt;
          {"\n      "}
        </code>
        <code>
          &lt;<span className="blue">h1</span>&gt;
          <span className="white">Tareas pendientes de </span>
          <span className="blue">&#123;</span>
          <span className={"celeste"}>person</span>
          <span className={"yellow"}>.</span>
          <span className={"celeste"}>name</span>
          <span className="blue">&#125;</span>
          &lt;/<span className="blue">h1</span>&gt;
          {"\n      "}
        </code>
        <code>
          &lt;<span className="blue">img</span> <span className="celeste">className</span>
          <span className="white">=</span>
          <span className="orange">&quot;word&quot;</span> <span className="celeste">src</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className={"celeste"}>books</span>
          <span className={"yellow"}>.</span>
          <span className={"celeste"}>author</span>
          <span className="blue">&#125;</span> <span className="celeste">alt</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className={"celeste"}>books</span>
          <span className={"yellow"}>.</span>
          <span className={"celeste"}>description</span>
          <span className="blue">&#125;</span> /&gt;
        </code>
        <code>
          {"\n      "}
          &lt;<span className="blue">ul</span>&gt;
          {"\n        "}
          &lt;<span className="blue">li</span>&gt;
          <span className="white">Mejorar el videoteléfono</span>
          &lt;/<span className="blue">li</span>&gt;
          {"\n        "}
          &lt;<span className="blue">li</span>&gt;
          <span className="white">Preparar clases de aeronáutica</span>
          &lt;/<span className="blue">li</span>&gt;
          {"\n        "}
          &lt;<span className="blue">li</span>&gt;
          <span className="white">Trabajar en el motor de alcohol</span>
          &lt;/<span className="blue">li</span>&gt;
          {"\n      "}
          &lt;/<span className="blue">ul</span>&gt;
          {"\n    "}&lt;/<span className={"pink"}>div</span>&gt;
          {"\n  "}
          <span className={"yellow"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>
        </code>
      </pre>
      <p>
        En este ejemplo, el objeto JavaScript <span className={"shadow"}>person</span> contiene un
        string <span className={"shadow"}>name</span> y un objeto{" "}
        <span className={"shadow"}>theme</span>:
      </p>
      <pre className="ide">
        <code>
          <span className="blue">const</span> <span className="celeste">person</span>
          <span className="white">=</span>
          <span className="yellow">&#123;</span>
          {"\n    "}
          <span className="celeste">name</span>
          <span className="white">:</span>
          <span className="orange">&#39;Gregorio Y. Zara&#39;</span>,{"\n    "}
          <span className="celeste">theme</span>
          <span className="white">:</span>
          <span className="blue">&#123;</span>
          {"\n      "}
          <span className="celeste">backgroundColor</span>
          <span className="white">:</span>
          <span className="orange">&#39;black&#39;</span>,{"\n      "}
          <span className="celeste">color</span>
          <span className="white">:</span>
          <span className="orange">&#39;pink&#39;</span>
          {"\n    "}
          <span className="blue">&#125;</span>
          {"\n  "}
          <span className="yellow">&#125;</span>;
        </code>
      </pre>
      <p>
        El componente puede usar estos valores de <span className={"shadow"}>person</span> así:
      </p>
      <pre className="ide">
        <code>
          &lt;<span className={"blue"}>div</span> <span className={"celeste"}>style</span>
          <span className={"white"}>=</span>
          <span className="blue">&#123;</span>
          <span className={"celeste"}>person</span>
          <span className={"yellow"}>.</span>
          <span className={"blue"}>theme</span>
          <span className="blue">&#125;</span>
          &gt;
          {"\n  "}
        </code>
        <code>
          &lt;<span className="blue">h1</span>&gt;
          <span className="white">Tareas pendientes de </span>
          <span className="blue">&#123;</span>
          <span className={"celeste"}>person</span>
          <span className={"yellow"}>.</span>
          <span className={"blue"}>name</span>
          <span className="blue">&#125;</span>
          &lt;/<span className="blue">h1</span>&gt;
        </code>
      </pre>
      <p>
        JSX es muy mínimo como lenguaje de plantillas porque te permite organizar datos y lógica
        usando JavaScript.
      </p>
    </>
  );
}
