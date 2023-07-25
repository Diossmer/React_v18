import "./Principiante.css";

const Condicional = () => {
  let popo = `
if (isPacked) {
  return null;
}
return <li className="item">{name}</li>;
  `;
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
      {popo}
      </pre>
    </>
  );
};
export default Condicional;
