export default function Mantener() {
  return (
    <div>
      <h1>Mantener los componentes puros</h1>
      <p>
        Algunas funciones de JavaScript son puras. Las funciones puras solo realizan un cálculo y
        nada más. Al escribir estrictamente tus componentes como funciones puras, puedes evitar una
        clase completa de errores desconcertantes y un comportamiento impredecible a medida que
        crece tu base de código. Sin embargo, para obtener estos beneficios, hay algunas reglas que
        debes seguir.
      </p>
      <h3>Pureza: componentes como fórmulas</h3>
      <p>
        En informática (y especialmente en el mundo de la programación funcional),{" "}
        <span className="note">una función pura</span> es una función con las siguientes
        características:
      </p>
      <ul style={{ listStyle: "disc" }}>
        <li>
          <b>Se ocupa de sus propios asuntos</b>. No cambia ningún objeto o variable que existiera{" "}
          antes de ser llamado.
        </li>
        <li>
          <b>Las mismas entradas, la misma salida</b>. Dadas las mismas entradas, una función pura
          siempre debe devolver el mismo resultado.
        </li>
      </ul>
      <p>
        Es posible que ya estés familiarizado con un ejemplo de funciones puras: fórmulas en
        matemáticas.
      </p>
      <p>Considera esta fórmula matemática: y = 2x.</p>
      <ul style={{ width: "35rem" }}>
        <li>Si x = 2 entonces y = 4. Siempre.</li>
        <li>Si x = 3 entonces y = 6. Siempre.</li>
        <li>
          Si x = 3, y a veces no será 9 o –1 o 2.5 dependiendo de la hora del día o del estado del
          mercado de valores.
        </li>
        <li>Si y = 2x y x = 3, y siempre será 6.</li>
      </ul>
      <p>Si convirtiéramos esto en una función de JavaScript, se vería así:</p>
      <pre className="ide">
        <code>
          <span className="blue">function</span> <span className="celeste">double</span>
          <span className="blue">&#40;</span>
          <span className="celeste">number</span>
          <span className="ide">&#41;</span> <span className="yellow">&#123;</span>
          {"\n  "}
          <span className="pink">return</span> <span className="orange">2</span>{" "}
          <span className="white">*</span> <span className="celeste">number</span>;{"\n"}
          <span className="yellow">&#125;</span>
        </code>
      </pre>
      <p>
        En el ejemplo anterior, <span className="shadow">double</span> es una <b>función pura</b>.
        Si le pasas <span className="shadow">3</span>, devolverá <span className="shadow">6</span>.
        Siempre.
      </p>
      <p>
        React está diseñado en torno a este concepto.{" "}
        <b>React supone que cada componente que escribes es una función pura.</b> Esto significa que
        los componentes que escribes en React siempre deben devolver el mismo JSX dadas las mismas
        entradas:
      </p>
      <pre className="ide">
        <code>
          <span className="blue">function</span> <span className="yellow">Recipe</span>
          <span className="yellow">&#40;</span>
          <span className="blue">&#123;</span> <span className="celeste">drinkers</span>{" "}
          <span className="blue">&#125;</span>
          <span className="yellow">&#41;</span> <span className="yellow">&#123;</span>
          {"\n  "}
          <span className="pink">return</span> <span className="pink">&#40;</span>
          {"\n    "}
          &lt;<span className="blue">ol</span>&gt;
          {"\n      "}
          &lt;<span className="blue">li</span>&gt;
          <span className="white">Boil</span>
          <span className="blue">&#123;</span>
          <span className="celeste">drinkers</span>
          <span className="blue">&#125;</span>
          <span className="white">cups of water.</span>
          &lt;/<span className="blue">li</span>&gt;
          {"\n      "}
          &lt;<span className="blue">li</span>&gt;
          <span className="white">Add</span>
          <span className="blue">&#123;</span>
          <span className="celeste">drinkers</span>
          <span className="blue">&#125;</span>
          <span className="white">spoons of tea and</span>
          <span className="blue">&#123;</span>
          <span className="orange">0.5</span>
          <span className="white">*</span>
          <span className="celeste">drinkers</span>
          <span className="blue">&#125;</span>
          <span className="white">spoons of spice.</span>
          &lt;/<span className="blue">li</span>&gt;
          {"\n      "}
          &lt;<span className="blue">li</span>&gt;
          <span className="white">Add</span>
          <span className="blue">&#123;</span>
          <span className="orange">0.5</span>
          <span className="white">*</span>
          <span className="celeste">drinkers</span>
          <span className="blue">&#125;</span>
          <span className="white">cups of milk to boil and sugar to taste.</span>
          &lt;/<span className="blue">li</span>&gt;{"\n    "}
          &lt;/<span className="blue">ol</span>&gt;{"\n  "}
          <span className="pink">&#41;</span>;{"\n"}
          <span className="yellow">&#125;</span>
          {"\n\n"}
        </code>
        <code>
          <span className="pink">export</span> <span className="pink">default</span>{" "}
          <span className="blue">function</span> <span className="yellow">App</span>
          <span className="yellow">&#40;</span>
          <span className="yellow">&#41;</span>
          <span className="blue">&#123;</span>
          {"\n  "}
          <span className="pink">return</span> <span className="pink">&#40;</span>
          {"\n    "}
          &lt;<span className="blue">section</span>&gt;{"\n      "}
          &lt;<span className="blue">h1</span>&gt;
          <span className="white">Spiced Chai Recipe</span>
          &lt;/<span className="blue">h1</span>&gt;{"\n      "}
          &lt;<span className="blue">h2</span>&gt;
          <span className="white">For two</span>
          &lt;/<span className="blue">h2</span>&gt;{"\n      "}
          &lt;<span className="green">Recipe</span> <span className="celeste">drinkers</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="orange">2</span>
          <span className="blue">&#125;</span> /&gt;{"\n      "}
          &lt;<span className="blue">h2</span>&gt;
          <span className="white">For a gathering</span>
          &lt;/<span className="blue">h2</span>&gt;{"\n      "}
          &lt;<span className="green">Recipe</span> <span className="celeste">drinkers</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="orange">4</span>
          <span className="blue">&#125;</span> /&gt;{"\n    "}
          &lt;/<span className="blue">section</span>&gt;{"\n  "}
          <span className="pink">&#41;</span>;{"\n"}
          <span className="blue">&#125;</span>
        </code>
      </pre>
      <p>
        Cuando pasas <span className="blue">drinkers={2}</span> a{" "}
        <span className="blue">Recipe</span>, devolverá el JSX que contiene{" "}
        <span className="blue">2 cups of water</span>. Siempre.
      </p>
      <p>
        Si pasas <span className="blue">drinkers={4}</span>, devolverá el JSX que contiene{" "}
        <span className="blue">4 cups of water</span>. Siempre.
      </p>
      <p>Como una fórmula matemática.</p>
      <p>
        Puedes pensar en tus componentes como recetas: si las sigues y no agregas nuevos
        ingredientes durante el proceso de cocción, obtendrás el mismo plato siempre. Ese «plato» es
        el JSX que el componente le pasa a React para renderizar.
      </p>
      <img src="../../public/i_puritea-recipe.png" alt="ilustracion" className="imgpuro" />
      <h3>Efectos secundarios: consecuencias (no)deseadas</h3>
      <p>
        El proceso de renderizado de React siempre debe ser puro. Los componentes solo deben
        retornar su JSX, y no cambiar cualquier objeto o variable que existiera antes de renderizar:
        ¡Eso los haría impuros!
      </p>
      <p>Aquí hay un componente que rompe esta regla:</p>
      <pre className="ide">
        <code>
          <span className="blue">let</span> <span className="celeste">guest</span>
          <span className="white">=</span>
          <span className="orange">0</span>;{"\n\n"}
          <span className="blue">function</span> <span className="yellow">Cup</span>
          <span className="yellow">&#40;</span>
          <span className="yellow">&#41;</span>
          <span className="yellow">&#123;</span>
          {"\n  "}
          <span className="greendark">&#47;&#47; Mal: ¡Cambiar una variable preexistente!</span>
          {"\n  "}
          <span className="celeste">guest</span>
          <span className="white">=</span>
          <span className="celeste">guest</span> <span className="white">+</span>{" "}
          <span className="orange">1</span>;{"\n  "}
          <span className="pink">return</span> &lt;<span className="blue">h2</span>&gt;
          <span className="white">Tea cup for guest</span> <span className="white">#</span>
          <span className="blue">&#123;</span>
          <span className="celeste">guest</span>
          <span className="blue">&#125;</span>
          &lt;/<span className="blue">h2</span>&gt;;{"\n"}
          <span className="yellow">&#125;</span>
          {"\n\n"}
          <span className="pink">export</span> <span className="pink">default</span>{" "}
          <span className="blue">function</span> <span className="yellow">TeaSet</span>
          <span className="yellow">&#40;</span>
          <span className="yellow">&#41;</span> <span className="yellow">&#123;</span>
          {"\n  "}
          <span className="pink">return</span>
          <span className="pink">&#40;</span>
          {"\n    "}
          &lt;&gt;{"\n      "}
          &lt;<span className="green">Cup</span> /&gt;{"\n      "}
          &lt;<span className="green">Cup</span> /&gt;{"\n      "}
          &lt;<span className="green">Cup</span> /&gt;{"\n    "}
          &lt;/&gt;{"\n  "}
          <span className="pink">&#41;</span>;{"\n"}
          <span className="yellow">&#125;</span>
        </code>
      </pre>
      <p>
        Este componente está leyendo y escribiendo una variable <span className="note">guest</span>{" "}
        declarada fuera de ella. Esto significa que{" "}
        <b>llamar a este componente varias veces producirá diferente JSX!</b> Y lo que es más, si
        otros componentes leen <span className="note">guest</span>, también producirán diferente
        JSX, ¡dependiendo de cuándo se procesaron! Eso no es predecible.
      </p>
      <p>
        Volviendo a nuestra fórmula y = 2x, ahora incluso si x = 2, no podemos confiar en que y = 4.
        Nuestras pruebas podrían fallar, nuestros usuarios estarían desconcertados, los aviones se
        caerían del cielo —¡puedes ver cómo esto conduciría a errores confusos!
      </p>
      <p>
        Puedes arreglar este componente{" "}
        <span className="note">pasando guest como prop en su lugar</span>:
      </p>
      <pre className="ide">
        <code>
          <span className="blue">function</span> <span className="yellow">Cup</span>
          <span className="yellow">&#40;</span>
          <span className="blue">&#123;</span>
          <span className="celeste">guest</span>
          <span className="blue">&#125;</span>
          <span className="yellow">&#41;</span>
          <span className="yellow">&#123;</span>
          {"\n  "}
          <span className="pink">return</span> &lt;<span className="blue">h2</span>&gt;
          <span className="white">Tea cup for guest</span> <span className="white">#</span>
          <span className="blue">&#123;</span>
          <span className="celeste">guest</span>
          <span className="blue">&#125;</span>
          &lt;/<span className="blue">h2</span>&gt;;{"\n"}
          <span className="yellow">&#125;</span>
          {"\n\n"}
          <span className="pink">export</span> <span className="pink">default</span>{" "}
          <span className="blue">function</span> <span className="yellow">TeaSet</span>
          <span className="yellow">&#40;</span>
          <span className="yellow">&#41;</span> <span className="yellow">&#123;</span>
          {"\n  "}
          <span className="pink">return</span>
          <span className="pink">&#40;</span>
          {"\n    "}
          &lt;&gt;{"\n      "}
          &lt;<span className="green">Cup</span> <span className="celeste">guest</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="orange">1</span>
          <span className="blue">&#125;</span> /&gt;{"\n      "}
          &lt;<span className="green">Cup</span> <span className="celeste">guest</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="orange">2</span>
          <span className="blue">&#125;</span> /&gt;{"\n      "}
          &lt;<span className="green">Cup</span> <span className="celeste">guest</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="orange">3</span>
          <span className="blue">&#125;</span> /&gt;{"\n    "}
          &lt;/&gt;{"\n  "}
          <span className="pink">&#41;</span>;{"\n"}
          <span className="yellow">&#125;</span>
        </code>
      </pre>
      <p>
        Ahora tu componente ya es puro, ya que el JSX que devuelve solo depende de la prop{" "}
        <span className="shadow">guest</span>.
      </p>
      <p>
        En general, no debes esperar que tus componentes se rendericen en ningún orden en
        particular. No importa si llamas y = 2x antes o después y = 5x: ambas fórmulas se resolverán
        independientemente una de la otra. Del mismo modo, cada componente solo debe «pensar por sí
        mismo» y no intentar coordinarse o depender de otros durante el renderizado. El renderizado
        es como un examen escolar: ¡cada componente debe calcular su JSX por su cuenta!
      </p>
      <h3>Detección de cálculos impuros con Strict Mode</h3>
      <p>
        Aunque es posible que aún no los hayas usado todos, en React hay tres tipos de entradas que
        puedes leer mientras se renderiza: <span className="note">props</span>,{" "}
        <span className="note">state</span>, y <span className="note">context</span>. Siempre debes
        tratar estas entradas como solo lectura.
      </p>
      <p>
        Cuando quieras cambiar algo en respuesta a la entrada del usuario, debes{" "}
        <span className="note">asignar el estado</span> en lugar de reescribir la variable. Nunca
        debes cambiar variables u objetos preexistentes mientras tu componente está renderizando.
      </p>
      <p>
        React ofrece un «Modo estricto» en el que llama a la función de cada componente dos veces
        durante el desarrollo.{" "}
        <b>
          Al llamar a las funciones del componente dos veces, el modo estricto ayuda a encontrar
          componentes que rompan estas reglas
        </b>
        .
      </p>
      <p>
        Observa cómo el ejemplo original mostraba «Guest #2», «Guest #4», y «Guest #6» en lugar de
        «Guest #1», «Guest #2», y «Guest #3». La función original era impura, por lo que al llamarla
        dos veces se rompió. Pero la versión corregida funciona sin importar que la función sea
        llamada dos veces cada vez.{" "}
        <b>Las funciones puras solo se calculan, por lo que llamarlas dos veces no cambiará nada</b>{" "}
        —como llamar <span className="shadow">double(2)</span> dos veces no cambia lo que se
        devuelve, y retorna y = 2x dos veces no cambia lo que y es. Las mismas entradas, las mismas
        salidas. Siempre.
      </p>
      <p>
        El modo estricto no tiene ningún efecto en producción, por lo que no ralentizará la
        aplicación para tus usuarios. Para optar por el modo estricto, puedes envolver tu componente
        raíz en <span className="shadow">&lt;React.StrictMode&gt;</span>. Algunos frameworks hacen
        esto por defecto.
      </p>
      <h3>Mutación local: el pequeño secreto de tus componentes</h3>
      <p>
        En el ejemplo anterior, el problema era que el componente cambiaba una variable preexistente
        mientras renderizaba. Esto a menudo se llama «mutación» para que suene un poco más
        aterrador. ¡Las funciones puras no mutan las variables fuera del alcance de la función ni
        los objetos que se crearon antes de la llamada —¡Eso las hace impuras!
      </p>
      <p>
        Sin embargo, está completamente bien cambiar variables y objetos que acabas de crear
        mientras renderizas. En este ejemplo, creas un array <span className="shadow">[]</span>, lo
        asignas a la variable <span className="shadow">cups</span>, y luego haces un{" "}
        <span className="shadow">push</span> con una docena de tazas adentro:
      </p>
      <pre className="ide">
        <span className="blue">function</span> <span className="yellow">Cup</span>
        <span className="yellow">&#40;</span>
        <span className="blue">&#123;</span>
        <span className="celeste">guest</span>
        <span className="blue">&#125;</span>
        <span className="yellow">&#41;</span>
        <span className="yellow">&#123;</span>
        {"\n  "}
        <span className="pink">return</span> &lt;<span className="blue">h2</span>&gt;
        <span className="white">Tea cup for guest</span> <span className="white">#</span>
        <span className="blue">&#123;</span>
        <span className="celeste">guest</span>
        <span className="blue">&#125;</span>
        &lt;/<span className="blue">h2</span>&gt;;{"\n"}
        <span className="yellow">&#125;</span>
        {"\n\n"}
        <span className="pink">export</span> <span className="pink">default</span>{" "}
        <span className="blue">function</span> <span className="yellow">TeaGathering</span>
        <span className="yellow">&#40;</span>
        <span className="yellow">&#41;</span>
        <span className="yellow">&#123;</span>
        {"\n  "}
        <span className="blue">let</span> <span className="celeste">cups</span>
        <span className="white">=</span>
        <span className="yellow">&#91;</span>
        <span className="yellow">&#93;</span>;{"\n  "}
        <span className="pink">for</span>
        <span className="pink">&#40;</span>
        <span className="blue">let</span> <span className="celeste">i</span>
        <span className="blue">=</span>
        <span className="orange">1</span>; <span className="celeste">i</span>
        <span className="white">&lt;=</span>
        <span className="orange">12</span>; <span className="celeste">i</span>
        <span className="orange">++</span>
        <span className="pink">&#41;</span>
        <span className="pink">&#123;</span>
        {"\n    "}
        <span className="celeste">cups</span>
        <span className="white">.</span>
        <span className="yellow">push</span>
        <span className="yellow">&#40;</span>
        {"\n      "}
        &lt;<span className="green">Cup</span> <span className="celeste">key</span>
        <span className="blue">=</span>
        <span className="blue">&#123;</span>
        <span className="celeste">i</span>
        <span className="blue">&#125;</span> <span className="celeste">guest</span>
        <span className="blue">=</span>
        <span className="blue">&#123;</span>
        <span className="celeste">i</span>
        <span className="blue">&#125;</span> /&gt;{"\n    "}
        <span className="yellow">&#41;</span>;{"\n  "}
        <span className="pink">&#125;</span>
        {"\n  "}
        <span className="pink">return</span> <span className="celeste">cups</span>;{"\n"}
        <span className="yellow">&#125;</span>
      </pre>
      <p>
        ¡Si la variable <span className="shadow">cups</span> o el array{" "}
        <span className="shadow">&#91;&#93;</span> se crearon fuera de la función{" "}
        <span className="shadow">TeaGathering</span>, este sería un gran problema! Estarías
        cambiando un objeto preexistente haciendo push a ese array.
      </p>
      <p>
        Sin embargo, está bien porque los has creado durante el mismo renderizado, dentro de{" "}
        <span className="shadow">TeaGathering</span>. Ningún código fuera de{" "}
        <span className="shadow">TeaGathering</span> sabrá nunca que esto ha ocurrido. Esto se llama{" "}
        <b>«mutación local»</b> —es como el pequeño secreto de tu componente.
      </p>
      <h3>¿Dónde puedes causar efectos secundarios? </h3>
      <p>
        Si bien la programación funcional depende en gran medida de la pureza, en algún momento, en
        algún lugar, algo tiene que cambiar. ¡Ese es el punto en programación! Estos cambios
        —actualizar la pantalla, iniciar una animación, cambiar los datos— se llaman efectos
        secundarios. Son cosas que suceden «a un lado», no durante el renderizado.
      </p>
      <p>
        En React, <b>los efectos secundarios generalmente deberían estar dentro de los</b>{" "}
        <span className="note">controladores de eventos</span>. Los controladores de eventos son
        funciones que React ejecuta cuando realiza alguna acción (por ejemplo, cuando haces clic en
        un botón). ¡Aunque los controladores de eventos están definidos dentro de tu componente, no
        corren durante el renderizado!{" "}
        <b>Por lo tanto, los controladores de eventos no necesitan ser puros</b>.
      </p>
      <p>
        Si has agotado todas las demás opciones y no puedes encontrar el controlador de evento
        adecuado para tu efecto secundario, aún puedes adjuntarlo en el retorno del JSX con un
        llamado a <span className="note">useEffect</span> en tu componente. Esto le dice a React que
        lo ejecute más tarde, después del renderizado, cuando se permiten efectos secundarios.{" "}
        <b>Sin embargo, este enfoque debería ser tu último recurso</b>.
      </p>
      <p>
        Cuando sea posible, intenta expresar tu lógica con un solo renderizado. ¡Te sorprenderá lo
        lejos que esto puede llevarte!
      </p>
      <h3>¿Por qué a React le importa la pureza?</h3>
      <p>
        Escribir funciones puras requiere cierto hábito y disciplina. Pero también desbloquea
        maravillosas oportunidades:
      </p>
      <ul style={{ listStyle: "disc" }}>
        <li>
          ¡Tus componentes podrían ejecutarse en un entorno diferente (por ejemplo, en el servidor)!
          Como devuelven el mismo resultado para las mismas entradas, un componente puede atender
          muchas solicitudes de los usuarios.
        </li>
        <li>
          Puedes mejorar el rendimiento <span className="note">omitiendo el renderizado</span> de
          componentes cuyas entradas no han cambiado. Esto es seguro porque las funciones puras
          siempre devuelven los mismos resultados, por lo que son seguras para almacenar en caché.
        </li>
        <li>
          Si algunos datos cambian en medio del renderizado de un árbol de componentes profundos,
          React puede reiniciar el renderizado sin perder tiempo para terminar el renderizado
          desactualizado. La pureza hace que sea seguro dejar de calcular en cualquier momento.
        </li>
      </ul>
      <p>
        Cada nueva característica de React que estamos construyendo aprovecha la pureza. Desde la
        búsqueda de datos hasta las animaciones y el rendimiento, mantener los componentes puros
        desbloquea el poder del paradigma de React.
      </p>
    </div>
  );
}
