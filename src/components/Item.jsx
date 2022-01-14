import React from "react"
const Item = ({description, price, stock, title, image}) => {
    return (
        <div className="flex bg-info">
        <h3>{title}</h3>
        <h2>{price}</h2>
        <p>{description}</p>
        <h3>{stock}</h3>
        <img src={`${image}`} alt={`${image}`}></img>
    </div>

    );
};

export default Item;