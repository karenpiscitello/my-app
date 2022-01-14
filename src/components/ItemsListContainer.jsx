
import { useState, useEffect } from "react";
import { useParams} from 'react-router-dom';
import ItemList from "./ItemList";
import getProducts from "../services/handMadePromise";
import ItemCount from "./ItemCount";


const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  console.log(products);
  const { idCategoria } = useParams()

  useEffect(() => {
    if (idCategoria){
      getProducts
      .then((res) => setProducts(res.filter(item => item.categoria === idCategoria)))
      .catch((err) => alert("Ha ocurrido un error", err));
    }else {
    getProducts
      .then((res) => setProducts(res))
      .catch((err) => alert("Ha ocurrido un error", err));
    }
  },[idCategoria]);
  console.log(idCategoria)
  return (
    <div className="container col-12 bg-warning">
      <h3>{greeting}</h3>
      <h1>About</h1>
      <h1>ItemDetail</h1>
      <ItemCount inicial = {1} max = {5}/>
      <ItemList products={products} />
    </div>
  );
};
export default ItemListContainer;
