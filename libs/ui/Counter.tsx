import { useState } from "react"

export function Counter() {
    const [count, setCount] = useState(0)
    return (
        <button className="bg-primary rounded" onClick={() => setCount(_ => _ + 1)}>
            add count: {count}
        </button>
    )
}
