import { Link } from "react-router-dom"
import classes from '../Navbar/Navbar.module.css'

const Item = ({id, name, price, img}) => {
    return(
        <div className={classes.item}>
            <img src={img} style={{width: 200, height: 200}}/>
            <h3>{name}</h3>
            <h4>${price}</h4>
            <Link to={`/detail/${id}`}>Detalles</Link>
        </div>
    )
}

export default Item