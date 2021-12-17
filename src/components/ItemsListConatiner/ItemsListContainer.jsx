import React from "react"
import { useState, useEffect} from "react"
import { getFetch } from "../helpers/getFetch"
import ItemList from "../ItemList/ItemList"



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
        
            <ItemList productos={productos}/>
        }
        
        </div>
    )
}

export default ItemsListContainer