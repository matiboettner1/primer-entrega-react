import { useState } from "react"

const ItemCount = ({ initialValue = 0, stock = 10,  incrementBy}) => {
    const [count, setCount] = useState(initialValue)

    const decrement = () => {
        if(count > 0) {
            setCount(prev => prev - 1)
        }
    }

    const increment = () => {
        if(count<stock)
        setCount(prev => prev + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <div style={{display: "flex", justifyContent: "center"}}>
            <button onClick={decrement}>
                Decrementar
            </button>
            <button onClick={increment}>
                Incrementar
            </button>
            </div>
        </div>
    )
}

export default ItemCount