import { memo } from 'react'
import Item from './Item'


const ItemList = memo(
    ({ productos }) => {
        return (
            <>
            {productos.map((prod) => <Item item = {prod} />)}   
            </>
        )
    }
    )

export default ItemList;
