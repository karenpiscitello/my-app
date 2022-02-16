import { memo } from 'react'
import Item from './Item'


const ItemList = memo(
    ({ productos }) => {
        //console.log(productos)
        return (
            <>
            {productos.map((prod) => <Item item = {prod} />)} 
            </>
        
        )
        
    }
    
    
    )

export default ItemList;
