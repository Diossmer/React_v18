import "./Principiante.css";

const Condicional = () => {
  return (
    <>
      <h1>Renderizado condicional</h1>
      <p>
        Tus componentes a menudo necesitarán mostrar diferentes cosas dependiendo de diferentes
        condiciones. En React, puedes renderizar JSX de forma condicional utilizando la sintaxis de
        JavaScript como las declaraciones <span className="shadow">if</span>,{" "}
        <span className="shadow">&&</span> y los operadores <span className="shadow">? :</span>.
      </p>
      <h3>Devolución condicional de JSX</h3>
      <p>
        Supongamos que tienes un componente <span className="shadow">PackingList</span> que muestra
        varios <span className="shadow">Items</span>, que pueden ser marcados como empaquetados o
        no:
      </p>
      <pre className="ide">
        <code>
          <span className="blue">function</span> <span className="yellow">Item</span>
          <span className="yellow">&#40;</span>
          <span className="blue">&#123;</span>
          <span className="celeste">name</span>,<span className="celeste">isPacked</span>
          <span className="blue">&#125;</span>
          <span className="yellow">&#41;</span>
          <span className="yellow">&#123;</span>
          {"\n  "}
          <span className="pink">return</span> &lt;<span className="blue">li</span>{" "}
          <span className="celeste">className</span>
          <span className="white">=</span>
          <span className="orange">&quot;item&quot;</span>&gt;
          <span className="blue">&#123;</span>
          <span className="celeste">name</span>
          <span className="blue">&#125;</span>
          &lt;<span className="blue">li</span>&gt;;{"\n"}
          <span className="yellow">&#125;</span>
        </code>
        {"\n"}
        <code>
          <span className="pink">export</span> <span className="pink">default</span>{" "}
          <span className="blue">function</span> <span className="yellow">PackingList</span>
          <span className="yellow">&#40;</span>
          <span className="blue">&#123;</span>
          <span className="celeste">name</span>,<span className="celeste">isPacked</span>
          <span className="blue">&#125;</span>
          <span className="yellow">&#41;</span>
          <span className="yellow">&#123;</span>
          {"\n  "}
          <span className="pink">return</span>
          <span className="yellow">&#40;</span>
          {"\n    "}
          &lt;<span className="blue">section</span>&gt;
          {"\n    "}&lt;<span className="blue">h1</span>&gt;{" "}
          <span className="white">Sally Ride&#39;s Packing List</span> &lt;/
          <span className="blue">h1</span>&gt;
          {"\n    "}&lt;<span className="blue">ul</span>&gt;
          {"\n      "}&lt;<span className="green">Item</span>{" "}
          <span className="celeste">isPacked</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="pink">true</span>
          <span className="blue">&#125;</span> <span className="celeste">name</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="orange">&quot;Space suit&quot;</span>
          <span className="blue">&#125;</span> /&gt;
          {"\n      "}&lt;<span className="green">Item</span>{" "}
          <span className="celeste">isPacked</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="pink">true</span>
          <span className="blue">&#125;</span> <span className="celeste">name</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="orange">&quot;Helmet with a golden leaf&quot;</span>
          <span className="blue">&#125;</span> /&gt;
          {"\n      "}&lt;<span className="green">Item</span>{" "}
          <span className="celeste">isPacked</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="pink">false</span>
          <span className="blue">&#125;</span> <span className="celeste">name</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="orange">&quot;Photo of Tam&quot;</span>
          <span className="blue">&#125;</span> /&gt;
          {"\n    "}&lt;<span className="blue">ul</span>&gt;
          {"\n    "}&lt;/<span className="blue">section</span>&gt;
          {"\n  "}
          <span className="yellow">&#41;</span>;{"\n"}
          <span className="yellow">&#125;</span>
        </code>
      </pre>
      <p>
        Observa que algunos de los componentes Item tienen su prop isPacked asignada a{" "}
        <span className="shadow">true</span> en lugar de <span className="shadow">false</span>. Se
        desea añadir una marca de verificación &#40;<span className="green">✔</span>&#41; a los elementos empaquetados si{" "}
        <span className="shadow">isPacked=&#123;true&#125;</span>.
      </p>
      <p>
        Puedes escribir esto como una declaración <span className="note">if/else</span> así:
      </p>
      <pre className="ide">
        <code>
		    	<span className="pink">if</span>
		    	<span className="yellow">&#40;</span>
		    	<span className="celeste">isPacked</span>
		    	<span className="yellow">&#41;</span>{" "}
		    	<span className="yellow">&#123;</span>
		    	{"\n  "}
		    	<span className="pink">return</span>{" "}
					&lt;<span className="blue">li</span>{" "}
		    	<span className="celeste">className</span>
		    	<span className="white">=</span>
		    	<span className="orange">&quot;item&quot;</span>&gt;
		    	<span className="blue">&#123;</span>
		    	<span className="celeste">name</span>
		    	<span className="blue">&#125;</span>{" "}
		    	<span className="green">✔</span>
					&lt;/<span className="blue">li</span>&gt;;{"\n"}
					<span className="yellow">&#125;</span>{"\n"}
        </code>
        <code>
		    	<span className="pink">return</span>{" "}
		    	&lt;<span className="blue">li</span>{" "}
			  	<span className="celeste">className</span>
			  	<span className="white">=</span>
			  	<span className="orange">&quot;item&quot;</span>&gt;
			  	<span className="blue">&#123;</span>
			  	<span className="celeste">name</span>
			  	<span className="blue">&#125;</span>
					&lt;/<span className="blue">li</span>&gt;;
        </code>
      </pre>
      <p>
      Si la prop <span className="shadow">isPacked</span> es <span className="shadow">true</span>,{" "}
      este código <b>devuelve un árbol JSX diferente</b>. Con este cambio, algunos de los{" "}
      elementos obtienen una marca de verificación al final:
      </p>
      <pre className="ide">
      <span className="blue">function</span>{" "}
      <span className="yellow">Item</span>
      <span className="yellow">&#40;</span>
      <span className="blue">&#123;</span>
      <span className="celeste">name</span>,{" "}
      <span className="celeste">isPacked</span>
      <span className="blue">&#125;</span>
      <span className="yellow">&#40;</span>
      <span className="yellow">&#123;</span>{"\n  "}
      <code>
		    	<span className="pink">if</span>
		    	<span className="yellow">&#40;</span>
		    	<span className="celeste">isPacked</span>
		    	<span className="yellow">&#41;</span>{" "}
		    	<span className="pink">&#123;</span>
		    	{"\n    "}
		    	<span className="pink">return</span>{" "}
					&lt;<span className="blue">li</span>{" "}
		    	<span className="celeste">className</span>
		    	<span className="white">=</span>
		    	<span className="orange">&quot;item&quot;</span>&gt;
		    	<span className="blue">&#123;</span>
		    	<span className="celeste">name</span>
		    	<span className="blue">&#125;</span>{" "}
		    	<span className="green">✔</span>
					&lt;/<span className="blue">li</span>&gt;;{"\n  "}
					<span className="pink">&#125;</span>{"\n  "}
      </code>
      <code>
		    	<span className="pink">return</span>{" "}
		    	&lt;<span className="blue">li</span>{" "}
			  	<span className="celeste">className</span>
			  	<span className="white">=</span>
			  	<span className="orange">&quot;item&quot;</span>&gt;
			  	<span className="blue">&#123;</span>
			  	<span className="celeste">name</span>
			  	<span className="blue">&#125;</span>
					&lt;/<span className="blue">li</span>&gt;;{"\n"}
					<span className="yellow">&#125;</span>{"\n"}
      </code>
      <code>
          <span className="pink">export</span> <span className="pink">default</span>{" "}
          <span className="blue">function</span>{" "}
          <span className="yellow">PackingList</span>
          <span className="yellow">&#40;</span>
          <span className="yellow">&#41;</span>{" "}
          <span className="yellow">&#123;</span>
          {"\n  "}
          <span className="pink">return</span>
          <span className="yellow">&#40;</span>
          {"\n    "}
          &lt;<span className="blue">section</span>&gt;
          {"\n    "}&lt;<span className="blue">h1</span>&gt;
          <span className="white">Sally Ride&#39;s Packing List</span>&lt;/
          <span className="blue">h1</span>&gt;
          {"\n    "}&lt;<span className="blue">ul</span>&gt;
          {"\n      "}&lt;<span className="green">Item</span>{" "}
          <span className="celeste">isPacked</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="pink">true</span>
          <span className="blue">&#125;</span> <span className="celeste">name</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="orange">&quot;Space suit&quot;</span>
          <span className="blue">&#125;</span> /&gt;
          {"\n      "}&lt;<span className="green">Item</span>{" "}
          <span className="celeste">isPacked</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="pink">true</span>
          <span className="blue">&#125;</span> <span className="celeste">name</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="orange">&quot;Helmet with a golden leaf&quot;</span>
          <span className="blue">&#125;</span> /&gt;
          {"\n      "}&lt;<span className="green">Item</span>{" "}
          <span className="celeste">isPacked</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="pink">false</span>
          <span className="blue">&#125;</span> <span className="celeste">name</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="orange">&quot;Photo of Tam&quot;</span>
          <span className="blue">&#125;</span> /&gt;
          {"\n    "}&lt;<span className="blue">ul</span>&gt;
          {"\n    "}&lt;/<span className="blue">section</span>&gt;
          {"\n  "}
          <span className="yellow">&#41;</span>;{"\n"}
          <span className="yellow">&#125;</span>
        </code>
      </pre>
      <p>
      Prueba a editar lo que se devuelve en cualquiera de los dos casos y observa cómo cambia el resultado.
      </p>
      <p>
      Observa cómo estás creando una lógica de ramificación con las sentencias <span className="shadow">if</span>{" "}
      y <span className="shadow">return</span> de JavaScript. En React, el flujo de control{" "}
      (como las condiciones) es manejado por JavaScript.
      </p>
      <h3>Devolución de nada con null</h3>
      <p>
      En algunas situaciones, no querrás mostrar nada en absoluto. Por ejemplo, digamos que no quieres mostrar{" "}
      elementos empaquetados en absoluto. Un componente debe devolver algo. En este caso, puedes devolver{" "}
      <span className="shadow">null</span>:
      </p>
      <pre className="ide">
      <code>
		    	<span className="pink">if</span>
		    	<span className="yellow">&#40;</span>
		    	<span className="celeste">isPacked</span>
		    	<span className="yellow">&#41;</span>{" "}
		    	<span className="yellow">&#123;</span>
		    	{"\n  "}
		    	<span className="pink">return</span>{" "}
					<span className="blue">null</span>;
					{"\n"}
					<span className="yellow">&#125;</span>
					{"\n"}
        </code>
        <code>
		    	<span className="pink">return</span>{" "}
		    	&lt;<span className="blue">li</span>{" "}
			  	<span className="celeste">className</span>
			  	<span className="white">=</span>
			  	<span className="orange">&quot;item&quot;</span>&gt;
			  	<span className="blue">&#123;</span>
			  	<span className="celeste">name</span>
			  	<span className="blue">&#125;</span>
					&lt;/<span className="blue">li</span>&gt;;
        </code>
      </pre>
      <p>
      Si <span className="shadow">isPacked</span> es verdadero, el componente no devolverá nada,{" "}
      <span className="shadow">null</span>. En caso contrario, devolverá JSX para ser renderizado.
      </p>
      <pre className="ide">
      <code>
		    <span className="blue">function</span>{" "}
		    <span className="yellow">Item</span>
		    <span className="yellow">&#40;</span>
		    <span className="blue">&#123;</span>
		    <span className="celeste">name</span>,{" "}
		    <span className="celeste">isPacked</span>
		    <span className="blue">&#125;</span>
		    <span className="yellow">&#40;</span>
		    <span className="yellow">&#123;</span>{"\n  "}
      </code>
      <code>
		    	<span className="pink">if</span>
		    	<span className="yellow">&#40;</span>
		    	<span className="celeste">isPacked</span>
		    	<span className="yellow">&#41;</span>{" "}
		    	<span className="pink">&#123;</span>
		    	{"\n    "}
		    	<span className="pink">return</span>{" "}
					<span className="blue">null</span>;
					{"\n  "}
					<span className="pink">&#125;</span>{"\n  "}
        </code>
        <code>
		    	<span className="pink">return</span>{" "}
		    	&lt;<span className="blue">li</span>{" "}
			  	<span className="celeste">className</span>
			  	<span className="white">=</span>
			  	<span className="orange">&quot;item&quot;</span>&gt;
			  	<span className="blue">&#123;</span>
			  	<span className="celeste">name</span>
			  	<span className="blue">&#125;</span>
					&lt;/<span className="blue">li</span>&gt;;{"\n"}
					<span className="yellow">&#125;</span>{"\n"}
        </code>
      <code>
          <span className="pink">export</span> <span className="pink">default</span>{" "}
          <span className="blue">function</span>{" "}
          <span className="yellow">PackingList</span>
          <span className="yellow">&#40;</span>
          <span className="yellow">&#41;</span>{" "}
          <span className="yellow">&#123;</span>
          {"\n  "}
          <span className="pink">return</span>
          <span className="yellow">&#40;</span>
          {"\n    "}
          &lt;<span className="blue">section</span>&gt;
          {"\n    "}&lt;<span className="blue">h1</span>&gt;
          <span className="white">Sally Ride&#39;s Packing List</span>&lt;/
          <span className="blue">h1</span>&gt;
          {"\n    "}&lt;<span className="blue">ul</span>&gt;
          {"\n      "}&lt;<span className="green">Item</span>{" "}
          <span className="celeste">isPacked</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="pink">true</span>
          <span className="blue">&#125;</span> <span className="celeste">name</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="orange">&quot;Space suit&quot;</span>
          <span className="blue">&#125;</span> /&gt;
          {"\n      "}&lt;<span className="green">Item</span>{" "}
          <span className="celeste">isPacked</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="pink">true</span>
          <span className="blue">&#125;</span> <span className="celeste">name</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="orange">&quot;Helmet with a golden leaf&quot;</span>
          <span className="blue">&#125;</span> /&gt;
          {"\n      "}&lt;<span className="green">Item</span>{" "}
          <span className="celeste">isPacked</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="pink">false</span>
          <span className="blue">&#125;</span> <span className="celeste">name</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="orange">&quot;Photo of Tam&quot;</span>
          <span className="blue">&#125;</span> /&gt;
          {"\n    "}&lt;<span className="blue">ul</span>&gt;
          {"\n    "}&lt;/<span className="blue">section</span>&gt;
          {"\n  "}
          <span className="yellow">&#41;</span>;{"\n"}
          <span className="yellow">&#125;</span>
        </code>
      </pre>
      <p>
      En la práctica, devolver <span className="shadow">null</span> en un componente no es común porque{" "}
      podría sorprender a un desarrollador que intente renderizarlo. Lo más frecuente es incluir{" "}
      o excluir condicionalmente el componente en el JSX del componente padre. Aquí se explica cómo hacerlo.
      </p>
      <h3>Operador condicional (ternario) &#40;&#63; &#58;&#41;</h3>
      <p>
      JavaScript tiene una sintaxis compacta para escribir una expresión{" "}
      condicional — el <span className="note">operador condicional</span> u &#171;operador ternario&#187;.
      </p>
      <p>
      En lugar de esto:
      </p>
      <pre className="ide">
      <code>
		    	<span className="pink">if</span>
		    	<span className="yellow">&#40;</span>
		    	<span className="celeste">isPacked</span>
		    	<span className="yellow">&#41;</span>{" "}
		    	<span className="yellow">&#123;</span>
		    	{"\n  "}
		    	<span className="pink">return</span>{" "}
					&lt;<span className="blue">li</span>{" "}
		    	<span className="celeste">className</span>
		    	<span className="white">=</span>
		    	<span className="orange">&quot;item&quot;</span>&gt;
		    	<span className="blue">&#123;</span>
		    	<span className="celeste">name</span>
		    	<span className="blue">&#125;</span>{" "}
		    	<span className="green">✔</span>
					&lt;/<span className="blue">li</span>&gt;;{"\n"}
					<span className="yellow">&#125;</span>{"\n"}
        </code>
        <code>
		    	<span className="pink">return</span>{" "}
		    	&lt;<span className="blue">li</span>{" "}
			  	<span className="celeste">className</span>
			  	<span className="white">=</span>
			  	<span className="orange">&quot;item&quot;</span>&gt;
			  	<span className="blue">&#123;</span>
			  	<span className="celeste">name</span>
			  	<span className="blue">&#125;</span>
					&lt;/<span className="blue">li</span>&gt;;
        </code>
      </pre>
      <p>
      Puedes escribir esto:
      </p>
      <pre className="ide">
      <code>
		    	<span className="pink">return</span>{" "}
		    	<span className="yellow">&#40;</span>{"\n  "}
		    	&lt;<span className="blue">li</span>{" "}
			  	<span className="celeste">className</span>
			  	<span className="white">=</span>
			  	<span className="orange">&quot;item&quot;</span>&gt;
			  	{"\n    "}
			  	<span className="blue">&#123;</span>
			  	<span className="celeste">isPacked</span>{" "}
			  	<span className="white">&#63;</span>{" "}
			  	<span className="celeste">name</span>{" "}
			  	<span className="white">+</span>{" "}
			  	<span className="orange">&#39; <span className="green">✔</span>&#39;</span>{" "}
			  	<span className="white">&#58;</span>{" "}
			  	<span className="celeste">name</span>
			  	<span className="blue">&#125;</span>
			  	{"\n  "}
					&lt;/<span className="blue">li</span>&gt;
					{"\n"}
					<span className="yellow">&#41;</span>;
        </code>
      </pre>
      <p>
      Puedes leerlo como «si <span className="shadow">isPacked</span> es verdadero, entonces{" "}
      (<span className="shadow">?</span>) renderiza <span className="shadow">name + ' ✔'</span>,{" "}
      de lo contrario (<span className="shadow">:</span>) renderiza <span className="shadow">name</span>»)
      </p>
      <p>
      Ahora digamos que quieres envolver el texto del elemento completado en otra etiqueta HTML,{" "}
      como <span className="shadow">&lt;del&gt;</span> para tacharlo. Puedes añadir aún más líneas{" "}
      nuevas y paréntesis para que sea más fácil anidar más JSX en cada uno de los casos:
      </p>
      <pre className="ide">
		    <code>
				  <span className="blue">function</span>{" "}
				  <span className="yellow">Item</span>
				  <span className="yellow">&#40;</span>
				  <span className="blue">&#123;</span>
				  <span className="celeste">name</span>,{" "}
				  <span className="celeste">isPacked</span>
				  <span className="blue">&#125;</span>
				  <span className="yellow">&#40;</span>
				  <span className="yellow">&#123;</span>{"\n  "}
		    </code>
		    <code>
			  	<span className="pink">return</span>
			  	{" "}
			  	<span className="pink">&#40;</span>
			  	{"\n    "}
			  	&lt;<span className="blue">li</span>
			  	{" "}
			  	<span className="celeste">className</span>
			  	<span className="white">=</span>
			  	<span className="orange">&quot;item&quot;</span>&gt;
			  	{"\n      "}
			  	<span className="blue">&#123;</span>
			  	<span className="celeste">isPacked</span>{" "}
			  	<span className="pink">?</span>{" "}
			  	<span className="yellow">&#40;</span>
			  	&lt;<span className="blue">del</span>&gt;
			  	<span className="blue">&#123;</span>
			  	<span className="celeste">name</span>{" "}
			  	<span className="white">+</span>{" "}
			  	<span className="orange">&#39; <span className="green">✔</span>&#39;</span>
			  	<span className="blue">&#125;</span>
			  	&lt;/<span className="blue">del</span>&gt;
			  	<span className="yellow">&#41;</span>{" "}
			  	<span className="pink">:</span>{" "}
			  	<span className="yellow">&#40;</span>
			  	<span className="celeste">name</span>
			  	<span className="yellow">&#41;</span>
					<span className="blue">&#125;</span>
					{"\n    "}
					&lt;/<span className="blue">li</span>&gt;{" "}
					{"\n  "}
					<span className="pink">&#41;</span>;
					{"\n"}
					<span className="yellow">&#125;</span>
					{"\n\n"}
		    </code>
		    <code>
          <span className="pink">export</span> <span className="pink">default</span>{" "}
          <span className="blue">function</span>{" "}
          <span className="yellow">PackingList</span>
          <span className="yellow">&#40;</span>
          <span className="yellow">&#41;</span>{" "}
          <span className="yellow">&#123;</span>
          {"\n  "}
          <span className="pink">return</span>
          <span className="yellow">&#40;</span>
          {"\n    "}
          &lt;<span className="blue">section</span>&gt;
          {"\n    "}&lt;<span className="blue">h1</span>&gt;
          <span className="white">Sally Ride&#39;s Packing List</span>&lt;/
          <span className="blue">h1</span>&gt;
          {"\n    "}&lt;<span className="blue">ul</span>&gt;
          {"\n      "}&lt;<span className="green">Item</span>{" "}
          <span className="celeste">isPacked</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="pink">true</span>
          <span className="blue">&#125;</span> <span className="celeste">name</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="orange">&quot;Space suit&quot;</span>
          <span className="blue">&#125;</span> /&gt;
          {"\n      "}&lt;<span className="green">Item</span>{" "}
          <span className="celeste">isPacked</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="pink">true</span>
          <span className="blue">&#125;</span> <span className="celeste">name</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="orange">&quot;Helmet with a golden leaf&quot;</span>
          <span className="blue">&#125;</span> /&gt;
          {"\n      "}&lt;<span className="green">Item</span>{" "}
          <span className="celeste">isPacked</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="pink">false</span>
          <span className="blue">&#125;</span> <span className="celeste">name</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="orange">&quot;Photo of Tam&quot;</span>
          <span className="blue">&#125;</span> /&gt;
          {"\n    "}&lt;<span className="blue">ul</span>&gt;
          {"\n    "}&lt;/<span className="blue">section</span>&gt;
          {"\n  "}
          <span className="yellow">&#41;</span>;{"\n"}
          <span className="yellow">&#125;</span>
        </code>
      </pre>
      <p>
      Este estilo funciona bien para condiciones simples, pero utilízalo con moderación.{" "}
      Si tus componentes se desordenan con demasiado marcado condicional anidado, considera la posibilidad{" "}
      de extraer componentes hijos para limpiar las cosas. En React, el marcado es una parte de tu código,{" "}
      por lo que puedes utilizar herramientas como variables y funciones para ordenar las expresiones complejas.
      </p>
      <h3>Operador lógico AND (&&)</h3>
      <p>
      Otro atajo común que encontrarás es el <span className="note">operador lógico AND (&&) de JavaScript</span>.{" "}
      Dentro de los componentes de React, a menudo surge cuando quieres renderizar algún JSX cuando{" "}
      la condición es verdadera, <b>o no renderizar nada en caso contrario</b>. Con{" "}
      <span className="shadow">&&</span>, podrías renderizar condicionalmente la marca de verificación{" "}
      sólo si <span className="shadow">isPacked</span> es <span className="shadow">true</span>:
      </p>
      <pre className="ide">
      <code>
		    	<span className="pink">return</span>{" "}
		    	<span className="yellow">&#40;</span>{"\n  "}
		    	&lt;<span className="blue">li</span>{" "}
			  	<span className="celeste">className</span>
			  	<span className="white">=</span>
			  	<span className="orange">&quot;item&quot;</span>&gt;
			  	{"\n    "}
			  	<span className="blue">&#123;</span>
			  	<span className="celeste">name</span>
			  	<span className="blue">&#125;</span>{" "}
			  	<span className="blue">&#123;</span>
			  	<span className="celeste">isPacked</span>{" "}
			  	<span className="white">&&</span>{" "}
			  	<span className="orange">&#39;<span className="green">✔</span>&#39;</span>
			  	<span className="blue">&#125;</span>
			  	{"\n  "}
					&lt;/<span className="blue">li</span>&gt;
					{"\n"}
					<span className="yellow">&#41;</span>;
        </code>
      </pre>
      <p>
      Puedes leer esto como «si <span className="shadow">isPacked</span>, entonces{" "}
      (<span className="shadow">&&</span>) renderiza la marca de verificación, si no, no renderiza nada.»
      </p>
      <p>
      Aquí está en acción:
      </p>
      <pre className="ide">
      <code>
				  <span className="blue">function</span>{" "}
				  <span className="yellow">Item</span>
				  <span className="yellow">&#40;</span>
				  <span className="blue">&#123;</span>
				  <span className="celeste">name</span>,{" "}
				  <span className="celeste">isPacked</span>
				  <span className="blue">&#125;</span>
				  <span className="yellow">&#40;</span>
				  <span className="yellow">&#123;</span>{"\n  "}
		    </code>
		    <code>
			  	<span className="pink">return</span>
			  	{" "}
			  	<span className="pink">&#40;</span>
			  	{"\n    "}
			  	&lt;<span className="blue">li</span>
			  	{" "}
			  	<span className="celeste">className</span>
			  	<span className="white">=</span>
			  	<span className="orange">&quot;item&quot;</span>&gt;
			  	{"\n      "}
			  	<span className="blue">&#123;</span>
			  	<span className="celeste">name</span>
			  	<span className="blue">&#125;</span>{" "}
			  	<span className="blue">&#123;</span>
			  	<span className="celeste">isPacked</span>{" "}
			  	<span className="white">&&</span>{" "}
			  	<span className="orange">&#39;<span className="green">✔</span>&#39;</span>
			  	<span className="blue">&#125;</span>
					{"\n    "}
					&lt;/<span className="blue">li</span>&gt;{" "}
					{"\n  "}
					<span className="pink">&#41;</span>;
					{"\n"}
					<span className="yellow">&#125;</span>
					{"\n\n"}
		    </code>
		    <code>
          <span className="pink">export</span> <span className="pink">default</span>{" "}
          <span className="blue">function</span>{" "}
          <span className="yellow">PackingList</span>
          <span className="yellow">&#40;</span>
          <span className="yellow">&#41;</span>{" "}
          <span className="yellow">&#123;</span>
          {"\n  "}
          <span className="pink">return</span>
          <span className="yellow">&#40;</span>
          {"\n    "}
          &lt;<span className="blue">section</span>&gt;
          {"\n    "}&lt;<span className="blue">h1</span>&gt;
          <span className="white">Sally Ride&#39;s Packing List</span>&lt;/
          <span className="blue">h1</span>&gt;
          {"\n    "}&lt;<span className="blue">ul</span>&gt;
          {"\n      "}&lt;<span className="green">Item</span>{" "}
          <span className="celeste">isPacked</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="pink">true</span>
          <span className="blue">&#125;</span> <span className="celeste">name</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="orange">&quot;Space suit&quot;</span>
          <span className="blue">&#125;</span> /&gt;
          {"\n      "}&lt;<span className="green">Item</span>{" "}
          <span className="celeste">isPacked</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="pink">true</span>
          <span className="blue">&#125;</span> <span className="celeste">name</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="orange">&quot;Helmet with a golden leaf&quot;</span>
          <span className="blue">&#125;</span> /&gt;
          {"\n      "}&lt;<span className="green">Item</span>{" "}
          <span className="celeste">isPacked</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="pink">false</span>
          <span className="blue">&#125;</span> <span className="celeste">name</span>
          <span className="white">=</span>
          <span className="blue">&#123;</span>
          <span className="orange">&quot;Photo of Tam&quot;</span>
          <span className="blue">&#125;</span> /&gt;
          {"\n    "}&lt;<span className="blue">ul</span>&gt;
          {"\n    "}&lt;/<span className="blue">section</span>&gt;
          {"\n  "}
          <span className="yellow">&#41;</span>;{"\n"}
          <span className="yellow">&#125;</span>
        </code>
      </pre>
      <p>
      Una <span className="note">expresión JavaScript &&</span> devuelve el valor de su lado{" "}
      derecho (en nuestro caso, la marca de verificación) si el lado izquierdo (nuestra condición){" "}
      es <span className="shadow">true</span>. Pero si la condición es <span className="shadow">false</span>,{" "}
      toda la expresión se convierte en <span className="shadow">false</span>. React considera{" "}
      <span className="shadow">false</span> como un «agujero» en el árbol JSX, al igual que{" "}
      <span className="shadow">null</span> o <span className="shadow">undefined</span>, y no renderiza nada en su lugar.
      </p>
      <div className="alert">
      <span>❗Atención</span>
      <span><b>No pongas números a la izquierda de &&.</b></span>
      <span>Para comprobar la condición, JavaScript convierte el lado izquierdo en un booleano automáticamente.{" "}
      Sin embargo, si el lado izquierdo es <span className="shadow">0</span>, entonces toda la expresión{" "}
      obtiene ese valor (<span className="shadow">0</span>), y React representará felizmente{" "}
      <span className="shadow">0</span> en lugar de nada.</span>
      <span>Por ejemplo, un error común es escribir código como <span className="shadow">messageCount && &lt;p&gt;New messages&lt;/p&gt;</span>. Es fácil suponer que no renderiza nada cuando <span className="shadow">messageCount</span> es <span className="shadow">0</span>, pero en realidad renderiza el propio <span className="shadow">0</span>.</span>
      <span>Para arreglarlo, haz que el lado izquierdo sea un booleano: <span className="shadow">messageCount &gt; 0 && &lt;p&gt;New messages&lt;/p&gt;</span>.</span>
      </div>
      <h3>Asignación condicional de JSX a una variable</h3>
      <p>
      Cuando los atajos se interpongan en el camino de la escritura de código simple, prueba a{""}
      utilizar una sentencia <span className="shadow">if</span> y una variable. Puedes reasignar las{" "}
      variables definidas con <span className="note">let</span>, así que empieza proporcionando el contenido{" "}
      por defecto que quieres mostrar, el nombre:
      </p>
      <pre className="ide">
      <code>
				<span className="blue">let</span>{" "}
				<span className="celeste">itemContent</span>{" "}
				<span className="white">=</span>{" "}
				<span className="celeste">name</span>;
			</code>
      </pre>
    </>
  );
};
export default Condicional;
