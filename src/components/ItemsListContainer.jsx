
import { useState, useEffect } from "react";
import { useParams} from 'react-router-dom';
import ItemList from "./ItemList";
import { collection, doc, getDoc, getFirestore, getDocs, query, where, limit } from 'firebase/firestore'



const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  //console.log(products);
  const { idCategoria } = useParams()



  useEffect(() => {
    const db = getFirestore()
    const queryCollection = query(
        collection(db, 'items')
    )
    getDocs(queryCollection)
    .then(resp => setProducts( resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) ) ) )
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
}, []) 

  return (
    <div>
      {greeting}

      
      <ItemList products={products} />
    </div>
  );
};
export default ItemListContainer;
