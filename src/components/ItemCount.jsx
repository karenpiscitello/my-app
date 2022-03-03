import { useState } from 'react'


function ItemCount({stock = 1, onAdd}) {

    const [count, setCount] = useState(1)


    function sumar() {
        console.log("Sumar")
        if (count < stock) {
            setCount(count + 1)  
        }
        console.log(count)  
    }

    function restar() {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    function handleClik() {
        onAdd(count)
    }

    return (
        <div className="h6 qtyBox d-flex align-items-center justify-content-around border w-75">
            <button onClick={restar}>
                -
            </button>
            <div >
                {count}
                {/* {props.count} */}
            </div>       
            <button  onClick={sumar}>
                +
            </button><br/>

            
            <button onClick={handleClik}>Agregar Carrito</button>
        </div>
    )
}

export default ItemCount