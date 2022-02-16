import { useState} from "react";
import ItemCount from "./ItemCount";
import { Col, Row } from "react-bootstrap"
import { useCartContext } from "../context/CartContext";


function ItemDetail({prod}) {
    const [count, setCount] = useState(0)

    const {cartList ,agregarAlCarrito}= useCartContext()

    function onAdd (cant){
        //console.log(cant)
        agregarAlCarrito( {...prod, cantidad:cant} ) 
    }
    
    console.log(cartList);
    return (
        <Row >
            <label>detalle producto</label>
            <Col>                
                <div className='card w-50'>
                    <div className="container">
                        <label>{prod.name}</label>
                    </div>
                    <div className="container">
                        <img  src={prod.image} className="w-25" alt="imagen" />
                        <br/>
                        <label>{prod.description}</label><br/>
                        <label>{prod.category}</label>
                    </div>
                    <div className="container">
                        <label>{prod.price}</label>
                    </div>
                </div>
            </Col>
            <Col>                
                <ItemCount onAdd={onAdd} stock={10}/>      
            </Col>                           
        </Row>

    )
}

export default ItemDetail