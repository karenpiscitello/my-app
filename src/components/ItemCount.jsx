import React from "react"
import { useCounter } from "./useCounter"

const ItemCount = ({inicial}) => {

    const {counter,increment,decrement, reset, carrito } = useCounter(inicial)

    return(
        <div>
            <h3>Cant. de Productos</h3>
            <h4>{counter}</h4>
            <button onClick= {increment} >+</button>
            <button onClick= {decrement} >-</button>
            <button onClick= {reset} >Reset</button>
            <button onClick= {carrito} disabled={counter===0} >Agregar al Carrito</button>

        </div>
    );
};

export default ItemCount