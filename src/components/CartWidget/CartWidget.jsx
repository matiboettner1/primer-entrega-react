import iconoCarrito from './assets/carrito-de-compras.png'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <>
        <button className='cart'>
        <img src={iconoCarrito} alt="Imagen de un carrito de compras"></img>
        0
        </button>
        </>
    )
}

export default CartWidget