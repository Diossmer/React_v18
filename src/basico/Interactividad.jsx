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
          <span>&#47;&#47;data.js</span>
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
          ,{"\n"}
          <span className="blue">&#125;</span>,
          <span className="blue">&#123;</span>
          {"\n  "}
          <span className="celeste">id</span>
          <span className="white">:</span>
          <span className="pink">1</span>,{"\n  "}
          <span className="celeste">name</span>
          <span className="white">:</span>
          <span className="orange">
            &#39;Mario José Molina-Pasquel Henríquez&#39;
          </span>
          ,{"\n  "}
          <span className="celeste">profession</span>
          <span className="white">:</span>
          <span className="orange">&#39;chemist&#39;</span>,{"\n  "}
          <span className="celeste">accomplishment</span>
          <span className="white">:</span>
          <span className="orange">
            &#39;discovery of Arctic ozone hole&#39;
          </span>
          ,{"\n  "}
          <span className="celeste">imageId</span>
          <span className="white">:</span>
          <span className="orange">&#39;mynHUSa&#39;</span>,{"\n"}
          <span className="blue">&#125;</span>,
          <span className="blue">&#123;</span>
          {"\n  "}
          <span className="celeste">id</span>
          <span className="white">:</span>
          <span className="pink">2</span>,{"\n  "}
          <span className="celeste">name</span>
          <span className="white">:</span>
          <span className="orange">
            &#39;Mohammad Abdus Salam&#39;
          </span>
          ,{"\n  "}
          <span className="celeste">profession</span>
          <span className="white">:</span>
          <span className="orange">&#39;physicist&#39;</span>,{"\n  "}
          <span className="celeste">accomplishment</span>
          <span className="white">:</span>
          <span className="orange">
            &#39;electromagnetism theory&#39;
          </span>
          ,{"\n  "}
          <span className="celeste">imageId</span>
          <span className="white">:</span>
          <span className="orange">&#39;bE7W1ji&#39;</span>,{"\n"}
          <span className="blue">&#125;</span>,
          <span className="blue">&#123;</span>
          {"\n  "}
          <span className="celeste">id</span>
          <span className="white">:</span>
          <span className="pink">3</span>,{"\n  "}
          <span className="celeste">name</span>
          <span className="white">:</span>
          <span className="orange">&#39;Percy Lavon Julian&#39;</span>
          ,{"\n  "}
          <span className="celeste">profession</span>
          <span className="white">:</span>
          <span className="orange">&#39;chemist&#39;</span>,{"\n  "}
          <span className="celeste">accomplishment</span>
          <span className="white">:</span>
          <span className="orange">
            &#39;pioneering cortisone drugs, steroids and birth
            control pills&#39;
          </span>
          ,{"\n  "}
          <span className="celeste">imageId</span>
          <span className="white">:</span>
          <span className="orange">&#39;IOjWm71&#39;</span>,{"\n"}
          <span className="blue">&#125;</span>,
          <span className="blue">&#123;</span>
          {"\n  "}
          <span className="celeste">id</span>
          <span className="white">:</span>
          <span className="pink">4</span>,{"\n  "}
          <span className="celeste">name</span>
          <span className="white">:</span>
          <span className="orange">
            &#39;Subrahmanyan Chandrasekhar&#39;
          </span>
          ,{"\n  "}
          <span className="celeste">profession</span>
          <span className="white">:</span>
          <span className="orange">&#39;astrophysicist&#39;</span>,
          {"\n  "}
          <span className="celeste">accomplishment</span>
          <span className="white">:</span>
          <span className="orange">
            &#39;white dwarf star mass calculations&#39;
          </span>
          ,{"\n  "}
          <span className="celeste">imageId</span>
          <span className="white">:</span>
          <span className="orange">&#39;lrWQx8l&#39;</span>,{"\n"}
          <span className="blue">&#125;</span>
          <span className="yellow">&#93;</span>;{"\n\n"}
        </code>
      </pre>
      <pre className="ide">
        <code>
          <span className={"pink"}>import </span>
          <span className={"celeste"}> useState </span>
          <span className={"pink"}> from </span>
          <span className={"orange"}>&#39;react&#39;</span>;{"\n\n"}
        </code>
        <code>
          <span className={"pink"}>import </span>
          <span className={"celeste"}> Library </span>
          <span className={"pink"}> from </span>
          <span className={"orange"}>&#39;./Library.js&#39;</span>;
          {"\n\n"}
        </code>
      </pre>
    </>
  );
};
export default Interactivo;
