import { memo } from 'react'
import Item from './Item'


const ItemList = memo(
    ({ products }) => {
        return (
            <>
            {products.map((prod) => <Item item = {prod} />)}   
            </>
        )
    }
    )

export default ItemList;
