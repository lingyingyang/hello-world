import React, { useState, useEffect } from 'react'

function HookClickOne() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    // conditionally useEffect, improve render performance
    useEffect(() => {
        console.log('useEffect - updating document title')
        document.title = `You clicked ${count} times`
    }, [count])

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>{name} clicked {count} times</button>
        </div>
    )
}

export default HookClickOne
