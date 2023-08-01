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
      <hr />
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
      <hr />
      <h3>Renderizado y confirmación</h3>
      <p>
        Antes de que tus componentes se muestren en la pantalla, deben
        ser renderizados por React. Comprender los pasos de este
        proceso te ayudará a pensar en cómo se ejecuta tu código y
        explicar su comportamiento.
      </p>
      <p>
        Imagina que tus componentes son cocineros en la cocina,
        montando sabrosos platos a partir de los ingredientes. En este
        escenario, React es el camarero que hace las peticiones de los
        clientes y les trae sus pedidos. Este proceso de solicitud y
        servicio de UI tiene tres pasos:
      </p>
      <ol>
        <li>
          <b>Desencadenamiento</b> de un renderizado (entrega del
          pedido del cliente a la cocina)
        </li>
        <li>
          <b>Renderizado</b> del componente (preparación del pedido en
          la cocina)
        </li>
        <li>
          <b>Confirmación</b> con el DOM (poner el pedido sobre la
          mesa)
        </li>
      </ol>
      <ul>
        <li className="renderizado">
          <figure>
            <div>
              <img
                src="public/i_render-and-commit1.png"
                alt="desencadenamiento"
              />
            </div>
            <figcaption>Desencadenamiento</figcaption>
          </figure>
        </li>
        <li className="renderizado">
          <figure>
            <div>
              <img
                src="public/i_render-and-commit2.png"
                alt="renderizado"
              />
            </div>
            <figcaption>Renderizado</figcaption>
          </figure>
        </li>
        <li className="renderizado">
          <figure>
            <div>
              <img
                src="i_render-and-commit3.png"
                alt="confirmacion"
              />
            </div>
            <figcaption>Confirmación</figcaption>
          </figure>
        </li>
      </ul>
      <hr />
      <h3>El estado como una instantánea</h3>
      <p>
        A diferencia de las variables regulares de JavaScript, el
        estado de React se comporta más como una instantánea.
        Establecerlo no cambia la variable de estado que ya tienes,
        sino que activa una nuevo renderizado. ¡Esto puede ser
        sorprendente al principio!
      </p>
      <pre className="ide">
        <code>
          <span className="celeste">console</span>
          <span className="white">.</span>
          <span className="yellow">log</span>
          <span className="blue">&#40;</span>
          <span className="celeste">count</span>
          <span className="blue">&#41;;</span>{" "}
          <span className="greendark">&#47;&#47; 0</span>
          {"\n"}
          <span className="yellow">setCount</span>
          <span className="blue">&#40;</span>
          <span className="celeste">count</span>
          <span className="white">+</span>
          <span className="orange">1</span>
          <span className="blue">&#41;;</span>{" "}
          <span className="greendark">
            &#47;&#47; Solicitar un nuevo renderizado con 1
          </span>
          {"\n"}
          <span className="celeste">console</span>
          <span className="white">.</span>
          <span className="yellow">log</span>
          <span className="blue">&#40;</span>
          <span className="celeste">count</span>
          <span className="blue">&#41;;</span>{" "}
          <span className="greendark">&#47;&#47; ¡Todavía 0!</span>
        </code>
      </pre>
      <p>
        Este comportamiento te ayuda a evitar errores sutiles. Aquí
        hay una pequeña aplicación de chat. Intenta adivinar qué
        sucede si presionas «Enviar» primero y luego cambias el
        destinatario a Bob. ¿El nombre de quién aparecerá en la{" "}
        <span className="shadow">alerta</span> cinco segundos después?
      </p>
      <pre className="ide">
        <code>
          <span className={"pink"}>import</span>{" "}
          <span className={"blue"}>&#123;</span>{" "}
          <span className={"celeste"}>useState</span>{" "}
          <span className={"blue"}>&#125;</span>{" "}
          <span className={"pink"}>from</span>{" "}
          <span className={"orange"}>&#39;react&#39;</span>;{"\n\n"}
        </code>
        <code>
          <span className={"pink"}>export</span>{" "}
          <span className={"pink"}>default</span>{" "}
          <span className={"blue"}>function</span>{" "}
          <span className={"yellow"}>Form</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"yellow"}>&#41;</span>{" "}
          <span className={"yellow"}>&#123;</span>
          {"\n\n"}
        </code>
        <code>
          <span className="blue">const</span>{" "}
          <span className="yellow">&#91;</span>
          <span className="celeste">to</span>,{" "}
          <span className="celeste">setTo</span>
          <span className="yellow">&#93;</span>{" "}
          <span className="white">=</span>{" "}
          <span className="green">useState</span>
          <span className="yellow">&#40;</span>
          <span className="orange">&#39;Alice&#39;</span>
          <span className="yellow">&#41;</span>;{"\n"}
          <span className="blue">const</span>{" "}
          <span className="yellow">&#91;</span>
          <span className="celeste">message</span>,{" "}
          <span className="celeste">setMessage</span>
          <span className="yellow">&#93;</span>{" "}
          <span className="white">=</span>{" "}
          <span className="green">useState</span>
          <span className="yellow">&#40;</span>
          <span className="orange">&#39;Hola&#39;</span>
          <span className="yellow">&#41;</span>;{"\n\n"}
        </code>
        <code>
          <span className={"blue"}>function</span>{" "}
          <span className={"yellow"}>handleSubmit</span>
          <span className={"yellow"}>&#40;</span>
          <span className="celeste">e</span>
          <span className={"yellow"}>&#41;</span>{" "}
          <span className={"yellow"}>&#123;</span>
          {"\n  "}
          <span className={"celeste"}>e</span>
          <span className={"white"}>.</span>
          <span className={"yellow"}>preveventDefault</span>
          <span className="blue">&#40;</span>
          <span className={"blue"}>&#41;</span>;{"\n  "}
          <span className={"yellow"}>setTimeout</span>
          <span className="blue">&#40;</span>
          <span className="pink">&#40;</span>
          <span className={"pink"}>&#41;</span>
          <span className={"white"}>=&gt;</span>
          <span className={"pink"}>&#123;</span>
          {"\n  "}
          <span className={"yellow"}>alert</span>
          <span className="blue">&#40;</span>
          <span className="orange">
            &#96;Le dijiste $&#123;message&#125; a
            $&#123;to&#125;&#96;
          </span>
          <span className={"blue"}>&#41;</span>;{"\n  "}
          <span className={"pink"}>&#125;</span>,
          <span className="orange">5000</span>
          <span className={"blue"}>&#41;</span>
          {"\n"}
          <span className={"yellow"}>&#125;</span>
          {"\n\n  "}
        </code>
        <code>
          <span className="pink">return</span>{" "}
          <span className="pink">&#40;</span>
          {"\n    "}
        </code>
        <code>
          &lt;<span className="blue">form</span>{" "}
          <span className="yellow">onSubmit</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="yellow">handleSubmit</span>
          <span className="blue">&#125;</span>&gt;
          {"\n      "}
          &lt;<span className="blue">label</span>&gt;
          {"\n        "}
          <span className="white">Para</span>
          <span className="white">:</span>
          <span className="blue">&#123;</span>
          <span className="orange">&#39; &#39;</span>
          <span className="blue">&#125;</span>
          {"\n        "}
          &lt;<span className="blue">select</span>{" "}
          <span className="celeste">value</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="celeste">to</span>
          <span className="blue">&#125;</span>{" "}
          <span className="celeste">onChange</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="celeste">e</span>{" "}
          <span className="white">=&gt;</span>{" "}
          <span className="yellow">setTo</span>
          <span className="yellow">&#40;</span>
          <span className="celeste">e</span>
          <span className="white">.</span>
          <span className="celeste">target</span>
          <span className="white">.</span>
          <span className="celeste">value</span>
          <span className="yellow">&#41;</span>
          <span className="blue">&#125;</span>&gt;
          {"\n          "}
          &lt;<span className="blue">option</span>{" "}
          <span className="celeste">value</span>
          <span className="white">=</span>
          <span className="orange">&quot;Alice&quot;</span>&gt;
          <span className="white">Alice</span>
          &lt;/<span className="blue">option</span>&gt;
          {"\n          "}
          &lt;<span className="blue">option</span>{" "}
          <span className="celeste">value</span>
          <span className="white">=</span>
          <span className="orange">&quot;Bob&quot;</span>&gt;
          <span className="white">Bob</span>
          &lt;/<span className="blue">option</span>&gt;
          {"\n        "}
          &lt;/<span className="blue">select</span>&gt;
          {"\n      "}
          &lt;/<span className="blue">label</span>&gt;
          {"\n      "}
        </code>
        <code>
          &lt;<span className="blue">textarea</span>
          {"\n        "}
          <span className="celeste">placeholder</span>
          <span className="white">=</span>
          <span className="orange">&quot;Message&quot;</span>
          {"\n        "}
          <span className="celeste">value</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="orange">message</span>
          <span className="blue">&#125;</span>
          {"\n        "}
          <span className="celeste">onChange</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="celeste">e</span>{" "}
          <span className="white">=&gt;</span>{" "}
          <span className="yellow">setMessage</span>
          <span className="yellow">&#40;</span>
          <span className="celeste">e</span>
          <span className="white">.</span>
          <span className="celeste">target</span>
          <span className="white">.</span>
          <span className="celeste">value</span>
          <span className="yellow">&#41;</span>
          <span className="blue">&#125;</span> /&gt;
          {"\n      "}
        </code>
        <code>
          &lt;<span className="blue">button</span>{" "}
          <span className="celeste">type</span>
          <span className="white">=</span>
          <span className="orange">&quot;submit&quot;</span>&gt;
          <span className="white">Enviar</span>
          &lt;/<span className="blue">button</span>&gt;
          {"\n    "}
        </code>
        &lt;/<span className="blue">form</span>&gt;
        {"\n  "}
        <span className="pink">&#41;</span>;{"\n"}
        <span className="yellow">&#125;</span>
      </pre>
      <hr />
      <h3>Poner en cola una serie de actualizaciones de estado</h3>
      <p>
        Este componente tiene errores: hacer clic en «+3» incrementa
        la puntuación solo una vez.
      </p>
      <pre className="ide">
        <code>
          <span className={"pink"}>import</span>{" "}
          <span className={"blue"}>&#123;</span>{" "}
          <span className={"celeste"}>useState</span>{" "}
          <span className={"blue"}>&#125;</span>{" "}
          <span className={"pink"}>from</span>{" "}
          <span className={"orange"}>&#39;react&#39;</span>;{"\n\n"}
        </code>
        <code>
          <span className={"pink"}>export</span>{" "}
          <span className={"pink"}>default</span>{" "}
          <span className={"blue"}>function</span>{" "}
          <span className={"yellow"}>Form</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"yellow"}>&#41;</span>{" "}
          <span className={"yellow"}>&#123;</span>
          {"\n\n  "}
        </code>
        <code>
          <span className="blue">const</span>{" "}
          <span className="yellow">&#91;</span>
          <span className="celeste">score</span>,{" "}
          <span className="celeste">setScore</span>
          <span className="yellow">&#93;</span>{" "}
          <span className="white">=</span>{" "}
          <span className="green">useState</span>
          <span className="yellow">&#40;</span>
          <span className="orange">0</span>
          <span className="yellow">&#41;</span>;{"\n\n  "}
        </code>
        <code>
          <span className={"blue"}>function</span>{" "}
          <span className={"yellow"}>increment</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"yellow"}>&#41;</span>{" "}
          <span className={"yellow"}>&#123;</span>
          {"\n    "}
          <span className={"yellow"}>setScore</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"celeste"}>score</span>{" "}
          <span className={"white"}>+</span>{" "}
          <span className={"orange"}>1</span>
          <span className={"yellow"}>&#41;</span>;{"\n  "}
          <span className={"yellow"}>&#125;</span>
          {"\n\n"}
        </code>
        <code>
          <span className="pink">return</span>{" "}
          <span className="pink">&#40;</span>
          {"\n    "}
        </code>
        <code>
          &lt;&gt;
          {"\n      "}
        </code>
        <code>
          &lt;<span className="blue">button</span>{" "}
          <span className="celeste">onClick</span>
          <span className="white">=</span>
          <span className="white">&#123;</span>
          <span className="white">&#40;</span>
          <span className="white">&#41;</span>
          <span className="white">=&gt;</span>
          <span className="green">increment</span>
          <span className="white">&#40;</span>
          <span className="white">&#41;</span>
          <span className="white">&#125;</span>&gt;
          <span className="white">+1</span>
          &lt;/<span className="blue">button</span>&gt;
          {"\n      "}
        </code>
        <code>
          &lt;<span className="blue">button</span>{" "}
          <span className="celeste">onClick</span>
          <span className="white">=</span>
          <span className="white">&#123;</span>
          <span className="white">&#40;</span>
          <span className="white">&#41;</span>
          <span className="white">=&gt;</span>
          <span className="green">increment</span>
          <span className="white">&#40;</span>
          <span className="white">&#41;</span>;{" "}
          <span className="green">increment</span>
          <span className="white">&#40;</span>
          <span className="white">&#41;</span>;{" "}
          <span className="green">increment</span>
          <span className="white">&#40;</span>
          <span className="white">&#41;</span>;
          <span className="white">&#125;</span>&gt;
          <span className="white">+3</span>
          &lt;/<span className="blue">button</span>&gt;
          {"\n      "}
        </code>
        <code>
          &lt;<span className="blue">h1</span>&gt;
          <span className="white">Puntaje:</span>{" "}
          <span className="blue">&#123;</span>
          <span className="celeste">score</span>
          <span className="blue">&#125;</span>
          &lt;/<span className="blue">h1</span>&gt;
          {"\n    "}
        </code>
        <code>
          &lt;/&gt;
          {"\n  "}
        </code>
        <code>
          <span className="pink">&#41;</span>;{"\n"}
          <span className="yellow">&#125;</span>;
        </code>
      </pre>
      <p>
        <span className="note">El estado como una instantánea</span>{" "}
        explica por qué sucede esto. Al establecer el estado se
        solicita un nuevo rerenderizado, pero no lo cambia en el
        código que ya se está ejecutando. Entonces{" "}
        <span className="shadow">score</span> sigue siendo{" "}
        <span className="shadow">0</span> justo después de llamar a{" "}
        <span className="shadow">setScore&#40;score + 1&#41;</span>.
      </p>
      <pre className="ide">
        <code>
          <span className="celeste">console</span>
          <span className="white">.</span>
          <span className="yellow">log</span>
          <span className="blue">&#40;</span>
          <span className="celeste">score</span>
          <span className="blue">&#41;;</span>{" "}
          <span className="greendark">&#47;&#47; 0</span>
          {"\n"}
          <span className="yellow">setScore</span>
          <span className="blue">&#40;</span>
          <span className="celeste">score</span>
          <span className="white">+</span>
          <span className="orange">1</span>
          <span className="blue">&#41;;</span>{" "}
          <span className="greendark">
            &#47;&#47; setScore&#40;0 + 1&#41;
          </span>
          {"\n"}
          <span className="celeste">console</span>
          <span className="white">.</span>
          <span className="yellow">log</span>
          <span className="blue">&#40;</span>
          <span className="celeste">score</span>
          <span className="blue">&#41;;</span>{" "}
          <span className="greendark">&#47;&#47; 0</span>
          {"\n"}
        </code>
        <code>
          <span className="yellow">setScore</span>
          <span className="blue">&#40;</span>
          <span className="celeste">score</span>
          <span className="white">+</span>
          <span className="orange">1</span>
          <span className="blue">&#41;;</span>{" "}
          <span className="greendark">
            &#47;&#47; setScore&#40;0 + 1&#41;
          </span>
          {"\n"}
          <span className="celeste">console</span>
          <span className="white">.</span>
          <span className="yellow">log</span>
          <span className="blue">&#40;</span>
          <span className="celeste">score</span>
          <span className="blue">&#41;;</span>{" "}
          <span className="greendark">&#47;&#47; 0</span>
          {"\n"}
          <span className="yellow">setScore</span>
          <span className="blue">&#40;</span>
          <span className="celeste">score</span>
          <span className="white">+</span>
          <span className="orange">1</span>
          <span className="blue">&#41;;</span>{" "}
          <span className="greendark">
            &#47;&#47; setScore&#40;0 + 1&#41;
          </span>
          {"\n"}
          <span className="celeste">console</span>
          <span className="white">.</span>
          <span className="yellow">log</span>
          <span className="blue">&#40;</span>
          <span className="celeste">score</span>
          <span className="blue">&#41;;</span>{" "}
          <span className="greendark">&#47;&#47; 0</span>
        </code>
      </pre>
      <p>
        Puedes solucionar esto pasando una función de actualización al
        configurar el estado. Observa cómo reemplazar{" "}
        <span className="shadow">setScore&#40;score + 1&#41;</span>{" "}
        con{" "}
        <span className="shadow">
          setScore&#40;s =&gt; s + 1&#41;
        </span>{" "}
        corrige el botón «+3». Esto te permite poner en cola múltiples
        actualizaciones de estado.
      </p>
      <pre className="ide">
        <code>
          <span className={"pink"}>import</span>{" "}
          <span className={"blue"}>&#123;</span>{" "}
          <span className={"celeste"}>useState</span>{" "}
          <span className={"blue"}>&#125;</span>{" "}
          <span className={"pink"}>from</span>{" "}
          <span className={"orange"}>&#39;react&#39;</span>;{"\n\n"}
        </code>
        <code>
          <span className={"pink"}>export</span>{" "}
          <span className={"pink"}>default</span>{" "}
          <span className={"blue"}>function</span>{" "}
          <span className={"yellow"}>Counter</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"yellow"}>&#41;</span>{" "}
          <span className={"yellow"}>&#123;</span>
          {"\n\n  "}
        </code>
        <code>
          <span className="blue">const</span>{" "}
          <span className="yellow">&#91;</span>
          <span className="celeste">score</span>,{" "}
          <span className="celeste">setScore</span>
          <span className="yellow">&#93;</span>{" "}
          <span className="white">=</span>{" "}
          <span className="green">useState</span>
          <span className="yellow">&#40;</span>
          <span className="orange">0</span>
          <span className="yellow">&#41;</span>;{"\n\n  "}
        </code>
        <code>
          <span className={"blue"}>function</span>{" "}
          <span className={"yellow"}>increment</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"yellow"}>&#41;</span>{" "}
          <span className={"yellow"}>&#123;</span>
          {"\n    "}
          <span className={"yellow"}>setScore</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"celeste"}>s</span>{" "}
          <span className={"white"}>=&gt;</span>{" "}
          <span className={"celeste"}>s</span>{" "}
          <span className={"white"}>+</span>{" "}
          <span className={"orange"}>1</span>
          <span className={"yellow"}>&#41;</span>;{"\n  "}
          <span className={"yellow"}>&#125;</span>
          {"\n\n"}
        </code>
        <code>
          <span className="pink">return</span>{" "}
          <span className="pink">&#40;</span>
          {"\n    "}
        </code>
        <code>
          &lt;&gt;
          {"\n      "}
        </code>
        <code>
          &lt;<span className="blue">button</span>{" "}
          <span className="celeste">onClick</span>
          <span className="white">=</span>
          <span className="white">&#123;</span>
          <span className="white">&#40;</span>
          <span className="white">&#41;</span>
          <span className="white">=&gt;</span>
          <span className="green">increment</span>
          <span className="white">&#40;</span>
          <span className="white">&#41;</span>
          <span className="white">&#125;</span>&gt;
          <span className="white">+1</span>
          &lt;/<span className="blue">button</span>&gt;
          {"\n      "}
        </code>
        <code>
          &lt;<span className="blue">button</span>{" "}
          <span className="celeste">onClick</span>
          <span className="white">=</span>
          <span className="white">&#123;</span>
          <span className="white">&#40;</span>
          <span className="white">&#41;</span>
          <span className="white">=&gt;</span>
          <span className="green">increment</span>
          <span className="white">&#40;</span>
          <span className="white">&#41;</span>;{" "}
          <span className="green">increment</span>
          <span className="white">&#40;</span>
          <span className="white">&#41;</span>;{" "}
          <span className="green">increment</span>
          <span className="white">&#40;</span>
          <span className="white">&#41;</span>;
          <span className="white">&#125;</span>&gt;
          <span className="white">+3</span>
          &lt;/<span className="blue">button</span>&gt;
          {"\n      "}
        </code>
        <code>
          &lt;<span className="blue">h1</span>&gt;
          <span className="white">Puntaje:</span>{" "}
          <span className="blue">&#123;</span>
          <span className="celeste">score</span>
          <span className="blue">&#125;</span>
          &lt;/<span className="blue">h1</span>&gt;
          {"\n    "}
        </code>
        <code>
          &lt;/&gt;
          {"\n  "}
        </code>
        <code>
          <span className="pink">&#41;</span>;{"\n"}
          <span className="yellow">&#125;</span>;
        </code>
      </pre>
      <hr />
      <h3>Actualizar objetos en el estado</h3>
      <p>
        El estado puede contener cualquier tipo de valor de
        JavaScript, incluidos los objetos. Pero no debes cambiar los
        objetos y arrays que tienes en el estado de React
        directamente. En cambio, cuando desees actualizar un objeto y
        un array, debes crear uno nuevo (o hacer una copia de uno
        existente) y luego actualizar el estado para usar esa copia.
      </p>
      <p>
        Por lo general, usarás la sintaxis de propagación{" "}
        <span className="shadow">...</span> para copiar objetos y
        arrays que desees cambiar. Por ejemplo, actualizar un objeto
      </p>
      <pre className="ide">
        <code>
          <span className={"pink"}>import</span>{" "}
          <span className={"blue"}>&#123;</span>{" "}
          <span className={"celeste"}>useState</span>{" "}
          <span className={"blue"}>&#125;</span>{" "}
          <span className={"pink"}>from</span>{" "}
          <span className={"orange"}>&#39;react&#39;</span>;{"\n\n"}
        </code>
        <code>
          <span className={"pink"}>export</span>{" "}
          <span className={"pink"}>default</span>{" "}
          <span className={"blue"}>function</span>{" "}
          <span className={"yellow"}>Form</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"yellow"}>&#41;</span>{" "}
          <span className={"yellow"}>&#123;</span>
          {"\n\n"}
        </code>
        <code>
          <span className="blue">const</span>{" "}
          <span className="yellow">&#91;</span>
          <span className="celeste">person</span>,{" "}
          <span className="celeste">setPerson</span>
          <span className="yellow">&#93;</span>{" "}
          <span className="white">=</span>{" "}
          <span className="green">useState</span>
          <span className="yellow">&#40;</span>
          <span className="blue">&#123;</span>
          {"\n"}
          <span className="celeste">name</span>
          <span className="white">:</span>
          <span className="orange">
            &#39;Niki de Saint Phalle&#39;
          </span>
          ,{"\n"}
          <span className="celeste">artwork</span>
          <span className="white">:</span>
          <span className="blue">&#123;</span>
          {"\n  "}
          <span className="celeste">title</span>
          <span className="white">:</span>
          <span className="orange">&#39;Blue Nana&#39;</span>,{"\n  "}
          <span className="celeste">city</span>
          <span className="white">:</span>
          <span className="orange">&#39;Hamburgo&#39;</span>,{"\n  "}
          <span className="celeste">image</span>
          <span className="white">:</span>
          <span className="orange">
            &#39;https://i.imgur.com/Sd1AgUOm.jpg&#39;
          </span>
          ,{"\n"}
          <span className="blue">&#125;</span>
          {"\n"}
          <span className="blue">&#125;</span>
          <span className="yellow">&#41;</span>;{"\n\n"}
        </code>
        <code>
          <span className={"blue"}>function</span>{" "}
          <span className={"yellow"}>handleNameChange</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"yellow"}>&#41;</span>{" "}
          <span className={"yellow"}>&#123;</span>
          {"\n    "}
          <span className={"yellow"}>setPerson</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"blue"}>&#123;</span>
          <span className={"celeste"}>...person</span>,{" "}
          <span className={"celeste"}>name</span>
          <span className={"white"}>:</span>
          <span className={"celeste"}>e</span>
          <span className={"white"}>.</span>
          <span className={"celeste"}>target</span>
          <span className={"white"}>.</span>
          <span className={"celeste"}>value</span>
          <span className={"blue"}>&#125;</span>
          <span className={"yellow"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>
          {"\n\n"}
        </code>
        <code>
          <span className={"blue"}>function</span>{" "}
          <span className={"yellow"}>handleTitleChange</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"yellow"}>&#41;</span>{" "}
          <span className={"yellow"}>&#123;</span>
          {"\n    "}
          <span className={"yellow"}>setPerson</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"blue"}>&#123;</span>
          <span className={"celeste"}>...person</span>,{" "}
          <span className={"celeste"}>artwork</span>
          <span className={"white"}>:</span>{" "}
          <span className="blue">&#123;</span>
          {"\n      "}
          <span className="celeste">...person</span>
          <span className="white">.</span>
          <span className="celeste">artwork</span>,{"\n      "}
          <span className="celeste">title</span>
          <span className="white">:</span>{" "}
          <span className="celeste">e</span>
          <span className="white">.</span>
          <span className="celeste">target</span>
          <span className="white">.</span>
          <span className="celeste">value</span>
          {"\n    "}
          <span className="blue">&#125;</span>
          {"\n  "}
          <span className={"blue"}>&#125;</span>
          <span className={"yellow"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>
          {"\n\n"}
        </code>
        <code>
          <span className={"blue"}>function</span>{" "}
          <span className={"yellow"}>handleCityChange</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"yellow"}>&#41;</span>{" "}
          <span className={"yellow"}>&#123;</span>
          {"\n    "}
          <span className={"yellow"}>setPerson</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"blue"}>&#123;</span>
          <span className={"celeste"}>...person</span>,{" "}
          <span className={"celeste"}>artwork</span>
          <span className={"white"}>:</span>{" "}
          <span className="blue">&#123;</span>
          {"\n      "}
          <span className="celeste">...person</span>
          <span className="white">.</span>
          <span className="celeste">artwork</span>,{"\n      "}
          <span className="celeste">city</span>
          <span className="white">:</span>{" "}
          <span className="celeste">e</span>
          <span className="white">.</span>
          <span className="celeste">target</span>
          <span className="white">.</span>
          <span className="celeste">value</span>
          {"\n    "}
          <span className="blue">&#125;</span>
          {"\n  "}
          <span className={"blue"}>&#125;</span>
          <span className={"yellow"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>
          {"\n\n"}
        </code>
        <code>
          <span className={"blue"}>function</span>{" "}
          <span className={"yellow"}>handleImageChange</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"yellow"}>&#41;</span>{" "}
          <span className={"yellow"}>&#123;</span>
          {"\n    "}
          <span className={"yellow"}>setPerson</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"blue"}>&#123;</span>
          <span className={"celeste"}>...person</span>,{" "}
          <span className={"celeste"}>artwork</span>
          <span className={"white"}>:</span>{" "}
          <span className="blue">&#123;</span>
          {"\n      "}
          <span className="celeste">...person</span>
          <span className="white">.</span>
          <span className="celeste">artwork</span>,{"\n      "}
          <span className="celeste">image</span>
          <span className="white">:</span>{" "}
          <span className="celeste">e</span>
          <span className="white">.</span>
          <span className="celeste">target</span>
          <span className="white">.</span>
          <span className="celeste">value</span>
          {"\n    "}
          <span className="blue">&#125;</span>
          {"\n  "}
          <span className={"blue"}>&#125;</span>
          <span className={"yellow"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>
          {"\n\n"}
        </code>
        <code>
          <span className="pink">return</span>{" "}
          <span className="pink">&#40;</span>
          {"\n    "}
        </code>
        <code>
          &lt;&gt;
          {"\n      "}
        </code>
        <code>
          &lt;<span className="blue">label</span>&gt;
          {"\n        "}
          <span className="white">Nombre:</span>
          {"\n        "}
          &lt;<span className="blue">input</span>{" "}
          <span className="celeste">value</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="celeste">person</span>
          <span className="white">.</span>
          <span className="celeste">name</span>
          <span className="blue">&#125;</span>{" "}
          <span className="celeste">onChange</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="yellow">handleNameChange</span>
          <span className="blue">&#125;</span> /&gt;
          {"\n      "}
          &lt;/<span className="blue">label</span>&gt;
          {"\n      "}
        </code>
        <code>
          &lt;<span className="blue">label</span>&gt;
          {"\n        "}
          <span className="white">Título:</span>
          {"\n        "}
          &lt;<span className="blue">input</span>{" "}
          <span className="celeste">value</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="celeste">person</span>
          <span className="white">.</span>
          <span className="celeste">artwork</span>
          <span className="white">.</span>
          <span className="celeste">title</span>
          <span className="blue">&#125;</span>{" "}
          <span className="celeste">onChange</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="yellow">handleTitleChange</span>
          <span className="blue">&#125;</span> /&gt;
          {"\n      "}
          &lt;/<span className="blue">label</span>&gt;
          {"\n      "}
        </code>
        <code>
          &lt;<span className="blue">label</span>&gt;
          {"\n        "}
          <span className="white">Ciudad:</span>
          {"\n        "}
          &lt;<span className="blue">input</span>{" "}
          <span className="celeste">value</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="celeste">person</span>
          <span className="white">.</span>
          <span className="celeste">artwork</span>
          <span className="white">.</span>
          <span className="celeste">city</span>
          <span className="blue">&#125;</span>{" "}
          <span className="celeste">onChange</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="yellow">handleCityChange</span>
          <span className="blue">&#125;</span> /&gt;
          {"\n      "}
          &lt;/<span className="blue">label</span>&gt;
          {"\n      "}
        </code>
        <code>
          &lt;<span className="blue">label</span>&gt;
          {"\n        "}
          <span className="white">Imagen:</span>
          {"\n        "}
          &lt;<span className="blue">input</span>{" "}
          <span className="celeste">value</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="celeste">person</span>
          <span className="white">.</span>
          <span className="celeste">artwork</span>
          <span className="white">.</span>
          <span className="celeste">image</span>
          <span className="blue">&#125;</span>{" "}
          <span className="celeste">onChange</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="yellow">handleImageChange</span>
          <span className="blue">&#125;</span> /&gt;
          {"\n      "}
          &lt;/<span className="blue">label</span>&gt;
          {"\n      "}
        </code>
        <code>
          &lt;<span className="blue">p</span>&gt;
          {"\n        "}
          &lt;<span className="blue">i</span>&gt;
          <span className="blue">&#123;</span>
          <span className="celeste">person</span>
          <span className="white">.</span>
          <span className="celeste">artwork</span>
          <span className="white">.</span>
          <span className="celeste">title</span>
          <span className="blue">&#125;</span>
          &lt;/<span className="blue">i</span>&gt;
          {"\n        "}
          <span className="blue">&#123;</span>
          <span className="orange">&#39; by &#39;</span>
          <span className="blue">&#125;</span>
          {"\n        "}
          <span className="blue">&#123;</span>
          <span className="celeste">person</span>
          <span className="white">.</span>
          <span className="celeste">name</span>
          <span className="blue">&#125;</span>
          {"\n        "}
          &lt;<span className="blue">br</span> /&gt;
          {"\n        "}
          <span className="yellow">&#40;</span>
          <span className="white">ubicado en</span>{" "}
          <span className="blue">&#123;</span>
          <span className="celeste">person</span>
          <span className="white">.</span>
          <span className="celeste">artwork</span>
          <span className="white">.</span>
          <span className="celeste">city</span>
          <span className="blue">&#125;</span>
          <span className="yellow">&#41;</span>
          {"\n      "}
          &lt;/<span className="blue">p</span>&gt;
          {"\n      "}
        </code>
        <code>
          &lt;<span className={"blue"}>img</span>{" "}
          <span className={"celeste"}>src</span>
          <span className={"white"}>=</span>
          <span className={"blue"}>&#123;</span>
          <span className={"celeste"}>person</span>
          <span className={"white"}>.</span>
          <span className={"celeste"}>artwork</span>
          <span className={"white"}>.</span>
          <span className={"celeste"}>image</span>
          <span className={"blue"}>&#125;</span>{" "}
          <span className={"celeste"}>alt</span>
          <span className={"white"}>=</span>
          <span className={"blue"}>&#123;</span>
          <span className={"celeste"}>person</span>
          <span className={"white"}>.</span>
          <span className={"celeste"}>artwork</span>
          <span className={"white"}>.</span>
          <span className={"celeste"}>title</span>
          <span className={"blue"}>&#125;</span> /&gt;
          {"\n    "}
        </code>
        <code>
          &lt;/&gt;
          {"\n  "}
        </code>
        <code>
          <span className="pink">&#41;</span>;{"\n"}
          <span className="yellow">&#125;</span>;
        </code>
      </pre>
      <p>
        Si copiar objetos en el código se vuelve tedioso, puedes usar
        una biblioteca como <span className="note">Immer</span> para
        reducir el código repetitivo:
      </p>
      <pre className="ide">
        <code>
          <span className="greendark">&#47;&#47; package.json</span>
          {"\n"}
        </code>
        <code>
          <span>&#123;</span>
          {"\n  "}
          <span>&quot;dependencies&quot;</span>
          <span>:</span>
          <span>&#123;</span>
          {"\n    "}
          <span>&quot;immer&quot;</span>
          <span>:</span>
          <span>&quot;1.7.3&quot;</span>,{"\n    "}
          <span>&quot;react&quot;</span>
          <span>:</span>
          <span>&quot;latest&quot;</span>,{"\n    "}
          <span>&quot;react-dom&quot;</span>
          <span>:</span>
          <span>&quot;latest&quot;</span>,{"\n    "}
          <span>&quot;react-scripts&quot;</span>
          <span>:</span>
          <span>&quot;latest&quot;</span>,{"\n    "}
          <span>&quot;use-immer&quot;</span>
          <span>:</span>
          <span>&quot;0.5.1&quot;</span>
          {"\n  "}
          <span>&#125;</span>,{"\n  "}
          <span>&quot;scripts&quot;</span>
          <span>:</span>
          <span>&#123;</span>
          {"\n    "}
          <span>&quot;start&quot;</span>
          <span>:</span>
          <span>&quot;react-scripts start&quot;</span>,{"\n    "}
          <span>&quot;build&quot;</span>
          <span>:</span>
          <span>&quot;react-scripts build&quot;</span>,{"\n    "}
          <span>&quot;test&quot;</span>
          <span>:</span>
          <span>&quot;react-scripts test --env=jsdom&quot;</span>,
          {"\n    "}
          <span>&quot;eject&quot;</span>
          <span>:</span>
          <span>&quot;react-scripts eject&quot;</span>
          {"\n  "}
          <span>&#125;</span>,{"\n"}
          <span>&quot;devDependencies&quot;</span>
          <span>:</span>
          <span>&#123;</span>
          <span>&#125;</span>
          {"\n"}
          <span>&#125;</span>
          {"\n"}
        </code>
      </pre>
      <pre className="ide">
        <code>
          <span className={"pink"}>import</span>{" "}
          <span className={"blue"}>&#123;</span>{" "}
          <span className={"celeste"}>useImmer</span>{" "}
          <span className={"blue"}>&#125;</span>{" "}
          <span className={"pink"}>from</span>{" "}
          <span className={"orange"}>&#39;use-immer&#39;</span>;
          {"\n\n"}
        </code>
        <code>
          <span className={"pink"}>export</span>{" "}
          <span className={"pink"}>default</span>{" "}
          <span className={"blue"}>function</span>{" "}
          <span className={"yellow"}>Form</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"yellow"}>&#41;</span>{" "}
          <span className={"yellow"}>&#123;</span>
          {"\n\n"}
        </code>
        <code>
          <span className="blue">const</span>{" "}
          <span className="yellow">&#91;</span>
          <span className="celeste">person</span>,{" "}
          <span className="celeste">setPerson</span>
          <span className="yellow">&#93;</span>{" "}
          <span className="white">=</span>{" "}
          <span className="green">useImmer</span>
          <span className="yellow">&#40;</span>
          <span className="blue">&#123;</span>
          {"\n"}
          <span className="celeste">name</span>
          <span className="white">:</span>
          <span className="orange">
            &#39;Niki de Saint Phalle&#39;
          </span>
          ,{"\n"}
          <span className="celeste">artwork</span>
          <span className="white">:</span>
          <span className="blue">&#123;</span>
          {"\n  "}
          <span className="celeste">title</span>
          <span className="white">:</span>
          <span className="orange">&#39;Blue Nana&#39;</span>,{"\n  "}
          <span className="celeste">city</span>
          <span className="white">:</span>
          <span className="orange">&#39;Hamburgo&#39;</span>,{"\n  "}
          <span className="celeste">image</span>
          <span className="white">:</span>
          <span className="orange">
            &#39;https://i.imgur.com/Sd1AgUOm.jpg&#39;
          </span>
          ,{"\n"}
          <span className="blue">&#125;</span>
          {"\n"}
          <span className="blue">&#125;</span>
          <span className="yellow">&#41;</span>;{"\n\n"}
        </code>
        <code>
          <span className={"blue"}>function</span>{" "}
          <span className={"yellow"}>handleNameChange</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"celeste"}>e</span>
          <span className={"yellow"}>&#41;</span>{" "}
          <span className={"yellow"}>&#123;</span>
          {"\n    "}
          <span className={"yellow"}>updatePerson</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"celeste"}>draft</span>
          <span className={"white"}>=&gt;</span>
          <span className={"blue"}>&#123;</span>
          <span className={"celeste"}>draft</span>
          <span className={"white"}>.</span>
          <span className={"celeste"}>name</span>{" "}
          <span className={"white"}>=</span>{" "}
          <span className={"celeste"}>e</span>
          <span className={"white"}>.</span>
          <span className={"celeste"}>target</span>
          <span className={"white"}>.</span>
          <span className={"celeste"}>value</span>;
          <span className={"blue"}>&#125;</span>
          <span className={"yellow"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>
          {"\n\n"}
        </code>
        <code>
          <span className={"blue"}>function</span>{" "}
          <span className={"yellow"}>handleTitleChange</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"celeste"}>e</span>
          <span className={"yellow"}>&#41;</span>{" "}
          <span className={"yellow"}>&#123;</span>
          {"\n    "}
          <span className={"yellow"}>updatePerson</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"celeste"}>draft</span>
          <span className={"white"}>=&gt;</span>
          <span className={"blue"}>&#123;</span>
          <span className={"celeste"}>draft</span>
          <span className={"white"}>.</span>
          <span className={"celeste"}>artwork</span>
          <span className={"white"}>.</span>
          <span className={"celeste"}>title</span>{" "}
          <span className={"white"}>=</span>{" "}
          <span className="celeste">e</span>
          <span className="white">.</span>
          <span className="celeste">target</span>
          <span className="white">.</span>
          <span className="celeste">value</span>;{"\n  "}
          <span className={"blue"}>&#125;</span>
          <span className={"yellow"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>
          {"\n\n"}
        </code>
        <code>
          <span className={"blue"}>function</span>{" "}
          <span className={"yellow"}>handleCityChange</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"celeste"}>e</span>
          <span className={"yellow"}>&#41;</span>{" "}
          <span className={"yellow"}>&#123;</span>
          {"\n    "}
          <span className={"yellow"}>updatePerson</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"celeste"}>draft</span>
          <span className={"white"}>=&gt;</span>
          <span className={"blue"}>&#123;</span>
          <span className={"celeste"}>draft</span>
          <span className={"white"}>.</span>
          <span className={"celeste"}>artwork</span>
          <span className={"white"}>.</span>
          <span className={"celeste"}>city</span>{" "}
          <span className={"white"}>=</span>{" "}
          <span className="celeste">e</span>
          <span className="white">.</span>
          <span className="celeste">target</span>
          <span className="white">.</span>
          <span className="celeste">value</span>;{"\n  "}
          <span className={"blue"}>&#125;</span>
          <span className={"yellow"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>
          {"\n\n"}
        </code>
        <code>
          <span className={"blue"}>function</span>{" "}
          <span className={"yellow"}>handleImageChange</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"celeste"}>e</span>
          <span className={"yellow"}>&#41;</span>{" "}
          <span className={"yellow"}>&#123;</span>
          {"\n    "}
          <span className={"yellow"}>updatePerson</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"celeste"}>draft</span>
          <span className={"white"}>=&gt;</span>
          <span className={"blue"}>&#123;</span>
          <span className={"celeste"}>draft</span>
          <span className={"white"}>.</span>
          <span className={"celeste"}>artwork</span>
          <span className={"white"}>.</span>
          <span className={"celeste"}>image</span>{" "}
          <span className={"white"}>=</span>{" "}
          <span className="celeste">e</span>
          <span className="white">.</span>
          <span className="celeste">target</span>
          <span className="white">.</span>
          <span className="celeste">value</span>;{"\n  "}
          <span className={"blue"}>&#125;</span>
          <span className={"yellow"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>
          {"\n\n"}
        </code>
        <code>
          <span className="pink">return</span>{" "}
          <span className="pink">&#40;</span>
          {"\n    "}
        </code>
        <code>
          &lt;&gt;
          {"\n      "}
        </code>
        <code>
          &lt;<span className="blue">label</span>&gt;
          {"\n        "}
          <span className="white">Nombre:</span>
          {"\n        "}
          &lt;<span className="blue">input</span>{" "}
          <span className="celeste">value</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="celeste">person</span>
          <span className="white">.</span>
          <span className="celeste">name</span>
          <span className="blue">&#125;</span>{" "}
          <span className="celeste">onChange</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="yellow">handleNameChange</span>
          <span className="blue">&#125;</span> /&gt;
          {"\n      "}
          &lt;/<span className="blue">label</span>&gt;
          {"\n      "}
        </code>
        <code>
          &lt;<span className="blue">label</span>&gt;
          {"\n        "}
          <span className="white">Título:</span>
          {"\n        "}
          &lt;<span className="blue">input</span>{" "}
          <span className="celeste">value</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="celeste">person</span>
          <span className="white">.</span>
          <span className="celeste">artwork</span>
          <span className="white">.</span>
          <span className="celeste">title</span>
          <span className="blue">&#125;</span>{" "}
          <span className="celeste">onChange</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="yellow">handleTitleChange</span>
          <span className="blue">&#125;</span> /&gt;
          {"\n      "}
          &lt;/<span className="blue">label</span>&gt;
          {"\n      "}
        </code>
        <code>
          &lt;<span className="blue">label</span>&gt;
          {"\n        "}
          <span className="white">Ciudad:</span>
          {"\n        "}
          &lt;<span className="blue">input</span>{" "}
          <span className="celeste">value</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="celeste">person</span>
          <span className="white">.</span>
          <span className="celeste">artwork</span>
          <span className="white">.</span>
          <span className="celeste">city</span>
          <span className="blue">&#125;</span>{" "}
          <span className="celeste">onChange</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="yellow">handleCityChange</span>
          <span className="blue">&#125;</span> /&gt;
          {"\n      "}
          &lt;/<span className="blue">label</span>&gt;
          {"\n      "}
        </code>
        <code>
          &lt;<span className="blue">label</span>&gt;
          {"\n        "}
          <span className="white">Imagen:</span>
          {"\n        "}
          &lt;<span className="blue">input</span>{" "}
          <span className="celeste">value</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="celeste">person</span>
          <span className="white">.</span>
          <span className="celeste">artwork</span>
          <span className="white">.</span>
          <span className="celeste">image</span>
          <span className="blue">&#125;</span>{" "}
          <span className="celeste">onChange</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="yellow">handleImageChange</span>
          <span className="blue">&#125;</span> /&gt;
          {"\n      "}
          &lt;/<span className="blue">label</span>&gt;
          {"\n      "}
        </code>
        <code>
          &lt;<span className="blue">p</span>&gt;
          {"\n        "}
          &lt;<span className="blue">i</span>&gt;
          <span className="blue">&#123;</span>
          <span className="celeste">person</span>
          <span className="white">.</span>
          <span className="celeste">artwork</span>
          <span className="white">.</span>
          <span className="celeste">title</span>
          <span className="blue">&#125;</span>
          &lt;/<span className="blue">i</span>&gt;
          {"\n        "}
          <span className="blue">&#123;</span>
          <span className="orange">&#39; by &#39;</span>
          <span className="blue">&#125;</span>
          {"\n        "}
          <span className="blue">&#123;</span>
          <span className="celeste">person</span>
          <span className="white">.</span>
          <span className="celeste">name</span>
          <span className="blue">&#125;</span>
          {"\n        "}
          &lt;<span className="blue">br</span> /&gt;
          {"\n        "}
          <span className="yellow">&#40;</span>
          <span className="white">ubicado en</span>{" "}
          <span className="blue">&#123;</span>
          <span className="celeste">person</span>
          <span className="white">.</span>
          <span className="celeste">artwork</span>
          <span className="white">.</span>
          <span className="celeste">city</span>
          <span className="blue">&#125;</span>
          <span className="yellow">&#41;</span>
          {"\n      "}
          &lt;/<span className="blue">p</span>&gt;
          {"\n      "}
        </code>
        <code>
          &lt;<span className={"blue"}>img</span>{" "}
          <span className={"celeste"}>src</span>
          <span className={"white"}>=</span>
          <span className={"blue"}>&#123;</span>
          <span className={"celeste"}>person</span>
          <span className={"white"}>.</span>
          <span className={"celeste"}>artwork</span>
          <span className={"white"}>.</span>
          <span className={"celeste"}>image</span>
          <span className={"blue"}>&#125;</span>{" "}
          <span className={"celeste"}>alt</span>
          <span className={"white"}>=</span>
          <span className={"blue"}>&#123;</span>
          <span className={"celeste"}>person</span>
          <span className={"white"}>.</span>
          <span className={"celeste"}>artwork</span>
          <span className={"white"}>.</span>
          <span className={"celeste"}>title</span>
          <span className={"blue"}>&#125;</span> /&gt;
          {"\n    "}
        </code>
        <code>
          &lt;/&gt;
          {"\n  "}
        </code>
        <code>
          <span className="pink">&#41;</span>;{"\n"}
          <span className="yellow">&#125;</span>;
        </code>
      </pre>
      <br />
      <h3>Actualizar arrays en el estado</h3>
      <p>
        Los arrays son otro tipo de objetos de JavaScript mutables que
        puedes almacenar en el estado y debes tratar como de solo
        lectura. Al igual que con los objetos, cuando deseas
        actualizar un array almacenado en el estado, se debe crear uno
        nuevo (o hacer una copia de uno existente) y luego configurar
        el estado para utilizar el nuevo array:
      </p>
      <pre className="ide">
        <code>
          <span className={"pink"}>import</span>{" "}
          <span className={"blue"}>&#123;</span>{" "}
          <span className={"celeste"}>useState</span>{" "}
          <span className={"blue"}>&#125;</span>{" "}
          <span className={"pink"}>from</span>{" "}
          <span className={"orange"}>&#39;react&#39;</span>;{"\n\n"}
        </code>
        <code>
          <span className="blue">let</span>{" "}
          <span className="celeste">nextId</span>{" "}
          <span className="white">=</span>{" "}
          <span className="orange">3</span>;{"\n"}
        </code>
        <code>
          <span className="blue">const</span>{" "}
          <span className="celeste">initialList</span>{" "}
          <span className="white">=</span>{" "}
          <span className="blue">&#91;</span>
          {"\n  "}
        </code>
        <code>
          <span className="blue">&#123;</span>
          <span className="celeste">id</span>
          <span className="white">:</span>
          <span className="orange">0</span>,{" "}
          <span className="celeste">title</span>
          <span className="white">:</span>
          <span className="orange">&#39;Big Bellies&#39;</span>,{" "}
          <span className="celeste">seen</span>
          <span className="white">:</span>
          <span className="orange">false</span>
          <span className="blue">&#125;</span>,{"\n  "}
          <span className="blue">&#123;</span>
          <span className="celeste">id</span>
          <span className="white">:</span>
          <span className="orange">1</span>,{" "}
          <span className="celeste">title</span>
          <span className="white">:</span>
          <span className="orange">&#39;Lunar Landscape&#39;</span>,{" "}
          <span className="celeste">seen</span>
          <span className="white">:</span>
          <span className="orange">false</span>
          <span className="blue">&#125;</span>,{"\n  "}
          <span className="blue">&#123;</span>
          <span className="celeste">id</span>
          <span className="white">:</span>
          <span className="orange">2</span>,{" "}
          <span className="celeste">title</span>
          <span className="white">:</span>
          <span className="orange">&#39;Terracotta Army&#39;</span>,{" "}
          <span className="celeste">seen</span>
          <span className="white">:</span>
          <span className="orange">true</span>
          <span className="blue">&#125;</span>,{"\n"}
        </code>
        <code>
          <span className="blue">&#93;</span>;
          {"\n\n"}
        </code>
        <code>
          <span className={"pink"}>export</span>{" "}
          <span className={"pink"}>default</span>{" "}
          <span className={"blue"}>function</span>{" "}
          <span className={"yellow"}>BucketList</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"yellow"}>&#41;</span>{" "}
          <span className={"yellow"}>&#123;</span>
          {"\n\n"}
        </code>
        <code>
          <span className={"yellow"}>setList</span>
          <span className={"yellow"}>&#40;</span>{" "}
          <span className={"celeste"}>list</span>
          <span className={"white"}>.</span>
          <span className={"green"}>map</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"celeste"}>artwork</span>{" "}
          <span className={"white"}>=&gt;</span>{" "}
          <span className={"blue"}>&#123;</span>
          {"\n    "}
          <span className={"pink"}>if</span>
          <span className={"pink"}>&#40;</span>{" "}
          <span className={"celeste"}>artwork</span>
          <span className={"white"}>.</span>
          <span className={"celeste"}>id</span>{" "}
          <span className={"white"}>===</span>{" "}
          <span className={"celeste"}>artworkId</span>{" "}
          <span className={"pink"}>&#41;</span>{" "}
          <span className={"pink"}>&#123;</span>
          {"\n      "}
          <span className={"pink"}>return</span>{" "}
          <span className={"blue"}>&#123;</span>{" "}
          <span className={"celeste"}>...artwork</span>,{" "}
          <span className={"celeste"}>seen</span>{" "}
          <span className={"white"}>:</span>{" "}
          <span className={"celeste"}>nextSeen</span>{" "}
          <span className={"blue"}>&#125;</span>;{"\n    "}
          <span className={"pink"}>&#125;</span>{" "}
          <span className={"pink"}>else</span>{" "}
          <span className={"pink"}>&#123;</span>
          {"\n      "}
          <span className={"pink"}>return</span>{" "}
          <span className={"celeste"}>artwork</span>;{"\n    "}
          <span className={"pink"}>&#125;</span>
          {"\n  "}
          <span className={"blue"}>&#125;</span>
          <span className={"yellow"}>&#41;</span>
          <span className={"yellow"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>
          {"\n\n  "}
        </code>
        <code>
          <span className="pink">return</span>{" "}
          <span className="pink">&#40;</span>
          {"\n    "}
        </code>
        <code>
          &lt;&gt;
          {"\n      "}
        </code>
        <code>
          &lt;<span className="blue">h1</span>&gt; &lt;
          <span className="white">Lista de deseos de arte</span>&gt;
          &lt;/<span className="blue">h1</span>&gt;
          {"\n      "}
        </code>
        <code>
          &lt;<span className="blue">h2</span>&gt; &lt;
          <span className="white">Mi lista de arte para ver:</span>
          &gt; &lt;/<span className="blue">h2</span>&gt;
          {"\n      "}
        </code>
        <code>
          &lt;<span className={"green"}>ItemList</span>{" "}
          <span className={"celeste"}>artworks</span>
          <span className={"white"}>=</span>
          <span className={"blue"}>&#123;</span>
          <span className={"celeste"}>list</span>
          <span className={"blue"}>&#125;</span>{" "}
          <span className={"celeste"}>onToggle</span>
          <span className={"white"}>=</span>
          <span className={"blue"}>&#123;</span>
          <span className={"celeste"}>handleToggle</span>
          <span className={"blue"}>&#125;</span> /&gt;
          {"\n    "}
        </code>
        <code>
          &lt;/&gt;
          {"\n  "}
        </code>
        <code>
          <span className="pink">&#41;</span>;{"\n"}
          <span className="yellow">&#125;</span>{"\n\n"}
        </code>
        <code>
          &lt;<span className="blue">ul</span>&gt;{"\n  "}
          <span className={"blue"}>&#123;</span>
          <span className={"celeste"}>artworks</span>
          <span className={"white"}>.</span>
          <span className={"green"}>map</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"celeste"}>artwork</span>{" "}
          <span className={"white"}>=&gt;</span>{" "}
          <span className={"blue"}>&#40;</span>
          {"\n  "}
          &lt;<span className="blue">li</span>{" "}
          <span className="blue">key</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="celeste">artwork</span>
          <span className="blue">.</span>
          <span className="blue">id</span>
          <span className="blue">&#125;</span>&gt;
          {"\n    "}
        </code>
        <code>
          &lt;<span className="blue">label</span>&gt;
          {"\n      "}
          &lt;<span className="blue">input</span>{" "}
          <span className="celeste">type</span>
          <span className="white">=</span>
          <span className="celeste">&quot;checkbox&quot;</span>{" "}
          <span className="celeste">checked</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="celeste">artwork</span>
          <span className="white">.</span>
          <span className="celeste">seen</span>
          <span className="blue">&#125;</span>
          {"\n        "}
          <span className="celeste">onChange</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="blue">&#40;</span>
          <span className="celeste">e</span>
          <span className="blue">&#41;</span>
          <span className="white">=&gt;</span>
          <span className="blue">&#123;</span>
          <span className="yellow">onToggle</span>
          <span className="yellow">&#40;</span>
          <span className="celeste">artwork</span>
          <span className="white">.</span>
          <span className="celeste">id</span>,{" "}
          <span className="celeste">e</span>
          <span className="white">.</span>
          <span className="celeste">target</span>
          <span className="white">.</span>
          <span className="celeste">checked</span>
          <span className="yellow">&#41;</span>;
          <span className="blue">&#125;</span>
          <span className="blue">&#125;</span> /&gt;
          {"\n      "}
          <span className="blue">&#123;</span>
          <span className="celeste">artwork</span>
          <span className="white">.</span>
          <span className="celeste">title</span>
          <span className="blue">&#125;</span>
          {"\n    "}
          &lt;/<span className="blue">label</span>&gt;
          {"\n  "}
        </code>
        <code>
          &lt;/<span className="blue">li</span>&gt;
          {"\n"}
          &lt;/<span className="blue">ul</span>&gt;
        </code>
      </pre>
      <p>
        Si copiar arrays en el código se vuelve tedioso, puedes usar
        una biblioteca como <span className="note">Immer</span> para
        reducir el código repetitivo:
      </p>
      <pre className="ide">
      	<code>
          <span className={"pink"}>import</span>{" "}
          <span className={"blue"}>&#123;</span>{" "}
          <span className={"celeste"}>useState</span>{" "}
          <span className={"blue"}>&#125;</span>{" "}
          <span className={"pink"}>from</span>{" "}
          <span className={"orange"}>&#39;react&#39;</span>;
          {"\n"}
          <span className={"pink"}>import</span>{" "}
          <span className={"blue"}>&#123;</span>{" "}
          <span className={"celeste"}>useImmer</span>{" "}
          <span className={"blue"}>&#125;</span>{" "}
          <span className={"pink"}>from</span>{" "}
          <span className={"orange"}>&#39;use-immer&#39;</span>;
          {"\n\n"}
        </code>
        <code>
          <span className="blue">let</span>{" "}
          <span className="celeste">nextId</span>{" "}
          <span className="white">=</span>{" "}
          <span className="orange">3</span>;{"\n"}
        </code>
        <code>
          <span className="blue">const</span>{" "}
          <span className="celeste">initialList</span>{" "}
          <span className="white">=</span>{" "}
          <span className="blue">&#91;</span>
          {"\n  "}
        </code>
        <code>
          <span className="blue">&#123;</span>
          <span className="celeste">id</span>
          <span className="white">:</span>
          <span className="orange">0</span>,{" "}
          <span className="celeste">title</span>
          <span className="white">:</span>
          <span className="orange">&#39;Big Bellies&#39;</span>,{" "}
          <span className="celeste">seen</span>
          <span className="white">:</span>
          <span className="orange">false</span>
          <span className="blue">&#125;</span>,{"\n  "}
          <span className="blue">&#123;</span>
          <span className="celeste">id</span>
          <span className="white">:</span>
          <span className="orange">1</span>,{" "}
          <span className="celeste">title</span>
          <span className="white">:</span>
          <span className="orange">&#39;Lunar Landscape&#39;</span>,{" "}
          <span className="celeste">seen</span>
          <span className="white">:</span>
          <span className="orange">false</span>
          <span className="blue">&#125;</span>,{"\n  "}
          <span className="blue">&#123;</span>
          <span className="celeste">id</span>
          <span className="white">:</span>
          <span className="orange">2</span>,{" "}
          <span className="celeste">title</span>
          <span className="white">:</span>
          <span className="orange">&#39;Terracotta Army&#39;</span>,{" "}
          <span className="celeste">seen</span>
          <span className="white">:</span>
          <span className="orange">true</span>
          <span className="blue">&#125;</span>,{"\n"}
        </code>
        <code>
          <span className="blue">&#93;</span>;
          {"\n\n"}
        </code>
        <code>
          <span className={"pink"}>export</span>{" "}
          <span className={"pink"}>default</span>{" "}
          <span className={"blue"}>function</span>{" "}
          <span className={"yellow"}>BucketList</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"yellow"}>&#41;</span>{" "}
          <span className={"yellow"}>&#123;</span>
          {"\n\n"}
        </code>
        <code>
        <span className="blue">const</span>{" "}
          <span className="yellow">&#91;</span>
          <span className="celeste">list</span>,{" "}
          <span className="celeste">updateList</span>
          <span className="yellow">&#93;</span>{" "}
          <span className="white">=</span>{" "}
          <span className="green">useImmer</span>
          <span className="yellow">&#40;</span>
          <span className="blue">&#123;</span>
          <span className="celeste">initialList</span>
          <span className="blue">&#125;</span>
          <span className="yellow">&#41;</span>;
          {"\n"}
        </code>
        <code>
          <span className={"blue"}>function</span>{" "}
          <span className={"yellow"}>handleImageChange</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"celeste"}>e</span>
          <span className={"yellow"}>&#41;</span>{" "}
          <span className={"yellow"}>&#123;</span>
          {"\n    "}
          <span className={"yellow"}>updatePerson</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"celeste"}>draft</span>
          <span className={"white"}>=&gt;</span>
          <span className={"blue"}>&#123;</span>
          <span className={"celeste"}>draft</span>
          <span className={"white"}>.</span>
          <span className={"celeste"}>artwork</span>
          <span className={"white"}>.</span>
          <span className={"celeste"}>image</span>{" "}
          <span className={"white"}>=</span>{" "}
          <span className="celeste">e</span>
          <span className="white">.</span>
          <span className="celeste">target</span>
          <span className="white">.</span>
          <span className="celeste">value</span>;{"\n  "}
          <span className={"blue"}>&#125;</span>
          <span className={"yellow"}>&#41;</span>;{"\n"}
          <span className={"yellow"}>&#125;</span>
          {"\n\n"}
        </code>
        <code>
        	<span className="blue">function</span>{" "}
        	<span className="yellow">handleToggle</span>
        	<span className="yellow">&#40;</span>
        	<span className="celeste">artworkId</span>,
        	<span className="celeste">nextSeen</span>
        	<span className="yellow">&#41;</span>{" "}
        	<span className="yellow">&#123;</span>{"\n  "}
        	<span className="yellow">updateList</span>{" "}
        	<span className="yellow">&#40;</span>
        	<span className="celeste">draft</span>
        	<span className="white">=&gt;</span>
        	<span className="blue">&#123;</span>{"\n    "}
        	<span className="blue">const</span>{" "}
        	<span className="celeste">artwork</span>{" "}
        	<span className="white">=</span>{" "}
        	<span className="celeste">draft</span>
        	<span className="white">.</span>
        	<span className="green">find</span>
        	<span className="yellow">&#40;</span>
        	<span className="celeste">a</span>{" "}
        	<span className="white">=&gt;</span>{" "}
        	<span className="celeste">a</span>
        	<span className="white">.</span>
        	<span className="celeste">id</span>{" "}
        	<span className="white">===</span>{" "}
        	<span className="celeste">artworkId</span>
        	<span className="yellow">&#41;</span>;{"\n    "}
        	<span className="celeste">artwork</span>
        	<span className="white">.</span>
        	<span className="celeste">seen</span>{" "}
        	<span className="white">=</span>{" "}
        	<span className="celeste">nextSeen</span>;{"\n  "}
        	<span className="blue">&#125;</span>
        	<span className="yellow">&#41;</span>;{"\n"}
        	<span className="yellow">&#125;</span>{"\n\n  "}
        </code>
        <code>
          <span className="pink">return</span>{" "}
          <span className="pink">&#40;</span>
          {"\n    "}
        </code>
        <code>
          &lt;&gt;
          {"\n      "}
        </code>
        <code>
          &lt;<span className="blue">h1</span>&gt; &lt;
          <span className="white">Lista de deseos de arte</span>&gt;
          &lt;/<span className="blue">h1</span>&gt;
          {"\n      "}
        </code>
        <code>
          &lt;<span className="blue">h2</span>&gt; &lt;
          <span className="white">Mi lista de arte para ver:</span>
          &gt; &lt;/<span className="blue">h2</span>&gt;
          {"\n      "}
        </code>
        <code>
          &lt;<span className={"green"}>ItemList</span>{" "}
          <span className={"celeste"}>artworks</span>
          <span className={"white"}>=</span>
          <span className={"blue"}>&#123;</span>
          <span className={"celeste"}>list</span>
          <span className={"blue"}>&#125;</span>{" "}
          <span className={"celeste"}>onToggle</span>
          <span className={"white"}>=</span>
          <span className={"blue"}>&#123;</span>
          <span className={"celeste"}>handleToggle</span>
          <span className={"blue"}>&#125;</span> /&gt;
          {"\n    "}
        </code>
        <code>
          &lt;/&gt;
          {"\n  "}
        </code>
        <code>
          <span className="pink">&#41;</span>;{"\n"}
          <span className="yellow">&#125;</span>{"\n\n"}
        </code>
        <code>
        <span className="blue">function</span>{" "}
        	<span className="yellow">ItemList</span>
        	<span className="yellow">&#40;</span>
        	<span className="blue">&#123;</span>{" "}
        	<span className="celeste">artworks</span>,{" "}
        	<span className="celeste">onToggle</span>{" "}
        	<span className="blue">&#125;</span>
        	<span className="yellow">&#41;</span>{" "}
        	<span className="yellow">&#123;</span>{"\n  "}
        </code>
        <code>
          <span className="pink">return</span>{" "}
          <span className="pink">&#40;</span>
          {"\n    "}
        </code>
        <code>
          &lt;<span className="blue">ul</span>&gt;{"\n    "}
          <span className={"blue"}>&#123;</span>
          <span className={"celeste"}>artworks</span>
          <span className={"white"}>.</span>
          <span className={"green"}>map</span>
          <span className={"yellow"}>&#40;</span>
          <span className={"celeste"}>artwork</span>{" "}
          <span className={"white"}>=&gt;</span>{" "}
          <span className={"blue"}>&#40;</span>
          {"\n      "}
          &lt;<span className="blue">li</span>{" "}
          <span className="blue">key</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="celeste">artwork</span>
          <span className="blue">.</span>
          <span className="blue">id</span>
          <span className="blue">&#125;</span>&gt;
          {"\n        "}
        </code>
        <code>
          &lt;<span className="blue">label</span>&gt;
          {"\n          "}
          &lt;<span className="blue">input</span>{" "}
          <span className="celeste">type</span>
          <span className="white">=</span>
          <span className="celeste">&quot;checkbox&quot;</span>{" "}
          <span className="celeste">checked</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="celeste">artwork</span>
          <span className="white">.</span>
          <span className="celeste">seen</span>
          <span className="blue">&#125;</span>
          {"\n          "}
          <span className="celeste">onChange</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="blue">&#40;</span>
          <span className="celeste">e</span>
          <span className="blue">&#41;</span>
          <span className="white">=&gt;</span>
          <span className="blue">&#123;</span>
          <span className="yellow">onToggle</span>
          <span className="yellow">&#40;</span>
          <span className="celeste">artwork</span>
          <span className="white">.</span>
          <span className="celeste">id</span>,{" "}
          <span className="celeste">e</span>
          <span className="white">.</span>
          <span className="celeste">target</span>
          <span className="white">.</span>
          <span className="celeste">checked</span>
          <span className="yellow">&#41;</span>;
          <span className="blue">&#125;</span>
          <span className="blue">&#125;</span> /&gt;
          {"\n          "}
          <span className="blue">&#123;</span>
          <span className="celeste">artwork</span>
          <span className="white">.</span>
          <span className="celeste">title</span>
          <span className="blue">&#125;</span>
          {"\n        "}
          &lt;/<span className="blue">label</span>&gt;
          {"\n      "}
        </code>
        <code>
          &lt;/<span className="blue">li</span>&gt;
          {"\n    "}
          &lt;/<span className="blue">ul</span>&gt;
          {"\n  "}
        </code>
        <code>
          <span className="pink">&#41;</span>;{"\n"}
          <span className="yellow">&#125;</span>
        </code>
      </pre>
    </>
  );
}
export default Interactivo;
