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
    , (oldProps, newProps)=> oldProps.productos.length === newProps.productos.length )

export default ItemList;
