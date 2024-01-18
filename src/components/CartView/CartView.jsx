import { useCart } from "../../context/CartContext/CartContext";
import { Link } from "react-router-dom";
import classes from "../ItemListContainer/ItemListContainer.module.css";

const CartView = () => {
  const { cart, total, removeItem } = useCart();

  return (
    <>
      <div className={classes.title}>
        <h1>Carrito de Compra</h1>
      </div>

      <div className={classes.itemsContainer}>
        {cart.map((prod) => {
          return (
            <div key={prod.id}>
              <div className={classes.itemdetails}>
                <h2>{prod.name}</h2>
                <h3>Cantidad: {prod.quantity}</h3>
                <h3>${prod.price}</h3>
                <h3>Subtotal: ${prod.quantity * prod.price}</h3>
                <button onClick={() => removeItem(prod.id)}>Eliminar</button>
              </div>
            </div>
          );
        })}
      </div>

      <h3>Total: ${total}</h3>
      <button>
        <Link to="/checkout">Finalizar compra</Link>
      </button>
    </>
  );
};

export default CartView;
