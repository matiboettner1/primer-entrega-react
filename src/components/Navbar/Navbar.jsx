import classes from '../Navbar/Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.logo}>
                <Link to='/'>TecnoBoettner</Link>
            </div>
            <div className={classes.categorias}>
                <Link to='/category/mouses' >Mouses</Link>
            </div>
            <div className={classes.categorias}>
                <Link to='/category/teclados' >Teclados</Link>
            </div>
            <div className={classes.categorias}>
                <Link to='category/mousepads' >Mousepads</Link>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar