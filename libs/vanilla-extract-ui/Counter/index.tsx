import { useState } from "react"
import { button } from "./style.css"

export function Counter() {
    const [count, setCount] = useState(0)
    return (
        <button className={button} onClick={() => setCount(_ => _ + 1)}>
            add count: {count}
        </button>
    )
}
