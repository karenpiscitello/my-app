
import { useCartContext } from "../context/CartContext"


function Cart() {

    const { cartList, borrarCarrito,precioTotal } = useCartContext()
    return (
    <div>
        { cartList.map(prod => <li>{prod.title}{prod.cantidad}</li>)}
        <button onClick={borrarCarrito}>Vaciar Carrito</button>
    </div>
    )
}

export default Cart
