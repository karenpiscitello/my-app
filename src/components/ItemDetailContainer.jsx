import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import getProducts from "../services/handMadePromise";

const ItemDetailContainer = () => {

  const { idCategoria } = useParams()
  const [loading, setLoading] = useState(true)
  const [item, setItem] = useState([]);
  //console.log("item", item);

  useEffect(() => {
    /*getOneProduct.then((res) => setItem(res)).catch((err) => console.log(err));*/
    getProducts
            .then(resp => setItem(resp.find(prod => prod.id === parseInt(idCategoria)))) 
            .catch(err => console.log(err))
            .finally(()=>setLoading(false))
    
  },[idCategoria]);

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