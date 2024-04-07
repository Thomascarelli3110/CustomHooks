import { useState, useEffect } from "react";

const useFetch = (url) => {
  /*Este useState es el que manejara todo la DATA traida del fetch*/
  const [user, setUser] = useState(null);
  /*Este useState es el que manejara para que cuando algo se este cargando se mande un mensaje al cliente de que esta cargando*/
  const [loading, setLoading] = useState(true)
  /*Este useState es ele que manejara los errores dentro de los llamados a la API*/
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        /*Se actualiza el valor de loading en true mostrando un CARGANDO... en el navegador*/
        setLoading(true)
        const res = await fetch(url)
        /*Este condicional lo que hace es que cuando no se puede traer la respuesta*/
        if (!res) {
          throw new Error('No se pudo traer la respuesta')
        }
        const data = await res.json()
        /*Se actualiza el valor de data con la imformacion traida con el fetch*/
        setUser(data);
        /*El valor de true se pone en false*/
        setLoading(false)
      } catch (error) {
        console.error("Se ha producido un error al traer la API", error);
        /*Actualizar y muestra el error que hay en componente*/
        setError(error);
        /*Aunque haya un error en el llamado este elemento tendra como valor false*/
        setLoading(false)
      }
    }
    /*Se llama a la funcion*/   
    fetchData()
    /*La url se usa como dependencia si esta cambia se vuelve a leer el useEffect*/
  }, [url]);

  /*Devuelve user, loading y error para poder usarlo en el FetchApp*/
  return { user, loading, error }
}
export default useFetch