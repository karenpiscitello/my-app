import { memo } from 'react'
import Item from './Item'


const ItemList = memo(
    ({ productos }) => {
        //console.log(productos)
        return (
            <>
            {productos.map((item) => <Item item = {item} />)} 
            </>
        
        )
        
    }
    
    
    )

export default ItemList;
