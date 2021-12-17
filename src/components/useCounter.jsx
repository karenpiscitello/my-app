import { useState } from 'react'

export const useCounter = (initialState) => {

    const inicial = 1
    const max = 10

    const [counter, setCounter] = useState(initialState)

    const reset = () => {
        setCounter(initialState)
    }

    const increment = () => {
        counter < max? setCounter(prev => prev + 1) : alert('compra maxima')
    }

    const decrement = () => {
        counter > inicial? setCounter(prev => prev - 1) : alert('compra min')
    }

    const carrito = () => {  
        //alert('agregaste ' + counter + ' productos al carrito')
        const message = `Agregaste al carrito ${counter} producto`;
        counter === 1? alert(message) : alert(`${message}s`);
    }

    return {
        counter,
        increment,
        decrement,
        reset,
        carrito
    }
}
