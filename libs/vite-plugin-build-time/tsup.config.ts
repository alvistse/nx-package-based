import { defineConfig } from "tsup"

export default defineConfig({
    entry: ["./src/index.tsx"],
    outDir: "dist",
    format: ["cjs", "esm"],
    sourcemap: true,
    dts: true,
    clean: true
})
