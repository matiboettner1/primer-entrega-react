import Item from "../Item/Item"
import classes from '../ItemListContainer/ItemListContainer.module.css'


const Itemlist = ({ products }) => {
    return (
        <div className={classes.itemsContainer}> {products.map(prod => {
            return <Item key={prod.id} {...prod} />
        })
        }
        </div>
    )
}

export default Itemlist