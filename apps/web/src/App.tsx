import { Counter as TailwindCounter } from "ui/Counter"
import { Counter as VanillaCounter } from "vanilla-extract-ui/Counter"
import { Input as VanillaInput } from "vanilla-extract-ui/Input"
import { env } from "./env"

console.log(env)

function App() {
    return (
        <main className="h-screen bg-zinc-100 flex justify-center items-center flex-col">
            <div>
                <div className="mb-8">
                    <h1 className="text-xl mb-2 font-semibold">Tailwind: </h1>
                    <TailwindCounter />
                </div>
                <div className="mb-8">
                    <h1 className="text-xl mb-2 font-semibold">Vanilla Extract 123: </h1>
                    <div className="flex gap-2">
                        <VanillaInput />
                        <VanillaCounter />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default App
