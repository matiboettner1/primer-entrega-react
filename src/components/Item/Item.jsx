import { Link } from "react-router-dom"
import classes from '../ItemListContainer/ItemListContainer.module.css'

const Item = ({id, name, price, img}) => {
    return(
        <div className={classes.item}>
            <img src={img} style={{width: 250, height: 250}}/>
            <h3 className={classes.productName}>{name}</h3>
            <h4>${price}</h4>
            <Link to={`/detail/${id}`}>Detalles</Link>
        </div>
    )
}

export default Item