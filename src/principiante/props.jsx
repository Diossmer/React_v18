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
        Las props son los datos que se pasan a un elemento JSX. Por ejemplo, className, src, alt,
        width y height son algunas de las props que se pueden pasar a un elemento &lt;img&gt;:
      </p>
    </>
  );
}
