
import { useState, useEffect } from "react";
import { useParams} from 'react-router-dom';
import ItemList from "./ItemList";
import { collection, doc, getDoc, getFirestore, getDocs, query, where, limit } from 'firebase/firestore'


function ItemListContainer( {greeting} ) {

    const [productos, setProductos] = useState([])    
    const [loading, setLoading] = useState(true)    
    
    const { idCate } = useParams()     

    useEffect(() => {
        const db = getFirestore()
        const queryCollection = idCate ? 
            query(collection(db, 'items'), where('categoria','==', idCate ))
        : 
            query(collection(db, 'items'))

        getDocs(queryCollection)
        .then(resp => setProductos( resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) ) ) )
        .catch(err => console.log(err))
        .finally(()=> setLoading(false)) 
    }, [idCate])    
    
    return (
        <div>
            { greeting }
            { loading ? 
                <h2>Cargando...</h2> 
                :  
                <ItemList productos={productos} />
            }            
        </div>
    )
}

export default ItemListContainer
