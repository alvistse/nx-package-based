import { useState } from "react"

export function Counter() {
    const [count, setCount] = useState(0)
    return <button onClick={() => setCount(_ => _ + 1)}>add count: {count}</button>
}
