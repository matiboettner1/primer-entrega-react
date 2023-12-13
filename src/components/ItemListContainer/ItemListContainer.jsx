import classes from '../ItemListContainer/ItemListContainer.module.css'
import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import Itemlist from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {

        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(Response => {
                setProducts(Response)
            })
    }, [categoryId])

    return (
        <div >
            <h1 className={classes.titulo}>{greeting}</h1>
            <Itemlist products={products} />
        </div>
    )
}

export default ItemListContainer