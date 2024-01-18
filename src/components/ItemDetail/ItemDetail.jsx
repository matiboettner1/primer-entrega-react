import ItemCount from "../ItemCount/ItemCount";
import classes from "./ItemDetail.module.css";
import { useCart } from "../../context/CartContext/CartContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemDetail = ({ id, name, category, img, stock, price, description }) => {
    const { addItem, isInCart } = useCart();

    const handleOnAdd = (quantity) => {
        const objProductToAdd = { id, name, price, quantity };

        addItem(objProductToAdd);
        toast.success("Producto agregado al carrito", {
            position: "bottom-right",
            autoClose: 2000,
            theme: "dark",
        });
    };

    return (
        <div className={classes.itemcontainer}>
            <h1>{name}</h1>
            <p>Categoria: {category}</p>
            <img src={img} style={{ width: 250, height: 250 }} />
            <h3>${price}</h3>
            <p>Detalles: {description}</p>
            {stock === 0 ? (
                <p style={{ color: "red" }}>¡Producto sin stock!</p>
            ) : (
                <div>
                    {!isInCart(id) ? (
                        <ItemCount onAdd={handleOnAdd} stock={stock} />
                    ) : (
                        <Link to="/cart">Ir al carrito</Link>
                    )}

                </div>
            )}
        </div>
    )
}

export default ItemDetail