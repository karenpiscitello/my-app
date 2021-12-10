import React from "react"
import { useState, useEffect} from "react"
import { getFetch } from "../helpers/getFetch"



function ItemsListContainer( {greeting} ) {
    
    const [productos , setProductos] = useState ([])
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        getFetch
        .then(dataRes => setProductos(dataRes))
        .catch( err => console.log(err))
        .finally(() => setLoading(false))
    }, [])
    
    function handlerClick(){
        setBool(!bool)
    }

        

    return(
        <div>
        { greeting }
        { loading ? 
        <h2>Cargando...</h2> : 
        productos.map(producto => <div 
                key={producto.id}
                className='col-md-4'
            >                        
                <div className="card w-100 mt-5" >
                    <div className="card-header">
                        {`${producto.nombre} - ${producto.descripcion}`}
                    </div>
                    <div className="card-body">
                        <img src={producto.imagen} alt='' className='w-50' />
                        {producto.stock}                                                            
                    </div>
                    <div className="card-footer">  
                    
                        <button className="btn btn-outline-primary btn-block">
                            detalle del producto
                        </button>
                                                                                    
                    </div>
                </div>
            </div>
        )
        }

        <button onClick={handlerClick}>Click</button>
        </div>
    )
}

export default ItemsListContainer