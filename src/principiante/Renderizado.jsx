import "./Principiante.css";

export default function Rederizado(){
let popo = `
const chemists = people.filter(person =>
  person.profession === 'chemist'
);
`
let popo2 = `
const listItems = chemists.map(person =>
  <li>
     <img
       src={getImageUrl(person)}
       alt={person.name}
     />
     <p>
       <b>{person.name}:</b>
       {' ' + person.profession + ' '}
       known for {person.accomplishment}
     </p>
  </li>
);
`
	return (
		<>
			<h1>Renderizado de listas</h1>
			<p>
			A menudo querrás mostrar muchos componentes similares de una colección de datos.{" "}
			Puedes usar los <span className="note">métodos de array de JavaScript</span> para manipular{" "}
			un array de datos. En esta página, usarás <span className="shadow">filter()</span> y{" "}
			<span className="shadow">map()</span> con React para filtrar y transformar tu array de{" "}
			datos en un array de componentes.
			</p>
			<h3>Renderizar datos desde arrays</h3>
			<p>
			Digamos que tienes una lista de contenido.
			</p>
			<pre className="ide">
				<code>
					&lt;<span className="blue">ul</span>&gt;{"\n  "}
					&lt;<span className="blue">li</span>&gt;Creola Katherine Johnson: mathematician&lt;/<span className="blue">li</span>&gt;
					{"\n  "}
					&lt;<span className="blue">li</span>&gt;Mario José Molina-Pasquel Henríquez: chemist&lt;/<span className="blue">li</span>&gt;
					{"\n  "}
					&lt;<span className="blue">li</span>&gt;Mohammad Abdus Salam: physicist&lt;/<span className="blue">li</span>&gt;
					{"\n  "}
					&lt;<span className="blue">li</span>&gt;Percy Lavon Julian: chemist&lt;/<span className="blue">li</span>&gt;
					{"\n  "}
					&lt;<span className="blue">li</span>&gt;Subrahmanyan Chandrasekhar: astrophysicist&lt;/<span className="blue">li</span>&gt;
					{"\n"}
					&lt;/<span className="blue">ul</span>&gt;
				</code>
			</pre>
			<p>
			La única diferencia entre esos elementos de la lista es su contenido, sus datos. A menudo{" "}
			necesitarás mostrar muchas instancias del mismo componente usando diferentes datos cuando construyas{" "}
			interfaces: desde listas de comentarios a galerías de fotos de perfiles. En estas situaciones,{" "}
			puedes guardar estos datos en objetos de JavaScript y arrays, y usar métodos como{" "}
			<span className="shadow">map()</span> y <span className="shadow">filter()</span> para renderizar{" "}
			listas de componentes desde ellos.
			</p>
			<p>
			Aquí hay un corto ejemplo de como generar una lista de elementos de un array:
			</p>
			<ol type="1" start="1">
			<li><b>Mueve</b> los datos en un array:</li>
			<pre className="ide">
				<code>
					<span className="blue">const</span>{" "}
					<span className="celeste">people</span>
					<span className="white">=</span>
					<span className="yellow">&#91;</span>{"\n"}
					<span className="orange">&#39;Creola Katherine Johnson: mathematician&#39;</span>,{"\n"}
					<span className="orange">&#39;Mario José Molina-Pasquel Henríquez: chemist&#39;</span>,{"\n"}
					<span className="orange">&#39;Mohammad Abdus Salam: physicist&#39;</span>,{"\n"}
					<span className="orange">&#39;Percy Lavon Julian: chemist&#39;</span>,{"\n"}
					<span className="orange">&#39;Subrahmanyan Chandrasekhar: astrophysicist&#39;</span>{"\n"}
					<span className="yellow">&#93;</span>;
				</code>
			</pre>
				<li><b>Mapea</b> los miembros de people en un nuevo array de nodos JSX, listItems:</li>
				<pre className="ide">
					<code>
						<span className="blue">const</span>{" "}
						<span className="celeste">listItems</span>{" "}
						<span className="white">=</span>{" "}
						<span className="celeste">people</span>
						<span className="yellow">.</span>
						<span className="green">map</span>
						<span className="yellow">&#40;</span>
						<span className="celeste">person</span>{" "}
						<span className="white">=&gt;</span>{" "}
						&lt;<span className="blue">li</span>&gt;
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
					<span className="pink">return</span>{" "}
					&lt;<span className="blue">ul</span>&gt;
					<span className="blue">&#123;</span>
					<span className="celeste">listItems</span>
					<span className="blue">&#125;</span>
					&lt;/<span className="blue">li</span>&gt;;
				</code>
				</pre>
			</ol>
			<p>
			Aquí está el resultado:
			</p>
			<pre className="ide">
				<code>
					<span className="blue">const</span>{" "}
					<span className="celeste">people</span>
					<span className="white">=</span>
					<span className="yellow">&#91;</span>{"\n"}
					<span className="orange">&#39;Creola Katherine Johnson: mathematician&#39;</span>,{"\n"}
					<span className="orange">&#39;Mario José Molina-Pasquel Henríquez: chemist&#39;</span>,{"\n"}
					<span className="orange">&#39;Mohammad Abdus Salam: physicist&#39;</span>,{"\n"}
					<span className="orange">&#39;Percy Lavon Julian: chemist&#39;</span>,{"\n"}
					<span className="orange">&#39;Subrahmanyan Chandrasekhar: astrophysicist&#39;</span>{"\n"}
					<span className="yellow">&#93;</span>;{"\n\n"}
				</code>
				<code>
					<span className="blue">const</span>{" "}
					<span className="celeste">listItems</span>{" "}
					<span className="white">=</span>{" "}
					<span className="celeste">people</span>
					<span className="yellow">.</span>
					<span className="green">map</span>
					<span className="yellow">&#40;</span>
					<span className="celeste">person</span>{" "}
					<span className="white">=&gt;</span>{" "}
					&lt;<span className="blue">li</span>&gt;
					<span className="blue">&#123;</span>
					<span className="celeste">person</span>
					<span className="blue">&#125;</span>
					&lt;/<span className="blue">li</span>&gt;
					<span className="yellow">&#41;</span>;{"\n\n"}
				</code>
				<code>
					<span className="pink">return</span>{" "}
					&lt;<span className="blue">ul</span>&gt;
					<span className="blue">&#123;</span>
					<span className="celeste">listItems</span>
					<span className="blue">&#125;</span>
					&lt;/<span className="blue">li</span>&gt;;
				</code>
			</pre>
			<p>
			Date cuenta que el sandbox anterior muestra un error por consola:
			</p>
			<div className="warning">
			<span>❌ warning</span>
			<span>Each child in a list should have a unique «key» prop.</span>
			<span><b>(Traducción)</b></span>
			<span>Advertencia: Cada hijo en una lista debe tener una única prop «key».</span>
			</div>
			<p>
			Aprenderás como arreglar este error más adelante en esta página. Antes de que{" "}
			lleguemos a eso, vamos a añadir algo de estructura a tus datos.
			</p>
			<h3>Filtrar arrays de objetos</h3>
			<p>Estos datos pueden ser estructurados incluso más.</p>
			<pre className="ide">
				<code>
					<span className="blue">const</span>{" "}
					<span className="celeste">people</span>
					<span className="white">=</span>
					<span className="yellow">&#91;</span>
					<span className="blue">&#123;</span>
					{"\n  "}
					<span className="celeste">id</span>
					<span className="white">:</span>
					<span className="pink">0</span>,
					{"\n  "}
					<span className="celeste">name</span>
					<span className="white">:</span>
					<span className="orange">&#39;Creola Katherine Johnson: mathematician&#39;</span>,
					{"\n  "}
					<span className="celeste">profession</span>
					<span className="white">:</span>
					<span className="orange">&#39;mathematician&#39;</span>,
					{"\n"}
					<span className="blue">&#125;</span>,
					<span className="blue">&#123;</span>
					{"\n  "}
					<span className="celeste">id</span>
					<span className="white">:</span>
					<span className="pink">1</span>,
					{"\n  "}
					<span className="celeste">name</span>
					<span className="white">:</span>
					<span className="orange">&#39;Mario José Molina-Pasquel Henríquez&#39;</span>,
					{"\n  "}
					<span className="celeste">profession</span>
					<span className="white">:</span>
					<span className="orange">&#39;chemist&#39;</span>,
					{"\n"}
					<span className="blue">&#125;</span>,
					<span className="blue">&#123;</span>
					{"\n  "}
					<span className="celeste">id</span>
					<span className="white">:</span>
					<span className="pink">2</span>,
					{"\n  "}
					<span className="celeste">name</span>
					<span className="white">:</span>
					<span className="orange">&#39;Mohammad Abdus Salam&#39;</span>,
					{"\n  "}
					<span className="celeste">profession</span>
					<span className="white">:</span>
					<span className="orange">&#39;physicist&#39;</span>,
					{"\n"}
					<span className="blue">&#125;</span>,
					<span className="blue">&#123;</span>
					{"\n  "}
					<span className="celeste">id</span>
					<span className="white">:</span>
					<span className="pink">3</span>,
					{"\n  "}
					<span className="celeste">name</span>
					<span className="white">:</span>
					<span className="orange">&#39;Percy Lavon Julian&#39;</span>,
					{"\n  "}
					<span className="celeste">profession</span>
					<span className="white">:</span>
					<span className="orange">&#39;chemist&#39;</span>,
					{"\n"}
					<span className="blue">&#125;</span>,
					<span className="blue">&#123;</span>
					{"\n  "}
					<span className="celeste">id</span>
					<span className="white">:</span>
					<span className="pink">4</span>,
					{"\n  "}
					<span className="celeste">name</span>
					<span className="white">:</span>
					<span className="orange">&#39;Subrahmanyan Chandrasekhar&#39;</span>,
					{"\n  "}
					<span className="celeste">profession</span>
					<span className="white">:</span>
					<span className="orange">&#39;astrophysicist&#39;</span>,
					{"\n"}
					<span className="blue">&#125;</span>
					<span className="yellow">&#93;</span>;{"\n\n"}
				</code>
			</pre>
			<p>
			Digamos que quieres una manera de mostrar solo las personas cuya profesión sea{" "}
			<span className="shadow">&#39;chemist&#39;</span>. Puedes usar el método{" "}
			<span className="shadow">filter()</span> de JavaScript para devolver solo esas personas.{" "}
			Este método coge un array de objetos, los pasa por un «test» (una función que devuelve{" "}
			<span className="shadow">true</span> o <span className="shadow">false</span>), y devuelve{" "}
			un nuevo array de solo esos objetos que han pasado el test (que han devuelto{" "}
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
				<span className="shadow">chemists</span>, llamando al método <span className="shadow">filter()</span>{" "}
				en <span className="shadow">people</span> filtrando por{" "}
				<span className="shadow">person.profession === &#39;chemist&#39;</span>:
				</li>
				<pre className="ide">
				{popo}
				</pre>
				<li>
				Ahora <b>mapea</b> sobre <span className="shadow">chemists</span>:
				</li>
				<pre className="ide">
				{popo2}
				</pre>
			</ol>
		</>
	)
}
