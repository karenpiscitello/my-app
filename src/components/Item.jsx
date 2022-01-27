import { Link } from 'react-router-dom'


const Item = ({description, price, stock, title, image, id}) => {
    return (
        <div className="flex bg-info">
        <h3>{title}</h3>
        <h2>{price}</h2>
        <p>{description}</p>
        <h3>{stock}</h3>
        <img src={`${image}`} alt={`${image}`}></img>
        <Link to={`/detalle/${id}`}>
        <button>detalle del producto</button>
        </Link>
        
    </div>

    );
};

export default Item;