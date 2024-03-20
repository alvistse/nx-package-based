import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin"
import { buildTimePlugin } from "vite-plugin-build-time"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        vanillaExtractPlugin(),
        buildTimePlugin({
            files: ["./src/env.ts"]
        })
    ]
})
