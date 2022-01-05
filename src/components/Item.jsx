import React from "react"

function Item({producto}) {
    return (
        <div 
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

    );
};

export default Item