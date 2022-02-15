import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import getProducts from "../services/handMadePromise";

const ItemDetailContainer = () => {

  const { idCategoria } = useParams()
  const [loading, setLoading] = useState(true)
  const [prod, setProd] = useState([]);
  //console.log("item", item);

  useEffect(() => {        

        const db = getFirestore()
        const queryDb = doc(db, 'items', id)
        getDoc(queryDb)
        .then(resp => setProd( { id: resp.id, ...resp.data() } ))
        .catch(err => console.log(err))
        .finally(()=>setLoading(false))
        
},[]) 


  return (
    <>
    {loading ? 
      <h2>Cargando...</h2>
      :
    
    <div className='border border-3 border-secondary'>
    <ItemDetail prod={prod} />                        
    </div>
    }
    </>
  )
};
export default ItemDetailContainer;