import useFetch from "../hooks/useFetch"

const FetchApp = () => {

  /*Hacemos la destructuracion de estas varibles que vamos a usar en el useFetch y lo igualamos a la funcion la cual trae toda la imformacion de la URL*/
  const { user, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users")
  /*Con este condicional lo que hacemos es decirle que si existe loading entonces que retorne un <h3> que diga Cargando...*/
  if (loading) {
    return <h3>Cargando...</h3>
  }
  /*Con este condicional si existe un error en todo el proceso del llamado a la funcion useFetch lo que hace es tirar un error y retornando el error en el HTML*/
  if (error) {
    console.error("Se ha producido un error al traer la API", error);
    return <h3>Error: {user.error}</h3>
  }
  /*En este caso si no hay ningun tipo de problema con lo demas se imprime este HTML con la varible user como fuente de imformacion de la API*/
  return (
    <div className="contanier">
      <h1>Datos obtenidos:</h1>
      <ul>
        {user.map((elem) => (
          <li
            key={elem.id}>
            Hi {elem.name}
            <br />
            Username: {elem.username}
            <br />
            Website: {elem.website}
            <br />
          
            Address: {elem.address.street} 
            <br/>{elem.address.suite}
            <br/>{elem.address.city} 
            <br/>{elem.address.zipcode}
            <hr/>



          </li>
        ))}
      </ul>
    </div>
  );
}
export default FetchApp