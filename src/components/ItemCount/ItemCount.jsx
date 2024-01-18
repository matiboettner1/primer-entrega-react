import { useState } from "react"

const ItemCount = ({ initialValue = 1, stock = 10, onAdd }) => {
    const [count, setCount] = useState(initialValue)

    const decrement = () => {
        if (count > 0) {
            setCount(prev => prev - 1)
        }
    }

    const increment = () => {
        if (count < stock)
            setCount(prev => prev + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <button onClick={decrement}>
                    -
                </button>
                <button onClick={() => onAdd(count)}>
                    Agregar al carrito
                </button>
                <button onClick={increment}>
                    +
                </button>
            </div>
        </div>
    )
}

export default ItemCount