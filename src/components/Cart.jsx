import { useContext } from 'react'
import { useCartContext } from '../context/CartContext'


function Cart() {

    const {  cartList, borrarCarrito  } = useCartContext();



    return (
        <div>
            {  cartList.map(prod=> <div><li>{prod.name}   {prod.cantidad}</li>
            {prod.price}
                </div>) }
            <button onClick={borrarCarrito} >Vaciar Carrito</button>
        </div>
    )
}

export default Cart




