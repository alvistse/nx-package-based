import buildConfig from "../config/buildConfig.json"
import { z } from "zod"

const colorSchema = z.object({
    hex: z.string()
})

const configSchema = z.object({
    appName: z.string(),
    RSNid: z.string(),
    colors: z.object({
        primary: colorSchema,
        primary700: colorSchema,
        primary900: colorSchema,
        secondary: colorSchema
    })
})

export const env = configSchema.parse(buildConfig)
