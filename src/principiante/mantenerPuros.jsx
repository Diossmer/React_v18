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
      En informática (y especialmente en el mundo de la programación funcional), <span className="note">una función pura</span> es una función con las siguientes características:</p>
    <ul style={{ listStyle: "disc" }}>
    <li><b>Se ocupa de sus propios asuntos</b>. No cambia ningún objeto o variable que existiera{" "}
    antes de ser llamado.</li>
    <li><b>Las mismas entradas, la misma salida</b>. Dadas las mismas entradas, una función pura siempre{" "}
    debe devolver el mismo resultado.</li>
    </ul>
    <p>Es posible que ya estés familiarizado con un ejemplo de funciones puras: fórmulas en matemáticas.</p>
    <p>
    Considera esta fórmula matemática: y = 2x.
    </p>
    <ul style={{width:"35rem" }}>
    <li>Si x = 2 entonces y = 4. Siempre.</li>
    <li>Si x = 3 entonces y = 6. Siempre.</li>
    <li>Si x = 3, y a veces no será 9 o –1 o 2.5 dependiendo de la hora del día o del estado del mercado de valores.</li>
    <li>Si y = 2x y x = 3, y siempre será 6.</li>
    </ul>
    <p>
    Si convirtiéramos esto en una función de JavaScript, se vería así:
    </p>
    <pre className="ide">
    <code>
		  <span className="blue">function</span>{" "}
		  <span className="celeste">double</span>
		  <span className="blue">&#40;</span>
		  <span className="celeste">number</span>
		  <span className="ide">&#41;</span>{" "}
		  <span className="yellow">&#123;</span>
		  {"\n  "}
			<span className="pink">return</span>{" "}
			<span className="orange">2</span>{" "}
			<span className="white">*</span>{" "}
			<span className="celeste">number</span>;
			{"\n"}
			<span className="yellow">&#125;</span>
		</code>
    </pre>
    <p>En el ejemplo anterior, <span className="shadow">double</span> es una <b>función pura</b>. Si le pasas <span className="shadow">3</span>, devolverá <span className="shadow">6</span>. Siempre.</p>
    <p>React está diseñado en torno a este concepto. <b>React supone que cada componente que escribes es una función pura.</b>
    {" "}Esto significa que los componentes que escribes en React siempre deben devolver el mismo JSX dadas las mismas entradas:</p>
    <pre className="ide">
		<code>
		  <span className="blue">function</span>{" "}
		  <span className="yellow">Recipe</span>
		  <span className="yellow">&#40;</span>
		  <span className="blue">&#123;</span>{" "}
		  <span className="celeste">drinkers</span>{" "}
		  <span className="blue">&#125;</span>
		  <span className="yellow">&#41;</span>{" "}
		  <span className="yellow">&#123;</span>
		  {"\n  "}
				<span className="pink">return</span>{" "}
				<span className="pink">&#40;</span>
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
				<span className="pink">&#41;</span>;
				{"\n"}
			<span className="yellow">&#125;</span>
			{"\n\n"}
		</code>
		<code>
			<span className="pink">export</span>{" "}
			<span className="pink">default</span>{" "}
			<span className="blue">function</span>{" "}
			<span className="yellow">App</span>
			<span className="yellow">&#40;</span>
			<span className="yellow">&#41;</span>
			<span className="blue">&#123;</span>{"\n  "}
				<span className="pink">return</span>{" "}
				<span className="pink">&#40;</span>{"\n    "}
					&lt;<span className="blue">section</span>&gt;{"\n      "}
						&lt;<span className="blue">h1</span>&gt;
						<span className="white">Spiced Chai Recipe</span>
						&lt;/<span className="blue">h1</span>&gt;{"\n      "}
						&lt;<span className="blue">h2</span>&gt;
						<span className="white">For two</span>
						&lt;/<span className="blue">h2</span>&gt;{"\n      "}
						&lt;<span className="green">Recipe</span>{" "}
						<span className="celeste">drinkers</span>
						<span className="white">=</span>
						<span className="blue">&#123;</span>
						<span className="orange">2</span>
						<span className="blue">&#125;</span>{" "}/&gt;{"\n      "}
						&lt;<span className="blue">h2</span>&gt;
						<span className="white">For a gathering</span>
						&lt;/<span className="blue">h2</span>&gt;{"\n      "}
						&lt;<span className="green">Recipe</span>{" "}
						<span className="celeste">drinkers</span>
						<span className="white">=</span>
						<span className="blue">&#123;</span>
						<span className="orange">4</span>
						<span className="blue">&#125;</span>{" "}/&gt;{"\n    "}
					&lt;/<span className="blue">section</span>&gt;{"\n  "}
				<span className="pink">&#41;</span>;{"\n"}
			<span className="blue">&#125;</span>
		</code>
    </pre>
    <p>
    Cuando pasas <span className="blue">drinkers={2}</span> a <span className="blue">Recipe</span>, devolverá el JSX que contiene <span className="blue">2 cups of water</span>. Siempre.
    </p>
    <p>
    Si pasas <span className="blue">drinkers={4}</span>, devolverá el JSX que contiene <span className="blue">4 cups of water</span>. Siempre.
    </p>
    <p>
    Como una fórmula matemática.
    </p>
    <p>
    Puedes pensar en tus componentes como recetas: si las sigues y no agregas nuevos ingredientes durante el proceso de cocción, obtendrás el mismo plato siempre. Ese «plato» es el JSX que el componente le pasa a React para renderizar.
    </p>
    <img src="../../public/i_puritea-recipe.png" alt="ilustracion" className="imgpuro"/>
    <h3>
    Efectos secundarios: consecuencias (no)deseadas 
    </h3>
    <p>
    El proceso de renderizado de React siempre debe ser puro. Los componentes solo deben retornar su JSX, y no cambiar cualquier objeto o variable que existiera antes de renderizar: ¡Eso los haría impuros!
    </p>
    <p>
		Aquí hay un componente que rompe esta regla:
    </p>
    <pre className="ide">
    <code>
    	<span className="blue">let</span>{" "}
    	<span className="celeste">guest</span>
    	<span className="white">=</span>
    	<span className="orange">0</span>;{"\n\n"}

			<span className="blue">function</span>{" "}
			<span className="yellow">Cup</span>
			<span className="yellow">&#40;</span>
			<span className="yellow">&#41;</span>
			<span className="yellow">&#123;</span>{"\n  "}
			
			<span className="greendark">&#47;&#47; Mal: ¡Cambiar una variable preexistente!</span>{"\n  "}
			<span className="celeste">guest</span>
			<span className="white">=</span>
			<span className="celeste">guest</span>{" "}
			<span className="white">+</span>{" "}
			<span className="orange">1</span>;{"\n  "}
			<span className="pink">return</span>{" "}
			&lt;<span className="blue">h2</span>&gt;
			<span className="blue">Tea cup for guest</span>{" "}
			<span className="white">#</span>
			<span className="blue">&#123;</span>
			<span className="celeste">guest</span>
			<span className="blue">&#125;</span>
			&lt;/<span className="blue">h2</span>&gt;;{"\n"}
			<span className="yellow">&#125;</span>{"\n\n"}

			<span className="pink">export</span>{" "}
			<span className="pink">default</span>{" "}
			<span className="blue">function</span>{" "}
			<span className="yellow">TeaSet</span>
			<span className="yellow">&#40;</span>
			<span className="yellow">&#41;</span>{" "}
			<span className="yellow">&#123;</span>{"\n  "}
			<span className="pink">return</span>
			<span className="pink">&#40;</span>{"\n  "}
					&lt;&gt;{"\n    "}
						&lt;<span className="green">Cup</span> /&gt;{"\n    "}
						&lt;<span className="green">Cup</span> /&gt;{"\n    "}
						&lt;<span className="green">Cup</span> /&gt;{"\n  "}
					&lt;/&gt;{"\n  "}
				<span className="pink">&#41;</span>;{"\n"}
			<span className="yellow">&#125;</span>
    </code>
    </pre>
    </div>
  );
}
