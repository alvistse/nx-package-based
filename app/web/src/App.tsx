import { Counter as TailwindCounter } from "ui/Counter"
import { Counter as VanillaCounter } from "vanilla-extract-ui/Counter"
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
                    <h1 className="text-xl mb-2 font-semibold">Vanilla Extract: </h1>
                    <VanillaCounter />
                </div>
                <div className="mb-8">
                    <h1 className="text-xl mb-2 font-semibold">Panda CSS: </h1>
                    <VanillaCounter />
                </div>
            </div>
        </main>
    )
}

export default App
