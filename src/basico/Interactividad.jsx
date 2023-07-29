const Interactivo = () => {
  return (
    <>
      <h1>Agregar interactividad</h1>
      <p>
        Algunas cosas en la pantalla se actualizan en respuesta a la
        entrada del usuario. Por ejemplo, hacer clic en una galería de
        imágenes cambia la imagen activa. En React, los datos que
        cambian con el tiempo se denominan estado. Puedes agregar
        estado a cualquier componente y actualizarlo según sea
        necesario. En este capítulo, aprenderás a escribir componentes
        que controlen interacciones, actualicen tu estado y muestren
        resultados diferentes a lo largo del tiempo.
      </p>
      <h3>Responder a eventos </h3>
      <p>
        React te permite agregar controladores de eventos a tu JSX.
        Los controladores de eventos son tus propias funciones que se
        activarán en respuesta a las interacciones del usuario, como
        hacer clic, pasar el mouse, enfocarse en las entradas de un
        formulario, etc.
      </p>
      <p>
        Los componentes integrados como &lt;button&gt; solo admiten
        eventos de navegador integrados como onClick. Sin embargo,
        también puedes crear tus propios componentes y darle a sus
        props de controladores de eventos los nombres específicos de
        la aplicación que desees.
      </p>
      <pre className="ide">
        <code>
          <span className={"pink"}>export</span>{" "}
          <span className={"pink"}>default</span>{" "}
          <span className={"blue"}>function</span>{" "}
          <span className={"yellow"}>App</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"yellow"}>&#41;</span>{" "}
          <span className={"yellow"}>&#123;</span>
          {"\n  "}
          <span className={"pink"}>return</span>{" "}
          <span className={"pink"}>&#40;</span>
          {"\n    "}
          &lt;
          <span className={"green"}>Toolbar</span>{" "}
          <span className={"celeste"}>onPlayMovie</span>
          <span className={"white"}>=</span>
          <span className={"blue"}>&#123;</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"yellow"}>&#41;</span>
          <span className={"white"}>=&gt;</span>{" "}
          <span className={"yellow"}>alert</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"orange"}>&#39;¡Reproduciendo!&#39;</span>
          <span className={"yellow"}>&#41;</span>
          <span className={"blue"}>&#125;</span>{" "}
          <span className={"celeste"}>onUploadImage</span>
          <span className={"white"}>=</span>
          <span className={"blue"}>&#123;</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"yellow"}>&#41;</span>
          <span className={"white"}>=&gt;</span>
          <span className={"yellow"}>alert</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"orange"}>&#39;¡Cargando!&#39;</span>
          <span className={"yellow"}>&#41;</span>
          <span className={"blue"}>&#125;</span> /&gt;{"\n  "}
          <span className={"pink"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>
          {"\n\n"}
        </code>
        <code>
          <span className={"pink"}>function</span>
          <span className={"yellow"}>Toolbar</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"blue"}>&#123;</span>
          <span className={"celeste"}>onPlayMovie</span>,
          <span className={"celeste"}>onUploadImage</span>
          <span className={"blue"}>&#125;</span>
          <span className={"yellow"}>&#41;</span>{" "}
          <span className={"yellow"}>&#123;</span>
          {"\n  "}
          <span className={"pink"}>return</span>
          <span className={"pink"}>&#40;</span>
          {"\n    "}
          &lt;<span className={"blue"}>div</span>&gt;{"\n      "}
          &lt;<span className={"green"}>Button</span>{" "}
          <span className={"celeste"}>onClick</span>
          <span className={"white"}>=</span>
          <span className={"yellow"}>&#123;</span>
          <span className={"celeste"}>onPlayMovie</span>
          <span className={"yellow"}>&#125;</span>&gt;
          <span className={"white"}>Reproducir película</span>
          &lt;/<span className={"green"}>Button</span>&gt;
          {"\n      "}&lt;<span className={"green"}>Button</span>{" "}
          <span className={"celeste"}>onClick</span>
          <span className={"white"}>=</span>
          <span className={"yellow"}>&#123;</span>
          <span className={"celeste"}>onUploadImage</span>
          <span className={"yellow"}>&#125;</span>&gt;
          <span className={"white"}>Cargar imagen</span>
          &lt;/<span className={"green"}>Button</span>&gt;
          {"\n    "}&lt;/<span className={"blue"}>div</span>&gt;
          {"\n  "}
          <span className={"pink"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>
          {"\n\n"}
        </code>
        <code>
          <span className={"blue"}>function</span>{" "}
          <span className={"yellow"}>Button</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"blue"}>&#123;</span>{" "}
          <span className={"celeste"}>onClick</span>,
          <span className={"celeste"}>children</span>{" "}
          <span className={"blue"}>&#125;</span>
          <span className={"yellow"}>&#41;</span>{" "}
          <span className={"yellow"}>&#123;</span>
          {"\n  "}
          <span className={"yellow"}>return</span>{" "}
          <span className={"yellow"}>&#40;</span>
          {"\n    "}
          &lt;<span className={"green"}>button</span>{" "}
          <span className={"celeste"}>onClick</span>
          <span className={"white"}>=</span>
          <span className={"blue"}>&#123;</span>
          <span className={"celeste"}>onClick</span>
          <span className={"blue"}>&#125;</span>&gt;
          <span className={"blue"}>&#123;</span>
          <span className={"celeste"}>children</span>
          <span className={"blue"}>&#125;</span>
          &lt;/<span className={"green"}>button</span>&gt;{"\n  "}
          <span className={"yellow"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>
        </code>
      </pre>
      <h3>El estado: la memoria de un componente</h3>
      <p>
        Los componentes a menudo necesitan cambiar lo que aparece en
        la pantalla como resultado de una interacción. Escribir en el
        formulario debería actualizar el campo de entrada, hacer clic
        en «siguiente» en un carrusel de imágenes debería cambiar la
        imagen que se muestra, hacer clic en «comprar» pone un
        producto en el carrito de compras. Los componentes necesitan
        «recordar» cosas: el valor de entrada actual, la imagen
        actual, el carrito de compras. En React, este tipo de memoria
        específica del componente se llama estado.
      </p>
      <p>
        Puedes agregar estado a un componente con un{" "}
        <span className="note">useState</span> Hook. Los Hooks son
        funciones especiales que permiten que tus componentes usen
        funciones de React (el estado es una de esas funciones). El
        Hook <span className="shadow">useState</span> te permite
        declarar una variable de estado. Toma el estado inicial y
        devuelve un par de valores: el estado actual y una función de
        establecimiento de estado que te permite actualizarlo.
      </p>
      <pre className="ide">
        <code>
          <span className="blue">const</span>{" "}
          <span className="yellow">&#91;</span>
          <span className="celeste">index</span>,{" "}
          <span className="celeste">setIndex</span>
          <span className="yellow">&#93;</span>{" "}
          <span className="white">=</span>{" "}
          <span className="green">useState</span>
          <span className="yellow">&#40;</span>
          <span className="orange">0</span>
          <span className="yellow">&#41;</span>;{"\n"}
          <span className="blue">const</span>{" "}
          <span className="yellow">&#91;</span>
          <span className="celeste">showMore</span>,{" "}
          <span className="celeste">setShowMore</span>
          <span className="yellow">&#93;</span>{" "}
          <span className="white">=</span>{" "}
          <span className="green">useState</span>
          <span className="yellow">&#40;</span>
          <span className="celeste">false</span>
          <span className="yellow">&#41;</span>;
        </code>
      </pre>
      <p>
        Así es como una galería de imágenes usa y actualiza el estado
        al hacer clic:
      </p>
      <pre className="ide">
        <code>
          <span className="greendark">&#47;&#47;data.js</span>
          {"\n"}
        </code>
        <code>
          <span className="blue">const</span>{" "}
          <span className="celeste">sculptureList</span>
          <span className="white">=</span>
          <span className="yellow">&#91;</span>
          <span className="blue">&#123;</span>
          {"\n  "}
          <span className="celeste">name</span>
          <span className="white">:</span>
          <span className="pink">
            &#39;Homenaje a la Neurocirugía&#39;
          </span>
          ,{"\n  "}
          <span className="celeste">artist</span>
          <span className="white">:</span>
          <span className="orange">
            &#39;Marta Colvin Andrade&#39;
          </span>
          ,{"\n  "}
          <span className="celeste">description</span>
          <span className="white">:</span>
          <span className="orange">
            &#39;Aunque Colvin es predominantemente conocida por temas
            abstractos que aluden a símbolos prehispánicos, esta
            gigantesca escultura, un homenaje a la neurocirugía, es
            una de sus obras de arte público más reconocibles.&#39;
          </span>
          ,{"\n  "}
          <span className="celeste">url</span>
          <span className="white">:</span>
          <span className="orange">
            &#39;https://i.imgur.com/Mx7dA2Y.jpg&#39;
          </span>
          ,{"\n  "}
          <span className="celeste">alt</span>
          <span className="white">:</span>
          <span className="orange">
            &#39;Una estatua de bronce de dos manos cruzadas
            sosteniendo delicadamente un cerebro humano en la punta de
            sus dedos.&#39;
          </span>
          {"\n"}
          <span className="blue">&#125;</span>,
          <span className="blue">&#123;</span>
          {"\n  "}
          <span className="celeste">name</span>
          <span className="white">:</span>
          <span className="pink">&#39;Floralis Genérica&#39;</span>,
          {"\n  "}
          <span className="celeste">artist</span>
          <span className="white">:</span>
          <span className="orange">&#39;Eduardo Catalano&#39;</span>,
          {"\n  "}
          <span className="celeste">description</span>
          <span className="white">:</span>
          <span className="orange">
            &#39;Esta enorme flor plateada (75 pies o 23 m) se
            encuentra en Buenos Aires. Está diseñado para moverse,
            cerrando sus pétalos por la tarde o cuando soplan fuertes
            vientos y abriéndolos por la mañana.&#39;
          </span>
          ,{"\n  "}
          <span className="celeste">url</span>
          <span className="white">:</span>
          <span className="orange">
            &#39;https://i.imgur.com/ZF6s192m.jpg&#39;
          </span>
          ,{"\n  "}
          <span className="celeste">alt</span>
          <span className="white">:</span>
          <span className="orange">
            &#39;Una gigantesca escultura de flor metálica con pétalos
            reflectantes como espejos y fuertes estambres.&#39;
          </span>
          {"\n"}
          <span className="blue">&#125;</span>,
          <span className="blue">&#123;</span>
          {"\n  "}
          <span className="celeste">name</span>
          <span className="white">:</span>
          <span className="pink">&#39;Eternal Presence&#39;</span>,
          {"\n  "}
          <span className="celeste">artist</span>
          <span className="white">:</span>
          <span className="orange">
            &#39;John Woodrow Wilson&#39;
          </span>
          ,{"\n  "}
          <span className="celeste">description</span>
          <span className="white">:</span>
          <span className="orange">
            &#39;Wilson era conocido por su preocupación por la
            igualdad, la justicia social, así como por las cualidades
            esenciales y espirituales de la humanidad. Este bronce
            masivo (7 pies o 2,13 m) representa lo que él describió
            como &quot;una presencia negra simbólica infundida con un
            sentido de humanidad universal&quot;.&quot;&#39;
          </span>
          ,{"\n  "}
          <span className="celeste">url</span>
          <span className="white">:</span>
          <span className="orange">
            &#39;https://i.imgur.com/aTtVpES.jpg&#39;
          </span>
          ,{"\n  "}
          <span className="celeste">alt</span>
          <span className="white">:</span>
          <span className="orange">
            &#39;La escultura que representa una cabeza humana parece
            omnipresente y solemne. Irradia calma y serenidad.&#39;
          </span>
          {"\n"}
          <span className="blue">&#125;</span>,
          <span className="blue">&#123;</span>
          {"\n  "}
          <span className="celeste">name</span>
          <span className="white">:</span>
          <span className="pink">&#39;Moai&#39;</span>,{"\n  "}
          <span className="celeste">artist</span>
          <span className="white">:</span>
          <span className="orange">
            &#39;Artista desconocido&#39;
          </span>
          ,{"\n  "}
          <span className="celeste">description</span>
          <span className="white">:</span>
          <span className="orange">
            &#39;Ubicados en la Isla de Pascua, hay 1,000 moai, o
            estatuas monumentales existentes, creadas por los primeros
            rapa nui, que algunos creen que representan a ancestros
            deificados.&#39;
          </span>
          ,{"\n  "}
          <span className="celeste">url</span>
          <span className="white">:</span>
          <span className="orange">
            &#39;https://i.imgur.com/RCwLEoQm.jpg&#39;
          </span>
          ,{"\n  "}
          <span className="celeste">alt</span>
          <span className="white">:</span>
          <span className="orange">
            &#39;Tres bustos monumentales de piedra con las cabezas
            desproporcionadamente grandes con rostros sombríos.&#39;
          </span>
          {"\n"}
          <span className="blue">&#125;</span>
          <span className="yellow">&#93;</span>;{"\n\n"}
        </code>
      </pre>

      <pre className="ide">
        <code>
          <span className="greendark">&#47;&#47;App.js</span>
          {"\n"}
        </code>
        <code>
          <span className={"pink"}>import</span>{" "}
          <span className={"blue"}>&#123;</span>{" "}
          <span className={"celeste"}>useState</span>{" "}
          <span className={"blue"}>&#125;</span>{" "}
          <span className={"pink"}>from</span>{" "}
          <span className={"orange"}>&#39;react&#39;</span>;{"\n"}
          <span className={"pink"}>import</span>{" "}
          <span className={"blue"}>&#123;</span>{" "}
          <span className={"celeste"}>sculptureList</span>{" "}
          <span className={"blue"}>&#125;</span>{" "}
          <span className={"pink"}>from</span>{" "}
          <span className={"orange"}>&#39;./data.js&#39;</span>;
          {"\n\n"}
        </code>
        <code>
          <span className={"pink"}>export</span>{" "}
          <span className={"pink"}>default</span>{" "}
          <span className={"blue"}>function</span>{" "}
          <span className={"yellow"}>Gallery</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"yellow"}>&#41;</span>{" "}
          <span className={"yellow"}>&#123;</span>
          {"\n\n"}
        </code>
        <code>
          <span className="blue">const</span>{" "}
          <span className="yellow">&#91;</span>
          <span className="celeste">index</span>,{" "}
          <span className="celeste">setIndex</span>
          <span className="yellow">&#93;</span>{" "}
          <span className="white">=</span>{" "}
          <span className="green">useState</span>
          <span className="yellow">&#40;</span>
          <span className="orange">0</span>
          <span className="yellow">&#41;</span>;{"\n"}
          <span className="blue">const</span>{" "}
          <span className="yellow">&#91;</span>
          <span className="celeste">showMore</span>,{" "}
          <span className="celeste">setShowMore</span>
          <span className="yellow">&#93;</span>{" "}
          <span className="white">=</span>{" "}
          <span className="green">useState</span>
          <span className="yellow">&#40;</span>
          <span className="celeste">false</span>
          <span className="yellow">&#41;</span>;{"\n"}
          <span className="blue">const</span>{" "}
          <span className="celeste">hasNext</span>{" "}
          <span className="white">=</span>{" "}
          <span className="celeste">index</span>{" "}
          <span className="white">&lt;</span>{" "}
          <span className="celeste">sculptureList</span>
          <span className="white">.</span>
          <span className="blue">length</span>{" "}
          <span className="white">-</span>{" "}
          <span className="orange">1</span>;{"\n\n"}
        </code>
        <code>
          <span className={"blue"}>function</span>{" "}
          <span className={"yellow"}>handleNextClick</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"yellow"}>&#41;</span>{" "}
          <span className={"yellow"}>&#123;</span>
          {"\n  "}
          <span className={"pink"}>if</span>
          <span className={"blue"}>&#40;</span>
          <span className={"celeste"}>hasNext</span>
          <span className={"blue"}>&#41;</span>{" "}
          <span className={"pink"}>&#123;</span>
          {"\n    "}
          <span className={"yellow"}>setIndex</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"celeste"}>index</span>{" "}
          <span className={"white"}>+</span>{" "}
          <span className={"orange"}>1</span>
          <span className={"yellow"}>&#41;</span>
          {"\n  "}
          <span className={"pink"}>&#125;</span>
          <span className={"blue"}>else</span>
          <span className={"pink"}>&#123;</span>
          {"\n    "}
          <span className={"yellow"}>setIndex</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"orange"}>0</span>
          <span className={"yellow"}>&#41;</span>
          {"\n  "}
          <span className={"pink"}>&#125;</span>
          {"\n"}
          <span className={"yellow"}>&#125;</span>
          {"\n\n"}
        </code>
        <code>
          <span className={"blue"}>function</span>{" "}
          <span className={"yellow"}>handleMoreClick</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"yellow"}>&#41;</span>{" "}
          <span className={"yellow"}>&#123;</span>
          {"\n  "}
          <span className={"yellow"}>setShowMore</span>
          <span className={"yellow"}>&#40;</span>!
          <span className={"celeste"}>showMore</span>
          <span className={"yellow"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>
          {"\n\n"}
        </code>
        <code>
          <span className={"blue"}>let</span>{" "}
          <span className={"celeste"}>sculpture</span>{" "}
          <span className={"white"}>=</span>{" "}
          <span className={"celeste"}>sculptureList</span>
          <span className={"yellow"}>&#91;</span>
          <span className={"celeste"}>index</span>
          <span className={"yellow"}>&#93;</span>;{"\n  "}
          <span className={"pink"}>return</span>{" "}
          <span className={"yellow"}>&#40;</span>
          {"\n    "}
          &lt;&gt;
          {"\n      "}
          &lt;<span className={"blue"}>button</span>{" "}
          <span className={"celeste"}>onClick</span>
          <span className={"white"}>=</span>
          <span className={"blue"}>&#123;</span>
          <span className={"yellow"}>handleNextClick</span>
          <span className={"blue"}>&#125;</span>&gt;
          <span className={"white"}>Siguiente</span>
          &lt;/<span className={"blue"}>button</span>&gt;
          {"\n      "}
          &lt;<span className={"blue"}>h2</span>&gt;
          {"\n        "}
          &lt;<span className={"blue"}>i</span>&gt;
          <span className={"blue"}>&#123;</span>
          <span className={"celeste"}>sculpture</span>
          <span className={"white"}>.</span>
          <span className={"celeste"}>name</span>
          <span className={"blue"}>&#125;</span>
          &lt;/<span className={"blue"}>i</span>&gt;{" "}
          <span className={"white"}>de</span>{" "}
          <span className={"blue"}>&#123;</span>
          <span className={"celeste"}>sculpture</span>
          <span className={"white"}>.</span>
          <span className={"celeste"}>artist</span>
          <span className={"blue"}>&#125;</span>
          {"\n      "}
          &lt;/<span className={"blue"}>h2</span>&gt;
          {"\n      "}
          &lt;<span className={"blue"}>h3</span>&gt;
          {"\n        "}
          <span className={"yellow"}>&#40;</span>
          <span className={"blue"}>&#123;</span>
          <span className={"celeste"}>index</span>
          <span className={"white"}>+</span>
          <span className={"orange"}>1</span>
          <span className={"yellow"}>&#125;</span>{" "}
          <span className={"white"}>of</span>{" "}
          <span className={"blue"}>&#123;</span>
          <span className={"celeste"}>sculptureList</span>
          <span className={"white"}>.</span>
          <span className={"celeste"}>length</span>
          <span className={"blue"}>&#125;</span>
          <span className={"yellow"}>&#41;</span>
          {"\n      "}
          &lt;/<span className={"blue"}>h3</span>&gt;
          {"\n      "}
          &lt;<span className={"blue"}>button</span>{" "}
          <span className={"celeste"}>onClick</span>
          <span className={"white"}>=</span>
          <span className={"blue"}>&#123;</span>
          <span className={"yellow"}>handleMoreClick</span>
          <span className={"blue"}>&#125;</span>&gt;
          {"\n        "}
          <span className={"blue"}>&#123;</span>
          <span className={"celeste"}>showMore</span>
          <span className={"pink"}>?</span>
          <span className={"orange"}>&#39;Esconder&#39;</span>
          <span className={"pink"}>:</span>
          <span className={"orange"}>&#39;Mostrar&#39;</span>
          <span className={"blue"}>&#125;</span>{" "}
          <span className={"white"}>detalles</span>
          {"\n      "}
          &lt;/<span className={"blue"}>button</span>&gt;
          {"\n      "}
          <span className={"blue"}>&#123;</span>
          <span className={"celeste"}>showMore</span>{" "}
          <span className={"white"}>&&</span> &lt;
          <span className={"blue"}>p</span>&gt;
          <span className={"blue"}>&#123;</span>
          <span className={"celeste"}>sculpture</span>
          <span className={"white"}>.</span>
          <span className={"celeste"}>description</span>
          <span className={"blue"}>&#125;</span>
          &lt;/<span className={"blue"}>p</span>&gt;
          <span className={"blue"}>&#125;</span>
          {"\n      "}
          &lt;<span className={"blue"}>img</span>{" "}
          <span className={"celeste"}>src</span>
          <span className={"white"}>=</span>
          <span className={"blue"}>&#123;</span>
          <span className={"celeste"}>sculpture</span>
          <span className={"white"}>.</span>
          <span className={"celeste"}>url</span>
          <span className={"blue"}>&#125;</span>{" "}
          <span className={"celeste"}>alt</span>
          <span className={"white"}>=</span>
          <span className={"blue"}>&#123;</span>
          <span className={"celeste"}>sculpture</span>
          <span className={"white"}>.</span>
          <span className={"celeste"}>alt</span>
          <span className={"blue"}>&#125;</span> /&gt;
          {"\n    "}
          &lt;/&gt;
          {"\n  "}
          <span className={"yellow"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>;
        </code>
      </pre>
      <h3>Renderizado y confirmación</h3>
    </>
  );
};
export default Interactivo;
