import { useState, useEffect } from "react";
import ItemList from "./ItemList";


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
      <h1>ItemDetail</h1>
      <ItemList productos={products} />
    </div>
  );
};
export default ItemListContainer;
