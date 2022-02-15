
import { useState, useEffect } from "react";
import { useParams} from 'react-router-dom';
import ItemList from "./ItemList";
import { collection, doc, getDoc, getFirestore, getDocs, query, where, limit } from 'firebase/firestore'



const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  //console.log(products);
  const { idCategoria } = useParams()

  // useEffect(() => {
  //   if (idCategoria){
  //     getProducts
  //     .then((res) => setProducts(res.filter(prod => prod.categoria === idCategoria)))
  //     .catch((err) => alert("Ha ocurrido un error", err));
  //   }else {
  //   getProducts
  //     .then((res) => setProducts(res))
  //     .catch((err) => alert("Ha ocurrido un error", err));
  //   }
  // },[idCategoria]);
  // console.log(idCategoria)

  useEffect(() => {
    const db = getFirestore()
    const queryCollection = query(
        collection(db, 'items')
    )
    getDoc(queryCollection)
    .then(resp => setProducts( resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) ) ) )
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
}, []) 

  return (
    <div className="container col-12 bg-warning">
      <h3>{greeting}</h3>

      
      <ItemList products={products} />
    </div>
  );
};
export default ItemListContainer;
