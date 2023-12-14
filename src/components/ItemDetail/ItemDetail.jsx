import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({name, category, img, stock, price, description}) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>Categoria: {category}</p>
            <img src={img} style={{width: 250, height: 250}}/>
            <h3>${price}</h3>
            <p>Detalles: {description}</p>
            <ItemCount stock = {stock} />
        </div>
    )
}

export default ItemDetail