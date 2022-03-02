import {useState} from 'react'

import ItemCount from './ItemCount';
import { Col, Row } from "react-bootstrap";
import { useCartContext } from '../context/cartContext';



function ItemDetail({prod}) {
    const [count, setCount] = useState(0)

    const {cartList ,agregarAlCarrito}= useCartContext()

    function onAdd (cant){
        console.log(cant)
        agregarAlCarrito( {...prod, cantidad:cant} ) 
        
    }
    
    console.log(cartList);
    return (
        
        <Row >
            <label>Soy el detalle</label>
            <Col>                
                <div className='card w-50'>
                    <div className="container">
                        <label>{prod.name}</label>
                    </div>
                    <div className="container">
                        <img  src={prod.image} className="w-25" alt="foto" />
                        <br/>
                        <label>{prod.description}</label><br/>
                        <label>{prod.categoria}</label>
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