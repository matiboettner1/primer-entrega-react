import ButtonsNavbar from "../ButtonsNavbar/ButtonsNavbar"
import './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <div className="nav">
            <div className="logo">
                <h2>TecnoBoettner</h2>
            </div>
            <ButtonsNavbar product={'Mouses'}/>
            <ButtonsNavbar product={'Keyboards'}/>
            <ButtonsNavbar product={'Mousepads'}/>
            <CartWidget/>
        </div>
    )
}

export default Navbar