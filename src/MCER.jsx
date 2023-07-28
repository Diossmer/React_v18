// eslint-disable-next-line react/prop-types
const MCER = ({ isLogged }) => {
  const CEFR =
    isLogged === 0
      ? "Inicio"
      : isLogged >= 1 && isLogged <= 8
      ? "Principiante"
      : isLogged >= 9 && isLogged <= 11
      ? "Básico"
      : isLogged >= 12 && isLogged <= 13
      ? "intermedios"
      : isLogged >= 14 && isLogged <= 15
      ? "intermedios altos"
      : isLogged >= 16 && isLogged <= 20
      ? "avanzados"
      : "avanzados altos";
  return (
    <>
      <h1>{CEFR}</h1>
    </>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export default MCER;
