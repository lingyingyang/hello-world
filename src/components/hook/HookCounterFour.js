import React, { useState } from 'react'

function HookCounterFour() {
    const [items, setItems] = useState([])

    const addNumber = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    return (
        <div>
            <button onClick={addNumber}>Add a number</button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
            <h2>{JSON.stringify(items)}</h2>
        </div>
    )
}

export default HookCounterFour
