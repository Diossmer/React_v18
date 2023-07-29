import Estilos from "./InicioRapido.module.css";

export default function Inicio() {
  return (
    <>
      <h1 id="inicio">Inicio Rapido</h1>
      <h3>Crear componentes</h3>
      <pre className={Estilos.ide}>
        <code>
          <span className={Estilos.blue}>function </span>
          <span className={Estilos.yellow}>MyButton</span>
          <span className={Estilos.yellow}>&#40;</span>
          <span className={Estilos.yellow}>&#41; </span>
          <span className={Estilos.blue}>&#123; </span>
          {"\n  "}
          <span className={Estilos.pink}>return </span>
          &lt;<span className={Estilos.blue}>button</span>&gt; Soy un
          botón &lt;/
          <span className={Estilos.blue}>button</span>&gt;
          {"\n"}
          <span className={Estilos.blue}>&#125; </span>
        </code>
      </pre>
      <h3>Anidar componentes</h3>
      <pre className={Estilos.ide}>
        <span className={Estilos.pink}>import </span>
        <span className={Estilos.yellow}>&#123;</span>
        <span className={Estilos.celeste}> Mybutton </span>
        <span className={Estilos.yellow}>&#125;</span>
        <span className={Estilos.pink}> from </span>
        <span className={Estilos.orange}>&#39;./Mybutton&#39;</span>;
        {"\n\n"}
        <code>
          <span className={Estilos.pink}>export </span>
          <span className={Estilos.pink}>default </span>
          <span className={Estilos.blue}>function </span>
          <span className={Estilos.yellow}>MyApp</span>
          <span className={Estilos.yellow}>&#40;</span>
          <span className={Estilos.yellow}>&#41; </span>
          <span className={Estilos.blue}>&#123; </span>
          {"\n  "}
          <span className={Estilos.pink}>return </span>
          <span className={Estilos.yellow}>&#40;</span>
          {"\n    "}
          &lt;<span className={Estilos.blue}>div</span>&gt;{" "}
          <span className={Estilos.greendark}>
            &#47;&#47;Envolver el padre con &lt;&gt;&lt;/&gt; puede
            ser Tambien &lt;div&gt;&lt;/div&gt;
          </span>
          {"\n      "}
          &lt;<span className={Estilos.blue}>h1</span>&gt;Bienvenido a
          mi aplicación&lt;/
          <span className={Estilos.blue}>h1</span>&gt;
          {"\n      "}
          &lt;<span className={Estilos.green}>button</span> /&gt;
          {"\n    "}
          &lt;/<span className={Estilos.blue}>div</span>&gt;
          {"\n  "}
          <span className={Estilos.yellow}>&#41;</span>;{"\n"}
          <span className={Estilos.blue}>&#125; </span>
        </code>
      </pre>
      <p>
        <i>Nota: </i>{" "}
        <span className={Estilos.note}>
          Components &#40;&#123; &#123; &#125; &#125;&#41;{" "}
        </span>
        Esto es desestructuración de objetos. Esto permite extraer
        propiedades específicas de un objeto y usarlas como argumentos
        en un componente de React.
      </p>
      <h3>Resultados:</h3>
      <pre className={Estilos.ide}>
        <h2>Bienvenido a mi aplicación</h2>
        <button>Soy un botón</button>
      </pre>
      <hr />
      <h3 id="añadirEstilo">Añadir Estilos</h3>
      <p>
        En React, especificas una clase de CSS con className. Funciona
        de la misma forma que el atributo class de HTML:
      </p>
      <pre className={Estilos.ide}>
        <p>
          <span className={Estilos.pink}>import </span>
          <span className={Estilos.orange}>
            &#39;./button.css&#39;
          </span>
          ;
        </p>
        <p>
          &lt;
          <span className={Estilos.blue}>button</span>
          <span className={Estilos.celeste}> className</span>=
          <span className={Estilos.orange}>&quot;button&quot;</span>
          &gt; button &lt;/
          <span className={Estilos.blue}>button</span>&gt;
        </p>
        <h3>Tambien importando modulo</h3>
        <p>
          <span className={Estilos.pink}>import </span>
          <span className={Estilos.yellow}>&#123;</span>
          <span className={Estilos.celeste}> Estilos </span>
          <span className={Estilos.yellow}>&#125;</span>
          <span className={Estilos.pink}> from </span>
          <span className={Estilos.orange}>
            &#39;./button.module.css&#39;
          </span>
          ;
        </p>
        <p>
          &lt;
          <span className={Estilos.blue}>img</span>
          <span className={Estilos.celeste}> className</span>=
          <span className={Estilos.blue}>&#123;</span>
          <span className={Estilos.celeste}>Estilos.button</span>
          <span className={Estilos.blue}>&#125;</span>/&gt;
        </p>
      </pre>
      <p>
        <i>Nota: </i>
        <code className={Estilos.note}>
          <span>style</span>=<span>&#123;&#123;&#125;&#125;</span>
        </code>{" "}
        No es una sintaxis especial, sino un objeto regular{" "}
        <code className={Estilos.note}>
          <span>&#123;&#125;</span>
        </code>{" "}
        dentro de las llaves de JSX de{" "}
        <code className={Estilos.note}>
          <span>style</span>=<span>&#123;&#123;&#125;&#125;</span>
        </code>{" "}
        se indicá que está pasando un objeto JavaScript. Puedes
        utilizar el atributo{" "}
        <code className={Estilos.note}>
          <span>style</span>
        </code>{" "}
        cuando tus Estilos dependen de variables de JavaScript.
        <code className={Estilos.note}>
          <span>style</span>=
          <span>
            &#123;&#123; key: &quot;valor&quot; &#125;&#125;
          </span>
        </code>{" "}
      </p>
      <div className="alert">
        <div>❗attention</div>
        <div>
          El archivo con su modulo{" "}
          <span className="shadow">*.module.css</span> sirve para
          añadir el estilo en el mismo archivo especifico.
        </div>
        <div>
          En el Archivo css <span className="shadow">*.css</span>{" "}
          generaliza en la aplicacion el uso de su estilos
        </div>
      </div>
      <hr />
      <h3 id="mostrarDato">Mostrar Datos</h3>
      <p>
        JSX te permite poner marcado dentro de JavaScript. Las llaves
        te permiten «secuencias de escape» hacia JavaScript de forma
        tal que puedas incrustar una variable de tu código y
        mostrársela al usuario. Por ejemplo, esto mostrará{" "}
        <code className={Estilos.note}>user.name</code>:
      </p>
      <pre className={Estilos.ide}>
        <p>
          <span className={Estilos.pink}>import </span>
          <span className={Estilos.yellow}>&#123;</span>
          <span className={Estilos.celeste}> React </span>
          <span className={Estilos.yellow}>&#125;</span>
          <span className={Estilos.pink}> from </span>
          <span className={Estilos.orange}>&#39;react&#39;</span>;
          {"\n"}
          <span className={Estilos.greendark}>&#47;&#47;</span>
          <span className={Estilos.greendark}>
            Hook no funciona aqui, solo Lógica Javascript
          </span>
        </p>
        <code>
          <span className={Estilos.pink}>export </span>
          <span className={Estilos.pink}>default </span>
          <span className={Estilos.blue}>function </span>
          <span className={Estilos.yellow}>MyApp</span>
          <span className={Estilos.yellow}>&#40;</span>
          <span className={Estilos.yellow}>&#41; </span>
          <span className={Estilos.blue}>&#123; </span>
          {"\n  "}
          <span className={Estilos.greendark}>&#47;&#47;</span>
          <span className={Estilos.greendark}>
            toda la lógica de React
          </span>
          {"\n  "}
          <span className={Estilos.blue}>let</span>
          <span className={Estilos.celeste}> user</span>=
          <span className={Estilos.blue}> &#123;</span>
          <span className={Estilos.celeste}>name</span>:
          <span className={Estilos.orange}>
            &quot;Bienvenido a mi aplicación&quot;
          </span>
          <span className={Estilos.blue}>&#125;</span>;{"\n  "}
          <span className={Estilos.pink}>return </span>
          <span className={Estilos.yellow}>&#40;</span>
          {"\n    "}
          &lt;<span className={Estilos.blue}>div</span>&gt;
          {"\n      "}
          &lt;<span className={Estilos.blue}>h1</span>&gt;
          <span className={Estilos.blue}>&#123;</span>
          <span className={Estilos.celeste}>user.name</span>
          <span className={Estilos.blue}>&#125;</span>&lt;/
          <span className={Estilos.blue}>h1</span>&gt;
          {"\n    "}
          &lt;/<span className={Estilos.blue}>div</span>&gt;
          {"\n  "}
          <span className={Estilos.yellow}>&#41;</span>;{"\n"}
          <span className={Estilos.blue}>&#125; </span>
        </code>
      </pre>
      <hr />
      <h3 id="renderCond">Renderizado condicional</h3>
      <p>
        En React, no hay una sintaxis especial para escribir
        condicionales. En cambio, usarás las mismas técnicas que usas
        al escribir código regular de JavaScript. Por ejemplo, puedes
        usar una sentencia <span className={Estilos.note}>if</span>{" "}
        para incluir JSX condicionalmente:
      </p>
      <pre className={Estilos.ide}>
        <span className={Estilos.blue}>let</span>
        <span className={Estilos.celeste}> content</span>;{"\n\n"}
        <span className={Estilos.pink}>if</span>
        <span className={Estilos.pink}>&#40;</span>
        <span className={Estilos.celeste}>isLoggedIn</span>
        <span className={Estilos.pink}>&#41;</span>
        <span className={Estilos.pink}>&#123;</span>
        {"\n  "}
        <span className={Estilos.celeste}>content</span>= &lt;
        <span className={Estilos.green}>AdminPanel</span> /&gt;
        {"\n"}
        <span className={Estilos.pink}>&#125;</span>
        <span className={Estilos.pink}> else </span>
        <span className={Estilos.pink}>&#123;</span>
        {"\n  "}
        <span className={Estilos.celeste}>content</span>= &lt;
        <span className={Estilos.green}>LoginForm</span> /&gt;
        {"\n"}
        <span className={Estilos.pink}>&#125; </span>
        {"\n"}
        <span className={Estilos.pink}>return </span>
        <span className={Estilos.yellow}>&#40;</span>
        {"\n  "}
        &lt;&gt;
        {"\n    "}
        <span className={Estilos.blue}>&#123;</span>
        <span className={Estilos.celeste}>content</span>
        <span className={Estilos.blue}>&#125;</span>
        {"\n  "}
        &lt;/&gt;
        {"\n"}
        <span className={Estilos.yellow}>&#41;</span>
        <h3>operador ? condicional</h3>
        &lt;&gt;
        {"\n"}
        <span className={Estilos.blue}>&#123;</span>
        <span className={Estilos.celeste}>isLoggedIn</span>
        <span className={Estilos.pink}> ? </span>
        <span className={Estilos.yellow}>&#40;</span>
        {"\n  "}
        &lt;<span className={Estilos.green}>AdminPanel</span> /&gt;
        {"\n"}
        <span className={Estilos.yellow}>&#41;</span>
        <span className={Estilos.pink}> : </span>
        <span className={Estilos.yellow}>&#40;</span>
        {"\n  "}
        &lt;<span className={Estilos.green}>LoginForm</span> /&gt;
        {"\n"}
        <span className={Estilos.yellow}>&#41;</span>
        <span className={Estilos.blue}>&#125;</span>
        {"\n"}
        &lt;/&gt;
        <h3>Sintaxis lógica &&</h3>
        &lt;&gt;
        {"\n"}
        <span className={Estilos.blue}>&#123;</span>
        <span className={Estilos.celeste}>isLoggedIn</span>
        <span className={Estilos.pink}> && </span>
        &lt;<span className={Estilos.green}>AdminPanel</span> /&gt;
        <span className={Estilos.blue}>&#125;</span>
        {"\n"}
        &lt;/&gt;
      </pre>
      <hr />
      <h3 id="renderList">Renderizado de listas</h3>
      <p>
        Dependerás de funcionalidades de JavaScript como los{" "}
        <span className={Estilos.note}>bucles for</span> y la{" "}
        <span className={Estilos.note}>
          función map&#40;&#41; de los arreglos
        </span>{" "}
        para renderizar listas de componentes. Por ejemplo, digamos
        que tienes un arreglo de frameworks:
      </p>
      <pre className={Estilos.ide}>
        <span className={Estilos.blue}>const </span>
        <span className={Estilos.celeste}>frameworks</span>=
        <span className={Estilos.yellow}> &#91;</span>
        {"\n  "}
        <span className={Estilos.blue}>&#123;</span>
        <span className={Estilos.celeste}> title</span>:
        <span className={Estilos.orange}> &#39;react&#39;</span>,
        <span className={Estilos.celeste}> id</span>:
        <span className={Estilos.white}>1 </span>
        <span className={Estilos.blue}>&#125;</span>,{"\n  "}
        <span className={Estilos.blue}>&#123;</span>
        <span className={Estilos.celeste}> title</span>:
        <span className={Estilos.orange}> &#39;vue&#39;</span>,
        <span className={Estilos.celeste}> id</span>:
        <span className={Estilos.white}>2 </span>
        <span className={Estilos.blue}>&#125;</span>
        {"\n"}
        <span className={Estilos.yellow}>&#93;</span>;
      </pre>
      <p>
        Dentro de tu componente, utiliza la{" "}
        <span className={Estilos.note}>función map()</span> para
        transformar el arreglo de productos en un arreglo de elementos{" "}
        <span className={Estilos.note}>&lt;li&gt;</span>:
      </p>
      <pre className={Estilos.ide}>
        <span className={Estilos.pink}>export </span>
        <span className={Estilos.pink}>default </span>
        <span className={Estilos.blue}>function </span>
        <span className={Estilos.yellow}>Software</span>
        <span className={Estilos.yellow}>&#40;</span>
        <span className={Estilos.yellow}>&#41; </span>
        <span className={Estilos.blue}>&#123; </span>
        {"\n  "}
        <span className={Estilos.blue}>const </span>
        <span className={Estilos.celeste}>frame </span>=
        <span className={Estilos.celeste}> frameworks</span>
        <span className={Estilos.pink}>.map</span>
        <span className={Estilos.yellow}>&#40;</span>
        <span className={Estilos.yellow}>&#40;</span>
        <span className={Estilos.white}>framework</span>
        <span className={Estilos.yellow}>&#41;</span>=&gt;{" "}
        <span className={Estilos.yellow}>&#40;</span>
        {"\n    "}
        <span className={Estilos.green}>
          &lt;li <span className={Estilos.white}>key</span>=
          <span className={Estilos.blue}>&#123;</span>
          <span className={Estilos.white}>framework.id</span>
          <span className={Estilos.blue}>&#125;</span>&gt;
        </span>
        <span className={Estilos.blue}>&#123;</span>
        <span className={Estilos.white}>framework.title</span>
        <span className={Estilos.blue}>&#125;</span>
        <span className={Estilos.green}>&lt;/li&gt;</span>
        {"\n  "}
        <span className={Estilos.yellow}>&#41;</span>
        <span className={Estilos.yellow}>&#41;</span>;{"\n  "}
        <span className={Estilos.pink}>return </span>
        <span className={Estilos.yellow}>&#40;</span>
        &lt;ul&gt;
        <span className={Estilos.blue}>&#123;</span>
        <span className={Estilos.celeste}>frame</span>
        <span className={Estilos.blue}>&#125;</span>
        &lt;/ul&gt;
        <span className={Estilos.yellow}>&#41;</span>;{"\n"}
        <span className={Estilos.blue}>&#125;</span>
      </pre>
      <p>
        <i>Nota:</i> que{" "}
        <span className={Estilos.note}>&lt;li&gt;</span> tiene un
        atributo <span className={Estilos.note}>key</span> (llave).
        Para cada elemento en una lista, debes pasar una cadena o un
        número que identifique ese elemento de forma única entre sus
        hermanos. Usualmente, una llave debe provenir de tus datos,
        como un ID de una base de datos. React dependerá de tus llaves
        para entender qué ha ocurrido si luego insertas, eliminas o
        reordenas los elementos.
      </p>
      <hr />
      <h3 id="responEvent">Responder a eventos</h3>
      <p>
        Puedes responder a eventos declarando manejadores de eventos
        dentro de tus componentes:
      </p>
      <pre className={Estilos.ide}>
        <span className={Estilos.blue}>function </span>
        <span className={Estilos.yellow}>MyButton</span>
        <span className={Estilos.yellow}>&#40;</span>
        <span className={Estilos.yellow}>&#41; </span>
        <span className={Estilos.yellow}>&#123; </span>
        {"\n  "}
        <span className={Estilos.blue}>function </span>
        <span className={Estilos.yellow}>handleClick</span>
        <span className={Estilos.yellow}>&#40;</span>
        <span className={Estilos.yellow}>&#41; </span>
        <span className={Estilos.blue}>&#123; </span>
        {"\n    "}
        <span className={Estilos.yellow}>alert</span>
        <span className={Estilos.yellow}>&#40;</span>
        <span className={Estilos.orange}>&#39;my press!&#39;</span>
        <span className={Estilos.yellow}>&#41;</span>;{"\n  "}
        <span className={Estilos.blue}>&#125;</span>
        {"\n  "}
        <span className={Estilos.pink}>return </span>
        <span className={Estilos.yellow}>&#40;</span>
        &lt;<span className={Estilos.blue}>button</span>{" "}
        <span className={Estilos.celeste}>onClick</span>
        <span className={Estilos.white}>=</span>
        <span className={Estilos.blue}>&#123;</span>
        <span className={Estilos.celeste}>handleClick</span>
        <span className={Estilos.blue}>&#125;</span>
        &gt;
        <span className={Estilos.white}>Click me!</span>
        &lt;/<span className={Estilos.blue}>button</span>&gt;
        <span className={Estilos.yellow}>&#41;</span>;{"\n"}
        <span className={Estilos.yellow}>&#125;</span>
      </pre>
      <p>
        <i>Nota </i> ¡Nota que{" "}
        <span className={Estilos.note}>
          onClick=&#123;handleClick&#125;
        </span>{" "}
        no tiene paréntesis al final! No llames a la función
        manejadora de eventos: solamente necesitas pasarla hacia
        abajo. React llamará a tu manejador de eventos cuando el
        usuario haga clic en el botón. Tambien existe otra forma
        tambien de generar evento{" "}
        <span className={Estilos.note}>
          onClick=&#123;&#40;&#41;=&gt;handleClick&#40;&#41;&#125;
        </span>
      </p>
      <hr />
      <h3 id="actualPantalla">Actualizar la pantalla</h3>
      <p>
        A menudo, querrás que tu componente «recuerde» alguna
        información y la muestre. Por ejemplo, quizá quieras contar el
        número de veces que se hace clic en un botón. Para lograrlo,
        añade estado a tu componente.
      </p>
      <p>
        Obtendrás dos cosas de{" "}
        <span className={Estilos.note}>useState</span>: el estado
        actual <span className={Estilos.note}>&#40;count&#41;</span>,
        y la función que te permite actualizarlo{" "}
        <span className={Estilos.note}>&#40;setCount&#41;</span>.
        Puedes nombrarlos de cualquier forma, pero la convención es
        llamarlos algo como
        <span className={Estilos.note}>
          &#91;something, setSomething&#93;
        </span>
        . La primera vez que se muestra el botón,{" "}
        <span className={Estilos.note}>count</span> será{" "}
        <span className={Estilos.note}>0</span> porque pasaste{" "}
        <span className={Estilos.note}>0</span> a{" "}
        <span className={Estilos.note}>useState&#40;&#41;</span>.
        Cuando quieras cambiar el estado llama a{" "}
        <span className={Estilos.note}>setCount&#40;&#41;</span> y
        pásale el nuevo valor. Al hacer clic en este botón se
        incrementará el contador:
      </p>
      <pre className={Estilos.ide}>
        <span className={Estilos.pink}>import </span>
        <span className={Estilos.yellow}>&#123;</span>
        <span className={Estilos.celeste}> useState </span>
        <span className={Estilos.yellow}>&#125;</span>
        <span className={Estilos.pink}> from </span>
        <span className={Estilos.orange}>&#39;react&#39;</span>;
        {"\n\n"}
        <code>
          <span className={Estilos.blue}>function </span>
          <span className={Estilos.yellow}>MyButton</span>
          <span className={Estilos.yellow}>&#40;</span>
          <span className={Estilos.yellow}>&#41;</span>
          <span className={Estilos.yellow}> &#123;</span>
          {"\n\n  "}
          <span className={Estilos.blue}>const </span>
          <span className={Estilos.blue}>&#91;</span>
          <span className={Estilos.celeste}>count</span>,
          <span className={Estilos.celeste}>setCount</span>
          <span className={Estilos.blue}>&#93;</span>
          <span className={Estilos.yellow}> = </span>
          <span className={Estilos.yellow}>useState</span>
          <span className={Estilos.yellow}>&#40;</span>
          <span className={Estilos.white}>0</span>
          <span className={Estilos.yellow}>&#41;</span>;{"\n\n  "}
          <span className={Estilos.blue}>function </span>
          <span className={Estilos.yellow}>handleClick</span>
          <span className={Estilos.yellow}>&#40;</span>
          <span className={Estilos.yellow}>&#41;</span>
          <span className={Estilos.blue}> &#123;</span>
          {"\n    "}
          <span className={Estilos.yellow}>setCount</span>
          <span className={Estilos.yellow}>&#40;</span>
          <span className={Estilos.celeste}>count</span>
          <span className={Estilos.white}> + </span>
          <span className={Estilos.orange}>1</span>
          <span className={Estilos.yellow}>&#41;</span>;{"\n  "}
          <span className={Estilos.blue}>&#125;</span>
          {"\n\n  "}
          <span className={Estilos.pink}>return </span>
          &lt;<span className={Estilos.blue}>button</span>{" "}
          <span className={Estilos.celeste}>onClick</span>
          <span className={Estilos.white}>=</span>
          <span className={Estilos.blue}>&#123;</span>
          <span className={Estilos.celeste}>handleClick</span>
          <span className={Estilos.blue}>&#125;</span>
          &gt;
          <span className={Estilos.white}>Presionado </span>
          <span className={Estilos.blue}>&#123;</span>
          <span className={Estilos.white}>count</span>
          <span className={Estilos.blue}>&#125;</span>
          <span className={Estilos.white}> veces</span>
          &lt;/<span className={Estilos.blue}>button</span>&gt;;{"\n"}
          <span className={Estilos.yellow}>&#125;</span>
        </code>
      </pre>
      <p>
        <i>Nota </i> que cada botón «recuerda» su propio estado{" "}
        <span className={Estilos.note}>count</span> y que no afecta a
        otros botones.
      </p>
      <hr />
      <h1 id="usedHook">El uso de los Hooks</h1>
      <p>
        Las funciones que comienzan con use se llaman Hooks.{" "}
        <span className={Estilos.note}>useState</span> es un Hook
        nativo dentro de React. Puedes encontrar otros Hooks nativos
        en la{" "}
        <span className={Estilos.note}>
          referencia de la API de React
        </span>
        . También puedes escribir tus propios Hooks mediante la
        combinación de otros existentes.
      </p>
      <p>
        Los Hooks son más restrictivos que las funciones regulares.
        Solo puedes llamar a los Hooks en el primer nivel de tus
        componentes (u otros Hooks). Si quisieras utilizar{" "}
        <span className={Estilos.note}>useState</span> en una
        condicional o en un bucle, extrae un nuevo componente y ponlo
        ahí.
      </p>
      <hr />
      <h3>Compartir datos entre componentes</h3>
      <pre className="ide">
        <span className={Estilos.pink}>import </span>
        <span className={Estilos.yellow}>&#123;</span>
        <span className={Estilos.celeste}> useState </span>
        <span className={Estilos.yellow}>&#125;</span>
        <span className={Estilos.pink}> from </span>
        <span className={Estilos.orange}>&#39;react&#39;</span>;
        {"\n\n"}
        <code>
          <span className={Estilos.pink}>export </span>
          <span className={Estilos.pink}>default </span>
          <span className={Estilos.blue}>function </span>
          <span className={Estilos.yellow}>MyApp</span>
          <span className={Estilos.yellow}>&#40;</span>
          <span className={Estilos.yellow}>&#41;</span>
          <span className={Estilos.yellow}> &#123;</span>
          {"\n  "}
          <span className={Estilos.blue}>const </span>
          <span className={Estilos.blue}>&#91;</span>
          <span className={Estilos.celeste}>count</span>,
          <span className={Estilos.celeste}> setCount</span>
          <span className={Estilos.blue}>&#93;</span>
          <span className={Estilos.yellow}> = </span>
          <span className={Estilos.yellow}>useState</span>
          <span className={Estilos.yellow}>&#40;</span>
          <span className={Estilos.white}>0</span>
          <span className={Estilos.yellow}>&#41;</span>;{"\n\n  "}
          <span className={Estilos.blue}>function </span>
          <span className={Estilos.yellow}>handleClick</span>
          <span className={Estilos.yellow}>&#40;</span>
          <span className={Estilos.yellow}>&#41;</span>
          <span className={Estilos.blue}> &#123;</span>
          {"\n    "}
          <span className={Estilos.yellow}>setCount</span>
          <span className={Estilos.yellow}>&#40;</span>
          <span className={Estilos.celeste}>count</span>
          <span className={Estilos.white}> + </span>
          <span className={Estilos.orange}>1</span>
          <span className={Estilos.yellow}>&#41;</span>;{"\n  "}
          <span className={Estilos.blue}>&#125;</span>
          {"\n\n  "}
          <span className={Estilos.pink}>return </span>
          <span className={Estilos.yellow}>&#40;</span>
          {"\n    "}
          &lt;&gt;{"\n      "}
          &lt;<span className={Estilos.green}>MyButton </span>
          <span className={Estilos.celeste}>count</span>
          <span className={Estilos.white}>=</span>
          <span className={Estilos.blue}>&#123;</span>
          <span className={Estilos.celeste}>count</span>
          <span className={Estilos.blue}>&#125; </span>
          <span className={Estilos.celeste}>onClick</span>
          <span className={Estilos.white}>=</span>
          <span className={Estilos.blue}>&#123;</span>
          <span className={Estilos.celeste}>handleClick</span>
          <span className={Estilos.blue}>&#125; </span>
          /&gt;{"\n      "}
          &lt;<span className={Estilos.green}>MyButton </span>
          <span className={Estilos.celeste}>count</span>
          <span className={Estilos.white}>=</span>
          <span className={Estilos.blue}>&#123;</span>
          <span className={Estilos.celeste}>count</span>
          <span className={Estilos.blue}>&#125; </span>
          <span className={Estilos.celeste}>onClick</span>
          <span className={Estilos.white}>=</span>
          <span className={Estilos.blue}>&#123;</span>
          <span className={Estilos.celeste}>handleClick</span>
          <span className={Estilos.blue}>&#125; </span>
          /&gt;{"\n    "}
          &lt;/&gt;{"\n  "}
          <span className={Estilos.yellow}>&#41;</span>;{"\n"}
          <span className={Estilos.yellow}>&#125;</span>
        </code>
        {"\n\n"}
        <code>
          <span className={Estilos.blue}>function </span>
          <span className={Estilos.yellow}>MyButton</span>
          <span className={Estilos.yellow}>&#40;</span>
          <span className={Estilos.yellow}>&#123;</span>
          <span className={Estilos.celeste}>count</span>,
          <span className={Estilos.celeste}>onClick</span>
          <span className={Estilos.yellow}>&#125;</span>
          <span className={Estilos.yellow}>&#41;</span>
          <span className={Estilos.yellow}> &#123;</span>
          {"\n  "}
          <span className={Estilos.pink}>return </span>
          &lt;<span className={Estilos.blue}>button</span>{" "}
          <span className={Estilos.celeste}>onClick</span>
          <span className={Estilos.white}>=</span>
          <span className={Estilos.blue}>&#123;</span>
          <span className={Estilos.celeste}>onClick</span>
          <span className={Estilos.blue}>&#125;</span>
          &gt;
          <span className={Estilos.white}>Presionado </span>
          <span className={Estilos.blue}>&#123;</span>
          <span className={Estilos.celeste}>count</span>
          <span className={Estilos.blue}>&#125;</span>
          <span className={Estilos.white}> veces</span>
          &lt;/<span className={Estilos.blue}>button</span>&gt;;{"\n"}
          <span className={Estilos.yellow}>&#125;</span>
        </code>
      </pre>
    </>
  );
}
