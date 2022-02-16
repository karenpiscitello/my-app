import { Link } from 'react-router-dom'


function Item({item}) {
    console.log(item)
    return (
        <div 
            key={item.id}
            className='col-md-4'
        >                        
            <div className="card w-100 mt-5" >
                <div className="card-header">
                    {`${item.name} - ${item.category}`}
                </div>
                <div className="card-body">
                    <img src={item.image} alt='' className='w-50' />
                    {item.price}                                                            
                </div>
                <div className="card-footer">  
                <Link to={`/detalle/${item.id}`}>
                    <button className="btn btn-outline-primary btn-block">
                        detalle del producto
                    </button>
                </Link>                                                      
                                                                                
                </div>
            </div>
        </div>
    )
}

export default Item