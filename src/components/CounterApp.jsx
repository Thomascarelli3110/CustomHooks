import useCounter from "../hooks/useCounter"

const CounterApp = () => {

    // Usamos Arrays destructuring e igualarlo al componente del useCounter que seria nuestro hook
    const {counter,increment,reset,decrement} = useCounter(0)

    return (
        <>
            <h1>Counter</h1>
            <h4>{counter}</h4>
            {/*El onclick lo que tiene es una arrow function que llama a la variable increment y que puede recibir un valor para que vaya sumando por el mismo valor*/}
            <button className="btn btn-primary" onClick={() => increment(1)}>+1</button>
            {/*El onclick lo que tiene es una arrow function que llama a la variable reset*/}
            <button className="btn btn-danger" onClick={() => reset()}>Reset</button>
            {/*El onclick lo que tiene es una arrow function que llama a la variable decrement y que puede recibir un valor para que vaya restando por el mismo valor*/}
            <button className="btn btn-primary" onClick={() => decrement(1, false)}>-1</button>
        </>
    )
}

export default CounterApp