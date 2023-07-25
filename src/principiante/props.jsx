import "./Principiante.css";

export default function Props() {
  return (
    <>
      <h1>Pasar props a un componente</h1>
      <p>
        Los componentes de React utilizan props para comunicarse entre sí. Cada componente padre
        puede enviar información a sus componentes hijos mediante el uso de props. Las props pueden
        parecerte similares a los atributos HTML, pero permiten pasar cualquier valor de JavaScript
        a través de ellas, como objetos, arrays y funciones.
      </p>
      <h3 id="props">Props conocidas</h3>
      <p>
        Las props son los datos que se pasan a un elemento JSX. Por ejemplo,{" "}
        <span className={"shadow"}>className</span>, <span className={"shadow"}>src</span>,{" "}
        <span className={"shadow"}>alt</span>, <span className={"shadow"}>width</span> y{" "}
        <span className={"shadow"}>height</span> son algunas de las props que se pueden pasar a un
        elemento <span className={"shadow"}>&lt;img&gt;</span>:
      </p>
      <pre className="ide">
        <code>
          <span className={"blue"}>function </span>
          <span className={"yellow"}>Book</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"yellow"}>&#41;</span>
          <span className={"yellow"}> &#123;</span>
          {"\n  "}
          <span className={"pink"}>return </span>
          <span className={"yellow"}>&#40;</span>
          {"\n    "}
          <code>
            &lt;<span className="blue">img</span> <span className="celeste">className</span>
            <span className="white">=</span>
            <span className="orange">&quot;book&quot;</span> <span className="celeste">src</span>
            <span className="white">=</span>
            <span className={"orange"}>&quot;https://i.imgur.com/1bX5QH6.jpg&quot;</span>{" "}
            <span className="celeste">alt</span>
            <span className="white">=</span>
            <span className={"orange"}>&quot;Lin Lanying&quot;</span>{" "}
            <span className="celeste">width</span>
            <span className="white">=</span>
            <span className="blue">&#123;</span>
            <span className={"pink"}>100</span>
            <span className="blue">&#125;</span> <span className="celeste">height</span>
            <span className="white">=</span>
            <span className="blue">&#123;</span>
            <span className={"pink"}>100</span>
            <span className="blue">&#125;</span> /&gt;
          </code>
          {"\n  "}
          <span className={"yellow"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>
          {"\n"}
        </code>
        <code>
          <span className={"pink"}>export </span>
          <span className={"pink"}>default </span>
          <span className={"blue"}>function </span>
          <span className={"yellow"}>Profile</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"yellow"}>&#41;</span>
          <span className={"yellow"}> &#123;</span>
          {"\n  "}
          <span className={"pink"}>return </span>
          <span className={"yellow"}>&#40;</span>
          {"\n    "}
          &lt;<span className={"green"}>Book </span>/&gt;
          {"\n  "}
          <span className={"yellow"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>
        </code>
      </pre>
      <p>
        Las props que puedes utilizar con una etiqueta <span className={"shadow"}>&lt;img&gt;</span>{" "}
        están predefinidas &#40;ReactDOM se ajusta al <span className={"note"}>estándar HTML</span>
        &#41;. Sin embargo, puedes pasar cualquier prop a tus propios componentes, como{" "}
        <span className={"shadow"}>&lt;book&gt;</span>, para personalizarlos. ¡Aquí te mostramos
        cómo hacerlo!
      </p>
      <h3>Pasar props a un componente</h3>
      <p>
        En este código, el componente <span className={"shadow"}>Profile</span> no está pasando
        ninguna prop a su componente hijo, <span className={"shadow"}>Book</span>:
      </p>
      <pre className="ide">
        <code>
          <span className={"pink"}>export </span>
          <span className={"pink"}>default </span>
          <span className={"blue"}>function </span>
          <span className={"yellow"}>Profile</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"yellow"}>&#41;</span>
          <span className={"yellow"}> &#123;</span>
          {"\n  "}
          <span className={"pink"}>return </span>
          <span className={"yellow"}>&#40;</span>
          {"\n    "}
          &lt;<span className={"green"}>Book </span>/&gt;
          {"\n  "}
          <span className={"yellow"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>
        </code>
      </pre>
      <p>
        Puedes pasar props al elemento <span className={"shadow"}>Book</span> en dos pasos.
      </p>
      <h3>Paso 1: Pasar props al component hijo</h3>
      <p>
        Primero, pasa algunas props al elemento <span className={"shadow"}>Book</span>. Por ejemplo,
        vamos a asignar dos props: <span className={"shadow"}>person</span> &#40;un objeto&#41; y{" "}
        <span className={"shadow"}>size</span> &#40;un número&#41;:
      </p>
      <pre className="ide">
        <code>
          <span className={"pink"}>export </span>
          <span className={"pink"}>default </span>
          <span className={"blue"}>function </span>
          <span className={"yellow"}>Profile</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"yellow"}>&#41;</span>
          <span className={"yellow"}> &#123;</span>
          {"\n  "}
          <span className={"pink"}>return </span>
          <span className={"yellow"}>&#40;</span>
          {"\n    "}
          &lt;<span className={"green"}>Book</span> <span className={"celeste"}>person</span>
          <span className={"white"}>=</span>
          <span className={"yellow"}>&#123;</span>
          <span className={"yellow"}>&#123;</span>
          <span className={"celeste"}>name</span>
          <span className={"celeste"}>:</span>
          <span className={"orange"}>&#39;Lin Lanying&#39;</span>,
          <span className={"celeste"}>imageId</span>
          <span className={"celeste"}>:</span>
          <span className={"orange"}>&#39;1bX5QH6&#39;</span>
          <span className={"yellow"}>&#125;</span>
          <span className={"yellow"}>&#125;</span> <span className={"celeste"}>size</span>
          <span className={"white"}>=</span>
          <span className={"yellow"}>&#123;</span>
          <span className={"pink"}>100</span>
          <span className={"yellow"}>&#125;</span>
          /&gt;
          {"\n  "}
          <span className={"yellow"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>
        </code>
      </pre>
      <div className="great">
        <span>📓 Nota</span>
        <span>
          Si te resulta confuso el uso de llaves dobles después de{" "}
          <span className={"shadow"}>person=</span>, recuerda que{" "}
          <span className={"note"}>simplemente estamos pasando un objeto</span> dentro de las llaves
          JSX.
        </span>
      </div>
      <p>
        Ahora puedes acceder a estas props dentro del componente{" "}
        <span className={"shadow"}>Book</span>.
      </p>
      <h3>Paso 2: Acceder a props dentro del componente hijo</h3>
      <p>
        Puedes acceder a estas props especificando sus nombres{" "}
        <span className={"shadow"}>person</span>, <span className={"shadow"}>size</span> separados
        por comas dentro de <span className={"shadow"}>&#40;&#123;</span> y{" "}
        <span className={"shadow"}>&#125;&#41;</span> justo después de{" "}
        <span className={"shadow"}>function Book</span>. Esto te permitirá utilizarlas dentro del
        código de <span className={"shadow"}>Book</span> como si fueran variables.
      </p>
      <pre className="ide">
        <code>
          <span className={"blue"}>function </span>
          <span className={"yellow"}>Book</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"blue"}>&#123;</span>
          <span className={"celeste"}>person</span>,<span className={"celeste"}>size</span>
          <span className={"blue"}>&#125;</span>
          <span className={"yellow"}>&#41;</span>
          <span className={"yellow"}> &#123;</span>
          {"\n  "}
          <span className={"greendark"}>
            &#47;&#47; puedes acceder a los valores de person y size desde aquí
          </span>
          {"\n"}
          <span className={"yellow"}>&#125;</span>
        </code>
      </pre>
      <p>
        Agrega lógica a <span className={"shadow"}>Book</span> que utilice las props{" "}
        <span className={"shadow"}>person</span> y <span className={"shadow"}>size</span> para la
        renderización, ¡y eso es todo!.
      </p>
      <p>
        Ahora puedes configurar <span className={"shadow"}>Book</span> para que se renderice de
        diferentes maneras con distintas props. ¡Prueba ajustando los valores!
      </p>
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
          <span className={"celeste"}>person</span>,<span className={"celeste"}>size</span>
          <span className={"white"}>=</span>
          <span className={"orange"}>&#39;s&#39;</span>
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
          <span className={"celeste"}>size</span> <span className={"white"}>+</span>{" "}
          <span className={"orange"}>&#39;.jpg&#39;</span>
          {"\n  "}
          <span className={"yellow"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>
        </code>
      </pre>
      <pre className="ide">
        <code>
          <span className={"greendark"}>&#47;&#47;App.js</span>
          {"\n"}
        </code>
        <code>
          <span className={"pink"}>import</span> <span className="blue">&#123;</span>{" "}
          <span className={"celeste"}>getImageUrl</span> <span className="blue">&#125;</span>{" "}
          <span className={"pink"}>from</span>{" "}
          <span className={"orange"}>&#39;./utils.js&#39;</span>;{"\n\n"}
        </code>
        <code>
          <span className={"blue"}>function </span>
          <span className={"yellow"}>Book</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"blue"}>&#123;</span>
          <span className={"celeste"}>person</span>,<span className={"celeste"}>size</span>
          <span className={"blue"}>&#125;</span>
          <span className={"yellow"}>&#41;</span>
          <span className={"yellow"}> &#123;</span>
          {"\n  "}
          <span className={"pink"}>return </span>
          <span className={"yellow"}>&#40;</span>
          {"\n    "}
          <code>
            &lt;<span className="blue">img</span> <span className="celeste">className</span>
            <span className="white">=</span>
            <span className="orange">&quot;book&quot;</span> <span className="celeste">src</span>
            <span className="white">=</span>
            <span className="blue">&#123;</span>
            <span className={"yellow"}>getImageUrl</span>
            <span className={"orange"}>&#40;</span>
            <span className={"celeste"}>person</span>
            <span className={"orange"}>&#41;</span>
            <span className="blue">&#125;</span> <span className="celeste">alt</span>
            <span className="white">=</span>
            <span className="blue">&#123;</span>
            <span className={"celeste"}>person</span>
            <span className={"white"}>.</span>
            <span className={"celeste"}>name</span>
            <span className="blue">&#125;</span> <span className="celeste">width</span>
            <span className="white">=</span>
            <span className="blue">&#123;</span>
            <span className={"pink"}>size</span>
            <span className="blue">&#125;</span> <span className="celeste">height</span>
            <span className="white">=</span>
            <span className="blue">&#123;</span>
            <span className={"pink"}>size</span>
            <span className="blue">&#125;</span> /&gt;
          </code>
          {"\n  "}
          <span className={"yellow"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>
        </code>
        {"\n\n"}
        <code>
          <span className={"pink"}>export </span>
          <span className={"pink"}>default </span>
          <span className={"blue"}>function </span>
          <span className={"yellow"}>Profile</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"yellow"}>&#41;</span>
          <span className={"yellow"}> &#123;</span>
          {"\n  "}
          <span className={"pink"}>return </span>
          <span className={"yellow"}>&#40;</span>
          {"\n    "}
          &lt;<span className={"blue"}>div</span>&gt;
          {"\n      "}
          &lt;<span className={"green"}>Book</span> <span className="celeste">size</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className={"pink"}>100</span>
          <span className="blue">&#125;</span> <span className="celeste">person</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="blue">&#123;</span>
          <span className={"celeste"}>name</span>
          <span className={"white"}>:</span>
          <span className={"orange"}>&#39;Katsuko Saruhashi&#39;</span>,
          <span className={"celeste"}>imageId</span>
          <span className={"white"}>:</span>
          <span className={"orange"}>&#39;YfeOqp2&#39;</span>
          <span className="blue">&#125;</span>
          <span className="blue">&#125;</span> /&gt;
          {"\n      "}
          &lt;<span className={"green"}>Book</span> <span className="celeste">size</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className={"pink"}>80</span>
          <span className="blue">&#125;</span> <span className="celeste">person</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="blue">&#123;</span>
          <span className={"celeste"}>name</span>
          <span className={"white"}>:</span>
          <span className={"orange"}>&#39;Aklilu Lemma&#39;</span>,
          <span className={"celeste"}>imageId</span>
          <span className={"white"}>:</span>
          <span className={"orange"}>&#39;OKS67lh&#39;</span>
          <span className="blue">&#125;</span>
          <span className="blue">&#125;</span> /&gt;
          {"\n      "}
          &lt;<span className={"green"}>Book</span> <span className="celeste">size</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className={"pink"}>50</span>
          <span className="blue">&#125;</span> <span className="celeste">person</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="blue">&#123;</span>
          <span className={"celeste"}>name</span>
          <span className={"white"}>:</span>
          <span className={"orange"}>&#39;Lin Lanying&#39;</span>,
          <span className={"celeste"}>imageId</span>
          <span className={"white"}>:</span>
          <span className={"orange"}>&#39;1bX5QH6&#39;</span>
          <span className="blue">&#125;</span>
          <span className="blue">&#125;</span> /&gt;
          {"\n    "}
          &lt;/<span className={"blue"}>div</span>&gt;{"\n  "}
          <span className={"yellow"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>
        </code>
      </pre>
      <p>
        Las props te permiten considerar de forma independiente los componentes padre e hijo. Por
        ejemplo, puedes modificar las props <span className={"shadow"}>person</span> o{" "}
        <span className={"shadow"}>size</span> dentro del componente{" "}
        <span className={"shadow"}>Profile</span> sin preocuparte por cómo serán utilizadas por el
        componente <span className={"shadow"}>Book</span>. De manera similar, puedes cambiar la
        forma en que <span className={"shadow"}>Book</span> utiliza estas props sin necesidad de
        revisar el componente
        <span className={"shadow"}>Profile</span>.
      </p>
      <p>
        Considera las props como <b>«controles»</b> que puedes ajustar. Cumplen el mismo papel que
        los argumentos de una función—de hecho, ¡las props son el único argumento de tu componente!
        Las funciones de los componentes de React aceptan un único argumento, un objeto{" "}
        <span className={"shadow"}>props</span>:
      </p>
      <pre className="ide">
        <code>
          <span className="blue">function</span> <span className="yellow">Book</span>
          <span className="yellow">&#40;</span>
          <span className="celeste">props</span>
          <span className="yellow">&#41;</span> <span className="yellow">&#123;</span>
          {"\n  "}
          <span className="blue">let</span> <span className="celeste">person</span>
          <span className="white">=</span>
          <span className="celeste">props</span>
          <span className="white">.</span>
          <span className="celeste">person</span>;{"\n  "}
          <span className="blue">let</span>
          <span className="celeste">size</span>
          <span className="white">=</span>
          <span className="celeste">props</span>
          <span className="white">.</span>
          <span className="celeste">size</span>;{"\n  "}
          <span className="greendark">&#47;&#47; ...</span>
          {"\n"}
          <span className="yellow">&#125;</span>
        </code>
      </pre>
      <p>
        En general, no necesitas acceder al objeto completo de <span className="shadow">props</span>
        , por lo que puedes desestructurarlo en props individuales.
      </p>
      <div className="alert">
        <span>❗Atención</span>
        <span>
          Asegurate de incluir el par de llaves <span className="shadow">&#123;</span> y{" "}
          <span className="shadow">&#125;</span> dentro de <span className="shadow">&#40;</span> y{" "}
          <span className="shadow">&#41;</span> al declarar las props:
        </span>
        <pre className="ide">
          <code>
            <span className="blue">function</span> <span className="yellow">Book</span>
            <span className="yellow">&#40;</span>
            <span className="orange">&#123;</span>
            <span className="celeste">person</span>,<span className="celeste">size</span>
            <span className="orange">&#125;</span>
            <span className="yellow">&#41;</span> <span className="yellow">&#123;</span>
            {"\n  "}
            <span className="greendark">&#47;&#47; ...</span>
            {"\n"}
            <span className="yellow">&#125;</span>
          </code>
        </pre>
        <p>
          Esta sintaxis se conoce como <span className="note">«desestructuración»</span> y es
          equivalente a acceder a propiedades de un parámetro de función:
        </p>
        <pre className="ide">
          <code>
            <span className="blue">function</span> <span className="yellow">Book</span>
            <span className="yellow">&#40;</span>
            <span className="celeste">props</span>
            <span className="yellow">&#41;</span> <span className="yellow">&#123;</span>
            {"\n  "}
            <span className="blue">let</span> <span className="celeste">person</span>
            <span className="white">=</span>
            <span className="celeste">props</span>
            <span className="white">.</span>
            <span className="celeste">person</span>;{"\n  "}
            <span className="blue">let</span>
            <span className="celeste">size</span>
            <span className="white">=</span>
            <span className="celeste">props</span>
            <span className="white">.</span>
            <span className="celeste">size</span>;{"\n  "}
            <span className="greendark">&#47;&#47; ...</span>
            {"\n"}
            <span className="yellow">&#125;</span>
          </code>
        </pre>
      </div>
      <h3 id="asingValue">Asignar un valor predeterminado para una prop</h3>
      <p>
        Si quieres asignar un valor predeterminado para una prop en caso de que no se especifique
        ningún valor, puedes hacerlo mediante la desestructuración colocando{" "}
        <span className="shadow">=</span> seguido del valor predeterminado justo después del
        parámetro:
      </p>
      <pre className="ide">
        <code>
          <span className="blue">function</span> <span className="yellow">Book</span>
          <span className="yellow">&#40;</span>
          <span className="orange">&#123;</span>
          <span className="celeste">person</span>,<span className="celeste">size</span>
          <span className="white">=</span>
          <span className="pink">100</span>
          <span className="orange">&#125;</span>
          <span className="yellow">&#41;</span> <span className="yellow">&#123;</span>
          {"\n  "}
          <span className="greendark">&#47;&#47; ...</span>
          {"\n"}
          <span className="yellow">&#125;</span>
        </code>
      </pre>
      <p>
        Ahora, si renderizas <span className="shadow">&lt;Avatar person=&#123;...&#125; /&gt;</span>{" "}
        sin la prop <span className="shadow">size</span>, el valor de{" "}
        <span className="shadow">size</span> se establecerá automáticamente en{" "}
        <span className="shadow">100</span>.
      </p>
      <p>
        El valor predeterminado sólo se utilizará si falta la prop{" "}
        <span className="shadow">size</span> o si se pasa{" "}
        <span className="shadow">size= &#123;undefined&#125;</span>. Sin embargo, si se pasa{" "}
        <span className="shadow">size=&#123;null&#125;</span> o{" "}
        <span className="shadow">size=&#123;0&#125;</span>, el valor predeterminado no se aplicará.
      </p>
      <h3>Reenviar props con la sintaxis de propagación JSX </h3>
      <p>A veces, pasar props se vuelve muy repetitivo:</p>
      <pre className="ide">
        <code>
          <span className="blue">function</span> <span className="yellow">Book</span>
          <span className="yellow">&#40;</span>
          <span className="orange">&#123;</span>
          <span className="celeste">person</span>,<span className="celeste">size</span>,
          <span className="celeste">isSepia</span>,<span className="celeste">thickBorder</span>
          <span className="orange">&#125;</span>
          <span className="yellow">&#41;</span> <span className="yellow">&#123;</span>
          {"\n  "}
          <span className={"pink"}>return </span>
          <span className={"yellow"}>&#40;</span>
          {"\n    "}
          &lt;<span className={"blue"}>div</span> <span className={"celeste"}>className</span>
          <span className={"white"}>=</span>
          <span className={"orange"}>&quot;card&quot;</span>&gt;
          {"\n      "}&lt;
          <span className={"green"}>Book</span> <span className="celeste">person</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className={"celeste"}>person</span>
          <span className="blue">&#125;</span> <span className="celeste">size</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className={"celeste"}>size</span>
          <span className="blue">&#125;</span> <span className="celeste">isSepia</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className={"celeste"}>isSepia</span>
          <span className="blue">&#125;</span> <span className="celeste">thickBorder</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className={"celeste"}>thickBorder</span>
          <span className="blue">&#125;</span> /&gt;
          {"\n    "}&lt;<span className={"blue"}>/div</span>
          &gt;
          {"\n  "}
          <span className="yellow">&#41;</span>;{"\n"}
          <span className="yellow">&#125;</span>
        </code>
      </pre>
      <p>
        No hay ningún problema en tener código repetitivo—ya que puede ser más legible. Sin embargo,
        en ocasiones, es posible que prefieras ser más conciso. Algunos componentes reenvían todas
        sus props a sus hijos, como lo hace <span className="shadow">Profile</span> con{" "}
        <span className="shadow">Book</span>. Dado que no utilizan directamente ninguna de sus
        props, tiene sentido utilizar una sintaxis de «propagación» más concisa:
      </p>
      <pre className="ide">
        <code>
          <span className="blue">function</span> <span className="yellow">Book</span>
          <span className="yellow">&#40;</span>
          <span className="celeste">props</span>
          <span className="yellow">&#41;</span> <span className="yellow">&#123;</span>
          {"\n  "}
          <span className={"pink"}>return </span>
          <span className={"yellow"}>&#40;</span>
          {"\n    "}
          &lt;<span className={"blue"}>div</span> <span className={"celeste"}>className</span>
          <span className={"white"}>=</span>
          <span className={"orange"}>&quot;card&quot;</span>&gt;
          {"\n      "}&lt;
          <span className={"green"}>Book</span> <span className="celeste">person</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className={"celeste"}>...props</span>
          <span className="blue">&#125;</span> /&gt;
          {"\n    "}&lt;<span className={"blue"}>/div</span>
          &gt;
          {"\n  "}
          <span className="yellow">&#41;</span>;{"\n"}
          <span className="yellow">&#125;</span>
        </code>
      </pre>
      <p>
        Esto permite reenviar todas las props de <span className="shadow">Profile</span> a{" "}
        <span className="shadow">Book</span> sin la necesidad de especificar cada una de ellas.
      </p>
      <p>
        <b>Recuerda utilizar la sintaxis de propagación con moderación</b>. Si estás utilizando esta
        sintaxis en cada componente, es probable que algo no esté correctamente estructurado. En
        muchos casos, esto sugiere que deberías dividir tus componentes y pasar los hijos como
        elementos JSX separados. ¡Más información sobre esto a continuación!
      </p>
      <h3 id="pasarchildrem">Pasar JSX como hijos</h3>
      <p>Es común anidar etiquetas nativas del navegador:</p>
      <pre className="ide">
        &lt;<span className={"blue"}>div</span>&gt;{"\n  "}
        &lt;<span className={"blue"}>img</span> /&gt;{"\n"}
        &lt;/<span className={"blue"}>div</span>&gt;
      </pre>
      <p>En ocasiones, querrás anidar tus propios componentes de la misma forma:</p>
      <pre className="ide">
        &lt;/<span className={"green"}>card</span>&gt;{"\n  "}
        &lt;<span className={"green"}>Book</span> /&gt;{"\n"}
        &lt;/<span className={"green"}>card</span>&gt;
      </pre>
      <p>
        Al anidar contenido dentro de una etiqueta JSX, el componente padre recibirá ese contenido a
        través de una prop llamada <span className={"blue"}>children</span>. En el ejemplo a
        continuación, el componente <span className={"blue"}>Card</span> recibe una prop{" "}
        <span className={"blue"}>children</span> con el valor de{" "}
        <span className={"blue"}>&lt;Book /&gt;</span> y lo renderiza dentro de un div contenedor:
      </p>
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
          <span className={"celeste"}>person</span>,<span className={"celeste"}>size</span>
          <span className={"white"}>=</span>
          <span className={"orange"}>&#39;s&#39;</span>
          <span className={"yellow"}>&#41;</span>
          <span className={"yellow"}> &#123;</span>
          {"\n  "}
          <span className={"pink"}>return </span>
          <span className={"yellow"}>&#40;</span>
          <span className={"orange"}>&#39;https://i.imgur.com/&#39;</span>{" "}
          <span className={"white"}>+</span> <span className={"celeste"}>person</span>
          <span className={"white"}>.</span>
          <span className={"celeste"}>imageId</span> <span className={"white"}>+</span>{" "}
          <span className={"celeste"}>size</span> <span className={"white"}>+</span>{" "}
          <span className={"orange"}>&#39;.jpg&#39;</span>
          <span className={"yellow"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>
        </code>
      </pre>
      <pre className="ide">
        <code>
          <span className={"greendark"}>&#47;&#47;Book.js</span>
          {"\n"}
        </code>
        <code>
          <span className={"pink"}>import</span> <span className="blue">&#123;</span>{" "}
          <span className={"celeste"}>getImageUrl</span> <span className="blue">&#125;</span>{" "}
          <span className={"pink"}>from</span>{" "}
          <span className={"orange"}>&#39;./utils.js&#39;</span>;{"\n\n"}
        </code>
        <code>
          <span className={"pink"}>export </span>
          <span className={"pink"}>default </span>
          <span className={"blue"}>function </span>
          <span className={"yellow"}>Book</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"blue"}>&#123;</span>
          <span className={"celeste"}>person</span>,<span className={"celeste"}>size</span>
          <span className={"blue"}>&#125;</span>
          <span className={"yellow"}>&#41;</span>
          <span className={"yellow"}> &#123;</span>
          {"\n  "}
          <span className={"pink"}>return </span>
          <span className={"yellow"}>&#40;</span>
          {"\n    "}
          <code>
            &lt;<span className="blue">img</span> <span className="celeste">className</span>
            <span className="white">=</span>
            <span className="orange">&quot;book&quot;</span> <span className="celeste">src</span>
            <span className="white">=</span>
            <span className="blue">&#123;</span>
            <span className={"yellow"}>getImageUrl</span>
            <span className={"orange"}>&#40;</span>
            <span className={"celeste"}>person</span>
            <span className={"orange"}>&#41;</span>
            <span className="blue">&#125;</span> <span className="celeste">alt</span>
            <span className="white">=</span>
            <span className="blue">&#123;</span>
            <span className={"celeste"}>person</span>
            <span className={"white"}>.</span>
            <span className={"celeste"}>name</span>
            <span className="blue">&#125;</span> <span className="celeste">width</span>
            <span className="white">=</span>
            <span className="blue">&#123;</span>
            <span className={"pink"}>size</span>
            <span className="blue">&#125;</span> <span className="celeste">height</span>
            <span className="white">=</span>
            <span className="blue">&#123;</span>
            <span className={"pink"}>size</span>
            <span className="blue">&#125;</span> /&gt;
          </code>
          {"\n  "}
          <span className={"yellow"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>
        </code>
      </pre>
      <pre className="ide">
        <code>
          <span className={"greendark"}>&#47;&#47;App.js</span>
          {"\n"}
        </code>
        <code>
          <span className={"pink"}>import</span> <span className={"celeste"}>Book</span>{" "}
          <span className={"pink"}>from</span> <span className={"orange"}>&#39;./Book.js&#39;</span>
          ;{"\n\n"}
        </code>
        <code>
          <span className={"blue"}>function </span>
          <span className={"yellow"}>Card</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"blue"}>&#123;</span>
          <span className={"celeste"}>children</span>
          <span className={"blue"}>&#125;</span>
          <span className={"yellow"}>&#41;</span>
          <span className={"yellow"}> &#123;</span>
          {"\n  "}
          <span className={"pink"}>return </span>
          <span className={"yellow"}>&#40;</span>
          {"\n    "}
          &lt;<span className="blue">div</span>&gt;{"\n      "}
          <span className="white">&#123;</span>
          <span className="white">children</span>
          <span className="white">&#125;</span>
          {"\n    "}&lt;/
          <span className="blue">div</span>
          &gt;
          {"\n  "}
          <span className={"yellow"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>
          {"\n\n"}
        </code>
        <code>
          <span className={"pink"}>export </span>
          <span className={"pink"}>default </span>
          <span className={"blue"}>function </span>
          <span className={"yellow"}>Profile</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"yellow"}>&#41;</span>
          <span className={"yellow"}> &#123;</span>
          {"\n  "}
          <span className={"pink"}>return </span>
          <span className={"yellow"}>&#40;</span>
          {"\n    "}
          &lt;<span className="blue">Card</span>&gt;
          {"\n      "}
          &lt;<span className="blue">Book</span> <span className="celeste">size</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="pink">100</span>
          <span className="blue">&#125;</span> <span className="celeste">person</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="blue">&#123;</span> <span className="celeste">name</span>
          <span className="white">:</span>
          <span className="orange">&#39;Katsuko Saruhashi&#39;</span>,{" "}
          <span className="celeste">imageId</span>
          <span className="white">:</span>
          <span className="orange">&#39;YfeOqp2&#39;</span> <span className="blue">&#125;</span>
          <span className="blue">&#125;</span> /&gt;
          {"\n    "}
          &lt;/<span className="blue">Card</span>&gt;
          {"\n  "}
          <span className={"yellow"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>
        </code>
      </pre>
      <p>
        Prueba cambiando <span className={"shadow"}>&lt;Book&gt;</span> dentro de{" "}
        <span className={"shadow"}>&lt;Card&gt;</span> con algún texto para ver cómo el componente{" "}
        <span className={"shadow"}>Card</span> puede envolver cualquier contenido anidado. No es
        necesario que el componente «sepa» qué se está renderizando dentro de él. Este patrón
        flexible se puede observar en muchos casos.
      </p>
      <p>
        Puedes imaginar un componente con una prop <span className={"shadow"}>children</span> como
        si tuviera un «hueco» que puede ser «llenado» por sus componentes padres con JSX arbitrario.
        La prop children suele utilizarse para crear envoltorios visuales como paneles, rejillas,
        etc.
      </p>
      <img src="../../public/i_children-prop.png" alt="inherit" />
      <h3 id="changeprops">Cómo las props cambian con el tiempo</h3>
      <p>
        El componente <span className={"shadow"}>Clock</span> que se muestra a continuación recibe
        dos props de su componente padre: <span className={"shadow"}>color</span> y{" "}
        <span className={"shadow"}>time</span>. &#40;Se omite el código del componente padre porque
        utiliza <span className={"note"}>estado</span>, del cual no ahondaremos en este
        momento.&#41;
      </p>
      <p>Prueba cambiando el color en la lista desplegable que aparece a continuación:</p>
      <pre className="ide">
        <code>
          <span className={"greendark"}>&#47;&#47;Clock.js</span>
          {"\n"}
        </code>
        <code>
          <span className={"pink"}>export </span>
          <span className={"pink"}>default </span>
          <span className={"blue"}>function </span>
          <span className={"yellow"}>Profile</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"yellow"}>&#41;</span>
          <span className={"yellow"}> &#123;</span>
          {"\n  "}
          <span className={"pink"}>return </span>
          <span className={"yellow"}>&#40;</span>
          {"\n    "}
          &lt;<span className="blue">h1</span> <span className="celeste">style</span>
          <span className="white">=</span>
          <span className="blue">&#123;&#123;</span>
          <span className="celeste">color</span>
          <span className="white">:</span>
          <span className="celeste">color</span>
          <span className="blue">&#125;&#125;</span>&gt;
          {"\n      "}
          <span className="blue">&#123;</span>
          <span className="celeste">time</span>
          <span className="blue">&#125;</span>
          {"\n    "}
          &lt;/<span className="blue">h1</span>&gt;
          {"\n  "}
          <span className={"yellow"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>
        </code>
      </pre>
      <p>
        Este ejemplo demuestra que{" "}
        <b>un componente puede recibir props que cambian a lo largo del tiempo</b>. ¡Las props no
        siempre son estáticas! Aquí, la prop <span className={"shadow"}>time</span> cambia a cada
        segundo, y la prop <span className={"shadow"}>color</span> cambia cuando se elige un color
        diferente. Las props reflejan los datos de un componente en cualquier momento, y no sólo al
        inicio.
      </p>
      <p>
        Sin embargo, las props son <span className={"note"}>inmutables</span>—un término de la
        informática que significa «inalterable». Si un componente necesita cambiar sus props (por
        ejemplo, en respuesta a una interacción del usuario o nuevos datos), debe «solicitar» a su
        componente padre que le pase nuevas props—¡un nuevo objeto! Las props antiguas se
        descartarán y eventualmente el motor de JavaScript liberará la memoria que ocupaban.
      </p>
      <p>
        <b>No intentes «cambiar las props»</b>. Cuando necesites responder al input del usuario
        (como cambiar el color seleccionado), deberás «establecer un estado», lo cual puedes
        aprender en <span className={"note"}>El estado: la memoria de un componente</span>.
      </p>
    </>
  );
}
