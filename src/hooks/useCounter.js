import { useState } from "react"

// El initialValue justamente es el valor por defecto que tiene esta funcion
const useCounter = (initialValue = 0) => {

    /*Usamos el useState y lo igualamos al initialValue*/
    const [counter, setCounter] = useState(initialValue)

    /*Creamos la funcion increment que va a hacer la suma del valor(que lo igualamos a 1 pero puede ser modificado) por el valor del counter*/
    const increment = (val = 1) => {
        /*Con el setCounter actualizamos el estado de nuestro valor que va a ser la suma del counter(nuestra varible) + el valor que nosotros queramos sumarle*/
        setCounter(counter + val)
    }

    /*Creamo la funcion reset para que justamente resetee el valor a los del initialValue que seria 0(que tambien puede ser modificado por cualquier otro numero) */
    const reset = () => {
        setCounter(initialValue)
    }

    /*Creamos la funcion decrement que va a hacer la resta del valor(que lo igualamos a 1 pero puede ser modificado) por el valor del counter y agregamos un allowNegative siendo true para que nuestra funcion acepte o numeros negativos*/
    const decrement = (val = 1, allowNegative = true) => {
        if (!allowNegative && counter < 1) return
        /*Con el setCounter actualizamos el estado de nuestro valor que va a ser la resta del counter(nuestra varible) - el valor que nosotros queramos restarle*/
        setCounter(counter - val)
    }

    /*retorna tanto el counter, increment, reset, decrement que tambien son usados en el component CounterApp*/
    return {
        counter,
        increment,
        reset,
        decrement
    }


}

export default useCounter