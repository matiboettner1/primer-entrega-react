import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({name, category, img, stock, price, description}) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>Categoria: {category}</p>
            <img src={img} style={{width: 200, height: 200}}/>
            <h3>${price}</h3>
            <p>Detalles: {description}</p>
            <ItemCount stock = {stock} />
        </div>
    )
}

export default ItemDetail