import { useState, useEffect } from "react";
// import axios from "axios";
import ItemList from "../ItemList/ItemList";

import getProducts from "../services/handMadePromise";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  console.log(products);



  useEffect(() => {
    getProducts
      .then((res) => setProducts(res))
      .catch((err) => alert("Ha ocurrido un error", err));
  });

  return (
    <div className="container col-12 bg-warning">
      <h3>{greeting}</h3>
      <h1>About</h1>
      
      <ItemList products={products} />
    </div>
  );
};
export default ItemListContainer;
