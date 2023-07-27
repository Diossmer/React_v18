import "./Principiante.css";

export default function Rederizado() {
  return (
    <>
      <h1>Renderizado de listas</h1>
      <p>
        A menudo querrás mostrar muchos componentes similares de una colección de datos. Puedes usar
        los <span className="note">métodos de array de JavaScript</span> para manipular un array de
        datos. En esta página, usarás <span className="shadow">filter()</span> y{" "}
        <span className="shadow">map()</span> con React para filtrar y transformar tu array de datos
        en un array de componentes.
      </p>
      <h3>Renderizar datos desde arrays</h3>
      <p>Digamos que tienes una lista de contenido.</p>
      <pre className="ide">
        <code>
          &lt;<span className="blue">ul</span>&gt;{"\n  "}
          &lt;<span className="blue">li</span>&gt;Creola Katherine Johnson: mathematician&lt;/
          <span className="blue">li</span>&gt;
          {"\n  "}
          &lt;<span className="blue">li</span>&gt;Mario José Molina-Pasquel Henríquez: chemist&lt;/
          <span className="blue">li</span>&gt;
          {"\n  "}
          &lt;<span className="blue">li</span>&gt;Mohammad Abdus Salam: physicist&lt;/
          <span className="blue">li</span>&gt;
          {"\n  "}
          &lt;<span className="blue">li</span>&gt;Percy Lavon Julian: chemist&lt;/
          <span className="blue">li</span>&gt;
          {"\n  "}
          &lt;<span className="blue">li</span>&gt;Subrahmanyan Chandrasekhar: astrophysicist&lt;/
          <span className="blue">li</span>&gt;
          {"\n"}
          &lt;/<span className="blue">ul</span>&gt;
        </code>
      </pre>
      <p>
        La única diferencia entre esos elementos de la lista es su contenido, sus datos. A menudo{" "}
        necesitarás mostrar muchas instancias del mismo componente usando diferentes datos cuando
        construyas interfaces: desde listas de comentarios a galerías de fotos de perfiles. En estas
        situaciones, puedes guardar estos datos en objetos de JavaScript y arrays, y usar métodos
        como <span className="shadow">map()</span> y <span className="shadow">filter()</span> para
        renderizar listas de componentes desde ellos.
      </p>
      <p>Aquí hay un corto ejemplo de como generar una lista de elementos de un array:</p>
      <ol type="1" start="1">
        <li>
          <b>Mueve</b> los datos en un array:
        </li>
        <pre className="ide">
          <code>
            <span className="blue">const</span> <span className="celeste">people</span>
            <span className="white">=</span>
            <span className="yellow">&#91;</span>
            {"\n"}
            <span className="orange">&#39;Creola Katherine Johnson: mathematician&#39;</span>,{"\n"}
            <span className="orange">&#39;Mario José Molina-Pasquel Henríquez: chemist&#39;</span>,
            {"\n"}
            <span className="orange">&#39;Mohammad Abdus Salam: physicist&#39;</span>,{"\n"}
            <span className="orange">&#39;Percy Lavon Julian: chemist&#39;</span>,{"\n"}
            <span className="orange">&#39;Subrahmanyan Chandrasekhar: astrophysicist&#39;</span>
            {"\n"}
            <span className="yellow">&#93;</span>;
          </code>
        </pre>
        <li>
          <b>Mapea</b> los miembros de people en un nuevo array de nodos JSX, listItems:
        </li>
        <pre className="ide">
          <code>
            <span className="blue">const</span> <span className="celeste">listItems</span>{" "}
            <span className="white">=</span> <span className="celeste">people</span>
            <span className="yellow">.</span>
            <span className="green">map</span>
            <span className="yellow">&#40;</span>
            <span className="celeste">person</span> <span className="white">=&gt;</span> &lt;
            <span className="blue">li</span>&gt;
            <span className="blue">&#123;</span>
            <span className="celeste">person</span>
            <span className="blue">&#125;</span>
            &lt;/<span className="blue">li</span>&gt;
            <span className="yellow">&#41;</span>;
          </code>
        </pre>
        <li>
          <b>Devuelve</b> listItems desde tu componente envuelto en un &lt;ul&gt;:
        </li>
        <pre className="ide">
          <code>
            <span className="pink">return</span> &lt;<span className="blue">ul</span>&gt;
            <span className="blue">&#123;</span>
            <span className="celeste">listItems</span>
            <span className="blue">&#125;</span>
            &lt;/<span className="blue">li</span>&gt;;
          </code>
        </pre>
      </ol>
      <p>Aquí está el resultado:</p>
      <pre className="ide">
        <code>
          <span className="blue">const</span> <span className="celeste">people</span>
          <span className="white">=</span>
          <span className="yellow">&#91;</span>
          {"\n"}
          <span className="orange">&#39;Creola Katherine Johnson: mathematician&#39;</span>,{"\n"}
          <span className="orange">&#39;Mario José Molina-Pasquel Henríquez: chemist&#39;</span>,
          {"\n"}
          <span className="orange">&#39;Mohammad Abdus Salam: physicist&#39;</span>,{"\n"}
          <span className="orange">&#39;Percy Lavon Julian: chemist&#39;</span>,{"\n"}
          <span className="orange">&#39;Subrahmanyan Chandrasekhar: astrophysicist&#39;</span>
          {"\n"}
          <span className="yellow">&#93;</span>;{"\n\n"}
        </code>
        <code>
          <span className="blue">const</span> <span className="celeste">listItems</span>{" "}
          <span className="white">=</span> <span className="celeste">people</span>
          <span className="yellow">.</span>
          <span className="green">map</span>
          <span className="yellow">&#40;</span>
          <span className="celeste">person</span> <span className="white">=&gt;</span> &lt;
          <span className="blue">li</span>&gt;
          <span className="blue">&#123;</span>
          <span className="celeste">person</span>
          <span className="blue">&#125;</span>
          &lt;/<span className="blue">li</span>&gt;
          <span className="yellow">&#41;</span>;{"\n\n"}
        </code>
        <code>
          <span className="pink">return</span> &lt;<span className="blue">ul</span>&gt;
          <span className="blue">&#123;</span>
          <span className="celeste">listItems</span>
          <span className="blue">&#125;</span>
          &lt;/<span className="blue">li</span>&gt;;
        </code>
      </pre>
      <p>Date cuenta que el sandbox anterior muestra un error por consola:</p>
      <div className="warning">
        <span>❌ warning</span>
        <span>Each child in a list should have a unique «key» prop.</span>
        <span>
          <b>(Traducción)</b>
        </span>
        <span>Advertencia: Cada hijo en una lista debe tener una única prop «key».</span>
      </div>
      <p>
        Aprenderás como arreglar este error más adelante en esta página. Antes de que lleguemos a
        eso, vamos a añadir algo de estructura a tus datos.
      </p>
      <h3>Filtrar arrays de objetos</h3>
      <p>Estos datos pueden ser estructurados incluso más.</p>
      <pre className="ide">
        <code>
          <span className="blue">const</span> <span className="celeste">people</span>
          <span className="white">=</span>
          <span className="yellow">&#91;</span>
          <span className="blue">&#123;</span>
          {"\n  "}
          <span className="celeste">id</span>
          <span className="white">:</span>
          <span className="pink">0</span>,{"\n  "}
          <span className="celeste">name</span>
          <span className="white">:</span>
          <span className="orange">&#39;Creola Katherine Johnson: mathematician&#39;</span>,{"\n  "}
          <span className="celeste">profession</span>
          <span className="white">:</span>
          <span className="orange">&#39;mathematician&#39;</span>,{"\n"}
          <span className="blue">&#125;</span>,<span className="blue">&#123;</span>
          {"\n  "}
          <span className="celeste">id</span>
          <span className="white">:</span>
          <span className="pink">1</span>,{"\n  "}
          <span className="celeste">name</span>
          <span className="white">:</span>
          <span className="orange">&#39;Mario José Molina-Pasquel Henríquez&#39;</span>,{"\n  "}
          <span className="celeste">profession</span>
          <span className="white">:</span>
          <span className="orange">&#39;chemist&#39;</span>,{"\n"}
          <span className="blue">&#125;</span>,<span className="blue">&#123;</span>
          {"\n  "}
          <span className="celeste">id</span>
          <span className="white">:</span>
          <span className="pink">2</span>,{"\n  "}
          <span className="celeste">name</span>
          <span className="white">:</span>
          <span className="orange">&#39;Mohammad Abdus Salam&#39;</span>,{"\n  "}
          <span className="celeste">profession</span>
          <span className="white">:</span>
          <span className="orange">&#39;physicist&#39;</span>,{"\n"}
          <span className="blue">&#125;</span>,<span className="blue">&#123;</span>
          {"\n  "}
          <span className="celeste">id</span>
          <span className="white">:</span>
          <span className="pink">3</span>,{"\n  "}
          <span className="celeste">name</span>
          <span className="white">:</span>
          <span className="orange">&#39;Percy Lavon Julian&#39;</span>,{"\n  "}
          <span className="celeste">profession</span>
          <span className="white">:</span>
          <span className="orange">&#39;chemist&#39;</span>,{"\n"}
          <span className="blue">&#125;</span>,<span className="blue">&#123;</span>
          {"\n  "}
          <span className="celeste">id</span>
          <span className="white">:</span>
          <span className="pink">4</span>,{"\n  "}
          <span className="celeste">name</span>
          <span className="white">:</span>
          <span className="orange">&#39;Subrahmanyan Chandrasekhar&#39;</span>,{"\n  "}
          <span className="celeste">profession</span>
          <span className="white">:</span>
          <span className="orange">&#39;astrophysicist&#39;</span>,{"\n"}
          <span className="blue">&#125;</span>
          <span className="yellow">&#93;</span>;{"\n\n"}
        </code>
      </pre>
      <p>
        Digamos que quieres una manera de mostrar solo las personas cuya profesión sea{" "}
        <span className="shadow">&#39;chemist&#39;</span>. Puedes usar el método{" "}
        <span className="shadow">filter()</span> de JavaScript para devolver solo esas personas.{" "}
        Este método coge un array de objetos, los pasa por un «test» (una función que devuelve{" "}
        <span className="shadow">true</span> o <span className="shadow">false</span>), y devuelve un
        nuevo array de solo esos objetos que han pasado el test (que han devuelto{" "}
        <span className="shadow">true</span>).
      </p>
      <p>
        Tú solo quieres los objetos donde <span className="shadow">profession</span> es{" "}
        <span className="shadow">&#39;chemist&#39;</span>. La función <b>«test»</b> para esto se ve{" "}
        como <span className="shadow">(person) =&gt; person.profession === &#39;chemist&#39;</span>.{" "}
        Aquí está cómo juntarlo:
      </p>
      <ol type="1" start="1">
        <li>
          <b>Crea</b> un nuevo array solo de personas que sean «químicos»,{" "}
          <span className="shadow">chemists</span>, llamando al método{" "}
          <span className="shadow">filter()</span> en <span className="shadow">people</span>{" "}
          filtrando por <span className="shadow">person.profession === &#39;chemist&#39;</span>:
        </li>
        <pre className="ide">
          <code>
            <span className="blue">const</span> <span className="celeste">chemists</span>{" "}
            <span className="white">=</span> <span className="celeste">people</span>
            <span className="white">.</span>
            <span className="green">filter</span>
            <span className="yellow">&#40;</span>
            <span className="celeste">person</span> <span className="white">=&gt;</span>
            {"\n  "}
            <span className="celeste">person</span>
            <span className="white">.</span>
            <span className="blue">profession</span> <span className="white">===</span>{" "}
            <span className="orange">&#39;chemist&#39;</span>
            {"\n"}
            <span className="yellow">&#41;</span>;
          </code>
        </pre>
        <li>
          Ahora <b>mapea</b> sobre <span className="shadow">chemists</span>:
        </li>
        <pre className="ide">
          <code>
            <span className="blue">const</span> <span className="celeste">listItems</span>{" "}
            <span className="white">=</span> <span className="celeste">chemists</span>
            <span className="yellow">.</span>
            <span className="green">map</span>
            <span className="yellow">&#40;</span>
            <span className="celeste">person</span> <span className="white">=&gt;</span>
            {"\n  "}
            &lt;<span className="blue">li</span>&gt;
            {"\n    "}
            &lt;<span className="blue">img</span> <span className="celeste">src</span>
            <span className="white">=</span>
            <span className="blue">&#123;</span>
            <span className="green">getImageUrl</span>
            <span className="yellow">&#40;</span>
            <span className="celeste">person</span>
            <span className="yellow">&#41;</span>
            <span className="blue">&#125;</span> <span className="celeste">alt</span>
            <span className="white">=</span>
            <span className="blue">&#123;</span>
            <span className="celeste">person</span>
            <span className="white">.</span>
            <span className="celeste">name</span>
            <span className="blue">&#125;</span>/&gt;
            {"\n    "}
            &lt;<span className="blue">p</span>&gt;
            {"\n      "}
            &lt;<span className="blue">b</span>&gt;
            <span className="blue">&#123;</span>
            <span className="celeste">person</span>
            <span className="white">.</span>
            <span className="celeste">name</span>
            <span className="blue">&#125;</span>
            <span className="white">:</span>
            &lt;/<span className="blue">b</span>&gt;
            {"\n      "}
            <span className="blue">&#123;</span>
            <span className="orange">&#39; &#39;</span> <span className="white">+</span>{" "}
            <span className="celeste">person</span>
            <span className="blue">.</span>
            <span className="celeste">profession</span> <span className="white">+</span>{" "}
            <span className="orange">&#39; &#39;</span>
            <span className="blue">&#125;</span>
            {"\n      "}
            <span className="orange">Known for</span> <span className="blue">&#123;</span>
            <span className="celeste">person</span>
            <span className="white">.</span>
            <span className="celeste">accomplishment</span>
            <span className="blue">&#125;</span>
            {"\n    "}
            &lt;/<span className="blue">p</span>&gt;
            {"\n  "}
            &lt;/<span className="blue">li</span>&gt;
            {"\n"}
            <span className="yellow">&#41;</span>;
          </code>
        </pre>
        <li>
          Por último, <b>devuelve</b> el listItems de tu componente:
        </li>
        <pre className="ide">
          <code>
            <span className="pink">return</span> &lt;<span className="blue">ul</span>&gt;
            <span className="blue">&#123;</span>
            <span className="celeste">listItems</span>
            <span className="blue">&#125;</span>
            &lt;/<span className="blue">li</span>&gt;;
          </code>
        </pre>
      </ol>
      <pre className="ide">
        <code>
          <span className={"greendark"}>&#47;&#47;utils.js</span>
          {"\n"}
        </code>
        <code>
          <span className={"pink"}>export </span>
          <span className={"blue"}>function </span>
          <span className={"yellow"}>getImageUrl</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"celeste"}>person</span>
          <span className={"yellow"}>&#41;</span>
          <span className={"yellow"}> &#123;</span>
          {"\n  "}
          <span className={"pink"}>return </span>
          <span className={"yellow"}>&#40;</span>
          {"\n    "}
          <span className={"orange"}>&#39;https://i.imgur.com/&#39;</span>{" "}
          <span className={"white"}>+</span> <span className={"celeste"}>person</span>
          <span className={"white"}>.</span>
          <span className={"celeste"}>imageId</span> <span className={"white"}>+</span>{" "}
          <span className={"orange"}>&#39;s.jpg&#39;</span>
          {"\n  "}
          <span className={"yellow"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>
        </code>
      </pre>
      <pre className="ide">
        <code>
          <span className={"greendark"}>&#47;&#47;data.js</span>
          {"\n"}
        </code>
        <code>
          <span className="blue">const</span> <span className="celeste">people</span>
          <span className="white">=</span>
          <span className="yellow">&#91;</span>
          <span className="blue">&#123;</span>
          {"\n  "}
          <span className="celeste">id</span>
          <span className="white">:</span>
          <span className="pink">0</span>,{"\n  "}
          <span className="celeste">name</span>
          <span className="white">:</span>
          <span className="orange">&#39;Creola Katherine Johnson: mathematician&#39;</span>,{"\n  "}
          <span className="celeste">profession</span>
          <span className="white">:</span>
          <span className="orange">&#39;mathematician&#39;</span>,{"\n  "}
          <span className="celeste">accomplishment</span>
          <span className="white">:</span>
          <span className="orange">&#39;spaceflight calculations&#39;</span>,{"\n  "}
          <span className="celeste">imageId</span>
          <span className="white">:</span>
          <span className="orange">&#39;MK3eW3A&#39;</span>,{"\n"}
          <span className="blue">&#125;</span>,<span className="blue">&#123;</span>
          {"\n  "}
          <span className="celeste">id</span>
          <span className="white">:</span>
          <span className="pink">1</span>,{"\n  "}
          <span className="celeste">name</span>
          <span className="white">:</span>
          <span className="orange">&#39;Mario José Molina-Pasquel Henríquez&#39;</span>,{"\n  "}
          <span className="celeste">profession</span>
          <span className="white">:</span>
          <span className="orange">&#39;chemist&#39;</span>,{"\n  "}
          <span className="celeste">accomplishment</span>
          <span className="white">:</span>
          <span className="orange">&#39;discovery of Arctic ozone hole&#39;</span>,{"\n  "}
          <span className="celeste">imageId</span>
          <span className="white">:</span>
          <span className="orange">&#39;mynHUSa&#39;</span>,{"\n"}
          <span className="blue">&#125;</span>,<span className="blue">&#123;</span>
          {"\n  "}
          <span className="celeste">id</span>
          <span className="white">:</span>
          <span className="pink">2</span>,{"\n  "}
          <span className="celeste">name</span>
          <span className="white">:</span>
          <span className="orange">&#39;Mohammad Abdus Salam&#39;</span>,{"\n  "}
          <span className="celeste">profession</span>
          <span className="white">:</span>
          <span className="orange">&#39;physicist&#39;</span>,{"\n  "}
          <span className="celeste">accomplishment</span>
          <span className="white">:</span>
          <span className="orange">&#39;electromagnetism theory&#39;</span>,{"\n  "}
          <span className="celeste">imageId</span>
          <span className="white">:</span>
          <span className="orange">&#39;bE7W1ji&#39;</span>,{"\n"}
          <span className="blue">&#125;</span>,<span className="blue">&#123;</span>
          {"\n  "}
          <span className="celeste">id</span>
          <span className="white">:</span>
          <span className="pink">3</span>,{"\n  "}
          <span className="celeste">name</span>
          <span className="white">:</span>
          <span className="orange">&#39;Percy Lavon Julian&#39;</span>,{"\n  "}
          <span className="celeste">profession</span>
          <span className="white">:</span>
          <span className="orange">&#39;chemist&#39;</span>,{"\n  "}
          <span className="celeste">accomplishment</span>
          <span className="white">:</span>
          <span className="orange">
            &#39;pioneering cortisone drugs, steroids and birth control pills&#39;
          </span>
          ,{"\n  "}
          <span className="celeste">imageId</span>
          <span className="white">:</span>
          <span className="orange">&#39;IOjWm71&#39;</span>,{"\n"}
          <span className="blue">&#125;</span>,<span className="blue">&#123;</span>
          {"\n  "}
          <span className="celeste">id</span>
          <span className="white">:</span>
          <span className="pink">4</span>,{"\n  "}
          <span className="celeste">name</span>
          <span className="white">:</span>
          <span className="orange">&#39;Subrahmanyan Chandrasekhar&#39;</span>,{"\n  "}
          <span className="celeste">profession</span>
          <span className="white">:</span>
          <span className="orange">&#39;astrophysicist&#39;</span>,{"\n  "}
          <span className="celeste">accomplishment</span>
          <span className="white">:</span>
          <span className="orange">&#39;white dwarf star mass calculations&#39;</span>,{"\n  "}
          <span className="celeste">imageId</span>
          <span className="white">:</span>
          <span className="orange">&#39;lrWQx8l&#39;</span>,{"\n"}
          <span className="blue">&#125;</span>
          <span className="yellow">&#93;</span>;{"\n\n"}
        </code>
      </pre>
      <pre className="ide">
        <code>
          <span className={"greendark"}>&#47;&#47;App.js</span>
          {"\n"}
        </code>
        <code>
          <span className="pink">import</span> <span className="blue">&#123;</span>{" "}
          <span className="celeste">people</span> <span className="blue">&#125;</span>{" "}
          <span className="pink">from</span> <span className="orange">&#39;./data.js&#39;</span>;
          {"\n"}
        </code>
        <code>
          <span className="pink">import</span> <span className="blue">&#123;</span>{" "}
          <span className="celeste">getImageUrl </span> <span className="blue">&#125;</span>{" "}
          <span className="pink">from</span> <span className="orange">&#39;./utils.js&#39;</span>;
          {"\n\n"}
        </code>
        <code>
          <span className="pink">export</span> <span className="pink">default</span>{" "}
          <span className="blue">function</span> <span className="yellow">List</span>
          <span className="yellow">&#40;</span>
          <span className="yellow">&#41;</span> <span className="yellow">&#123;</span>
          {"\n"}
          <span className="blue">const</span> <span className="celeste">chemists</span>{" "}
          <span className="white">=</span> <span className="celeste">people</span>
          <span className="white">.</span>
          <span className="green">filter</span>
          <span className="yellow">&#40;</span>
          <span className="celeste">person</span> <span className="white">=&gt;</span>
          {"\n  "}
          <span className="celeste">person</span>
          <span className="white">.</span>
          <span className="blue">profession</span> <span className="white">===</span>{" "}
          <span className="orange">&#39;chemist&#39;</span>
          {"\n"}
          <span className="yellow">&#41;</span>;
        </code>
        {"\n"}
        <code>
          <span className="blue">const</span> <span className="celeste">listItems</span>{" "}
          <span className="white">=</span> <span className="celeste">chemists</span>
          <span className="yellow">.</span>
          <span className="green">map</span>
          <span className="yellow">&#40;</span>
          <span className="celeste">person</span> <span className="white">=&gt;</span>
          {"\n  "}
          &lt;<span className="blue">li</span>&gt;
          {"\n    "}
          &lt;<span className="blue">img</span> <span className="celeste">src</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="green">getImageUrl</span>
          <span className="yellow">&#40;</span>
          <span className="celeste">person</span>
          <span className="yellow">&#41;</span>
          <span className="blue">&#125;</span> <span className="celeste">alt</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="celeste">person</span>
          <span className="white">.</span>
          <span className="celeste">name</span>
          <span className="blue">&#125;</span>/&gt;
          {"\n    "}
          &lt;<span className="blue">p</span>&gt;
          {"\n      "}
          &lt;<span className="blue">b</span>&gt;
          <span className="blue">&#123;</span>
          <span className="celeste">person</span>
          <span className="white">.</span>
          <span className="celeste">name</span>
          <span className="blue">&#125;</span>
          <span className="white">:</span>
          &lt;/<span className="blue">b</span>&gt;
          {"\n      "}
          <span className="blue">&#123;</span>
          <span className="orange">&#39; &#39;</span> <span className="white">+</span>{" "}
          <span className="celeste">person</span>
          <span className="blue">.</span>
          <span className="celeste">profession</span> <span className="white">+</span>{" "}
          <span className="orange">&#39; &#39;</span>
          <span className="blue">&#125;</span>
          {"\n      "}
          <span className="orange">Known for</span> <span className="blue">&#123;</span>
          <span className="celeste">person</span>
          <span className="white">.</span>
          <span className="celeste">accomplishment</span>
          <span className="blue">&#125;</span>
          {"\n    "}
          &lt;/<span className="blue">p</span>&gt;
          {"\n  "}
          &lt;/<span className="blue">li</span>&gt;
          {"\n  "}
          <span className="yellow">&#41;</span>;{"\n  "}
        </code>
        <code>
          <span className="pink">return</span> &lt;<span className="blue">ul</span>&gt;
          <span className="blue">&#123;</span>
          <span className="celeste">listItems</span>
          <span className="blue">&#125;</span>
          &lt;/<span className="blue">ul</span>&gt;;{"\n"}
          <span className="yellow">&#125;</span>
        </code>
      </pre>
      <div className="warning">
        <span>❌ warning</span>
        <span>Each child in a list should have a unique «key» prop.</span>
        <span>
          Check the render method of `List`. See https://reactjs.org/link/warning-keys for more
          information.
        </span>
        <span> at li</span>
        <span> at List</span>
      </div>
      <div className="alert">
        <span>❗Atención</span>
        <span>
          Las funciones de flecha implícitamente devuelven la expresión justo después del{" "}
          <span className="shadow">=&gt;</span>, así que no necesitas declarar un{" "}
          <span className="shadow">return</span>:
        </span>
        <pre className="ide">
          <code>
            <span className="blue">const</span> <span className="celeste">listItems</span>{" "}
            <span className="white">=</span> <span className="celeste">chemists</span>
            <span className="yellow">.</span>
            <span className="green">map</span>
            <span className="yellow">&#40;</span>
            <span className="celeste">person</span> <span className="white">=&gt;</span>
            {"\n  "}
            &lt;<span className="blue">li</span>&gt;
            <span className="white">...</span>
            &lt;/<span className="blue">li</span>&gt;{"  "}
            <span className="greendark">&#47;&#47; Implicit return!</span>
            {"\n"}
            <span className="yellow">&#41;</span>;
          </code>
        </pre>
        <span>
          Sin embargo, ¡debes escibir el <span className="shadow">return</span> explícitamente si tu{" "}
          <span className="shadow">=&gt;</span> está seguida por una llave{" "}
          <span className="shadow">&#123;</span> !
        </span>
        <pre className="ide">
          <code>
            <span className="blue">const</span> <span className="celeste">listItems</span>{" "}
            <span className="white">=</span> <span className="celeste">chemists</span>
            <span className="yellow">.</span>
            <span className="green">map</span>
            <span className="yellow">&#40;</span>
            <span className="celeste">person</span> <span className="white">=&gt;</span>{" "}
            <span className="yellow">&#123;</span>{" "}
            <span className="greendark">&#47;&#47; Curly brace</span>
            {"\n  "}
            <span className="blue">return</span> &lt;<span className="blue">li</span>&gt;
            <span className="white">...</span>
            &lt;/<span className="blue">li</span>&gt;;
            {"\n"}
            <span className="yellow">&#125;</span>
            <span className="yellow">&#41;</span>;
          </code>
        </pre>
        <span>
          Las funciones de flecha que tienen <span className="shadow">=&gt; &#123;</span> se dice
          que tienen un <span className="note">«cuerpo de bloque»</span>. Te permiten escribir más
          de una sola línea de código, pero tienes que declarar un{" "}
          <span className="shadow">return</span> por ti mismo. Si lo olvidas, ¡Nada será devuelto!
        </span>
      </div>
      <h3>
        Mantener los elementos de una lista en orden con <span className="shadow">key</span>
      </h3>
      <p>Fíjate que todos los sandboxes anteriores mostraban un error en la consola:</p>
      <div className="warning">
        <span>❌ warning</span>
        <span>Each child in a list should have a unique «key» prop.</span>
        <span>
          <b>(Traducción)</b>
        </span>
        <span>Advertencia: Cada hijo en una lista debe tener una única prop «key».</span>
      </div>
      <p>
        Tienes que darle a cada elemento del array una <span className="shadow">key</span> (una
        cadena de texto o un número) que lo identifique de manera única entre otros elementos del
        array:
      </p>
      <pre className="ide">
        <code>
          &lt;<span className="blue">li</span> <span className="celeste">key</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="celeste">person</span>
          <span className="white">.</span>
          <span className="celeste">id</span>
          <span className="blue">&#125;</span>&gt;<span className="white">...</span>&lt;/
          <span className="blue">li</span>&gt;
        </code>
      </pre>
      <div className="great">
        <span>📓 Nota</span>
        <span>
          ¡Los elementos JSX directamente dentro de una llamada a un{" "}
          <span className="shadow">map()</span> siempre necesitan keys!
        </span>
      </div>
      <p>
        Las keys le indican a React que objeto del array corresponde a cada componente, para así
        poder emparejarlo más tarde. Esto se vuelve más importante si los objetos de tus arrays se
        pueden mover (p. ej. debido a un ordenamiento), insertar, o eliminar. Una{" "}
        <span className="shadow">key</span> bien escogida ayuda a React a entender lo que ha
        sucedido exactamente, y hacer las correctas actualizaciones en el árbol del DOM.
      </p>
      <p>En vez de generar keys sobre la marcha, deberías incluirlas en tus datos:</p>
      <pre className="ide">
        <code>
          <span className={"greendark"}>&#47;&#47;utils.js</span>
          {"\n"}
        </code>
        <code>
          <span className={"pink"}>export </span>
          <span className={"blue"}>function </span>
          <span className={"yellow"}>getImageUrl</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"celeste"}>person</span>
          <span className={"yellow"}>&#41;</span>
          <span className={"yellow"}> &#123;</span>
          {"\n  "}
          <span className={"pink"}>return </span>
          <span className={"yellow"}>&#40;</span>
          {"\n    "}
          <span className={"orange"}>&#39;https://i.imgur.com/&#39;</span>{" "}
          <span className={"white"}>+</span> <span className={"celeste"}>person</span>
          <span className={"white"}>.</span>
          <span className={"celeste"}>imageId</span> <span className={"white"}>+</span>{" "}
          <span className={"orange"}>&#39;s.jpg&#39;</span>
          {"\n  "}
          <span className={"yellow"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>
        </code>
      </pre>
      <pre className="ide">
        <code>
          <span className={"greendark"}>&#47;&#47;data.js</span>
          {"\n"}
        </code>
        <code>
          <span className="blue">const</span> <span className="celeste">people</span>
          <span className="white">=</span>
          <span className="yellow">&#91;</span>
          <span className="blue">&#123;</span>
          {"\n  "}
          <span className="celeste">id</span>
          <span className="white">:</span>
          <span className="pink">0</span>,{" "}
          <span className={"greendark"}>&#47;&#47; Usado en JSX como key</span>
          {"\n  "}
          <span className="celeste">name</span>
          <span className="white">:</span>
          <span className="orange">&#39;Creola Katherine Johnson: mathematician&#39;</span>,{"\n  "}
          <span className="celeste">profession</span>
          <span className="white">:</span>
          <span className="orange">&#39;mathematician&#39;</span>,{"\n  "}
          <span className="celeste">accomplishment</span>
          <span className="white">:</span>
          <span className="orange">&#39;spaceflight calculations&#39;</span>,{"\n  "}
          <span className="celeste">imageId</span>
          <span className="white">:</span>
          <span className="orange">&#39;MK3eW3A&#39;</span>,{"\n"}
          <span className="blue">&#125;</span>,<span className="blue">&#123;</span>
          {"\n  "}
          <span className="celeste">id</span>
          <span className="white">:</span>
          <span className="pink">1</span>,{" "}
          <span className={"greendark"}>&#47;&#47; Usado en JSX como key</span>
          {"\n  "}
          <span className="celeste">name</span>
          <span className="white">:</span>
          <span className="orange">&#39;Mario José Molina-Pasquel Henríquez&#39;</span>,{"\n  "}
          <span className="celeste">profession</span>
          <span className="white">:</span>
          <span className="orange">&#39;chemist&#39;</span>,{"\n  "}
          <span className="celeste">accomplishment</span>
          <span className="white">:</span>
          <span className="orange">&#39;discovery of Arctic ozone hole&#39;</span>,{"\n  "}
          <span className="celeste">imageId</span>
          <span className="white">:</span>
          <span className="orange">&#39;mynHUSa&#39;</span>,{"\n"}
          <span className="blue">&#125;</span>,<span className="blue">&#123;</span>
          {"\n  "}
          <span className="celeste">id</span>
          <span className="white">:</span>
          <span className="pink">2</span>,{" "}
          <span className={"greendark"}>&#47;&#47; Usado en JSX como key</span>
          {"\n  "}
          <span className="celeste">name</span>
          <span className="white">:</span>
          <span className="orange">&#39;Mohammad Abdus Salam&#39;</span>,{"\n  "}
          <span className="celeste">profession</span>
          <span className="white">:</span>
          <span className="orange">&#39;physicist&#39;</span>,{"\n  "}
          <span className="celeste">accomplishment</span>
          <span className="white">:</span>
          <span className="orange">&#39;electromagnetism theory&#39;</span>,{"\n  "}
          <span className="celeste">imageId</span>
          <span className="white">:</span>
          <span className="orange">&#39;bE7W1ji&#39;</span>,{"\n"}
          <span className="blue">&#125;</span>,<span className="blue">&#123;</span>
          {"\n  "}
          <span className="celeste">id</span>
          <span className="white">:</span>
          <span className="pink">3</span>,{" "}
          <span className={"greendark"}>&#47;&#47; Usado en JSX como key</span>
          {"\n  "}
          <span className="celeste">name</span>
          <span className="white">:</span>
          <span className="orange">&#39;Percy Lavon Julian&#39;</span>,{"\n  "}
          <span className="celeste">profession</span>
          <span className="white">:</span>
          <span className="orange">&#39;chemist&#39;</span>,{"\n  "}
          <span className="celeste">accomplishment</span>
          <span className="white">:</span>
          <span className="orange">
            &#39;pioneering cortisone drugs, steroids and birth control pills&#39;
          </span>
          ,{"\n  "}
          <span className="celeste">imageId</span>
          <span className="white">:</span>
          <span className="orange">&#39;IOjWm71&#39;</span>,{"\n"}
          <span className="blue">&#125;</span>,<span className="blue">&#123;</span>
          {"\n  "}
          <span className="celeste">id</span>
          <span className="white">:</span>
          <span className="pink">4</span>,{" "}
          <span className={"greendark"}>&#47;&#47; Usado en JSX como key</span>
          {"\n  "}
          <span className="celeste">name</span>
          <span className="white">:</span>
          <span className="orange">&#39;Subrahmanyan Chandrasekhar&#39;</span>,{"\n  "}
          <span className="celeste">profession</span>
          <span className="white">:</span>
          <span className="orange">&#39;astrophysicist&#39;</span>,{"\n  "}
          <span className="celeste">accomplishment</span>
          <span className="white">:</span>
          <span className="orange">&#39;white dwarf star mass calculations&#39;</span>,{"\n  "}
          <span className="celeste">imageId</span>
          <span className="white">:</span>
          <span className="orange">&#39;lrWQx8l&#39;</span>,{"\n"}
          <span className="blue">&#125;</span>
          <span className="yellow">&#93;</span>;{"\n\n"}
        </code>
      </pre>
      <pre className="ide">
        <code>
          <span className={"greendark"}>&#47;&#47;App.js</span>
          {"\n"}
        </code>
        <code>
          <span className="pink">import</span> <span className="blue">&#123;</span>{" "}
          <span className="celeste">people</span> <span className="blue">&#125;</span>{" "}
          <span className="pink">from</span> <span className="orange">&#39;./data.js&#39;</span>;
          {"\n"}
        </code>
        <code>
          <span className="pink">import</span> <span className="blue">&#123;</span>{" "}
          <span className="celeste">getImageUrl </span> <span className="blue">&#125;</span>{" "}
          <span className="pink">from</span> <span className="orange">&#39;./utils.js&#39;</span>;
          {"\n\n"}
        </code>
        <code>
          <span className="pink">export</span> <span className="pink">default</span>{" "}
          <span className="blue">function</span> <span className="yellow">List</span>
          <span className="yellow">&#40;</span>
          <span className="yellow">&#41;</span> <span className="yellow">&#123;</span>
          {"\n"}
          <span className="blue">const</span> <span className="celeste">chemists</span>{" "}
          <span className="white">=</span> <span className="celeste">people</span>
          <span className="white">.</span>
          <span className="green">filter</span>
          <span className="yellow">&#40;</span>
          <span className="celeste">person</span> <span className="white">=&gt;</span>
          {"\n  "}
          <span className="celeste">person</span>
          <span className="white">.</span>
          <span className="blue">profession</span> <span className="white">===</span>{" "}
          <span className="orange">&#39;chemist&#39;</span>
          {"\n"}
          <span className="yellow">&#41;</span>;{"\n"}
        </code>
        <code>
          <span className="blue">const</span> <span className="celeste">listItems</span>{" "}
          <span className="white">=</span> <span className="celeste">chemists</span>
          <span className="yellow">.</span>
          <span className="green">map</span>
          <span className="yellow">&#40;</span>
          <span className="celeste">person</span> <span className="white">=&gt;</span>
          {"\n  "}
          &lt;<span className="blue">li</span> <span className="celeste">key</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="celeste">person</span>
          <span className="white">.</span>
          <span className="celeste">id</span>
          <span className="blue">&#125;</span>&gt;
          {"\n    "}
          &lt;<span className="blue">img</span> <span className="celeste">src</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="green">getImageUrl</span>
          <span className="yellow">&#40;</span>
          <span className="celeste">person</span>
          <span className="yellow">&#41;</span>
          <span className="blue">&#125;</span> <span className="celeste">alt</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="celeste">person</span>
          <span className="white">.</span>
          <span className="celeste">name</span>
          <span className="blue">&#125;</span>/&gt;
          {"\n    "}
          &lt;<span className="blue">p</span>&gt;
          {"\n      "}
          &lt;<span className="blue">b</span>&gt;
          <span className="blue">&#123;</span>
          <span className="celeste">person</span>
          <span className="white">.</span>
          <span className="celeste">name</span>
          <span className="blue">&#125;</span>
          <span className="white">:</span>
          &lt;/<span className="blue">b</span>&gt;
          {"\n      "}
          <span className="blue">&#123;</span>
          <span className="orange">&#39; &#39;</span> <span className="white">+</span>{" "}
          <span className="celeste">person</span>
          <span className="blue">.</span>
          <span className="celeste">profession</span> <span className="white">+</span>{" "}
          <span className="orange">&#39; &#39;</span>
          <span className="blue">&#125;</span>
          {"\n      "}
          <span className="orange">Known for</span> <span className="blue">&#123;</span>
          <span className="celeste">person</span>
          <span className="white">.</span>
          <span className="celeste">accomplishment</span>
          <span className="blue">&#125;</span>
          {"\n    "}
          &lt;/<span className="blue">p</span>&gt;
          {"\n  "}
          &lt;/<span className="blue">li</span>&gt;
          {"\n  "}
          <span className="yellow">&#41;</span>;{"\n  "}
        </code>
        <code>
          <span className="pink">return</span> &lt;<span className="blue">ul</span>&gt;
          <span className="blue">&#123;</span>
          <span className="celeste">listItems</span>
          <span className="blue">&#125;</span>
          &lt;/<span className="blue">ul</span>&gt;;{"\n"}
          <span className="yellow">&#125;</span>
        </code>
      </pre>
      <h3>Mostrar varios nodos DOM para cada elemento de una lista</h3>
      <p>¿Qué haces cuándo cada objeto necesita renderizar no uno, sino varios nodos del DOM?</p>
      <p>
        El atajo de sintaxis del <span className="note">&lt;&gt;...&lt;/&gt; Fragment</span> no te
        dejará pasarle una key, así que necesitas agruparlos en un solo{" "}
        <span className="shadow">&lt;div&gt;</span>, o usar una sintaxis algo más larga y{" "}
        <span className="note">más explícita del &lt;Fragment&gt;</span>:
      </p>
      <pre className="ide">
        <code>
          <span className="pink">import</span> <span className="blue">&#123;</span>{" "}
          <span className="celeste">Fragment</span> <span className="blue">&#125;</span>{" "}
          <span className="pink">from</span> <span className="orange">&#39;react&#39;</span>;
          {"\n\n"}
        </code>
        <code>
          <span className={"greendark"}>&#47;&#47; ...</span>
          {"\n\n"}
        </code>
        <code>
          <span className="blue">const</span> <span className="celeste">listItems</span>{" "}
          <span className="white">=</span> <span className="celeste">people</span>
          <span className="yellow">.</span>
          <span className="green">map</span>
          <span className="yellow">&#40;</span>
          <span className="celeste">person</span> <span className="white">=&gt;</span>
          {"\n  "}
          &lt;<span className="green">Fragment</span> <span className="celeste">key</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="celeste">person</span>
          <span className="white">.</span>
          <span className="celeste">id</span>
          <span className="blue">&#125;</span>&gt;
          {"\n    "}
          &lt;<span className="blue">h1</span>&gt;
          <span className="blue">&#123;</span>
          <span className="celeste">person</span>
          <span className="white">.</span>
          <span className="celeste">name</span>
          <span className="blue">&#125;</span>
          &lt;/<span className="blue">h1</span>&gt;
          {"\n    "}
          &lt;<span className="blue">p</span>&gt;
          <span className="blue">&#123;</span>
          <span className="celeste">person</span>
          <span className="white">.</span>
          <span className="celeste">bio</span>
          <span className="blue">&#125;</span>
          &lt;/<span className="blue">p</span>&gt;
          {"\n  "}
          &lt;/<span className="green">Fragment</span>&gt;{"\n"}
          <span className="yellow">&#41;</span>;
        </code>
      </pre>
      <p>
        Los Fragments desaparecen del DOM, así que esto producirá una lista plana de{" "}
        <span className="shadow">&lt;h1&gt;</span>, <span className="shadow">&lt;p&gt;</span>,{" "}
        <span className="shadow">&lt;h1&gt;</span>, <span className="shadow">&lt;p&gt;</span>, y
        así.
      </p>
      <h3>
        Dónde conseguir tu <span className="shadow">key</span>
      </h3>
      <p>Distintas fuentes de datos dan diferentes fuentes de keys:</p>
      <ul style={{ listStyle: "disc" }}>
        <li>
          <b>Las keys tienen que ser únicas entre elementos hermanos</b>. Sin embargo, está bien
          usar las mismas keys para nodos JSX en arrays diferentes.
        </li>
        <li>
          <b>Datos generados localmente</b>: Si tus datos son generados y persistidos localmente (p.
          ej. notas en una app de tomar notas), usa un contador incremental,{" "}
          <span className="note">crypto.randomUUID()</span> o un paquete como{" "}
          <span className="note">uuid</span> cuando este creando objetos.
        </li>
      </ul>
      <h3>Reglas de las keys</h3>
      <ul style={{ listStyle: "disc" }}>
        <li>
          <b>Las keys tienen que ser únicas entre elementos hermanos</b>. Sin embargo, está bien
          usar las mismas keys para nodos JSX en arrays diferentes.
        </li>
        <li>
          <b>Las keys no tienen que cambiar</b> o ¡eso quitará su propósito! No las generes mientras
          renderizas.
        </li>
      </ul>
      <h3>¿Por qué React necesita keys?</h3>
      <p>
        Imagina que los archivos de tu escritorio no tuvieran nombres. En vez de eso, tu te
        referirías a ellos por su orden — el primer archivo, el segundo, y así. Podrías
        acostumbrarte a ello, pero una vez borres un archivo, se volvería algo confuso. El segundo
        archivo se convertiría en el primero, el tercer archivo se convertiría en el segundo, y así.
      </p>
      <p>
        Los nombres de archivos en una carpeta y las keys JSX en un array tienen un propósito
        similar. Nos permiten identificar un objeto de manera única entre sus hermanos. Una key bien
        escogida da más información aparte de la posición en el array. incluso si la posición cambia
        devido a un reordenamiento, la <span className="shadow">key</span> permite a React
        identificar al elemento a lo largo de su ciclo de vida.
      </p>
      <div className="alert">
        <span>❗Atención</span>
        <span>
          Podrías estar tentado a usar el índice del elemento en el array como su{" "}
          <span className="shadow">key</span>. De hecho, eso es lo que React usará si tu no
          especifícas una <span className="shadow">key</span> en absoluto. Pero el orden en el que
          renderizas elementos cambiará con el tiempo si un elemento es insertado, borrado, o si se
          reordena su array. El índice como <span className="shadow">key</span> lleva a menudo a
          sutiles y confusos errores.
        </span>
        <span>
          Igualmente, no generes keys sobre la marcha, p. ej. con{" "}
          <span className="shadow">key=&#123;Math.random()&#125;</span>. Esto hará que las keys
          nunca coincidan entre renderizados, llevando a todos tus componentes y al DOM a recrearse
          cada vez. No solo es una manera lenta, si no que también pierde cualquier input del
          usuario dentro de los elementos listados. En vez de eso, usa unas IDs basadas en datos.
        </span>
        <span>
          Date cuenta de que tus componentes no reciben la <span className="shadow">key</span> como
          un prop. Solo es usado como pista para React. Si tus componentes necesitan un ID, se lo
          tienes que pasar como una prop separada:{" "}
          <span className="shadow">&lt;Profile key=&#123;id&#125; userId=&#123;id&#125; /&gt;</span>
          .
        </span>
      </div>
    </>
  );
}
