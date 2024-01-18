import { Link } from 'react-router-dom'
import iconoCarrito from './assets/carrito-de-compras.png'
import { useCart } from "../../context/CartContext/CartContext";
import './CartWidget.module.css'

const CartWidget = () => {
    const { totalQuantity } = useCart();

    return (
        <>
            <Link to="/cart">
                <button>
                    <img src={iconoCarrito} alt="Imagen de un carrito de compras"></img>
                    {totalQuantity}
                </button>
            </Link>
        </>
    )
}

export default CartWidget