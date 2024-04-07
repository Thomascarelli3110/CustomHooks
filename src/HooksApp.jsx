import FetchApp from "./components/FetchApp"
// import CounterApp from "./components/CounterApp"

// Esto es el contenedor de los Hooks que vaya haciendo, se van imprimiendo por el componente HooksApp
const HooksApp = () => {
  return (
    <>
    <h1>Aplicacion de Hooks</h1>
    {/* <CounterApp/> */}
    {/*Llamamos al componente contenedor del hook useCounter*/}
    <FetchApp/>

    </>
    )
}

export default HooksApp